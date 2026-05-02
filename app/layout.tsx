import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edgo Consultants | Pursue Your Ambitions",
  description:
    "We turn your academic dreams into reality with expert guidance. Study in USA, UK, Australia, Canada, Europe and more.",
  keywords:
    "edgo, edgo consultants, study abroad, personal guidance, free guidance, free counseling, expert guidance, dream universities",
  openGraph: {
    title: "Edgo Consultants | Pursue Your Ambitions",
    description:
      "We turn your academic dreams into reality with expert guidance.",
    url: "https://www.EdgoConsultants.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EdgoConsultants",
    title: "Edgo Consultants | Pursue Your Ambitions",
    description:
      "We turn your academic dreams into reality with expert guidance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "#0d1f2d" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
