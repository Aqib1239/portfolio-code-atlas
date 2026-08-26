"use client";

import { siteConfig } from "@/data/site";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

const currentRole = experience.find((e) => e.current) ?? experience[0];
const topEducation = education[0];

// Grounded strengths — drawn from the real profile summary, not invented.
const strengths = [
  "Responsive, mobile-first interfaces",
  "Clean, maintainable code",
  "Thoughtful user experience",
  "Performance & accessibility",
];

type FactProps = { icon: string; label: string; value: string; sub?: string };

function Fact({ icon, label, value, sub }: FactProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent-bright">
        <Icon name={icon} size={16} />
      </span>
      <div className="min-w-0">
        <div className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
          {label}
        </div>
        <div className="mt-0.5 truncate font-medium text-foreground">{value}</div>
        {sub ? <div className="text-sm text-muted">{sub}</div> : null}
      </div>
    </div>
  );
}

type AboutProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function About({
  index = "01",
  eyebrow = "About",
  title = "A developer focused on the details that make software feel effortless",
  description,
}: AboutProps) {
  return (
    <Section id="about">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        {/* Prose */}
        <Reveal className="flex flex-col gap-5 text-[clamp(1rem,2.5vw,1.1rem)] leading-relaxed text-muted">
          <p>
            I&apos;m a{" "}
            <span className="text-foreground">MERN stack developer</span> based
            in {siteConfig.location}, with {siteConfig.yearsExperience} years of
            professional experience building modern, responsive and scalable web
            applications. My work centres on the frontend — turning interfaces
            into experiences that feel fast, considered and easy to use.
          </p>
          <p>
            Day to day I work across{" "}
            <span className="text-foreground">
              React.js, Next.js, TypeScript
            </span>{" "}
            and the wider JavaScript ecosystem, backed by{" "}
            <span className="text-foreground">Node.js, Express and MongoDB</span>{" "}
            on the server. I care about reusable component architecture,
            sensible state management and code that stays readable as a project
            grows.
          </p>
          <p>
            Whether it&apos;s a design system, a production dashboard or a
            marketing site, I aim for the same result: a polished,
            accessible interface that performs well on every screen — from a
            360px phone to a widescreen display.
          </p>

          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {strengths.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <Icon
                  name="check"
                  size={16}
                  className="shrink-0 text-accent-bright"
                />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Quick facts */}
        <Reveal delay={0.1}>
          <Card spotlight className="flex flex-col gap-6 p-6 sm:p-7">
            <Fact
              icon="map-pin"
              label="Location"
              value={siteConfig.location}
            />
            <Fact
              icon="briefcase"
              label="Experience"
              value={`${siteConfig.yearsExperience} years`}
              sub="Professional, full-time"
            />
            <Fact
              icon="terminal"
              label="Currently"
              value={currentRole.role}
              sub={currentRole.company}
            />
            {topEducation ? (
              <Fact
                icon="graduation-cap"
                label="Education"
                value={`${topEducation.degree}, ${topEducation.field}`}
                sub={`${topEducation.institution} · ${topEducation.period}`}
              />
            ) : null}
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
