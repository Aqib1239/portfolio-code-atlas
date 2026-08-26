"use client";

import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { ProjectActions } from "./ProjectActions";
import { cn } from "@/lib/cn";

const accentColor: Record<NonNullable<Project["accent"]>, string> = {
  violet: "var(--color-accent)",
  cyan: "var(--color-accent-2)",
  purple: "var(--color-accent-3)",
};

/**
 * Large showcase row for a featured project. Alternates side-by-side on desktop
 * and stacks (preview → copy) on mobile. The preview is an intentional abstract
 * lockup — not a screenshot — since no product imagery was provided.
 */
export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;
  const pa = accentColor[project.accent ?? "violet"];
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal className="grid items-center gap-7 sm:gap-8 lg:grid-cols-2 lg:gap-14">
      {/* Preview */}
      <div className={cn("min-w-0", reverse && "lg:order-2")}>
        <div
          className="group relative flex aspect-[16/10] flex-col overflow-hidden rounded-2xl border border-border-strong shadow-elevated"
          style={{ "--pa": pa } as CSSProperties}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_110%_at_100%_0%,color-mix(in_oklab,var(--pa)_26%,transparent),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid-bg opacity-40"
          />
          <div
            aria-hidden="true"
            className="orb absolute -bottom-16 -left-12 h-48 w-48 opacity-40 transition-transform duration-700 group-hover:scale-110"
            style={{ background: "var(--pa)" }}
          />

          {/* Window chrome */}
          <div className="relative z-10 flex items-center gap-2 border-b border-border/70 px-4 py-3 backdrop-blur-sm">
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </span>
            <span className="ml-2 truncate font-mono text-xs text-muted">
              {project.slug}
            </span>
          </div>

          {/* Centered lockup */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
            <span
              className="font-mono text-[0.7rem] uppercase tracking-[0.2em]"
              style={{ color: pa }}
            >
              {project.tagline}
            </span>
            <span className="font-display text-[clamp(1.5rem,4.5vw,2.25rem)] font-semibold tracking-tight text-foreground">
              {project.name}
            </span>
            <div className="mt-2 flex w-full max-w-[220px] flex-col items-center gap-2">
              <span className="h-2 w-full rounded-full bg-foreground/[0.08]" />
              <span className="h-2 w-3/4 rounded-full bg-foreground/[0.08]" />
            </div>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className={cn("min-w-0", reverse && "lg:order-1")}>
        <span className="eyebrow mb-4">Featured · {number}</span>
        <h3 className="font-display text-[clamp(1.6rem,4vw,2.3rem)] font-semibold leading-tight tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 text-accent-bright">{project.tagline}</p>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {project.description}
        </p>

        {project.tech.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        ) : (
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
            Stack details to be confirmed
          </p>
        )}

        {/* <ProjectActions
          liveUrl={project.liveUrl}
          repoUrl={project.repoUrl}
          className="mt-7"
        /> */}
      </div>
    </Reveal>
  );
}
