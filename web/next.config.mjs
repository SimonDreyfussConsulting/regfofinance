import { fileURLToPath } from "node:url";
import path from "node:path";
import dotenv from "dotenv";

// Load the single root .env so the app, the seed scripts, and Docker Compose
// all share one environment file. Resolved relative to this config file so it
// works regardless of the working directory.
const here = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(here, "..", ".env") });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow importing the sibling seam modules (/db, /gateway, etc.) that live
  // outside this Next.js project directory.
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;
