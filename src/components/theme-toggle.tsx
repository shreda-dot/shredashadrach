"use client";

import { useThemeStore } from "@/components/theme-store-provider";
import type { ThemeMode } from "@/components/theme-store";

export function ThemeToggle() {
  const resolved = useThemeStore((state) => state.resolved);
  const setTheme = useThemeStore((state) => state.setTheme);

  function toggleTheme() {
    const next: ThemeMode = resolved === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");

    try {
      window.localStorage.setItem("shreda-theme", next);
    } catch {
      console.warn("Theme preference could not be saved in this browser.");
    }

    setTheme(next, next);
    window.__shredaTheme = { mode: next, resolved: next };
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={resolved === "dark"}
    >
      <span aria-hidden="true">{resolved === "dark" ? "☾" : "☼"}</span>
      <span>Theme</span>
    </button>
  );
}
