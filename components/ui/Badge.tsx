import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  variant?: "outline" | "mono";
  className?: string;
};

/** Small pill for tech tags (outline) or monospace labels (mono). */
export function Badge({ children, variant = "outline", className }: BadgeProps) {
  return (
    <span className={cn("badge badge-mono", `badge-${variant}`, className)}>{children}</span>
  );
}
