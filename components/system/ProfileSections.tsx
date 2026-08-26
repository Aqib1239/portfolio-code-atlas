"use client";

import { useProfile } from "@/app/providers";
import { getExperience } from "@/data/profiles";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

/** Two-digit reading-order marker, e.g. 1 → "01". */
function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/**
 * Renders the sections for the active experience, in the configured order,
 * with sequential index numbers and per-profile framing. Sections not in the
 * profile's list are simply not rendered (hidden), per the chosen behaviour.
 */
export function ProfileSections() {
  const { profileId } = useProfile();
  const exp = getExperience(profileId);

  return (
    <>
      {exp.sections.map((key, i) => {
        const index = pad(i + 1);
        const f = exp.framing[key] ?? {};

        switch (key) {
          case "about":
            return (
              <About
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
              />
            );
          case "services":
            return (
              <Services
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
              />
            );
          case "skills":
            return (
              <Skills
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
              />
            );
          case "experience":
            return (
              <Experience
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
                showEducation={exp.options.showEducation}
              />
            );
          case "projects":
            return (
              <Projects
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
                showExperiments={exp.options.showExperiments}
              />
            );
          case "testimonials":
            return (
              <Testimonials
                key={key}
                index={index}
                eyebrow={f.eyebrow}
                title={f.title}
                description={f.description}
              />
            );
          case "contact":
            return <Contact key={key} index={index} />;
          default:
            return null;
        }
      })}
    </>
  );
}
