/**
 * Projects.
 *
 * ⚠️  `liveUrl` / `repoUrl` are null placeholders — no links were provided, so
 *     none are invented. Buttons render only when a URL is present, so fill
 *     these in to light up the "Live" / "Code" actions. GoUniNest's `tech` is
 *     intentionally left empty until its real stack is confirmed.
 */

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  featured: boolean;
  liveUrl: string | null;
  // repoUrl: string | null;
  accent?: "violet" | "cyan" | "purple";
};

/** Larger, showcased work. */
export const featuredProjects: Project[] = [
  {
    slug: "shipduniya",
    name: "ShipDuniya",
    tagline: "Shipping & parcel platform",
    description:
      "A modern full-stack web application focused on shipping and parcel-related services, featuring a responsive frontend and backend integration.",
    tech: ["Next.js", "React.js", "Node.js", "MongoDB"],
    featured: true,
    liveUrl: null, // TODO: add live URL
    // repoUrl: null, // TODO: add repo URL
    accent: "violet",
  },
  {
    slug: "printnparcel",
    name: "PrintNParcel",
    tagline: "Print & parcel services with payments",
    description:
      "A full-stack web application involving print and parcel-related services, with payment and PDF-related functionality.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Razorpay"],
    featured: true,
    liveUrl: null, // TODO: add live URL
    // repoUrl: null, // TODO: add repo URL
    accent: "cyan",
  },
  {
    slug: "gouninest",
    name: "GoUniNest",
    tagline: "Clean, responsive web application",
    description:
      "A modern web application focused on providing a clean and responsive user experience.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB"], // left empty until the real stack is confirmed
    featured: true,
    liveUrl: null, // TODO: add live URL
    // repoUrl: null, // TODO: add repo URL
    accent: "purple",
  },
];

/** Smaller builds & practice projects — shown in the "Experiments" section. */
export const experiments: Project[] = [
  {
    slug: "mern-blog",
    name: "MERN Blog App",
    tagline: "Full-stack blog",
    description: "A full-stack blogging application built on the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    featured: false,
    liveUrl: "https://mern-blog-app-sand.vercel.app"
    // repoUrl: null,
  },
  {
    slug: "CSVPilot",
    name: "CSV Pilot",
    tagline: "Data analysis",
    description: "A data analysis application built on the MERN stack.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    featured: false,
    liveUrl: "https://csv-pilot-weld.vercel.app",
    // repoUrl: null,
  },
  {
    slug: "realtime-chat",
    name: "Quick Talk Chat",
    tagline: "Live messaging",
    description: "A real-time chat application powered by Socket.io.",
    tech: ["Socket.io", "Node.js", "React.js", "MongoDB"],
    featured: false,
    liveUrl: "https://quicktalk-application.onrender.com",
    // repoUrl: null,
  },
  {
    slug: "ecommerce",
    name: "E-commerce Website",
    tagline: "Responsive storefront",
    description: "A responsive e-commerce storefront interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    liveUrl: "https://simple-deploy-ecommerce-website.netlify.app",
    // repoUrl: null,
  },
  {
    slug: "weather-app",
    name: "Weather App",
    tagline: "Live conditions",
    description:
      "A weather application that fetches live conditions from a REST API.",
    tech: ["React.js", "JavaScript", "REST API", "Tailwind CSS"],
    featured: false,
    liveUrl: "https://weatherapp7777.netlify.app",
    // repoUrl: null,
  },
  {
    slug: "employee-management-system",
    name: "Employee Management System",
    tagline: "Data-driven dashboard",
    description: "A data-driven dashboard for an employee management system.",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    featured: false,
    liveUrl: "https://employee-management-system-inky-omega.vercel.app",
    // repoUrl: null,
  },
  {
    slug: "tic-tac-toe",
    name: "Tic-Tac-Toe",
    tagline: "Classic game",
    description: "A classic Tic-Tac-Toe game built with React.",
    tech: ["React.js", "CSS"],
    featured: false,
    liveUrl: "https://tictactoeeplay.netlify.app",
    // repoUrl: null,
  },
];
