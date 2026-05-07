import type { Metadata } from "next";
import CallBack from "./components/CallBack";
import Features from "./components/Features";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export const metadata: Metadata = {
  title: "Expert Study Abroad Consultants | Free Guidance | Edgo Consultants",
  description:
    "Your trusted study abroad partner. Free expert consultation for France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary. 95% visa success rate. Start your international education journey today.",
  keywords: [
    "study abroad consultants",
    "free study abroad guidance",
    "international education",
    "overseas education consultants",
    "visa consultants pakistan",
    "university admission consultants",
    "study abroad free consultation",
    "best education consultancy pakistan",
  ],
  openGraph: {
    title: "Expert Study Abroad Consultants | Free Guidance",
    description:
      "Free expert consultation for study abroad. 95% visa success rate. Study in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary.",
    type: "website",
    images: [
      {
        url: "/assets/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Edgo Consultants - Study Abroad Experts",
      },
    ],
  },
  twitter: {
    title: "Expert Study Abroad Consultants | Free Guidance",
    description:
      "Free expert consultation for study abroad. 95% visa success rate. Study in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary.",
    images: ["/assets/images/logo1.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <HowWeWork />
      <CallBack />
      <Testimonials />
    </>
  );
}
