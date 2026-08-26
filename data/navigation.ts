/**
 * Primary navigation.
 * `href` values are in-page anchors.
 */
export type NavItem = {
  label: string;
  href: string;

  /**
   * Section id used for scroll-spy (without the leading #).
   */
  id: string;
};

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Services",
    href: "#services",
    id: "services",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    label: "Education",
    href: "#education",
    id: "education",
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
    id: "testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
  },
];