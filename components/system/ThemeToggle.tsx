"use client";

import { useTheme } from "@/components/system/ThemeProvider";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/**
 * Sun/moon theme toggle. Renders a stable placeholder icon until the client has
 * resolved the real theme, so server and first client render match exactly.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"
      }
      title="Toggle theme"
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground",
        className
      )}
    >
      <span className="relative block h-[17px] w-[17px]">
        <Icon
          name="sun"
          size={17}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            !mounted || isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
        <Icon
          name="moon"
          size={17}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            mounted && !isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          )}
        />
      </span>
    </button>
  );
}
