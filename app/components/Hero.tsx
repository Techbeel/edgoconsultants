"use client";

import {
  faArrowRight,
  faChevronDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: "500+", label: "Students Placed", icon: "🎓" },
  { value: "11+", label: "Countries", icon: "🌍" },
  { value: "95%", label: "Success Rate", icon: "✨" },
  { value: "Free", label: "Assessment", icon: "💬" },
];

const destinations = [
  "France",
  "United Kingdom",
  "Sweden",
  "Finland",
  "Lithuania",
  "Romania",
  "Slovenia",
  "Latvia",
  "Estonia",
  "Cyprus",
  "Hungary",
];
const words = ["Ambitions", "Dreams", "Future", "Potential"];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setActiveWord((w) => (w + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden noise dark-mesh">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Glowing blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#f89601]/8 blur-[120px] animate-blob" />
      <div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[#1e5578]/20 blur-[120px] animate-blob"
        style={{ animationDelay: "4s" }}
      />

      {/* Video (subtle background) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      >
        <source
          src="https://res.cloudinary.com/dltkycv3q/video/upload/v1676756575/heroBg_1_meyszi.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* Badge */}
              <div
                className={`inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#f89601]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f89601]" />
                </span>
                <span className="text-white/80 text-xs font-medium tracking-wide">
                  Your Study Abroad Partner
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <span className="text-white">Pursue Your</span>
                <br />
                <span className="gradient-text inline-block" key={activeWord}>
                  {words[activeWord]}
                </span>
                <br />
                <span className="text-white">With Us.</span>
              </h1>

              <p
                className={`mt-6 text-lg text-white/55 leading-relaxed max-w-md transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                Guidance from a highly experienced professional team dedicated
                to helping you achieve your academic goals worldwide. We turn
                your study abroad dreams into reality - assessment{" "}
                <span className="text-[#f89601] font-semibold">free</span>.
              </p>

              {/* CTAs */}
              <div
                className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <Link
                  href="#callback"
                  className="btn-primary inline-flex items-center gap-2 text-base"
                >
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                    Get Free Assessment
                  </span>
                </Link>
                <Link
                  href="/meet-our-experts"
                  className="inline-flex items-center gap-2 glass text-white font-semibold px-6 py-3.5 rounded-xl text-base hover:bg-white/15 transition-all"
                >
                  Meet Experts
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </Link>
              </div>

              {/* Destination pills */}
              <div
                className={`mt-10 transition-all duration-700 delay-[400ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3 font-semibold">
                  We Help You Study In
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {destinations.map((d) => (
                    <span
                      key={d}
                      className="text-xs text-white/60 bg-white/5 border border-white/8 rounded-full px-3 py-1 hover:border-[#f89601]/40 hover:text-white/80 transition-colors cursor-default"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — stats bento */}
            <div
              className={`transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-2xl p-6 card-lift group"
                  >
                    <div className="text-3xl mb-2">{s.icon}</div>
                    <div className="text-4xl font-black text-white group-hover:text-[#f89601] transition-colors">
                      {s.value}
                    </div>
                    <div className="text-white/50 text-sm mt-1 font-medium">
                      {s.label}
                    </div>
                  </div>
                ))}
                {/* CTA card */}
                <div className="col-span-2 relative overflow-hidden rounded-2xl bg-[#f89601] p-6 card-lift">
                  <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10" />
                  <div className="absolute -bottom-6 -left-4 w-32 h-32 rounded-full bg-black/10" />
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white/80 text-sm font-medium">
                        Start Your Journey
                      </p>
                      <p className="text-white text-xl font-black mt-1">
                        100% Free Expert Guidance
                      </p>
                    </div>
                    <Link
                      href="#callback"
                      className="shrink-0 bg-white text-[#f89601] rounded-xl px-4 py-2.5 text-sm font-bold hover:bg-white/90 transition-colors"
                    >
                      Apply →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center pb-8 animate-bounce">
        <div className="flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-8 bg-white" />
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-4 h-4 text-white"
          />
        </div>
      </div>
    </section>
  );
}
