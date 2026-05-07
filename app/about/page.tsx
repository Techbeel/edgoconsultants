import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "../components/SectionReveal";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "About Edgo Consultants | Our Mission & Expert Team",
  description:
    "Learn about Edgo Consultants — Pakistan's leading study abroad consultancy. Our mission to help 500+ students achieve their international education dreams. Meet our expert team.",
  keywords: [
    "about edgo consultants",
    "study abroad consultancy pakistan",
    "education consultants islamabad",
    "expert education advisors",
    "study abroad mission",
    "education consultancy team",
    "pakistan study abroad experts",
  ],
  openGraph: {
    title: "About Edgo Consultants | Our Mission & Expert Team",
    description:
      "Pakistan's leading study abroad consultancy. 500+ students guided. Expert team helping students achieve international education dreams.",
    type: "website",
    images: [
      {
        url: "/Assets/Images/logo1.png",
        width: 1200,
        height: 630,
        alt: "About Edgo Consultants",
      },
    ],
  },
  twitter: {
    title: "About Edgo Consultants | Our Mission & Expert Team",
    description:
      "Pakistan's leading study abroad consultancy. 500+ students guided. Expert team helping students achieve international education dreams.",
    images: ["/Assets/Images/logo1.png"],
  },
};

const values = [
  {
    icon: "🎯",
    title: "Mission",
    desc: "To streamline the journey for students to study abroad, empowering them to achieve academic excellence worldwide through personalized expert guidance.",
  },
  {
    icon: "👁️",
    title: "Vision",
    desc: "To be the most trusted education consultancy, transforming students' dreams into reality by connecting them with world-class universities.",
  },
  {
    icon: "💎",
    title: "Our Values",
    desc: "Integrity, excellence, and student-first approach. We believe every student deserves personalized attention and transparent guidance.",
  },
  {
    icon: "🤝",
    title: "Our Commitment",
    desc: "Free counseling, honest advice, and support from application to admission. We succeed only when our students succeed.",
  },
];

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "11+", label: "Countries Covered" },
  { value: "95%", label: "Success Rate" },
  { value: "5+", label: "Years Experience" },
];

export default function About() {
  return (
    <div style={{ background: "#0d1f2d" }}>
      {/* Hero */}
      <section className="relative pt-36 pb-20 dark-mesh noise overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f89601]/5 blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f89601]" />
              Who We Are
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              About <span className="gradient-text">Edgo Consultants</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              A passionate team of education consultants, alumni, and mentors
              dedicated to making your study abroad dream a reality.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24" style={{ background: "#0d1f2d" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-[#f89601]/20 via-transparent to-[#1e5578]/20 blur-[2px]" />
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/Assets/Images/about-us-bg-web.png"
                  alt="Our Story"
                  width={600}
                  height={420}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0d1f2d]/60 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass rounded-xl p-3 text-center"
                  >
                    <div className="text-xl font-black text-[#f89601]">
                      {s.value}
                    </div>
                    <div className="text-white/40 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Lifting Others While
              <br />
              <span className="gradient-text">Rising Together</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              Edgo Consultants was founded with a single belief: every ambitious
              student deserves access to world-class education, regardless of
              where they come from.
            </p>
            <p className="text-white/50 leading-relaxed mb-4">
              Our team of accomplished alumni and current international students
              understand firsthand the challenges of navigating the study abroad
              process. We have been there - and we want to make it easier for
              you.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              From choosing the right university and program, to preparing
              documents, acing applications, and securing scholarships. We guide
              you every step of the way, completely free of charge.
            </p>
            <Link
              href="/#callback"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                Start Your Journey
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 dark-mesh noise overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                What Drives Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Mission, Vision &amp;{" "}
                <span className="gradient-text">Values</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 h-full card-lift">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="text-white font-bold text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
