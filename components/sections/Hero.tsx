"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useProfile } from "@/app/providers";
import { getExperience } from "@/data/profiles";
import { resolveCta } from "@/lib/cta";
import { EASE, staggerContainer, fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Badge } from "@/components/ui/Badge";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";
import { RoleRotator } from "@/components/hero/RoleRotator";
import { HeroVisual } from "@/components/hero/HeroVisual";

const heroStack = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

const container = staggerContainer(0.1, 0.15);

export function Hero() {
  const { profile, profileId } = useProfile();
  const exp = getExperience(profileId);
  const primary = resolveCta(exp.hero.primary);
  const secondary = resolveCta(exp.hero.secondary);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center pb-20 pt-28"
    >
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left — copy */}
          <motion.div
            className="flex flex-col items-start"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={fadeUp} className="eyebrow mb-6">
              {profile?.greeting ?? `Based in ${siteConfig.location}`}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.02] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">{siteConfig.shortName}</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-display text-[clamp(1.15rem,4vw,1.7rem)] font-medium"
            >
              <RoleRotator />
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[clamp(0.95rem,2.5vw,1.05rem)] leading-relaxed text-muted"
            >
              {siteConfig.tagline} Focused on responsive design, thoughtful user
              experience, and clean, maintainable code.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Button
                  href={primary.href}
                  external={primary.external}
                  size="lg"
                  leftIcon={
                    primary.iconSide === "left" ? (
                      <Icon name={primary.icon} size={17} />
                    ) : undefined
                  }
                  rightIcon={
                    primary.iconSide === "right" ? (
                      <Icon name={primary.icon} size={17} />
                    ) : undefined
                  }
                >
                  {primary.label}
                </Button>
              </MagneticButton>
              <Button
                href={secondary.href}
                external={secondary.external}
                variant="secondary"
                size="lg"
                leftIcon={
                  secondary.iconSide === "left" ? (
                    <Icon name={secondary.icon} size={16} />
                  ) : undefined
                }
                rightIcon={
                  secondary.iconSide === "right" ? (
                    <Icon name={secondary.icon} size={16} />
                  ) : undefined
                }
              >
                {secondary.label}
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4"
            >
              <SocialLinks />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                  Core stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {heroStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — portrait + signature code window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
            className="w-full"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint (desktop) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-2 w-0.5 animate-scroll-hint rounded-full bg-accent-bright" />
        </div>
      </div>
    </section>
  );
}
