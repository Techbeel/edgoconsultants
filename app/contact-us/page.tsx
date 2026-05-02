import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import CallBack from "../components/CallBack";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Contact Us | Edgo Consultants",
  description:
    "Get in touch with Edgo Consultants. We are here to help you start your study abroad journey.",
};

const contactItems = [
  {
    icon: <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />,
    label: "Email",
    value: "info@edgoconsultants.com",
    href: "mailto:info@edgoconsultants.com",
  },
  {
    icon: <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />,
    label: "WhatsApp",
    value: "+92 300 1234567",
    href: "https://wa.me/923001234567",
  },
  {
    icon: <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />,
    label: "Facebook",
    value: "Edgo Consultants",
    href: "http://facebook.com/edgoconsultants/",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />,
    label: "YouTube",
    value: "@edgoconsultants",
    href: "https://www.youtube.com/@edgoconsultants",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />,
    label: "Instagram",
    value: "@edgoconsultants",
    href: "https://www.instagram.com/edgoconsultants",
  },
  {
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6" />,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: "#",
  },
];

export default function ContactUs() {
  return (
    <div style={{ background: "#0d1f2d" }}>
      {/* Hero */}
      <section className="relative pt-36 pb-20 dark-mesh noise overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-[#f89601]/5 blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f89601]" />
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Let&apos;s <span className="gradient-text">Talk</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto">
              Ready to take the first step? Reach out and we&apos;ll connect you
              with the right expert within 24 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16" style={{ background: "#0d1f2d" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contactItems.map((item, i) => (
              <SectionReveal key={item.label} delay={i * 80}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass rounded-2xl p-6 flex flex-col items-center text-center card-lift group block"
                >
                  <span className="text-3xl mb-3">{item.icon}</span>
                  <p className="text-white/40 text-xs uppercase tracking-wide font-semibold mb-1">
                    {item.label}
                  </p>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CallBack />
    </div>
  );
}
