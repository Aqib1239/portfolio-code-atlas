"use client";

import { experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";

type ExperienceProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Experience({
  index = "04",
  eyebrow = "Experience",
  title = "A short, focused track record",
  description = "A year and a half of shipping real product work — from an internship into a full-time developer role.",
}: ExperienceProps) {
  return (
    <Section id="experience">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {/* Timeline */}
      <div className="relative mt-12">
        {/* Vertical rail */}
        <span
          aria-hidden="true"
          className="absolute left-2 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border-strong to-transparent"
        />

        <div className="flex flex-col gap-10">
          {experience.map((item, i) => (
            <Reveal
              key={item.id}
              delay={Math.min(i * 0.06, 0.24)}
              className="relative pl-9 sm:pl-14"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background",
                  item.current
                    ? "bg-accent-bright shadow-glow"
                    : "bg-surface-hover"
                )}
              />

              {item.current ? (
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-1.5 h-3.5 w-3.5 -translate-x-1/2 animate-ping rounded-full bg-accent-bright/40"
                />
              ) : null}

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                  {item.period}
                </span>

                {item.current ? (
                  <span className="badge badge-mono">Current</span>
                ) : null}
              </div>

              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {item.role}
              </h3>

              <p className="mt-1 text-muted">
                <span className="text-foreground">{item.company}</span>
                <span className="text-subtle"> · {item.location}</span>
              </p>

              <ul className="mt-4 flex flex-col gap-2.5">
                {item.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[0.95rem] text-muted text-left leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    <span className="">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
