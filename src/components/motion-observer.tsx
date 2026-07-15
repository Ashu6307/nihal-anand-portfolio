"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight * 0.94) {
        element.classList.add("is-visible");
      }
    });

    document.documentElement.dataset.motionReady = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
