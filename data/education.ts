/** Education history. */

export type EducationItem = {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
};

export const education: EducationItem[] = [
  {
    id: "integral-btech",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Integral University",
    location: "Lucknow, India",
    period: "2020 — 2024",
    score: "CGPA 7.8 / 10",
  },
];
