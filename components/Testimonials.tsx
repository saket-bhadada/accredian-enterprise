import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "Accredian Enterprise reshaped how we approach talent development. In just six months, our data engineering team's velocity climbed by 40% — the return on investment speaks for itself.",
    name: "Priya Sharma",
    role: "Chief People Officer",
    company: "Razorpay",
    initials: "PS",
    color: "#d4a54a",
  },
  {
    quote:
      "Nowhere else in the market pairs IIT-caliber curriculum with live mentorship like this. Our engineers now lead ML initiatives independently.",
    name: "Vikram Nair",
    role: "VP of Engineering",
    company: "PhonePe",
    initials: "VN",
    color: "#4a5ae8",
  },
  {
    quote:
      "We rolled out training to 300 managers across three geographies at once, and the enterprise dashboard made monitoring effortless. Completion hit 96% — a first for us.",
    name: "Ananya Krishnan",
    role: "Head of Learning & Development",
    company: "Infosys BPM",
    initials: "AK",
    color: "#8a93f5",
  },
];

export default function Testimonials() {
  return (
    <section id="stories" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-indigo mb-3">
            Client Stories
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink text-balance">
            Trusted by India&rsquo;s fastest-growing companies.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
            Hear from the L&amp;D leaders and CHROs who transformed their
            organizations with Accredian Enterprise.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {QUOTES.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl border border-line-light bg-paper-card p-7">
                <Quote
                  size={26}
                  strokeWidth={1.5}
                  className="text-gold mb-5"
                  fill="currentColor"
                  fillOpacity={0.12}
                />
                <blockquote className="text-[14.5px] leading-relaxed text-ink flex-1 text-balance">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 pt-5 border-t border-line-light">
                  <span
                    className="grid place-items-center w-10 h-10 rounded-full text-[12px] font-semibold text-ink shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-ink leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-ink-soft leading-tight mt-0.5">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
