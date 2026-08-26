/**
 * Professional experience.
 *
 * Note: the highlight bullets are general, role-accurate descriptions grounded
 * in the declared stack (no invented metrics, clients, or product claims).
 * Refine them with specifics whenever you like.
 */

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "yatiken-mern",
    role: "MERN Stack Developer",
    company: "Yatiken Software Solutions",
    location: "Noida, India",
    period: "Feb 2025 — Present",
    current: true,
    highlights: [
      "Build and maintain responsive, production web application interfaces with React.js and Next.js.",
      "Develop REST APIs and server-side logic using Node.js, Express.js and MongoDB.",
      "Craft reusable UI components and motion with Tailwind CSS and Framer Motion.",
      "Manage application state and forms with Redux Toolkit, Zustand, React Hook Form and Zod.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
  },
  {
    id: "yatiken-intern",
    role: "Web Developer Intern",
    company: "Yatiken Software Solutions",
    location: "Noida, India",
    period: "Jan 2025 — Feb 2025",
    highlights: [
      "Contributed to frontend feature development with React.js and JavaScript.",
      "Translated UI designs into responsive, accessible interfaces.",
      "Collaborated with the team on bug fixes, reviews and iterative improvements.",
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Git"],
  },
  {
    id: "qspiders-trainee",
    role: "MERN Stack Developer Trainee",
    company: "QSpiders",
    location: "Noida, India",
    period: "Jul 2024 — Dec 2024",
    highlights: [
      "Completed intensive MERN stack training, building full-stack projects end to end.",
      "Practiced REST API design, authentication and data modeling with MongoDB.",
      "Strengthened fundamentals in JavaScript, problem solving and version control.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
  },
];
