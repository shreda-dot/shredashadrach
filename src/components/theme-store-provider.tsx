"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useStore } from "zustand";
import type { StoreApi } from "zustand/vanilla";
import {
  createThemeStore,
  type ResolvedTheme,
  type ThemeMode,
  type ThemeState,
} from "@/components/theme-store";

declare global {
  interface Window {
    __shredaTheme?: {
      mode: ThemeMode;
      resolved: ResolvedTheme;
    };
  }
}

const ThemeStoreContext = createContext<StoreApi<ThemeState> | null>(null);

export function ThemeStoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => createThemeStore());

  useEffect(() => {
    const bootstrapped = window.__shredaTheme;
    const mode = bootstrapped?.mode ?? "system";
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applySystemTheme = () => {
      if (store.getState().mode !== "system") {
        return;
      }

      const resolved = media.matches ? "dark" : "light";
      const root = document.documentElement;
      root.dataset.theme = resolved;
      root.classList.toggle("dark", resolved === "dark");
      store.getState().setTheme("system", resolved);
    };

    const initialResolved =
      bootstrapped?.resolved ?? (media.matches ? "dark" : "light");
    store.getState().setTheme(mode, initialResolved);

    if (mode === "system") {
      media.addEventListener("change", applySystemTheme);
    }

    return () => media.removeEventListener("change", applySystemTheme);
  }, [store]);

  return (
    <ThemeStoreContext.Provider value={store}>
      {children}
    </ThemeStoreContext.Provider>
  );
}

export function useThemeStore<T>(selector: (state: ThemeState) => T): T {
  const store = useContext(ThemeStoreContext);

  if (!store) {
    throw new Error("useThemeStore must be used inside ThemeStoreProvider.");
  }

  return useStore(store, selector);
}
