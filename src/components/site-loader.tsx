"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const INITIAL_MINIMUM_MS = 1150;
const INITIAL_SAFETY_MS = 1600;
const ROUTE_MINIMUM_MS = 600;
const ROUTE_SAFETY_MS = 1300;

export function SiteLoader() {
  const pathname = usePathname();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const pathnameRef = useRef(pathname);
  const routePendingRef = useRef(false);
  const routeStartedRef = useRef(0);
  const completionTimerRef = useRef<number | null>(null);
  const safetyTimerRef = useRef<number | null>(null);

  const clearTimers = useCallback(() => {
    if (completionTimerRef.current !== null) {
      window.clearTimeout(completionTimerRef.current);
      completionTimerRef.current = null;
    }

    if (safetyTimerRef.current !== null) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const completeLoader = useCallback(() => {
    clearTimers();
    routePendingRef.current = false;

    const root = document.documentElement;
    root.classList.remove("loader-active", "route-loading");
    root.classList.add("app-ready");
    delete root.dataset.loaderStarted;
    setVisible(false);
  }, [clearTimers]);

  const beginRouteLoader = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeLoader();
      return;
    }

    clearTimers();
    routePendingRef.current = true;
    routeStartedRef.current = performance.now();

    const root = document.documentElement;
    root.classList.remove("app-ready");
    root.classList.add("loader-active", "route-loading");
    setVisible(true);

    safetyTimerRef.current = window.setTimeout(
      completeLoader,
      ROUTE_SAFETY_MS,
    );
  }, [clearTimers, completeLoader]);

  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completionTimerRef.current = window.setTimeout(completeLoader, 0);
    } else if (root.classList.contains("app-ready")) {
      completionTimerRef.current = window.setTimeout(completeLoader, 0);
    } else {
      const isRouteVisit = root.classList.contains("route-loading");
      const loaderStarted = Number(root.dataset.loaderStarted);
      const elapsed = Number.isFinite(loaderStarted)
        ? performance.now() - loaderStarted
        : 0;

      completionTimerRef.current = window.setTimeout(
        completeLoader,
        Math.max(
          0,
          (isRouteVisit ? ROUTE_MINIMUM_MS : INITIAL_MINIMUM_MS) - elapsed,
        ),
      );
      safetyTimerRef.current = window.setTimeout(
        completeLoader,
        Math.max(
          0,
          (isRouteVisit ? ROUTE_SAFETY_MS : INITIAL_SAFETY_MS) - elapsed,
        ),
      );
    }

    function handleDocumentClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.hasAttribute("download") ||
        (anchor.target && anchor.target.toLowerCase() !== "_self")
      ) {
        return;
      }

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const current = new URL(window.location.href);
      const sameDocument =
        destination.pathname === current.pathname &&
        destination.search === current.search;

      if (
        destination.origin !== current.origin ||
        !["http:", "https:"].includes(destination.protocol) ||
        sameDocument
      ) {
        return;
      }

      event.preventDefault();
      beginRouteLoader();
      router.push(
        `${destination.pathname}${destination.search}${destination.hash}`,
      );
    }

    function handlePopState() {
      beginRouteLoader();
      completionTimerRef.current = window.setTimeout(
        completeLoader,
        ROUTE_MINIMUM_MS,
      );
    }

    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) completeLoader();
    }

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("nihal-loader-complete", completeLoader);

    return () => {
      clearTimers();
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("nihal-loader-complete", completeLoader);
    };
  }, [beginRouteLoader, clearTimers, completeLoader, router]);

  useEffect(() => {
    const pathnameChanged = pathnameRef.current !== pathname;
    pathnameRef.current = pathname;

    if (!pathnameChanged || !routePendingRef.current) return;

    const elapsed = performance.now() - routeStartedRef.current;
    completionTimerRef.current = window.setTimeout(
      completeLoader,
      Math.max(0, ROUTE_MINIMUM_MS - elapsed),
    );
  }, [completeLoader, pathname]);

  return (
    <div className="site-loader" data-hidden={!visible} aria-hidden="true">
      <div className="site-loader__mark">
        <span className="site-loader__frame">
          <strong>NA</strong>
        </span>
        <small>Hiring consultant</small>
        <p>
          Talent Advisory <span>•</span> Recruitment Consulting
        </p>
        <span className="site-loader__progress">
          <i />
        </span>
      </div>
    </div>
  );
}
