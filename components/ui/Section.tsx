import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Skip the max-width container (for full-bleed layouts). */
  bleed?: boolean;
  "aria-label"?: string;
};

/** Semantic section wrapper with consistent vertical rhythm + container. */
export function Section({
  id,
  children,
  className,
  containerClassName,
  bleed = false,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn("section-py", className)} {...rest}>
      {bleed ? (
        children
      ) : (
        <div className={cn("container-page", containerClassName)}>{children}</div>
      )}
    </section>
  );
}
