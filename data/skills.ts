/** Categorized technical skills. No proficiency bars — grouped badges only. */

export type SkillCategory = {
  id: string;
  title: string;
  /** Icon key resolved by the shared <Icon /> component. */
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "ui-animation",
    title: "UI & Animation",
    icon: "sparkles",
    skills: [
      "Framer Motion",
      "shadcn/ui",
      "Mantine UI",
      "Lucide React",
      "Responsive Design",
      "UI / UX",
    ],
  },
  {
    id: "state",
    title: "State Management",
    icon: "layers",
    skills: ["Redux Toolkit", "Zustand"],
  },
  {
    id: "forms",
    title: "Forms & Validation",
    icon: "clipboard",
    skills: ["React Hook Form", "Zod"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  },
  {
    id: "tools",
    title: "Tools & Libraries",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Axios",
      "Monaco Editor",
      "jsPDF",
      "html2canvas",
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Platforms",
    icon: "rocket",
    skills: ["Vercel", "Render", "Supabase", "Shopify CLI"],
  },
];
