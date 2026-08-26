"use client";

import { ProfilePhoto } from "@/components/hero/ProfilePhoto";
import { CodeWindow } from "@/components/hero/CodeWindow";

/**
 * Hero visual: the profile portrait (with x-ray scanner) layered together with
 * the signature `developer.ts` code window. Both are preserved — the photo is
 * added alongside the code window, not in place of it.
 *
 * Layout stays bulletproof at narrow widths: a simple centered stack on mobile,
 * with a gentle upward overlap of the code window from `sm` up (kept under 100%
 * width and centered, so it never introduces horizontal scroll).
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
      {/* <div className="mx-auto w-full max-w-[20rem] sm:max-w-sm">
        <ProfilePhoto />
      </div> */}

      <div className="relative z-10 mx-auto -mt-8 w-[92%] sm:-mt-12 sm:w-[88%] lg:w-[94%]">
        <CodeWindow />
      </div>
    </div>
  );
}
