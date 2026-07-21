import Counter from "./Counter";
import Reveal from "./Reveal";

const STATS = [
  { to: 500, suffix: "+", label: "Enterprise Clients", sub: "Organizations trust Accredian" },
  { to: 50, suffix: "K+", label: "Learners Upskilled", sub: "Professionals transformed" },
  { to: 98, suffix: "%", label: "Satisfaction Rate", sub: "Learner satisfaction score" },
  { to: 200, suffix: "+", label: "Curated Programs", sub: "Across 15+ domains" },
  { to: 94, suffix: "%", label: "Completion Rate", sub: "Industry-leading outcome" },
  { to: 50, suffix: "+", label: "University Partners", sub: "IITs, IIMs & global institutions" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy border-y border-line-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold-soft mb-2">
            By the Numbers
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-12 max-w-xl">
            The platform enterprises trust.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="border-l-2 border-line-dark pl-4">
                <p className="font-mono text-3xl sm:text-4xl font-semibold text-paper leading-none">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[13px] font-medium text-paper">
                  {s.label}
                </p>
                <p className="mt-1 text-[11.5px] text-mist leading-snug">
                  {s.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
