"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Meet Our Experts", href: "/meet-our-experts" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement ticker */}
      <div className="bg-[#f89601] overflow-hidden py-1.5">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-white text-xs font-semibold mx-6 tracking-wide inline-flex items-center gap-4"
            >
              <span>🇫🇷 France</span>
              <span className="opacity-50">·</span>
              <span>🇬🇧 United Kingdom</span>
              <span className="opacity-50">·</span>
              <span>🇸🇪 Sweden</span>
              <span className="opacity-50">·</span>
              <span>🇫🇮 Finland</span>
              <span className="opacity-50">·</span>
              <span>🇱🇹 Lithuania</span>
              <span className="opacity-50">·</span>
              <span>🇷🇴 Romania</span>
              <span className="opacity-50">·</span>
              <span>🇸🇮 Slovenia</span>
              <span className="opacity-50">·</span>
              <span>🇱🇻 Latvia</span>
              <span className="opacity-50">·</span>
              <span>🇪🇪 Estonia</span>
              <span className="opacity-50">·</span>
              <span>🇨🇾 Cyprus</span>
              <span className="opacity-50">·</span>
              <span>🇭🇺 Hungary</span>
              <span className="opacity-50">·</span>
              <span className="font-bold">
                Free Expert Assessment - Book Today
              </span>
              <span className="mx-4 opacity-30">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`transition-all duration-500 ${scrolled ? "glass-dark shadow-2xl" : "bg-[#0d1f2d]"}`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/Assets/Images/logo.png"
              alt="Edgo Consultants"
              width={130}
              height={42}
              className="object-contain w-auto"
              style={{ maxHeight: "42px" }}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${pathname === link.href ? "text-[#f89601] bg-white/5" : "text-white/70 hover:text-white"}`}
                >
                  {link.title}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#f89601]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — simplified, no WhatsApp text */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923139320255"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 white" />
            </a>
            <Link
              href="/#callback"
              className="btn-primary text-sm px-5 py-2.5 rounded-xl"
            >
              <span>Free Assessment</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}
        >
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${pathname === link.href ? "bg-[#f89601]/10 text-[#f89601]" : "text-white/70 hover:text-white hover:bg-white/5"}`}
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/#callback"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 text-center btn-primary text-sm rounded-xl py-3"
            >
              <span>Free Assessment</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
