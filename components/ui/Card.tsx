"use client";

import type { ReactNode, MouseEvent } from "react";
import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Enable the pointer-following accent spotlight. */
  spotlight?: boolean;
  /** Apply hover border/background lift. */
  interactive?: boolean;
};

/**
 * Surface card. Optional cursor spotlight writes --mx/--my for the CSS overlay
 * defined by `.spotlight` in globals.css. Spotlight is skipped on touch/reduced.
 */
export function Card({
  children,
  className,
  spotlight = false,
  interactive = false,
}: CardProps) {
  const reduce = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const spotlightOn = spotlight && finePointer && !reduce;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!spotlightOn) return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "card",
        interactive && "card-interactive",
        spotlightOn && "spotlight",
        className
      )}
    >
      {children}
    </div>
  );
}
