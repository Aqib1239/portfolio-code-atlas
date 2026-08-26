"use client";

import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

type ServicesProps = {
  index?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Services({
  index = "01",
  eyebrow = "Services",
  title = "What I can build for you",
  description = "End-to-end web work, from the interface down to the API — grounded in the stack I use every day.",
}: ServicesProps) {
  return (
    <Section id="services">
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5">
        {services.map((service, i) => (
          <Reveal key={service.id} delay={Math.min(i * 0.06, 0.24)}>
            <Card spotlight className="flex h-full flex-col gap-4 p-6 sm:p-7">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent-bright">
                <Icon name={service.icon} size={20} />
              </span>

              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>

              <ul className="mt-auto flex flex-col gap-2 pt-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <Icon
                      name="check"
                      size={15}
                      className="shrink-0 text-accent-bright"
                    />
                    <span>{point}</span>
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
