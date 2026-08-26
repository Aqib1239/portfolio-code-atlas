/**
 * Certifications.
 *
 * No certification data was provided, so this is intentionally empty — the
 * Certifications section hides itself when the list is empty (no invented
 * credentials). Add entries here to make the section appear automatically.
 */

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  /** Optional link to the credential. */
  url?: string | null;
  /** Optional icon key for the issuer logo. */
  icon?: string;
};

export const certifications: Certification[] = [];
