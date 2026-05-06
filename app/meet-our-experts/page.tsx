import type { Metadata } from "next";
import Image from "next/image";
import CallBack from "../components/CallBack";
import SectionReveal from "../components/SectionReveal";

export const metadata: Metadata = {
  title: "Meet Our Study Abroad Experts | Edgo Consultants Team",
  description:
    "Meet our expert team of education consultants in Islamabad, Pakistan. Specialized in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary admissions. 95% visa success rate.",
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
      "Expert team of education consultants in Islamabad. Specialized in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary. 95% visa success rate.",
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
      "Expert team of education consultants in Islamabad. Specialized in France, UK, Sweden, Finland, Lithuania, Romania, Slovenia, Latvia, Estonia, Cyprus & Hungary.",
    images: ["/Assets/Images/logo.png"],
  },
};

const experts = [
  {
    id: 1,
    name: "Shakeel Ahmad",
    img: "/Assets/Images/Team/Shakeel.png",
    position:
      "Head of Admissions & International Operations / Business Development Manager",
    flagEmoji: "👔",
  },
  {
    id: 2,
    name: "Salman Yousaf",
    img: "/Assets/Images/Team/Salman.png",
    position: "Admissions & Visa Processing Officer / Branch Manager",
    flagEmoji: "📋",
  },
  {
    id: 3,
    name: "Aayan Sarwar",
    img: "/Assets/Images/Team/Ayaan.png",
    position: "Admissions & Visa Processing Officer",
    flagEmoji: "🎓",
  },
  {
    id: 4,
    name: "Vicky",
    img: "/Assets/Images/Team/Vicky.png",
    position: "Student Support & Communications Officer",
    flagEmoji: "💬",
  },
  {
    id: 5,
    name: "Atiq Ur Rehman",
    img: "/Assets/Images/Team/Atiq.png",
    position: "Digital Media & Content Specialist",
    flagEmoji: "📱",
  },
  {
    id: 6,
    name: "Hammad Khan",
    img: "/Assets/Images/Team/Hammad.png",
    position: "Social Media Manager",
    flagEmoji: "📢",
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
                      unoptimized
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
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
                Our Team
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Meet the <span className="gradient-text">Professionals</span>
              </h2>
              <p className="text-white/40 max-w-lg mx-auto text-base">
                Dedicated experts committed to your success in international
                education.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, i) => (
              <SectionReveal key={expert.id} delay={i * 100}>
                <div className="group relative glass rounded-2xl overflow-hidden card-lift">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={expert.img}
                      alt={expert.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{expert.flagEmoji}</span>
                      </div>
                      <h3 className="text-white font-black text-xl mb-1">
                        {expert.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {expert.position}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CallBack />
    </div>
  );
}
