import { contact } from "@/data/site";
import type { Cta } from "@/data/profiles";

export type ResolvedCta = {
  label: string;
  href: string;
  external: boolean;
  /** Icon key for the shared <Icon /> component. */
  icon: string;
  /** Whether the icon reads better on the trailing edge. */
  iconSide: "left" | "right";
};

/**
 * Turn a profile CTA into concrete link props. Targets map to real contact
 * details (nothing invented) or to in-page anchors ("#projects").
 */
export function resolveCta(cta: Cta): ResolvedCta {
  switch (cta.target) {
    case "resume":
      return {
        label: cta.label,
        href: contact.resume,
        external: true,
        icon: "download",
        iconSide: "left",
      };
    case "github":
      return {
        label: cta.label,
        href: contact.github,
        external: true,
        icon: "github",
        iconSide: "left",
      };
    case "email":
      return {
        label: cta.label,
        href: `mailto:${contact.email}`,
        external: false,
        icon: "mail",
        iconSide: "left",
      };
    default:
      // In-page anchor, e.g. "#projects" / "#contact".
      return {
        label: cta.label,
        href: cta.target,
        external: false,
        icon: "arrow-right",
        iconSide: "right",
      };
  }
}
