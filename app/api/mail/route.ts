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
    subject: safe(
      subject ?? `New Study Abroad Enquiry - ${safe(name)} (${safe(country)})`,
    ),
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Enquiry - Edgo Consultants</title>
        <style>
          body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #0d1f2d 0%, #1a365d 100%); color: white; padding: 40px 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; }
          .header p { margin: 8px 0 0 0; font-size: 16px; opacity: 0.9; font-weight: 400; }
          .content { padding: 0; }
          .info-section { padding: 30px; background-color: #ffffff; }
          .info-row { display: flex; border-bottom: 1px solid #e2e8f0; padding: 20px 0; }
          .info-row:last-child { border-bottom: none; }
          .info-row:nth-child(even) { background-color: #f8fafc; }
          .info-label { font-weight: 600; color: #374151; min-width: 120px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
          .info-value { color: #1f2937; font-size: 16px; flex: 1; word-break: break-word; }
          .info-value a { color: #f89601; text-decoration: none; font-weight: 500; }
          .info-value a:hover { text-decoration: underline; }
          .message-section { background-color: #f8fafc; padding: 30px; border-top: 1px solid #e2e8f0; }
          .message-label { font-weight: 600; color: #374151; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
          .message-content { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; color: #374151; line-height: 1.6; white-space: pre-wrap; }
          .footer { background-color: #0d1f2d; color: #9ca3af; padding: 30px; text-align: center; }
          .footer-content { max-width: 400px; margin: 0 auto; }
          .footer h3 { color: #f89601; font-size: 18px; font-weight: 600; margin: 0 0 8px 0; }
          .footer p { margin: 0 0 15px 0; font-size: 14px; line-height: 1.5; }
          .footer-links { margin-top: 20px; }
          .footer-links a { color: #f89601; text-decoration: none; font-weight: 500; margin: 0 10px; font-size: 14px; }
          .footer-links a:hover { text-decoration: underline; }
          .priority-badge { display: inline-block; background-color: #f89601; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 10px; }
          .country-flag { font-size: 18px; margin-right: 8px; }
          @media (max-width: 600px) {
            .container { margin: 10px; border-radius: 8px; }
            .header { padding: 30px 20px; }
            .header h1 { font-size: 24px; }
            .info-section { padding: 20px; }
            .info-row { flex-direction: column; padding: 15px 0; }
            .info-label { min-width: auto; margin-bottom: 5px; }
            .message-section { padding: 20px; }
            .footer { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>📧 New Study Abroad Enquiry</h1>
            <p>High-priority consultation request received</p>
          </div>

          <!-- Student Information -->
          <div class="info-section">
            <div class="info-row">
              <div class="info-label">👤 Name</div>
              <div class="info-value">${safe(name)}</div>
            </div>
            <div class="info-row">
              <div class="info-label">📞 Phone</div>
              <div class="info-value"><a href="tel:${safe(phone)}">${safe(phone)}</a></div>
            </div>
            <div class="info-row">
              <div class="info-label">✉️ Email</div>
              <div class="info-value"><a href="mailto:${safe(email)}">${safe(email)}</a></div>
            </div>
            <div class="info-row">
              <div class="info-label">🌍 Destination</div>
              <div class="info-value">${safe(country)}${country === "USA" ? " 🇺🇸" : country === "UK" ? " 🇬🇧" : country === "Australia" ? " 🇦🇺" : country === "Canada" ? " 🇨🇦" : country === "New Zealand" ? " 🇳🇿" : country === "Ireland" ? " 🇮🇪" : ""}</div>
            </div>
          </div>

          <!-- Message Section -->
          ${
            message
              ? `
          <div class="message-section">
            <div class="message-label">💬 Student Message</div>
            <div class="message-content">${safe(message).replace(/\n/g, "<br>")}</div>
          </div>
          `
              : ""
          }

          <!-- Footer -->
          <div class="footer">
            <div class="footer-content">
              <h3>Edgo Consultants</h3>
              <p>Expert Study Abroad Guidance • Free Consultation • 95% Visa Success Rate</p>
              <div class="footer-links">
                <a href="https://www.edgoconsultants.com">🌐 Website</a>
                <a href="https://wa.me/923001234567">💬 WhatsApp</a>
                <a href="mailto:info@edgoconsultants.com">✉️ Email</a>
              </div>
              <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
                Office: 231, 3rd Floor, Dubai Tower, Lehtrar Road, Khanna, Islamabad, Pakistan 45600
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
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
