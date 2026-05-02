import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faEnvelopeSolid,
  faMapMarkerAlt as faMapMarkerAltSolid,
  faPhone as faPhoneSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const links = {
  company: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Meet Our Experts", href: "/meet-our-experts" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  destinations: [
    { title: "United States", href: "/#callback" },
    { title: "United Kingdom", href: "/#callback" },
    { title: "Australia", href: "/#callback" },
    { title: "Canada", href: "/#callback" },
    { title: "New Zealand", href: "/#callback" },
    { title: "Ireland", href: "/#callback" },
  ],
};

const socials = [
  {
    name: "Facebook",
    href: "http://facebook.com/edgoconsultants/",
    icon: <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@edgoconsultants",
    icon: <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/edgoconsultants",
    icon: <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden dark-mesh noise">
      {/* Top gradient divider */}
      <div className="h-px bg-linear-to-r from-transparent via-[#f89601]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Assets/Images/logo.png"
                alt="Edgo Consultants"
                width={110}
                height={36}
                className="object-contain w-auto"
                style={{ maxHeight: "38px" }}
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Empowering students to pursue their dreams at top universities
              worldwide. Free expert guidance, always.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-[#f89601] hover:border-[#f89601]/30 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white/80 font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.title}>
                  <Link
                    href={l.href}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-white/80 font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Destinations
            </h4>
            <ul className="space-y-3">
              {links.destinations.map((l) => (
                <li key={l.title}>
                  <Link
                    href={l.href}
                    className="text-white/40 text-sm hover:text-white transition-colors"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/80 font-bold text-xs uppercase tracking-[0.15em] mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+923001234567"
                className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <span className="mt-0.5 text-[#f89601] shrink-0">
                  <FontAwesomeIcon icon={faPhoneSolid} className="w-4 h-4" />
                </span>
                +92 300 1234567
              </a>
              <a
                href="mailto:info@edgoconsultants.com"
                className="flex items-start gap-3 text-white/40 hover:text-white text-sm transition-colors group"
              >
                <span className="mt-0.5 text-[#f89601] shrink-0">
                  <FontAwesomeIcon icon={faEnvelopeSolid} className="w-4 h-4" />
                </span>
                info@edgoconsultants.com
              </a>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <span className="mt-0.5 text-[#f89601] shrink-0">
                  <FontAwesomeIcon
                    icon={faMapMarkerAltSolid}
                    className="w-4 h-4"
                  />
                </span>
                Office Number 231, 3rd Floor, M, Dubai Tower, Lehtrar Rd, Khanna
                Islamabad, 45600, Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-white/5" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-xs">
          © {new Date().getFullYear()} Edgo Consultants. All rights reserved.
        </p>
        <p className="text-white/15 text-xs">Empowering students worldwide.</p>
      </div>
    </footer>
  );
}
