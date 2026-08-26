/**
 * Ambient page background: charcoal base, top glow, faded blueprint grid,
 * two slow-drifting accent orbs, and a faint noise layer. Pure CSS animation
 * (transform/opacity only) so it's GPU-friendly and auto-pauses under
 * prefers-reduced-motion via the global rule in globals.css.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Top-center glow */}
      <div className="absolute inset-x-0 top-[-20%] h-[70vh] bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent_70%)]" />

      {/* Blueprint grid, faded toward edges */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* Drifting accent orbs */}
      <div className="ambient-orb orb animate-float absolute left-[-10%] top-[8%] h-[42vw] max-h-[520px] w-[42vw] max-w-[520px] bg-[color-mix(in_oklab,var(--color-accent)_38%,transparent)] opacity-40" />
      <div className="ambient-orb orb animate-float absolute right-[-12%] top-[38%] h-[38vw] max-h-[460px] w-[38vw] max-w-[460px] bg-[color-mix(in_oklab,var(--color-accent-2)_30%,transparent)] opacity-25 [animation-delay:-3.5s]" />

      {/* Fine grain */}
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-soft-light" />
    </div>
  );
}
