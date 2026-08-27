"use client";

import { useMemo } from "react";
import { siteConfig } from "@/data/site";
import { getNavItems } from "@/data/profiles";
import { useProfile } from "@/app/providers";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  const { profileId } = useProfile();
  const navItems = useMemo(() => getNavItems(profileId), [profileId]);

  return (
    <footer className="relative border-t border-border">
      <div className="container-page flex flex-col gap-10 py-12 sm:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-strong bg-surface-2 font-mono text-sm text-accent-bright">
                {siteConfig.initials}
              </span>
              {siteConfig.shortName}.
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.role} building fast, polished web experiences from{" "}
              {siteConfig.location}.
            </p>
          </div>

          {/* Nav + social */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-14">
            <nav aria-label="Footer">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                Navigate
              </span>
              <ul className="mt-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                Connect
              </span>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border transition-transform duration-300 group-hover:-translate-y-0.5">
              <Icon name="arrow-up-right" size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
