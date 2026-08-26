"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg";

type ProjectActionsProps = {
  liveUrl: string | null;
  repoUrl: string | null;
  size?: Size;
  className?: string;
};

/**
 * Renders Live / Source actions. When a URL is missing (none were provided in
 * the data), the action shows as a disabled affordance instead of a fabricated
 * link — it lights up automatically once a real URL is added to the data.
 */
export function ProjectActions({
  liveUrl,
  repoUrl,
  size = "md",
  className,
}: ProjectActionsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {liveUrl ? (
        <Button
          href={liveUrl}
          external
          variant="primary"
          size={size}
          rightIcon={<Icon name="external" size={15} />}
        >
          Live Demo
        </Button>
      ) : (
        <span
          className={cn("btn", `btn-${size}`, "btn-secondary cursor-not-allowed opacity-45")}
          aria-disabled="true"
          title="Live link not available yet"
        >
          <Icon name="external" size={15} />
          <span>Live Demo</span>
        </span>
      )}
    </div>
  );
}
