import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * MPG Recovery wordmark. Replace the SVG mark below with the real supplied
 * logo when available — keep the same dimensions and accessible label.
 */
export function Logo({
  className,
  stacked = false,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="MPG Recovery — home"
    >
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
        className="size-9 shrink-0"
      >
        <rect x="0.5" y="0.5" width="39" height="39" rx="7" className="fill-surface-2" />
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="7"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.14"
        />
        <path d="M6 27.5 L30 12.5" stroke="var(--color-primary)" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M28 12.5 h6 v6" stroke="var(--color-primary)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="31" r="2.6" fill="currentColor" />
        <circle cx="25" cy="31" r="2.6" fill="currentColor" />
      </svg>
      <span
        className={cn(
          "font-display font-extrabold uppercase leading-[0.86] tracking-tight",
          stacked ? "flex flex-col text-xl" : "whitespace-nowrap text-lg",
        )}

      >
        <span className="text-foreground">MPG</span>{" "}
        <span className="text-muted-foreground">Recovery</span>
      </span>
    </Link>
  );
}
