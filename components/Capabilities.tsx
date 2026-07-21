import {
  BookOpen,
  LayoutDashboard,
  Users,
  CalendarClock,
  Route,
  BadgeCheck,
  Sparkles,
  Plug,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: BookOpen,
    title: "World-Class Curriculum",
    desc: "Co-built with IITs, IIMs, and global universities, then stress-tested for real-world application — not just theory.",
    popular: true,
  },
  {
    icon: LayoutDashboard,
    title: "Enterprise L&D Dashboard",
    desc: "One command center for learner progress, engagement, and ROI reporting — updated in real time.",
  },
  {
    icon: Users,
    title: "Expert Mentor Network",
    desc: "500+ practitioners across AI/ML, Data Science, Product, and Leadership run live 1:1 sessions your team can apply on the job.",
  },
  {
    icon: CalendarClock,
    title: "Live Cohort Learning",
    desc: "Structured, scheduled cohorts drive accountability and peer learning — pushing completion above 94%.",
    popular: true,
  },
  {
    icon: Route,
    title: "Custom Learning Paths",
    desc: "We map your organization's skill gaps and strategic goals into a curriculum built for you, never off-the-shelf.",
  },
  {
    icon: BadgeCheck,
    title: "Accredited Certificates",
    desc: "Credentials from partner institutions that are globally recognized, verifiable, and career-defining.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Personalization",
    desc: "An adaptive engine resequences content around each learner's pace and gaps to keep engagement high.",
  },
  {
    icon: Plug,
    title: "Seamless HR Integration",
    desc: "Native connections to Workday, SAP SuccessFactors, and major HRMS platforms for frictionless rollout.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-indigo mb-3">
            Platform Capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink text-balance">
            Everything your L&amp;D team needs to scale.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
            From curriculum design to analytics — Accredian Enterprise is the
            operating system for ambitious learning organizations.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map(({ icon: Icon, title, desc, popular }, i) => (
            <Reveal key={title} delay={(i % 4) * 70}>
              <div className="group relative h-full rounded-2xl border border-line-light bg-paper-card p-6 hover:border-ink/20 hover:-translate-y-1 transition-all duration-300">
                {popular && (
                  <span className="absolute top-5 right-5 text-[10px] font-mono font-semibold uppercase tracking-wider text-gold bg-gold/10 rounded-full px-2 py-1">
                    Popular
                  </span>
                )}
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-ink text-gold-soft mb-5">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-[15.5px] font-semibold text-ink mb-2 pr-10">
                  {title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink-soft mb-5">
                  {desc}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-indigo"
                >
                  Learn more
                  <ArrowRight
                    size={13}
                    strokeWidth={2.5}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-14 rounded-2xl bg-ink px-8 py-9 sm:px-12 sm:py-11 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(212,165,74,0.18) 0%, rgba(212,165,74,0) 70%)",
              }}
            />
            <p className="relative font-display text-xl sm:text-2xl font-semibold text-paper text-balance">
              Ready to see it all in action?
            </p>
            <a
              href="#contact"
              className="relative shrink-0 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[14px] font-semibold text-ink hover:bg-gold-soft transition-colors"
            >
              Request a Platform Demo
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
