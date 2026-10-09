import { createStore } from "zustand/vanilla";

export type ThemeMode = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export type ThemeState = {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  setTheme: (mode: ThemeMode, resolved: ResolvedTheme) => void;
};

export function createThemeStore() {
  return createStore<ThemeState>()((set) => ({
    mode: "system",
    resolved: "light",
    setTheme: (mode, resolved) => set({ mode, resolved }),
  }));
}
