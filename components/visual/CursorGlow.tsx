"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, usePrefersReducedMotion, useMounted } from "@/lib/hooks";

/**
 * Soft accent glow that trails the cursor. Sits in the background layer
 * (behind content), so it enriches empty space without hurting text contrast.
 * Rendered only on fine-pointer devices with motion enabled.
 */
export function CursorGlow() {
  const mounted = useMounted();
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduce = usePrefersReducedMotion();
  const enabled = mounted && finePointer && !reduce;

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      // Offset by half the element size (520 / 2) so the glow centers on cursor.
      x.set(e.clientX - 260);
      y.set(e.clientY - 260);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_65%)] blur-[10px]"
    />
  );
}
