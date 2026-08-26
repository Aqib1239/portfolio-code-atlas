"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { getNavItems } from "@/data/profiles";
import { contact, socials } from "@/data/site";
import { useProfile } from "@/app/providers";
import { useLockBodyScroll } from "@/lib/hooks";
import { EASE, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/system/ThemeToggle";

const listVariants = staggerContainer(0.06, 0.12);
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

type MobileMenuProps = {
  activeId: string | null;
  onClose: () => void;
};

/** Full-screen animated mobile navigation. Sits below the header (z-40),
 *  so the header's logo + close toggle stay visible on top. */
export function MobileMenu({ activeId, onClose }: MobileMenuProps) {
  const { profileId, openSelector } = useProfile();
  const navItems = useMemo(() => getNavItems(profileId), [profileId]);
  useLockBodyScroll(true);

  return (
    <motion.div
      className="fixed inset-0 z-40 md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

      <motion.nav
        aria-label="Mobile"
        className="container-page relative flex h-full flex-col pb-10 pt-24"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={listVariants}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <motion.li key={item.id} variants={itemVariants}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-2xl font-medium tracking-tight transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  {active ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                  ) : (
                    <Icon
                      name="arrow-up-right"
                      size={18}
                      className="text-subtle"
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          variants={itemVariants}
          className="mt-auto flex flex-col gap-5 pt-8"
        >
          <a
            href={contact.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={onClose}
            className="btn btn-primary btn-md w-full"
          >
            <Icon name="download" size={16} />
            <span>Download Resume</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              openSelector();
            }}
            className="btn btn-secondary btn-md w-full"
          >
            <Icon name="compass" size={16} />
            <span>Change experience</span>
          </button>

          <div className="flex items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  <Icon name={s.icon} size={19} />
                </a>
              ))}
            </div>
            <ThemeToggle className="h-11 w-11" />
          </div>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
