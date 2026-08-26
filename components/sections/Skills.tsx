"use client";

import { skillCategories } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

type SkillsProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Skills({
  index = "02",
  eyebrow = "Skills",
  title = "The tools I reach for",
  description = "A working toolkit built around the JavaScript ecosystem — grouped by where it fits in the stack, not ranked by an arbitrary percentage.",
}: SkillsProps) {
  return (
    <Section id="skills">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {/* Masonry-style flow: categories pack naturally regardless of size. */}
      <div className="mt-12 gap-5 [column-fill:balance] sm:columns-2 lg:columns-3">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.id}
            delay={Math.min(i * 0.04, 0.24)}
            className="mb-5 break-inside-avoid"
          >
            <Card spotlight className="h-full p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent-bright">
                  <Icon name={category.icon} size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-border bg-[color-mix(in_oklab,var(--color-surface-2)_55%,transparent)] px-2.5 py-1 font-mono text-[0.78rem] text-muted transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
