// Minimal service worker.
//
// Its only job in Phase 1 is to make Commonwealth installable as a progressive
// web app. It uses a network-passthrough fetch handler and caches nothing, so
// it never serves stale financial figures. Caching strategy is a later task.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Pass through to the network. No caching of data responses.
  event.respondWith(fetch(event.request));
});
