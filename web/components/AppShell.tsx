import Link from "next/link";
import { getDataMode } from "@ops/config";

/**
 * Responsive application shell. Works at phone and desktop widths. Server
 * component, so the data-mode badge reflects the real runtime configuration.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const dataMode = getDataMode();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Commonwealth
            </span>
          </Link>
          <span
            className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
            title="Data mode. Filler runs entirely on seed data with no external calls."
          >
            {dataMode === "filler" ? "Filler data" : "Live"}
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      <footer className="mx-auto max-w-5xl px-4 pb-10 pt-4 text-center text-xs text-muted-foreground sm:px-6">
        Read-only decision support. No money movement. Figures come from your
        ledger database.
      </footer>
    </div>
  );
}
