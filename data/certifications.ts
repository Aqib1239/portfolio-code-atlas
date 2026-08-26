/**
 * Certifications.
 *
 * Add only verified certifications/credentials.
 * The Certifications section hides itself automatically when the list is empty.
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

export const certifications: Certification[] = [
  {
    id: "certification-1",
    name: "MERN Stack Developement Training",
    issuer: "QSpider Noida",
    date: "",
    url: null,
    icon: "award",
  },

  {
    id: "certification-2",
    name: "React JS Training",
    issuer: "Ducat Noida",
    date: "",
    url: null,
    icon: "award",
  },

  {
    id: "certification-3",
    name: "HTML & CSS Front-End Development",
    issuer: "DevCrusade",
    date: "",
    url: null,
    icon: "award",
  },
];