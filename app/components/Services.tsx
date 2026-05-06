import { faAward, faFileAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionReveal from "./SectionReveal";

const services = [
  {
    icon: <FontAwesomeIcon icon={faUsers} className="w-8 h-8" />,
    tag: "01",
    title: "Expert Consultation",
    description:
      "One-on-one sessions with consultants who studied abroad themselves. No generic advice, only lived experience.",
    accent: "from-[#f89601] to-[#e07800]",
    features: [
      "Profile Assessment",
      "University Shortlisting",
      "Career Alignment",
    ],
  },
  {
    icon: <FontAwesomeIcon icon={faFileAlt} className="w-8 h-8" />,
    tag: "02",
    title: "Application Support",
    description:
      "End-to-end application assistance. SOP, LOR, essays, forms. We make your application stand out from thousands.",
    accent: "from-[#1e5578] to-[#0d3a55]",
    features: ["SOP Writing", "Document Review", "Deadline Tracking"],
  },
  {
    icon: <FontAwesomeIcon icon={faAward} className="w-8 h-8" />,
    tag: "03",
    title: "Visa & Admissions",
    description:
      "From offer letter to visa approval. Our 95% visa success rate speaks for itself, we know what immigration officers want.",
    accent: "from-[#4a1d96] to-[#2e0f5e]",
    features: ["Visa Application", "Interview Prep", "Pre-departure Brief"],
  },
];

export default function Services() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#0d1f2d" }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <SectionReveal>
          <div className="flex flex-col items-start mb-16">
            <span className="text-[#f89601] text-sm font-bold uppercase tracking-[0.2em] mb-4">
              What We Offer
            </span>
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Everything You Need
                <br />
                <span className="gradient-text">In One Place</span>
              </h2>
              <p className="text-white/45 text-base max-w-xs mb-2">
                From first session to landing at your dream university.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Service cards — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <SectionReveal key={s.title} delay={i * 100}>
              <div className="group relative glass rounded-3xl p-8 card-lift overflow-hidden h-full flex flex-col">
                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-black text-white/3 select-none">
                  {s.tag}
                </span>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br ${s.accent} text-white mb-6 shrink-0`}
                >
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#f89601]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Hover glow line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
