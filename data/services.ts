/**
 * Services for the "Client" experience.
 *
 * Every service maps directly to skills and experience already declared
 * elsewhere in the portfolio (see data/skills.ts and data/experience.ts).
 * Nothing here invents a capability Aqib hasn't listed.
 */

export type Service = {
  id: string;
  /** Icon key resolved by the shared <Icon /> component. */
  icon: string;
  title: string;
  description: string;
  /** Concrete deliverables — all drawn from the real toolkit. */
  points: string[];
};

export const services: Service[] = [
  {
    id: "web-apps",
    icon: "code",
    title: "Full-stack web apps",
    description:
      "End-to-end MERN applications — from the database and API layer through to a polished, responsive frontend.",
    points: [
      "React.js & Next.js frontends",
      "Node.js / Express REST APIs",
      "MongoDB data modeling",
    ],
  },
  {
    id: "frontend",
    icon: "layout",
    title: "Frontend interfaces",
    description:
      "Fast, accessible interfaces built mobile-first and tuned to feel effortless on every screen size.",
    points: [
      "Responsive, mobile-first layouts",
      "Reusable component systems",
      "TypeScript-first codebases",
    ],
  },
  {
    id: "ui-motion",
    icon: "sparkles",
    title: "UI & motion design",
    description:
      "Interfaces with considered detail — thoughtful micro-interactions and motion that add clarity, not noise.",
    points: [
      "Framer Motion animation",
      "Tailwind CSS design systems",
      "shadcn/ui & Mantine UI",
    ],
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance & quality",
    description:
      "Clean, maintainable code with an eye on performance and accessibility, so the product holds up as it grows.",
    points: [
      "Core Web Vitals & load speed",
      "Accessible, semantic markup",
      "Maintainable architecture",
    ],
  },
];
