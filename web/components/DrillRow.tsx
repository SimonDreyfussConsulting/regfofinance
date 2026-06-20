import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A single drill-down row. When href is set the whole row is a link, which is
 * how the user zooms from net worth to category to merchant to transaction to
 * line item.
 */
export function DrillRow({
  title,
  subtitle,
  value,
  valueClassName,
  href,
}: {
  title: string;
  subtitle?: string;
  value: string;
  valueClassName?: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center justify-between gap-3 px-4 py-3">
      <div className="min-w-0">
        <p className="truncate font-medium text-foreground">{title}</p>
        {subtitle && <p className="truncate text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <span className={cn("tabular-nums font-medium text-foreground", valueClassName)}>
          {value}
        </span>
        {href && <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden />}
      </div>
    </div>
  );

  if (!href) {
    return <div className="border-b border-border last:border-0">{content}</div>;
  }

  return (
    <Link
      href={href}
      className="block border-b border-border transition-colors last:border-0 hover:bg-accent"
    >
      {content}
    </Link>
  );
}
