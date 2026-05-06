"use client";

import {
  faChevronLeft,
  faChevronRight,
  faComments,
  faFileAlt,
  faGlobe,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "Share Your Details & Background",
    description:
      "Tell us about your academic history, preferences, and goals so we can understand your profile.",
    icon: <FontAwesomeIcon icon={faComments} className="w-7 h-7" />,
  },
  {
    number: "02",
    title: "Profile Assessment",
    description:
      "We carefully evaluate your profile to check eligibility and identify the best opportunities for you.",
    icon: <FontAwesomeIcon icon={faFileAlt} className="w-7 h-7" />,
  },
  {
    number: "03",
    title: "Country & Course Recommendation",
    description:
      "Based on your profile, we suggest the most suitable countries and study programs.",
    icon: <FontAwesomeIcon icon={faPaperPlane} className="w-7 h-7" />,
  },
  {
    number: "04",
    title: "University Shortlisting",
    description:
      "We shortlist the best-fit universities (public & private) according to your academic and budget criteria.",
    icon: <FontAwesomeIcon icon={faGlobe} className="w-7 h-7" />,
  },
  {
    number: "05",
    title: "Application Submission & Follow-up",
    description:
      "We prepare and submit your applications and continuously follow up with universities for updates.",
    icon: <FontAwesomeIcon icon={faPaperPlane} className="w-7 h-7" />,
  },
  {
    number: "06",
    title: "Visa Filing & Processing",
    description:
      "We guide you through complete visa documentation, filing, and embassy process until final decision.",
    icon: <FontAwesomeIcon icon={faGlobe} className="w-7 h-7" />,
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden dark-mesh noise">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#f89601]/6 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              The Process
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How We Get You
              <br />
              <span className="gradient-text">To Your Dream School</span>
            </h2>
            <p className="text-white/40 max-w-lg mx-auto text-base">
              A comprehensive, proven 6-step process that has placed 500+
              students in top universities worldwide.
            </p>
          </div>
        </SectionReveal>

        {/* Steps layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Step selector */}
          <div className="lg:col-span-2 flex lg:flex-col gap-3">
            {steps.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 80}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    active === i
                      ? "bg-[#f89601]/15 border border-[#f89601]/30"
                      : "glass hover:bg-white/5"
                  }`}
                >
                  <span
                    className={`shrink-0 text-2xl font-black tabular-nums transition-colors ${
                      active === i ? "text-[#f89601]" : "text-white/20"
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      active === i ? "text-white" : "text-white/40"
                    }`}
                  >
                    {step.title}
                  </span>
                  {active === i && (
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-4 h-4 text-[#f89601] ml-auto shrink-0"
                    />
                  )}
                </button>
              </SectionReveal>
            ))}
          </div>

          {/* Detail panel */}
          <SectionReveal delay={200} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-12 h-full relative overflow-hidden">
              {/* Watermark */}
              <span className="absolute top-4 right-6 text-[10rem] font-black text-white/3 select-none leading-none">
                {steps[active].number}
              </span>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f89601]/15 text-[#f89601] mb-8">
                  {steps[active].icon}
                </div>

                {/* Progress dots */}
                <div className="flex gap-2 mb-6">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-8 bg-[#f89601]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <h3 className="text-3xl font-black text-white mb-4">
                  {steps[active].title}
                </h3>
                <p className="text-white/55 text-base leading-relaxed">
                  {steps[active].description}
                </p>

                {/* Nav */}
                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white disabled:opacity-20 transition-colors"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActive((a) => Math.min(steps.length - 1, a + 1))
                    }
                    disabled={active === steps.length - 1}
                    className="w-10 h-10 rounded-xl bg-[#f89601] flex items-center justify-center text-white disabled:opacity-30 hover:bg-[#e07800] transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
