"use client";

import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

/** Compact card for smaller builds shown in the "Experiments" grid. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card interactive spotlight className="group flex h-full flex-col p-5 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent-bright">
          <Icon name="folder" size={18} />
        </span>

        <div className="flex items-center gap-1.5">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} — live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <Icon name="external" size={15} />
            </a>
          ) : null}
          {/* {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.name} — source code`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
            >
              <Icon name="github" size={15} />
            </a>
          ) : (
            <Icon
              name="arrow-up-right"
              size={18}
              className="text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            />
          )} */}
        </div>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border px-2 py-0.5 font-mono text-[0.7rem] text-subtle"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}
