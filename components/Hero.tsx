"use client";

import { useRef } from "react";
import { GraduationCap, Zap, BarChart3, Play, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Counter from "./Counter";
import { useInView } from "@/lib/useInView";

const TRACKS = [
  { label: "Data Science & AI", value: 89 },
  { label: "Product Management", value: 76 },
  { label: "Leadership & Strategy", value: 92 },
];

const TRUST = [
  { icon: GraduationCap, label: "IIT & IIM certified" },
  { icon: Zap, label: "Go live in 2 weeks" },
  { icon: BarChart3, label: "Real-time analytics" },
];

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const goldY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const indigoY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden bg-ink pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* atmosphere */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div
        className="absolute -top-40 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,165,74,0.16) 0%, rgba(212,165,74,0) 70%)",
          y: prefersReducedMotion ? 0 : goldY,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-[-15%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,90,232,0.18) 0%, rgba(74,90,232,0) 70%)",
          y: prefersReducedMotion ? 0 : indigoY,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,245,240,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-10 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line-dark bg-navy/60 px-4 py-1.5 text-[12.5px] font-medium text-gold-soft mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" />
            Trusted by 500+ Enterprise Organizations
          </div>

          <h1 className="font-display font-bold text-paper text-[2.7rem] leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-[3.6rem]">
            Build the skills
            <br />
            your enterprise
            <br />
            needs to <span className="text-gold">win.</span>
          </h1>

          <p className="mt-7 text-[17px] leading-relaxed text-mist max-w-[30rem] text-balance">
            India&rsquo;s most trusted enterprise learning platform. Partner
            with IITs, IIMs, and global universities to upskill your teams at
            scale — with measurable outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[14px] font-semibold text-ink hover:bg-gold-soft transition-colors"
            >
              Schedule a Free Demo
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-dark px-6 py-3.5 text-[14px] font-semibold text-paper hover:border-mist transition-colors"
            >
              <span className="grid place-items-center w-6 h-6 rounded-full bg-paper/10">
                <Play size={10} fill="currentColor" strokeWidth={0} />
              </span>
              See Platform Tour
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-mist">
                <Icon size={15} className="text-gold-soft" strokeWidth={2} />
                <span className="text-[13px] font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — signature dashboard widget */}
        <div ref={ref} className="relative">
          <div className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-line-dark bg-navy px-3.5 py-2.5 shadow-xl shadow-black/30">
            <span className="text-base leading-none">🎓</span>
            <div>
              <p className="text-[11px] font-semibold text-paper leading-tight">
                IIT Certified
              </p>
              <p className="text-[10px] text-mist leading-tight">
                500+ Programs
              </p>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 z-20 hidden sm:flex items-center gap-2 rounded-xl border border-line-dark bg-navy px-3.5 py-2.5 shadow-xl shadow-black/30">
            <span className="grid place-items-center w-6 h-6 rounded-full bg-indigo/20 text-indigo-soft text-[11px] font-bold">
              ✓
            </span>
            <div>
              <p className="text-[11px] font-semibold text-paper leading-tight">
                98% Satisfaction
              </p>
              <p className="text-[10px] text-mist leading-tight">
                Learner NPS Score
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-line-dark bg-navy/90 backdrop-blur-sm p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-6">
              <p className="font-display text-[13px] font-semibold text-paper">
                Live Cohort Dashboard
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="text-[10.5px] font-mono font-medium text-mist">
                  LIVE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Active Learners", val: 2847, dec: 0, chg: "+12%" },
                { label: "Avg. Score", val: 91.4, dec: 1, chg: "+5.2" },
                { label: "Completion", val: 96, dec: 0, suf: "%", chg: "+8%" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-ink/60 border border-line-dark px-3 py-3"
                >
                  <p className="font-mono text-[19px] font-semibold text-paper leading-none">
                    {inView ? (
                      <Counter to={m.val} decimals={m.dec} suffix={m.suf ?? ""} />
                    ) : (
                      0
                    )}
                  </p>
                  <p className="mt-2 text-[10px] text-mist leading-tight">
                    {m.label}
                  </p>
                  <p className="mt-1 text-[10.5px] font-mono font-medium text-emerald-400">
                    {m.chg}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3.5 mb-6">
              {TRACKS.map((t) => (
                <div key={t.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11.5px] font-medium text-mist">
                      {t.label}
                    </span>
                    <span className="text-[11.5px] font-mono font-medium text-paper">
                      {t.value}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink/70 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo to-gold"
                      style={{
                        width: inView ? `${t.value}%` : "0%",
                        transition: "width 1.1s cubic-bezier(0.16,1,0.3,1) 0.2s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-line-dark pt-4">
              <div className="flex -space-x-2.5">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <span
                    key={l}
                    className="grid place-items-center w-7 h-7 rounded-full border-2 border-navy text-[10px] font-semibold text-ink"
                    style={{
                      background: [
                        "#d4a54a",
                        "#4a5ae8",
                        "#8a93f5",
                        "#f0d9a8",
                        "#93a0b4",
                      ][i],
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-mist">
                <span className="text-paper font-medium">+2,842</span> learners
                enrolled
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10.5px] tracking-[0.2em] uppercase text-mist font-mono">
          Scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-mist to-transparent" />
      </div>
    </section>
  );
}
