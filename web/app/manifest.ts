import type { MetadataRoute } from "next";

// Web app manifest. Makes Commonwealth installable on phone and desktop.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Commonwealth",
    short_name: "Commonwealth",
    description: "A private, read-only financial concierge for your household.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fafc",
    theme_color: "#1d4ed8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-maskable.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
