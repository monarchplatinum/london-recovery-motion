import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import wordmark from "@/assets/logo-wordmark.png";

/**
 * MPG Recovery wordmark — the real logo, taken from the Google Business
 * Profile. Source art is 289x129, so it is only ever rendered small.
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
      <img
        src={wordmark}
        alt="MPG Recovery"
        width={289}
        height={129}
        decoding="async"
        className={cn("w-auto shrink-0", stacked ? "h-14" : "h-10 sm:h-11")}
      />
    </Link>
  );
}
