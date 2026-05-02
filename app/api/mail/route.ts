import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }

  const { name, email, phone, country, subject, message } = body;

  if (!name || !email || !phone || !country) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  // Sanitise inputs to prevent header injection
  const safe = (v: string) => (v ?? "").replace(/[\r\n]/g, " ").slice(0, 500);

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: safe(email),
    subject: safe(subject ?? "EdgoConsultants Enquiry"),
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
        <table style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,.1); width: 100%;">
          <thead style="background-color: #173540; color: white;">
            <tr>
              <th colspan="2" style="padding: 16px 20px; font-size: 20px; text-align: left;">
                New Enquiry from ${safe(name)}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding:10px;font-weight:bold;width:150px;">Name:</td><td style="padding:10px;">${safe(name)}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:10px;font-weight:bold;">Phone:</td><td style="padding:10px;">${safe(phone)}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;">Email:</td><td style="padding:10px;"><a href="mailto:${safe(email)}">${safe(email)}</a></td></tr>
            <tr style="background:#f9f9f9"><td style="padding:10px;font-weight:bold;">Country:</td><td style="padding:10px;">${safe(country)}</td></tr>
            <tr><td style="padding:10px;font-weight:bold;vertical-align:top;">Message:</td><td style="padding:10px;">${safe(message ?? "")}</td></tr>
          </tbody>
          <tfoot>
            <tr><td colspan="2" style="padding:12px 20px;font-size:12px;color:#999;text-align:center;">Edgo Consultants — info@edgoconsultants.com</td></tr>
          </tfoot>
        </table>
      </div>
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    console.error("SendMail error", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
