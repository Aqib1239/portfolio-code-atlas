"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { profiles, type ProfileId } from "@/data/profiles";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

type ProfileSelectorProps = {
  onSelect: (id: ProfileId) => void;
  onSkip: () => void;
};

/**
 * Reimagined "Who's Watching?" → "Explore my work". Fully optional: choosing a
 * lens only tailors emphasis, and the full portfolio sits live behind it.
 * Esc or backdrop click = skip (explore everything).
 */
export function ProfileSelector({ onSelect, onSkip }: ProfileSelectorProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const cards = profiles.filter((p) => p.id !== "developer");

  useEffect(() => {
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onSkip();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onSkip]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Explore my work"
      className="fixed inset-0 z-[65] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        aria-label="Skip and explore everything"
        onClick={onSkip}
        className="absolute inset-0 cursor-default bg-background/80 backdrop-blur-xl"
      />

      <motion.div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto outline-none hide-scrollbar"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="mb-7 text-center">
          <span className="eyebrow justify-center">explore my work</span>
          <h2 className="mt-4 font-display text-[clamp(1.7rem,5vw,2.5rem)] font-semibold tracking-tight">
            How would you like to explore?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Pick a lens to surface what matters most to you — or just explore
            everything. You can switch anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {cards.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className="group card card-interactive spotlight flex items-start gap-4 p-5 text-left"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.1 + i * 0.06 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] text-accent-bright transition-colors group-hover:border-accent/40">
                <Icon name={p.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-display text-lg font-medium">
                  {p.label}
                  <Icon
                    name="arrow-right"
                    size={15}
                    className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </span>
                <span className="mt-1 block text-sm leading-snug text-muted">
                  {p.blurb}
                </span>
              </span>
            </motion.button>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={onSkip}
            className="btn btn-ghost btn-md"
          >
            <span>Skip — show me everything</span>
            <Icon name="arrow-right" size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
