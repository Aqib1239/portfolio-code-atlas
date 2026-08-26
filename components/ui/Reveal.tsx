"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel distance in px (ignored under reduced motion). */
  y?: number;
  delay?: number;
  duration?: number;
  /** Intrinsic tag to render (e.g. "div", "li", "section"). */
  as?: keyof typeof motion;
  once?: boolean;
};

/**
 * Scroll-into-view reveal. Fades + slides up once when entering the viewport.
 * Under reduced-motion it fades only (no transform).
 */
export function Reveal({
  children,
  className,
  y = 24,
  delay = 0,
  duration = 0.6,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={once ? viewportOnce : { once: false, margin: "-80px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}
