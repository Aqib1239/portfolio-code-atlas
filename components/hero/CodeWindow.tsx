"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useMediaQuery } from "@/lib/hooks";
import { EASE, staggerContainer } from "@/lib/motion";

/* Syntax tokens */
const K = ({ children }: { children: ReactNode }) => (
  <span className="text-accent-bright">{children}</span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span className="text-accent-2">{children}</span>
);
const Prop = ({ children }: { children: ReactNode }) => (
  <span className="text-syntax-prop">{children}</span>
);
const P = ({ children }: { children: ReactNode }) => (
  <span className="text-subtle">{children}</span>
);
const V = ({ children }: { children: ReactNode }) => (
  <span className="text-foreground">{children}</span>
);

// Each line is rendered with a gutter number and preformatted content.
const lines: ReactNode[] = [
  <>
    <K>const</K> <V>developer</V> <P>= {"{"}</P>
  </>,
  <>
    {"  "}
    <Prop>name</Prop>
    <P>:</P> <Str>&quot;Mohammad Aqib&quot;</Str>
    <P>,</P>
  </>,
  <>
    {"  "}
    <Prop>role</Prop>
    <P>:</P> <Str>&quot;MERN Stack Developer&quot;</Str>
    <P>,</P>
  </>,
  <>
    {"  "}
    <Prop>location</Prop>
    <P>:</P> <Str>&quot;New Delhi, India&quot;</Str>
    <P>,</P>
  </>,
  <>
    {"  "}
    <Prop>stack</Prop>
    <P>: [</P>
    <Str>&quot;React&quot;</Str>
    <P>, </P>
    <Str>&quot;Next.js&quot;</Str>
    <P>, </P>
    <Str>&quot;Node&quot;</Str>
    <P>],</P>
  </>,
  <>
    {"  "}
    <Prop>experience</Prop>
    <P>:</P> <Str>&quot;1.5+ years&quot;</Str>
    <P>,</P>
  </>,
  <>
    {"  "}
    <Prop>focus</Prop>
    <P>:</P> <Str>&quot;clean, scalable UI&quot;</Str>
    <P>,</P>
  </>,
  <>
    <P>{"};"}</P>
  </>,
];

const container = staggerContainer(0.09, 0.2);
const lineVariant = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

export function CodeWindow() {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const tiltEnabled = finePointer && !reduce;

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springX = useSpring(rx, { stiffness: 150, damping: 18 });
  const springY = useSpring(ry, { stiffness: 150, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tiltEnabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(nx * 8);
    rx.set(-ny * 8);
  }
  function reset() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <div className="relative [perspective:1200px]">
      {/* Ambient glow behind the window */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-accent)_20%,transparent),transparent)] blur-2xl"
      />

      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="overflow-hidden rounded-2xl border border-border-strong bg-[color-mix(in_oklab,var(--color-surface)_88%,transparent)] shadow-elevated backdrop-blur-sm"
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="font-mono text-xs text-muted">developer.ts</span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent-bright">
              live
            </span>
          </span>
        </div>

        {/* Code body */}
        <div className="overflow-x-auto hide-scrollbar p-4 sm:p-5">
          <motion.div
            className="font-mono text-[clamp(0.66rem,2.6vw,0.8rem)] leading-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {lines.map((line, i) => (
              <motion.div
                key={i}
                variants={lineVariant}
                className="grid grid-cols-[1.75rem_1fr] whitespace-pre"
              >
                <span className="select-none text-subtle/60">{i + 1}</span>
                <span className="text-foreground">{line}</span>
              </motion.div>
            ))}
            {/* Blinking caret */}
            <div className="grid grid-cols-[1.75rem_1fr] whitespace-pre">
              <span className="select-none text-subtle/60">
                {lines.length + 1}
              </span>
              <span className="inline-block h-4 w-2 animate-blink bg-accent-bright align-middle" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
