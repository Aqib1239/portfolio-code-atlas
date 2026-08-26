/** Primary navigation. `href` values are in-page anchors. */

export type NavItem = {
  label: string;
  href: string;
  /** Section id used for scroll-spy (without the leading #). */
  id: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];
