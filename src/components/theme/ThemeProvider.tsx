"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { THEME_STORAGE_KEY } from "@/components/theme/ThemeScript";

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

// No DOM on the server, so always "dark" here — avoids a hydration mismatch; the real theme applies via getSnapshot after mount.
function getServerSnapshot(): Theme {
  return "dark";
}

function setTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {
    // localStorage unavailable (private mode, disabled) — theme still
    // applies for this page view, just won't persist.
  }
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
