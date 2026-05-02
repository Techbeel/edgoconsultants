"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import SectionReveal from "./SectionReveal";

const testimonials = [
  {
    name: "Faisal Adnan",
    role: "MSc Computer Science",
    university: "University of Birmingham, UK",
    flag: "🇬🇧",
    quote:
      "Edgo's guidance was exceptional. They helped me craft a perfect SOP and navigate the visa process effortlessly. I couldn't have done it without them!",
    rating: 5,
    avatar: "FA",
    color: "from-[#1e5578] to-[#0d3a55]",
  },
  {
    name: "Alisha Tahir",
    role: "MBA",
    university: "University of Melbourne, Australia",
    flag: "🇦🇺",
    quote:
      "The team at Edgo was with me at every step. From shortlisting universities to the visa interview prep — professional and genuinely caring.",
    rating: 5,
    avatar: "AT",
    color: "from-[#f89601] to-[#c97200]",
  },
  {
    name: "Waqas Ahmed",
    role: "BEng Mechanical Engineering",
    university: "University of Toronto, Canada",
    flag: "🇨🇦",
    quote:
      "I was confused about which country to choose. Edgo not only helped me decide but also secured a partial scholarship. Amazing service!",
    rating: 5,
    avatar: "WA",
    color: "from-[#4a1d96] to-[#2e0f5e]",
  },
  {
    name: "Hussain Ali",
    role: "MS Data Science",
    university: "University of Auckland, New Zealand",
    flag: "🇳🇿",
    quote:
      "Highly professional team. They guided me through every step of the process and helped me secure admission to my dream university.",
    rating: 5,
    avatar: "HA",
    color: "from-[#065f46] to-[#022c22]",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#0d1f2d" }}
    >
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-[#f89601]/5 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                Student Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                What Our Students
                <br />
                <span className="gradient-text">Are Saying</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-xs md:text-right">
              500+ students placed. Here are a few of their stories.
            </p>
          </div>
        </SectionReveal>

        {/* Main testimonial + cards */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Featured large card */}
          <SectionReveal className="lg:col-span-2">
            <div
              className={`relative glass rounded-3xl p-8 md:p-12 h-full overflow-hidden transition-all duration-500`}
            >
              {/* Large quote mark */}
              <span className="absolute top-6 right-8 text-[8rem] font-serif text-white/4 leading-none select-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="w-5 h-5 text-[#f89601]"
                  />
                ))}
              </div>

              <blockquote className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed mb-8">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {testimonials[active].avatar}
                </div>
                <div>
                  <p className="text-white font-bold">
                    {testimonials[active].name}
                  </p>
                  <p className="text-white/40 text-sm">
                    {testimonials[active].role} ·{" "}
                    {testimonials[active].university}{" "}
                    {testimonials[active].flag}
                  </p>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#f89601]" : "w-2 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 60}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left glass rounded-2xl p-5 card-lift transition-all duration-300 ${i === active ? "border border-[#f89601]/30 bg-[#f89601]/5" : "hover:bg-white/5"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-8 h-8 rounded-xl bg-linear-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs shrink-0`}
                    >
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-bold text-sm truncate ${i === active ? "text-white" : "text-white/60"}`}
                      >
                        {t.name}
                      </p>
                      <p className="text-white/30 text-xs truncate">
                        {t.flag}{" "}
                        {t.university.split(",")[1]?.trim() || t.university}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-xs line-clamp-2 leading-relaxed ${i === active ? "text-white/60" : "text-white/30"}`}
                  >
                    {t.quote}
                  </p>
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
