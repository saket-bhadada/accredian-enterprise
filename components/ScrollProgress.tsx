"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-gold"
      style={{
        scaleX: prefersReducedMotion ? scrollYProgress : scaleX,
        transformOrigin: "0%",
      }}
    />
  );
}
