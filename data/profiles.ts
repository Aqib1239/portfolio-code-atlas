/**
 * Portfolio profile configuration.
 *
 * The portfolio now has a single profile: Developer.
 * All portfolio sections are available in the main experience.
 */

export type ProfileId = "developer";

/**
 * Every section the page knows how to render
 * (between Hero and Footer).
 */
export type SectionKey =
  | "about"
  | "services"
  | "skills"
  | "experience"
  | "education"
  | "projects"
  | "testimonials"
  | "contact";

export type Profile = {
  id: ProfileId;
  label: string;
  blurb: string;
  icon: string;
  greeting: string;
};

export type CtaTarget = string;

export type Cta = {
  label: string;
  target: CtaTarget;
};

export type SectionFraming = {
  eyebrow?: string;
  title?: string;
  description?: string;
  navLabel?: string;
};

export type ExperienceConfig = {
  id: ProfileId;

  /**
   * Visible sections, in display order.
   * Hero is always first and Footer is last.
   */
  sections: SectionKey[];

  hero: {
    primary: Cta;
    secondary: Cta;
  };

  framing: Partial<Record<SectionKey, SectionFraming>>;

  options: {
    showExperiments: boolean;
    showEducation: boolean;
  };
};

/**
 * The only available portfolio profile.
 */
export const profiles: Profile[] = [
  {
    id: "developer",
    label: "Developer",
    blurb: "The stack, the architecture, the code.",
    icon: "sparkles",
    greeting: "I build, solve, and ship meaningful digital experiences.",
  },
];

export const defaultProfile: ProfileId = "developer";

/**
 * Human-readable base labels for each section.
 */
export const sectionLabels: Record<SectionKey, string> = {
  about: "About",
  services: "Services",
  skills: "Skills",
  experience: "Experience",
  education: "Education",
  projects: "Projects",
  testimonials: "Testimonials",
  contact: "Contact",
};

/**
 * Single full Developer experience.
 *
 * Nothing important is hidden based on a profile.
 */
export const experiences: Record<ProfileId, ExperienceConfig> = {
  developer: {
    id: "developer",

    sections: [
      "about",
      "services",
      "skills",
      "experience",
      "education",
      "projects",
      "testimonials",
      "contact",
    ],

    hero: {
      primary: {
        label: "Browse Projects",
        target: "#projects",
      },

      secondary: {
        label: "View GitHub",
        target: "github",
      },
    },

    framing: {
      about: {
        eyebrow: "About me",
        title: "A developer who likes to build things that work.",
        navLabel: "About",
      },

      services: {
        eyebrow: "What I do",
        title: "Services",
        description:
          "From responsive interfaces to full-stack web applications, I build practical digital experiences with modern web technologies.",
        navLabel: "Services",
      },

      skills: {
        eyebrow: "Stack",
        title: "Tech stack",
        description:
          "The languages, frameworks and tools I build with — grouped by layer, not ranked by an arbitrary percentage.",
        navLabel: "Stack",
      },

      experience: {
        eyebrow: "Track record",
        title: "Where I've applied it",
        description:
          "The roles where my skills and technologies have gone into real-world development work.",
        navLabel: "Experience",
      },

      education: {
        eyebrow: "Education",
        title: "Academic background",
        navLabel: "Education",
      },

      projects: {
        eyebrow: "Work",
        title: "Things I've built",
        description:
          "Full-stack builds, personal projects and experiments — the code, the stack and the patterns behind them.",
        navLabel: "Projects",
      },

      testimonials: {
        eyebrow: "Feedback",
        title: "What people say",
        navLabel: "Testimonials",
      },

      contact: {
        eyebrow: "Let's connect",
        title: "Have a project in mind?",
        navLabel: "Contact",
      },
    },

    options: {
      showExperiments: true,
      showEducation: true,
    },
  },
};

/**
 * Resolve the Developer experience.
 */
export function getExperience(
  profileId: ProfileId | null
): ExperienceConfig {
  return experiences[profileId ?? defaultProfile];
}

export type ResolvedNavItem = {
  id: SectionKey;
  href: string;
  label: string;
};

/**
 * Build navigation/footer items for the Developer portfolio.
 */
export function getNavItems(
  profileId: ProfileId | null
): ResolvedNavItem[] {
  const config = getExperience(profileId);

  return config.sections.map((key) => ({
    id: key,
    href: `#${key}`,
    label: config.framing[key]?.navLabel ?? sectionLabels[key],
  }));
}