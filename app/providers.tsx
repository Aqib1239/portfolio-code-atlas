"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import {
  profiles,
  type Profile,
  type ProfileId,
} from "@/data/profiles";
import { useLockBodyScroll } from "@/lib/hooks";
import { ThemeProvider } from "@/components/system/ThemeProvider";
import { AnimatedBackground } from "@/components/visual/AnimatedBackground";
import { CursorGlow } from "@/components/visual/CursorGlow";
import { CustomCursor } from "@/components/visual/CustomCursor";
import { Preloader } from "@/components/system/Preloader";

const INTRO_KEY = "aqib:intro";

const DEVELOPER_PROFILE_ID: ProfileId = "developer";

type ProfileContextValue = {
  profileId: ProfileId;
  profile: Profile | null;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);

  if (!ctx) {
    throw new Error("useProfile must be used within <Providers>");
  }

  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [booted, setBooted] = useState(false);

  /**
   * Read session state once on mount.
   * The portfolio now always uses the Developer profile.
   */
  useEffect(() => {
    setHydrated(true);

    // Show preloader for 4 seconds on every refresh.
    const timer = setTimeout(() => {
      setBooted(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  /**
   * Called when the preloader finishes.
   */
  const finishIntro = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Ignore storage errors.
    }

    setBooted(true);
  };

  useLockBodyScroll(hydrated && !booted);

  const value = useMemo<ProfileContextValue>(
    () => ({
      profileId: DEVELOPER_PROFILE_ID,
      profile:
        profiles.find((p) => p.id === DEVELOPER_PROFILE_ID) ?? null,
    }),
    []
  );

  return (
    <ThemeProvider>
      <ProfileContext.Provider value={value}>
        <AnimatedBackground />
        <CursorGlow />
        <CustomCursor />

        {children}

        {/* Silent charcoal cover until we've read session state. */}
        {!hydrated ? (
          <div
            className="fixed inset-0 z-[70] bg-background"
            aria-hidden="true"
          />
        ) : null}

        {/* Preloader */}
        <AnimatePresence>
          {hydrated && !booted ? (
            <Preloader
              key="preloader"
              onDone={finishIntro}
            />
          ) : null}
        </AnimatePresence>
      </ProfileContext.Provider>
    </ThemeProvider>
  );
}