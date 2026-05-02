import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

const features = [
  {
    title: "Alumni Network",
    desc: "Connect with our consultants who are actual students and graduates from top universities.",
    icon: "🎓",
  },
  {
    title: "Zero Hidden Fees",
    desc: "Our consultation and guidance is completely free. No surprises, ever.",
    icon: "💰",
  },
  {
    title: "Dedicated Advisor",
    desc: "One assigned advisor sees your case through from start to visa stamp.",
    icon: "🤝",
  },
  {
    title: "Global Reach",
    desc: "Partnerships with hundreds of universities across 8 countries worldwide.",
    icon: "🌐",
  },
];

export default function Features() {
  return (
    <section
      className="relative py-24 overflow-hidden noise"
      style={{
        background:
          "linear-gradient(135deg, #0d1f2d 0%, #0a1825 50%, #0d1f2d 100%)",
      }}
    >
      {/* Accent blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f89601]/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <SectionReveal>
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-[#f89601]/30 via-transparent to-[#1e5578]/30 blur-[2px]" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[550px]">
                <Image
                  src="/Assets/Images/boy.jpg"
                  alt="Student"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0d1f2d]/80 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-6 py-4 flex items-center gap-4 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#f89601]/20 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="w-6 h-6 text-[#f89601]"
                  />
                </div>
                <div>
                  <p className="text-white font-black text-xl">4.9/5</p>
                  <p className="text-white/50 text-xs">Student Satisfaction</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 glass rounded-2xl px-5 py-3">
                <p className="text-white/50 text-xs">Success Rate</p>
                <p className="text-[#f89601] font-black text-2xl">95%</p>
              </div>
            </div>
          </SectionReveal>

          {/* Right — content */}
          <SectionReveal delay={150}>
            <div>
              <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                Why Choose Edgo
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Your Journey,
                <br />
                <span className="gradient-text">Our Expertise</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
                Navigating international admissions alone is overwhelming. Our
                consultants have been in your shoes — we know exactly what it
                takes to get in.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <SectionReveal key={f.title} delay={200 + i * 80}>
                    <div className="group glass rounded-2xl p-5 card-lift">
                      <div className="text-2xl mb-3">{f.icon}</div>
                      <h4 className="text-white font-bold text-sm mb-1.5">
                        {f.title}
                      </h4>
                      <p className="text-white/40 text-xs leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
