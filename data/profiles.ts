/**
 * Profiles & tailored "experiences".
 *
 * The original "Who's Watching?" concept, reimagined as "Explore My Work".
 * Choosing a lens now meaningfully changes the page: which sections appear,
 * in what order, how they're framed, and the hero's calls-to-action.
 *
 * - Recruiter → experience, skills, education, projects, testimonials, resume.
 * - Developer → tech stack, technical projects, implementation, GitHub, experiments.
 * - Client    → services, featured work, capabilities, testimonials, contact CTA.
 * - Explorer  → the full portfolio, top to bottom (nothing hidden).
 *
 * Everything here is grounded in real, provided content — no invented claims.
 */

export type ProfileId = "recruiter" | "developer" | "client" | "explorer";

/** Every section the page knows how to render (between Hero and Footer). */
export type SectionKey =
  | "about"
  | "services"
  | "skills"
  | "experience"
  | "projects"
  | "testimonials"
  | "contact";

export type Profile = {
  id: ProfileId;
  label: string;
  /** One line shown on the selection card. */
  blurb: string;
  /** Icon key resolved by the shared <Icon /> component. */
  icon: string;
  /** Personalized eyebrow line shown in the hero once selected. */
  greeting: string;
};

/**
 * A call-to-action target is either an in-page anchor ("#projects") or one of
 * the resolved keys below (mapped to real contact details in the Hero).
 */
export type CtaTarget = string;
export type Cta = { label: string; target: CtaTarget };

/** Optional per-section framing so the same component reads differently. */
export type SectionFraming = {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Short label used in the navbar/footer for this section. */
  navLabel?: string;
};

export type ExperienceConfig = {
  id: ProfileId;
  /** Visible sections, in display order (Hero is always first, Footer last). */
  sections: SectionKey[];
  hero: { primary: Cta; secondary: Cta };
  framing: Partial<Record<SectionKey, SectionFraming>>;
  /** Section-specific behaviour toggles. */
  options: {
    showExperiments: boolean;
    showEducation: boolean;
  };
};

export const profiles: Profile[] = [
  {
    id: "recruiter",
    label: "Recruiter",
    blurb: "Experience, skills and proof — front and center.",
    icon: "briefcase",
    greeting: "For recruiters — the experience, the skills, the proof.",
  },
  {
    id: "developer",
    label: "Developer",
    blurb: "The stack, the architecture, the code.",
    icon: "terminal",
    greeting: "For fellow developers — here's how it's built.",
  },
  {
    id: "client",
    label: "Client",
    blurb: "What I can design and build for you.",
    icon: "rocket",
    greeting: "For clients — here's what I can build for you.",
  },
  {
    id: "explorer",
    label: "Just exploring",
    blurb: "The full story, top to bottom.",
    icon: "compass",
    greeting: "Welcome — take your time and explore.",
  },
];

export const defaultProfile: ProfileId = "explorer";

/** Human-readable base labels for each section (nav + footer). */
export const sectionLabels: Record<SectionKey, string> = {
  about: "About",
  services: "Services",
  skills: "Skills",
  experience: "Experience",
  projects: "Projects",
  testimonials: "Testimonials",
  contact: "Contact",
};

/**
 * The tailored experiences. `explorer` is the canonical full experience and is
 * also used whenever no profile has been chosen yet.
 */
export const experiences: Record<ProfileId, ExperienceConfig> = {
  explorer: {
    id: "explorer",
    sections: ["about", "skills", "experience", "projects", "testimonials", "contact"],
    hero: {
      primary: { label: "View My Work", target: "#projects" },
      secondary: { label: "Download Résumé", target: "resume" },
    },
    framing: {},
    options: { showExperiments: true, showEducation: true },
  },

  recruiter: {
    id: "recruiter",
    sections: ["about", "experience", "skills", "projects", "testimonials", "contact"],
    hero: {
      primary: { label: "Download Résumé", target: "resume" },
      secondary: { label: "See Experience", target: "#experience" },
    },
    framing: {
      experience: {
        title: "Experience & track record",
        description:
          "A year and a half of shipping real product work — from an internship into a full-time developer role, with education alongside.",
      },
      skills: {
        title: "Skills & toolkit",
        description:
          "The technologies I use day to day, grouped by where they fit in the stack — not ranked by an arbitrary percentage.",
      },
      projects: {
        title: "Selected work",
        description:
          "Representative projects that show how I approach building and shipping for the web.",
      },
    },
    options: { showExperiments: false, showEducation: true },
  },

  developer: {
    id: "developer",
    sections: ["skills", "projects", "experience", "testimonials", "contact"],
    hero: {
      primary: { label: "Browse Projects", target: "#projects" },
      secondary: { label: "View GitHub", target: "github" },
    },
    framing: {
      skills: {
        eyebrow: "Stack",
        title: "Tech stack",
        description:
          "The languages, frameworks and tools I build with — grouped by layer, not ranked by an arbitrary percentage.",
        navLabel: "Stack",
      },
      projects: {
        title: "Things I've built",
        description:
          "Full-stack builds and self-directed experiments — the code, the stack and the patterns behind them.",
      },
      experience: {
        eyebrow: "Track record",
        title: "Where I've applied it",
        description:
          "The roles where this stack has gone into production work.",
      },
    },
    // Developers get the experiments grid; education is de-emphasised.
    options: { showExperiments: true, showEducation: false },
  },

  client: {
    id: "client",
    sections: ["services", "projects", "skills", "testimonials", "contact"],
    hero: {
      primary: { label: "Start a Project", target: "#contact" },
      secondary: { label: "See Services", target: "#services" },
    },
    framing: {
      projects: {
        eyebrow: "Work",
        title: "Featured work",
        description:
          "A selection of projects that show the kind of product experiences I can deliver.",
        navLabel: "Work",
      },
      skills: {
        eyebrow: "Capabilities",
        title: "What I can build",
        description:
          "The capabilities I bring to a project — from responsive interfaces to full-stack delivery.",
        navLabel: "Capabilities",
      },
    },
    options: { showExperiments: false, showEducation: false },
  },
};

/** Resolve an experience config for a (possibly null) profile id. */
export function getExperience(profileId: ProfileId | null): ExperienceConfig {
  return experiences[profileId ?? "explorer"];
}

export type ResolvedNavItem = { id: SectionKey; href: string; label: string };

/** Build the nav/footer items for a profile, applying any label overrides. */
export function getNavItems(profileId: ProfileId | null): ResolvedNavItem[] {
  const config = getExperience(profileId);
  return config.sections.map((key) => ({
    id: key,
    href: `#${key}`,
    label: config.framing[key]?.navLabel ?? sectionLabels[key],
  }));
}
