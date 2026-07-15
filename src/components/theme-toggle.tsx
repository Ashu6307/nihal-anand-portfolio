"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("nihal-theme-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener("nihal-theme-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const nextTheme = theme === "dark" ? "light" : "dark";

  function toggleTheme() {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("nihal-theme", nextTheme);
    window.dispatchEvent(new Event("nihal-theme-change"));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} theme`}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <svg className="theme-toggle__sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        <svg className="theme-toggle__moon" viewBox="0 0 24 24">
          <path d="M20 15.2A8.3 8.3 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" />
        </svg>
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
