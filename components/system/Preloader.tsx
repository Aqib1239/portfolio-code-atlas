// "use client";

// import { motion, useReducedMotion } from "framer-motion";
// import { EASE } from "@/lib/motion";
// import { siteConfig } from "@/data/site";

// /**
//  * Intro splash. A short brand reveal with a filling progress line; calls
//  * `onDone` when the line completes. Shown once per session (the provider
//  * controls when to mount it). Collapses to ~instant under reduced motion.
//  */
// export function Preloader({ onDone }: { onDone: () => void }) {
//   const reduce = useReducedMotion();
//   const duration = reduce ? 0.25 : 1.15;

//   return (
//     <motion.div
//       className="fixed inset-0 z-[70] flex items-center justify-center bg-background"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
//     >
//       <div className="flex flex-col items-center gap-6 px-6">
//         <motion.span
//           className="font-display text-[clamp(2.5rem,10vw,4.25rem)] font-semibold tracking-tight text-gradient"
//           initial={{ opacity: 0, y: 14 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: EASE }}
//         >
//           {siteConfig.shortName}
//         </motion.span>

// <div className="h-px w-40 overflow-hidden bg-foreground/10">
//   <motion.div
//     className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-2"
//     style={{ transformOrigin: "left" }}
//     initial={{ scaleX: 0 }}
//     animate={{ scaleX: 1 }}
//     transition={{ duration, ease: EASE }}
//     onAnimationComplete={onDone}
//   />
// </div>

// <span className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-subtle">
//   Loading portfolio
// </span>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/data/site";

export function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();

  // Progress completes in exactly 5 seconds
  const progressDuration = reduce ? 0.5 : 2.5;

  const contentDuration = reduce ? 0.2 : 0.8;
  const overlayDuration = reduce ? 0.1 : 0.5;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: overlayDuration,
          ease: EASE,
        },
      }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{
          scale: 0.95,
          opacity: 0,
          filter: "blur(8px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: contentDuration,
          ease: EASE,
        }}
      >
        {/* Minimal glowing indicator dot */}
        <motion.div
          className="h-2.5 w-2.5 rounded-full bg-accent-green shadow-[0_0_10px_rgba(34,197,94,0.8),0_0_30px_rgba(34,197,94,0.5)]"
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.35, 1, 0.35],
                  boxShadow: [
                    "0 0 3px rgba(34, 197, 94, 0.2)",
                    "0 0 18px rgba(34, 197, 94, 0.9)",
                    "0 0 3px rgba(34, 197, 94, 0.2)",
                  ],
                }
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Brand name */}
        <span
          className="
            ml-1
            font-display
            text-[2.5rem]
            md:text-[3.5rem]
            font-black
            uppercase
            tracking-[0.3em]
            text-accent-bright
            [text-shadow:0_0_10px_rgba(239,68,68,0.8),0_0_30px_rgba(239,68,68,0.5)]
          "
        >
          {siteConfig.shortName}
        </span>

        {/* Progress bar */}
        <div className="h-px w-40 overflow-hidden bg-foreground/10">
          <motion.div
            className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: progressDuration,
              ease: "linear",
            }}
            onAnimationComplete={onDone}
          />
        </div>

        {/* Loading text */}
        <span className="font-mono text-[1rem] uppercase tracking-[0.32em] text-white [text-shadow:0_0_10px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.5)]">
          Loading portfolio
        </span>
      </motion.div>
    </motion.div>
  );
}
