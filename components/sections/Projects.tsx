"use client";

import { featuredProjects, experiments } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";

type ProjectsProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  showExperiments?: boolean;
};

export function Projects({
  index = "04",
  eyebrow = "Projects",
  title = "Selected work",
  description = "A few projects that show how I approach building for the web — from full-stack platforms to focused, self-directed experiments.",
  showExperiments = true,
}: ProjectsProps) {
  return (
    <Section id="projects">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {/* Featured showcase */}
      <div className="mt-14 flex flex-col gap-16 sm:gap-20 lg:gap-24">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* Experiments / smaller builds */}
      {showExperiments ? (
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <Icon name="sparkles" size={15} className="text-accent-bright" />
              Beyond the featured work
            </h3>
            <p className="mb-8 mt-3 max-w-xl leading-relaxed text-muted">
              Smaller builds and practice projects where I explore ideas, patterns
              and new tools across the stack.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experiments.map((project, i) => (
              <Reveal key={project.slug} delay={Math.min(i * 0.04, 0.2)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
