"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useMediaQuery, useMounted } from "@/lib/hooks";

const DOT = 7; // solid dot diameter (px)
const RING = 40; // hollow ring diameter (px)

/**
 * Two-part custom cursor:
 *  - a small solid dot that tracks the pointer precisely, and
 *  - a larger hollow ring that trails behind with spring physics, so it visibly
 *    lags during fast movement and settles smoothly when the pointer stops.
 *
 * Disabled on touch/coarse pointers and under reduced-motion. The native cursor
 * is hidden (via a body class) only while this cursor is actually active.
 */
export function CustomCursor() {
  const mounted = useMounted();
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduce = useReducedMotion();
  const enabled = mounted && finePointer && !reduce;

  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  // Raw pointer position (dot binds to this directly for pixel accuracy).
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Ring trails via a soft spring — this is what produces the lag + settle.
  const ringX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.55 });

  // Center each element on the pointer.
  const dotTX = useTransform(x, (v) => v - DOT / 2);
  const dotTY = useTransform(y, (v) => v - DOT / 2);
  const ringTX = useTransform(ringX, (v) => v - RING / 2);
  const ringTY = useTransform(ringY, (v) => v - RING / 2);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("cursor-none");

    const interactiveSel =
      'a, button, [role="button"], input, textarea, select, label, summary, .card-interactive';

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true); // no-op re-render once already visible
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      setHovering(Boolean(el?.closest?.(interactiveSel)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      root.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] rounded-full border border-accent-green mix-blend-difference"
        style={{ x: ringTX, y: ringTY, width: RING, height: RING }}
        animate={{
          scale: pressed ? 1.7 : hovering ? 1.6 : 1,
          opacity: visible ? (hovering ? 0.9 : 0.6) : 0,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.4 }}
      />
      {/* Precise dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] rounded-full bg-accent-green"
        style={{ x: dotTX, y: dotTY, width: DOT, height: DOT }}
        animate={{
          scale: pressed ? 2 : hovering ? 0 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
}
