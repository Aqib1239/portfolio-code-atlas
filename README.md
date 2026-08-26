# Aqib — Developer Portfolio

A premium, original developer portfolio for **Mohammad Aqib** (MERN / Frontend Developer). Built from scratch with a deep‑charcoal + violet design system, a purpose‑built light theme, purposeful motion, and a mobile‑first layout that holds up from 360px to 1920px.

> This is a ground‑up rebuild of the previous portfolio. No Netflix branding, terminology, or UI remains — the "Who's Watching?" screen is reimagined as an optional **"Explore My Work"** lens that meaningfully tailors the page; the full portfolio is always accessible.

---

## Features

- **Light / Dark theme** — a toggle in the navbar (and mobile menu) switches between the signature dark theme and a purpose‑built light theme (not a naïve inversion). The choice is saved to `localStorage` and, until you choose, follows your OS preference live. An inline script applies the theme before first paint, so there's no flash of the wrong theme.
- **Tailored experiences** — the optional lens (Recruiter / Developer / Client / Just exploring) changes which sections appear, their order, how they're framed, and the hero's calls‑to‑action. Sections that aren't relevant to a lens are hidden. All driven by one config file (`data/profiles.ts`).
- **Custom cursor** — a precise solid dot plus a larger ring that trails behind with spring physics (visible lag on fast moves, smooth settle on stop). Grows over interactive elements, shrinks on click. Automatically disabled on touch devices and under reduced motion; the existing ambient cursor glow is kept.
- **Hero portrait + X‑ray scanner** — a framed profile photo sits alongside the signature `developer.ts` code window (both are kept). A subtle cyan scanner line sweeps the portrait on a loop. Drop your image in as `public/profile.jpg` (see below) — until then a clean monogram fallback shows.
- **Testimonials** — a section before Contact. The shipped entries are clearly‑marked **placeholders** (with a visible "Sample" notice) so nothing reads as a fake endorsement — replace them with real quotes in `data/testimonials.ts`.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS‑first `@theme` design tokens)
- **Framer Motion 11** (all animation)
- **lucide-react** (icons)

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

Requires Node 18.18+ (Node 20+ recommended).

---

## ⚠️ Fill in these placeholders before deploying

Nothing fake was invented, so a few real values are left as clearly‑marked placeholders. Search for these and replace them:

**1. Contact details — `data/site.ts` → `contact`**

| Field | Current placeholder | Replace with |
|-------|--------------------|--------------|
| `email` | `your.email@example.com` | your real email |
| `github` | `https://github.com/your-username` | your GitHub URL |
| `linkedin` | `https://www.linkedin.com/in/your-username` | your LinkedIn URL |
| `resume` | `/resume.pdf` | drop `resume.pdf` in `/public`, or point to an external link |

These feed the hero, contact section, footer, social links, and the contact form's `mailto:` — update once and it propagates everywhere.

**2. Project links — `data/projects.ts`**

Every project has `liveUrl` and `repoUrl` set to `null`. While null, the **Live Demo** / **Source** buttons render disabled. Add the real URLs to light them up:

```ts
liveUrl: "https://…",
repoUrl: "https://github.com/…",
```

**3. GoUniNest stack — `data/projects.ts`**

`gouninest.tech` is an empty array (`[]`) because the real stack wasn't confirmed. Add its technologies and the tech badges + "Stack details to be confirmed" note will update automatically.

**4. Certifications — `data/certifications.ts`**

`certifications` is an empty array, so no certifications section renders. Add entries to surface them.

**5. Canonical URL — `data/site.ts` → `siteConfig.url`**

Currently points to the existing live portfolio. Change it to this rebuild's deployment URL once live (drives metadata / Open Graph).

---

## Editing content

All content lives in **`data/`**, separate from the UI:

- `site.ts` — name, roles, summary, contact, socials, SEO keywords
- `navigation.ts` — nav items
- `profiles.ts` — the optional "Explore My Work" lenses
- `skills.ts` — categorized skills (no proficiency bars by design)
- `experience.ts` — work timeline
- `education.ts` — education
- `projects.ts` — featured projects + smaller "Experiments"
- `certifications.ts` — certifications (empty by default)

Edit these files to update the site — you shouldn't need to touch component code for content changes.

> Experience highlight bullets are general, role‑accurate descriptions grounded in the declared stack (no invented metrics or clients). Refine them with specifics whenever you like.

---

## Project structure

```
app/
  layout.tsx        # fonts, metadata, <Providers>
  providers.tsx     # profile context, preloader, selector, background
  page.tsx          # section composition
  globals.css       # design tokens (@theme) + component classes
components/
  ui/               # Button, Badge, Card, Reveal, Icon, Section, …
  visual/           # AnimatedBackground, CursorGlow
  system/           # Preloader, ProfileSelector
  nav/              # Navbar, MobileMenu
  hero/             # RoleRotator, CodeWindow
  projects/         # FeaturedProject, ProjectCard, ProjectActions
  sections/         # Hero, About, Skills, Experience, Projects, Contact, Footer
data/               # all content (typed)
lib/                # cn, motion presets, hooks
```

---

## Design & accessibility notes

- **Design tokens** are defined once in `globals.css` under `@theme` (colors, fonts, radii, easing, animations) and consumed as Tailwind utilities (`bg-accent`, `font-display`, `animate-float`, …).
- **Motion** is smooth and restrained. It fully respects `prefers-reduced-motion` (global CSS rule + Framer's `useReducedMotion`), and cursor/tilt/magnetic effects are disabled on touch devices.
- **Mobile‑first**: fluid `clamp()` typography, CSS grid/flex, max‑width containers, and `overflow-x: hidden` guards. No horizontal scroll at 320–360px.
- **Accessible**: semantic landmarks, skip link, keyboard‑focus styles, labelled form inputs and icon buttons, sensible heading order.
