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
      aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} theme`}
      aria-pressed={resolved === "dark"}
    >
      {resolved === "dark" ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.8 8.8 0 1 0 20.2 15.1Z" />
        </svg>
      )}
    </button>
  );
}
