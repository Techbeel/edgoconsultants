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
  metadataBase: new URL("https://www.edgoconsultants.com"),
  title: {
    default: "Edgo Consultants | Expert Study Abroad Guidance",
    template: "%s | Edgo Consultants",
  },
  description:
    "Transform your study abroad dreams into reality with Edgo Consultants. Expert guidance for France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary. Free consultation, 95% visa success rate.",
  keywords: [
    "study abroad",
    "education consultancy",
    "study in France",
    "study in UK",
    "study in Sweden",
    "study in Finland",
    "study in Lithuania",
    "study in Romania",
    "study in Slovenia",
    "study in Latvia",
    "study in Estonia",
    "study in Cyprus",
    "study in Hungary",
    "visa assistance",
    "university admission",
    "scholarships",
    "international education",
    "overseas education",
    "student visa",
    "IELTS preparation",
    "TOEFL preparation",
    "GRE preparation",
    "SAT preparation",
    "free counseling",
    "expert guidance",
    "edgo consultants",
    "pakistan education consultancy",
    "islamabad education consultancy",
  ],
  authors: [{ name: "Edgo Consultants" }],
  creator: "Edgo Consultants",
  publisher: "Edgo Consultants",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Edgo Consultants | Expert Study Abroad Guidance",
    description:
      "Transform your study abroad dreams into reality. Free expert consultation for France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary. 95% visa success rate.",
    url: "https://www.edgoconsultants.com",
    siteName: "Edgo Consultants",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/Assets/Images/logo.png",
        width: 1200,
        height: 630,
        alt: "Edgo Consultants - Study Abroad Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EdgoConsultants",
    creator: "@EdgoConsultants",
    title: "Edgo Consultants | Expert Study Abroad Guidance",
    description:
      "Transform your study abroad dreams into reality. Free expert consultation for France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary.",
    images: ["/Assets/Images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.edgoconsultants.com",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Edgo Consultants",
  description:
    "Expert study abroad consultancy providing free guidance for international education in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus, and Hungary.",
  url: "https://www.edgoconsultants.com",
  logo: "https://www.edgoconsultants.com/Assets/Images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office Number 231, 3rd Floor, M, Dubai Tower, Lehtrar Rd",
    addressLocality: "Khanna",
    addressRegion: "Islamabad",
    postalCode: "45600",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-313-9320255",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "http://facebook.com/edgoconsultants/",
    "https://www.youtube.com/@edgoconsultants",
    "https://www.instagram.com/edgoconsultants",
  ],
  serviceType: "Education Consulting",
  areaServed: [
    {
      "@type": "Country",
      name: "France",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "Sweden",
    },
    {
      "@type": "Country",
      name: "Finland",
    },
    {
      "@type": "Country",
      name: "Lithuania",
    },
    {
      "@type": "Country",
      name: "Romania",
    },
    {
      "@type": "Country",
      name: "Slovenia",
    },
    {
      "@type": "Country",
      name: "Latvia",
    },
    {
      "@type": "Country",
      name: "Estonia",
    },
    {
      "@type": "Country",
      name: "Cyprus",
    },
    {
      "@type": "Country",
      name: "Hungary",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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
