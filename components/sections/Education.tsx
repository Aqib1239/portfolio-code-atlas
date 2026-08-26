"use client";

import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

type EducationProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Education({
  index = "05",
  eyebrow = "Education",
  title = "Academic background",
  description = "My academic foundation in computer science and the certifications that complement my technical skills.",
}: EducationProps) {
  return (
    <Section id="education">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {/* Education */}
      {education.length > 0 ? (
        <div className="mt-12">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <Icon
                name="graduation-cap"
                size={15}
                className="text-accent-bright"
              />
              Education
            </h3>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu, i) => (
              <Reveal key={edu.id} delay={i * 0.06}>
                <Card spotlight className="h-full p-5 sm:p-6">
                  <h4 className="font-display text-lg font-semibold tracking-tight">
                    {edu.degree}
                    <span className="text-muted"> · {edu.field}</span>
                  </h4>

                  <p className="mt-1.5 text-muted">
                    {edu.institution}
                    <span className="text-subtle">
                      {" "}
                      · {edu.location}
                    </span>
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                    <span>{edu.period}</span>

                    {edu.score ? (
                      <>
                        <span className="text-border-strong">/</span>
                        <span className="text-accent-bright">
                          {edu.score}
                        </span>
                      </>
                    ) : null}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      {/* Certifications */}
      {certifications.length > 0 ? (
        <div className="mt-16">
          <Reveal>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <Icon
                name="award"
                size={15}
                className="text-accent-bright"
              />
              Certifications
            </h3>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.06}>
                <Card spotlight className="h-full p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] text-accent-bright">
                      <Icon
                        name={cert.icon || "award"}
                        size={18}
                      />
                    </span>

                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-semibold tracking-tight">
                        {cert.name}
                      </h4>

                      <p className="mt-1 text-sm text-muted">
                        {cert.issuer}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                        <span>{cert.date}</span>

                        {cert.url ? (
                          <>
                            <span className="text-border-strong">/</span>

                            <a
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-bright transition-opacity hover:opacity-80"
                            >
                              Verify
                            </a>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </Section>
  );
}