"use client";

import { testimonials, hasPlaceholderTestimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

type TestimonialsProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Testimonials({
  index = "05",
  eyebrow = "Testimonials",
  title = "Kind words from people I've worked with",
  description = "Insights from colleagues, managers, and collaborators about their experience working with me.",
}: TestimonialsProps) {
  return (
    <Section id="testimonials">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={Math.min(i * 0.06, 0.24)}>
            <Card
              spotlight
              className="flex h-full flex-col gap-5 p-6 sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <Icon
                  name="quote"
                  size={26}
                  className="shrink-0 text-accent-bright/70"
                />
              </div>

              <blockquote className="flex-1 text-[0.95rem] text-center leading-relaxed text-muted">
                {t.review}
              </blockquote>

              <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-accent-bright">
                  <Icon name="user-round" size={18} />
                </span>
                <div className="min-w-0">
                  <div className="truncate font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="truncate text-sm text-muted">
                    {t.role}
                  </div>
                  <div className="mt-0.5 truncate font-mono text-[0.68rem] uppercase tracking-[0.12em] text-subtle">
                     {t.company}
                  </div>
                </div>
              </figcaption>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
