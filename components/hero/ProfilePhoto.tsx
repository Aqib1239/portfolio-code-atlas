"use client";

import { useState } from "react";
import { profilePhoto, siteConfig } from "@/data/site";

/**
 * Framed profile portrait with a subtle "x-ray" scanner sweep.
 *
 * The provided image sits on a dark backdrop, so the card keeps its own dark
 * panel in both themes — the photo's edges blend into it intentionally. If the
 * image file isn't present yet, a clean monogram fallback is shown instead.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="xray group relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-strong bg-black shadow-elevated">
      {/* Photo (or monogram fallback) */}
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profilePhoto}
          alt={`${siteConfig.name} — ${siteConfig.role}`}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top"
          draggable={false}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(120%_120%_at_50%_0%,color-mix(in_oklab,var(--color-accent)_18%,#000)_0%,#000_70%)]">
          <span className="font-display text-6xl font-semibold tracking-tight text-white/90">
            {siteConfig.initials}
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
            Add /public/profile.jpg
          </span>
        </div>
      )}

      {/* Technical corner ticks */}
      <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-white/25" />
      <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-white/25" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-white/25" />
      <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-white/25" />

      {/* X-ray scanner sweep (CSS-driven; pauses under reduced motion) */}
      <span aria-hidden className="xray-scanner">
        <span className="xray-band" />
        <span className="xray-line" />
      </span>

      {/* Soft vignette to seat the portrait */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,transparent_38%)]"
      />
    </div>
  );
}
