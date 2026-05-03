import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CallBack from "../components/CallBack";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Meet Our Study Abroad Experts | Edgo Consultants Team",
  description:
    "Meet our expert team of education consultants in Islamabad, Pakistan. Specialized in USA, UK, Australia, Canada & Europe admissions. 95% visa success rate.",
  keywords: [
    "study abroad experts",
    "education consultants team",
    "visa experts pakistan",
    "university admission specialists",
    "study abroad advisors islamabad",
    "expert counselors",
    "education consultancy team",
  ],
  openGraph: {
    title: "Meet Our Study Abroad Experts | Edgo Consultants Team",
    description:
      "Expert team of education consultants in Islamabad. Specialized in USA, UK, Australia, Canada & Europe. 95% visa success rate.",
    type: "website",
    images: [
      {
        url: "/Assets/Images/logo.png",
        width: 1200,
        height: 630,
        alt: "Meet Our Study Abroad Experts",
      },
    ],
  },
  twitter: {
    title: "Meet Our Study Abroad Experts | Edgo Consultants Team",
    description:
      "Expert team of education consultants in Islamabad. Specialized in USA, UK, Australia, Canada & Europe.",
    images: ["/Assets/Images/logo.png"],
  },
};

const experts = [
  {
    id: 1,
    name: "Muhammad Abu Bakr",
    img: "/Assets/Images/Team/Bakr.jpeg",
    flag: "/Assets/Images/Flags/2.svg",
    country: "UK",
    flagEmoji: "🇬🇧",
    desc: "Muhammad Abu Bakar is the Manager Operations for EDGO in London. An LLM graduate from Dundee University with a background in civil, criminal, and family law, he combines his legal expertise with a passion for guiding students.",
  },
  {
    id: 2,
    name: "Muhammad Ibrar",
    img: "/Assets/Images/Team/Ibrar.jpeg",
    flag: "/Assets/Images/Flags/7.svg",
    country: "Europe",
    flagEmoji: "🇪🇺",
    desc: "Muhammad Ibrar, our Manager Operations for Europe, is an expert in navigating the diverse education systems across European countries. His insights have empowered countless students to embark on successful academic journeys in Europe.",
  },
  {
    id: 3,
    name: "Abdur Rehman Tarar",
    img: "/Assets/Images/Team/Tarar.jpeg",
    flag: "/Assets/Images/Flags/3.svg",
    country: "Australia",
    flagEmoji: "🇦🇺",
    desc: "As Manager Operations for Australia, Abdur Rehman Tarar connects students with top-ranked Australian institutions. With deep understanding of the Australian education system, post-study work opportunities, and visa procedures.",
  },
  {
    id: 4,
    name: "Humais Khan",
    img: "/Assets/Images/Team/Humais.jpeg",
    flag: "/Assets/Images/Flags/1.svg",
    country: "USA",
    flagEmoji: "🇺🇸",
    desc: "Humais Khan is our Manager Operations for the USA. His dedication and tailored advice have helped students secure places in some of the most prestigious institutions in the United States.",
  },
  {
    id: 5,
    name: "Talha Awan",
    img: "/Assets/Images/Team/Talha.jpeg",
    flag: "/Assets/Images/Flags/4.svg",
    country: "New Zealand",
    flagEmoji: "🇳🇿",
    desc: "Talha Awan, our Manager Operations for New Zealand, specializes in helping students explore opportunities at top universities with in-depth knowledge of New Zealand's educational landscape and visa regulations.",
  },
];

export default function MeetOurExperts() {
  return (
    <div style={{ background: "#0d1f2d" }}>
      {/* Hero */}
      <section className="relative pt-36 pb-20 dark-mesh noise overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-[#f89601]/5 blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f89601]" />
              Our Team
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
              Meet Our <span className="gradient-text">Experts</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
              Alumni and current students at world-class institutions — they
              have been in your shoes and know exactly how to get you there.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16" style={{ background: "#0d1f2d" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionReveal>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#f89601] text-white text-sm font-bold rounded-full">
                      CEO & Founder
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Khalid Munawar
                  </h2>
                  <h3 className="text-xl text-[#f89601] font-semibold mb-6">
                    Message From CEO
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    As the CEO of Edgo Consultants, I bring over a decade of
                    experience in navigating the complex world of international
                    admissions and visa applications. My journey has been
                    dedicated to guiding students towards achieving their
                    academic dreams by securing admissions in top universities
                    abroad.
                  </p>
                  <p className="text-white/70 text-lg leading-relaxed">
                    With a deep understanding of the process and a passion for
                    excellence, I strive to ensure every student's success
                    through personalized and professional support.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <Image
                      src="/Assets/Images/Team/Khalid.jpg"
                      alt="Khalid Munawar - CEO & Founder"
                      width={300}
                      height={300}
                      className="rounded-2xl object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Experts */}
      <section className="py-20" style={{ background: "#0d1f2d" }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-6">
          {experts.map((expert, i) => (
            <SectionReveal key={expert.id} delay={i * 80}>
              <div
                className={`group glass rounded-3xl overflow-hidden flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} card-lift`}
              >
                {/* Image */}
                <div className="md:w-64 shrink-0">
                  <div className="relative h-64 md:h-full min-h-[260px]">
                    <Image
                      src={expert.img}
                      alt={expert.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-[#0d1f2d]/30 to-transparent md:hidden" />
                    <div className="absolute top-4 left-4 glass rounded-xl px-3 py-1.5 flex items-center gap-2">
                      <span className="text-lg">{expert.flagEmoji}</span>
                      <span className="text-white font-bold text-sm">
                        {expert.country}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={expert.flag}
                      alt={expert.country}
                      width={28}
                      height={20}
                      className="rounded-sm"
                    />
                    <span className="text-[#f89601] text-xs font-bold uppercase tracking-widest">
                      Manager Operations — {expert.country}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-[#f89601] transition-colors">
                    {expert.name}
                  </h2>
                  <p className="text-white/50 leading-relaxed text-sm md:text-base mb-6">
                    {expert.desc}
                  </p>
                  <Link
                    href="/#callback"
                    className="inline-flex items-center gap-2 text-[#f89601] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Book a session
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <CallBack />
    </div>
  );
}
