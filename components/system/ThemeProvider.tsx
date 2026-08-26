"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "aqib:theme";
const THEME_COLORS: Record<Theme, string> = {
  dark: "#08080b",
  light: "#f6f7fb",
};

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  /** True once the client has resolved the real theme (avoids SSR mismatch). */
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}

/** Apply the theme to <html> and sync the mobile browser chrome color. */
function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Deterministic default for SSR + first client render (matches the no-FOUC
  // script's fallback). The real value is resolved in the mount effect below.
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const [hasStoredPref, setHasStoredPref] = useState(false);

  useEffect(() => {
    let resolved: Theme = "dark";
    let stored = false;
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") {
        resolved = saved;
        stored = true;
      } else {
        const attr = document.documentElement.getAttribute("data-theme");
        if (attr === "light" || attr === "dark") {
          resolved = attr;
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
          resolved = "light";
        }
      }
    } catch {
      /* storage/matchMedia unavailable — keep dark */
    }
    setHasStoredPref(stored);
    setThemeState(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  // Follow the OS preference live, but only while the user hasn't chosen one.
  useEffect(() => {
    if (hasStoredPref) return;
    let mql: MediaQueryList;
    try {
      mql = window.matchMedia("(prefers-color-scheme: light)");
    } catch {
      return;
    }
    const onChange = (e: MediaQueryListEvent) => {
      const next: Theme = e.matches ? "light" : "dark";
      setThemeState(next);
      applyTheme(next);
    };
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, [hasStoredPref]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    setHasStoredPref(true);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* ignore */
    }
    applyTheme(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      setHasStoredPref(true);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      applyTheme(next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme, mounted }),
    [theme, setTheme, toggleTheme, mounted]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
