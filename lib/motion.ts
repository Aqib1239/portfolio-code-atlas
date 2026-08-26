import type { Variants, Transition } from "framer-motion";

/** Signature easing — smooth, "expensive" deceleration. */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const baseTransition: Transition = { duration: 0.6, ease: EASE };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

/** Container that staggers its children on reveal. */
export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Standard viewport config for scroll reveals. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
