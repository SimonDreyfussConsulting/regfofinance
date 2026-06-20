"use client";

import { useEffect } from "react";

/**
 * Registers the service worker so the app is installable. The worker does no
 * caching, so it never serves stale figures.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }
    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Registration is best-effort. The app works fully without it.
      });
    };
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
