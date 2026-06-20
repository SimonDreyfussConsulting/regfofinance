// The working directory for npm scripts is the repository root, so the Tailwind
// config is referenced explicitly rather than auto-discovered.
export default {
  plugins: {
    tailwindcss: { config: "./web/tailwind.config.ts" },
    autoprefixer: {},
  },
};
