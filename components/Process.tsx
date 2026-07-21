"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Needs Assessment",
    short:
      "We start with a deep-dive audit of your team's skill gaps and strategic objectives.",
    long: "Our L&D consultants run structured interviews, skills benchmarking, and role-based gap analysis to map a precise learning agenda for your organization.",
  },
  {
    n: "02",
    title: "Program Design",
    short:
      "Custom learning paths are architected around your domain, culture, and timelines.",
    long: "From curriculum selection to cohort composition and mentor matching — every program is built to your specifications, not pulled off a shelf.",
  },
  {
    n: "03",
    title: "Deployment & Onboarding",
    short: "Seamless rollout with zero disruption to your team's workflow.",
    long: "White-glove onboarding, SSO integration, HRMS sync, and a dedicated account manager ensure a day-one-ready launch.",
  },
  {
    n: "04",
    title: "Track & Optimize",
    short: "Live dashboards surface progress, risks, and ROI in real time.",
    long: "Monthly business reviews, completion nudges, and adaptive content recommendations keep engagement high long after the program ends.",
  },
];

function StepCard({ s, i }: { s: (typeof STEPS)[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const color = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#8a93f5", "#d4a54a", "#8a93f5"]
  );

  return (
    <Reveal key={s.n} delay={i * 90} className="bg-ink h-full">
      <div ref={cardRef} className="h-full p-7 lg:p-6 flex flex-col">
        <motion.span
          className="font-mono text-[13px] font-semibold text-indigo-soft mb-6 inline-block"
          style={
            prefersReducedMotion
              ? undefined
              : { scale, color }
          }
        >
          {s.n}
        </motion.span>
        <h3 className="font-display text-[16px] font-semibold text-paper mb-3">
          {s.title}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-paper/80 mb-3">
          {s.short}
        </p>
        <p className="text-[12.5px] leading-relaxed text-mist mt-auto pt-3">
          {s.long}
        </p>
      </div>
    </Reveal>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="process" className="bg-ink relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(74,90,232,0.13) 0%, rgba(74,90,232,0) 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold-soft mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
            Live in 14 days. Measurable ROI in 90.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-mist">
            Our structured four-step methodology takes you from assessment to
            measurable outcomes without disrupting business operations.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Horizontal connecting line — lg+ only */}
          <motion.div
            className="hidden lg:block absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo to-gold rounded-full"
            style={{
              scaleX: prefersReducedMotion ? 1 : lineScaleX,
              transformOrigin: "0%",
            }}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line-dark rounded-2xl overflow-hidden border border-line-dark">
            {STEPS.map((s, i) => (
              <StepCard key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
