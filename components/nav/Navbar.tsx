"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { getNavItems } from "@/data/profiles";
import { contact, siteConfig } from "@/data/site";
import { useProfile } from "@/app/providers";
import { useScrollSpy } from "@/lib/hooks";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/system/ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { profileId } = useProfile();
  const navItems = useMemo(() => getNavItems(profileId), [profileId]);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "border-b transition-colors duration-300",
            scrolled || menuOpen
              ? "border-border bg-background/70 backdrop-blur-xl"
              : "border-transparent"
          )}
        >
          <div className="container-page flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#hero"
              className="group inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.shortName} — back to top`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-foreground/[0.04] font-display text-sm font-semibold text-accent-bright transition-colors group-hover:border-accent/40">
                {siteConfig.initials}
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                {siteConfig.shortName}
                <span className="text-accent-bright">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {navItems.map((item) => {
                const active = activeId === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-sm transition-colors",
                      active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span
                        className="absolute inset-x-3 -bottom-px h-px bg-accent-bright"
                        aria-hidden="true"
                      />
                    ) : null}
                  </a>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <a
                href={contact.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary btn-sm hidden sm:inline-flex"
              >
                <Icon name="download" size={15} />
                <span>Resume</span>
              </a>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-border-strong md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <Icon name={menuOpen ? "x" : "menu"} size={19} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <MobileMenu
            activeId={activeId}
            onClose={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
