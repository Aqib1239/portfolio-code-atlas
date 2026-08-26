/**
 * Global site configuration and contact details.
 *
 * ⚠️  PLACEHOLDERS — replace the values in `contact` below with the real ones
 *     before deploying. They are intentionally generic so no fake identity is
 *     shipped. Nothing here is invented; unknown values are left as templates.
 */

export const contact = {
  // [MY EMAIL]  → replace with your real address
  email: "maqib8577@gmail.com",
  // [MY GITHUB] → replace `your-username`
  github: "https://github.com/Aqib1239",
  // [MY LINKEDIN] → replace `your-username`
  linkedin: "https://www.linkedin.com/in/mohammad-aqib-0316a3220",
  // [My Instagram] → replace `your-username`
  instagram: "https://www.instagram.com/m_aaqib__7/?utm_source=qr&igsh=ZzF2bHI0ZXo5cWs1",
  // [My Facebook] → replace `your-username`
  facebook: "https://www.facebook.com/profile.php?id=100082765906887&mibextid=JRoKGi",
  // [My Twitter] → replace `your-username`
  twitter: "https://x.com/maqib_7?t=0fm1h8U2TmSXNVgfBxpgNQ&s=09&mx=2",
  // [MY RESUME URL] → drop `resume.pdf` in /public, or point to an external link
  resume: "https://drive.google.com/file/d/12I3aCFpdkev0Y68PEXI3KLHO2JtvnMMf/view?usp=drivesdk",
} as const;

/** Profile photo path (place the image file in /public). */
export const profilePhoto = "/profile.jpg";

export const siteConfig = {
  name: "Mohammad Aqib",
  shortName: "Aqib",
  initials: "MA",
  role: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    "Frontend Developer",
    "Full Stack JavaScript Developer",
  ],
  location: "New Delhi, India",
  yearsExperience: "1.5+",
  description:
    "MERN Stack Developer with 1.5+ years of professional experience building modern, responsive, and scalable web applications. Experienced in React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, and modern UI technologies, with a strong focus on frontend development, responsive design, user experience, and clean maintainable code.",
  // Short line used in the hero beneath the name.
  tagline:
    "I build fast, scalable and polished web experiences with modern JavaScript.",
  // Canonical URL — currently the existing live portfolio (real, provided).
  // Change to this rebuild's deployment URL once it is live.
  url: "https://maqib-sigma.vercel.app",
  keywords: [
    "MERN Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Full Stack JavaScript Developer",
    "Mohammad Aqib",
    "Web Developer New Delhi",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "instagram" | "facebook" | "twitter";
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: contact.github, icon: "github" },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${contact.email}`, icon: "mail" },
  {
    label: "Instagram",
    href: contact.instagram,
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: contact.facebook,
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: contact.twitter,
    icon: "twitter",
  },
];
