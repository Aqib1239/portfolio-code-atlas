"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { EASE } from "@/lib/motion";

const roles = siteConfig.roles;

/** Cycles through the developer's titles with a soft vertical fade. */
export function RoleRotator() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <span className="text-accent-gradient">{siteConfig.role}</span>;
  }

  return (
    <span className="relative inline-grid">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="text-accent-gradient [grid-area:1/1]"
          initial={{ opacity: 0, y: "0.5em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.5em" }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible sizer keeps layout stable at the widest role. */}
      <span className="invisible [grid-area:1/1]" aria-hidden="true">
        Full Stack JavaScript Developer
      </span>
    </span>
  );
}
