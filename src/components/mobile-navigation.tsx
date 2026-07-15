"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mobileNavigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = panelRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a, button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className="mobile-nav">
      <button
        ref={triggerRef}
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-menu-shell">
          <button
            className="mobile-menu-backdrop"
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />
          <div
            ref={panelRef}
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="mobile-menu__top">
              <span>Navigate</span>
              <div className="mobile-menu__controls">
                <ThemeToggle />
                <button
                  className="mobile-menu__close"
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              </div>
            </div>
            <nav aria-label="Mobile navigation">
              {mobileNavigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={active ? "is-active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    <span className="mobile-menu__link-marker" aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mobile-menu__contact">
              <p>Open to thoughtful hiring and business conversations.</p>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
