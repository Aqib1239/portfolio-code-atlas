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
import { ProfileSelector } from "@/components/system/ProfileSelector";

const INTRO_KEY = "aqib:intro";
const PROFILE_KEY = "aqib:profile";

type ProfileContextValue = {
  profileId: ProfileId | null;
  profile: Profile | null;
  setProfile: (id: ProfileId) => void;
  openSelector: () => void;
  isSelectorOpen: boolean;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function useProfile(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within <Providers>");
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [booted, setBooted] = useState(false);
  const [profileId, setProfileId] = useState<ProfileId | null>(null);
  const [selectorOpen, setSelectorOpen] = useState(false);

  // Read session state once on mount (deterministic initial render avoids
  // hydration mismatches — everything starts false/null on server + client).
  useEffect(() => {
    let saved: string | null = null;
  
    try {
      saved = sessionStorage.getItem(PROFILE_KEY);
    } catch {
      // storage unavailable
    }
  
    if (saved) {
      setProfileId(saved as ProfileId);
    }
  
    setHydrated(true);
  
    // Show preloader for 4 seconds on every refresh
    const timer = setTimeout(() => {
      setBooted(true);
  
      if (!saved) {
        setSelectorOpen(true);
      }
    }, 4000);
  
    return () => clearTimeout(timer);
  }, []);

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
    setBooted(true);
    setProfileId((current) => {
      if (current === null) setSelectorOpen(true);
      return current;
    });
  }, []);

  const setProfile = useCallback((id: ProfileId) => {
    try {
      sessionStorage.setItem(PROFILE_KEY, id);
    } catch {
      /* ignore */
    }
    setProfileId(id);
    setSelectorOpen(false);
  }, []);

  const openSelector = useCallback(() => setSelectorOpen(true), []);
  const skipSelector = useCallback(() => setProfile("explorer"), [setProfile]);

  useLockBodyScroll((hydrated && !booted) || selectorOpen);

  const value = useMemo<ProfileContextValue>(
    () => ({
      profileId,
      profile: profiles.find((p) => p.id === profileId) ?? null,
      setProfile,
      openSelector,
      isSelectorOpen: selectorOpen,
    }),
    [profileId, setProfile, openSelector, selectorOpen]
  );

  return (
    <ThemeProvider>
      <ProfileContext.Provider value={value}>
        <AnimatedBackground />
        <CursorGlow />
        <CustomCursor />

        {children}

        {/* Silent charcoal cover until we've read session state (no flash). */}
        {!hydrated ? (
          <div className="fixed inset-0 z-[70] bg-background" aria-hidden="true" />
        ) : null}

        <AnimatePresence>
          {hydrated && !booted ? (
            <Preloader key="preloader" onDone={finishIntro} />
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {hydrated && booted && selectorOpen ? (
            <ProfileSelector
              key="selector"
              onSelect={setProfile}
              onSkip={skipSelector}
            />
          ) : null}
        </AnimatePresence>
      </ProfileContext.Provider>
    </ThemeProvider>
  );
}
