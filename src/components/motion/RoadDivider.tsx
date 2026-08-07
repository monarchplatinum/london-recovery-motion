import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-motion";

/**
 * Scroll-driven road divider — a recovery truck drives across the strip as the
 * divider passes through the viewport. Decorative only.
 */
export function RoadDivider({ reverse = false }: { reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let frame = 0;
    const apply = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.setProperty("--t", p.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <div aria-hidden="true" className="mx-auto max-w-7xl px-4 sm:px-6">
      <div
        ref={ref}
        className="relative h-12 overflow-hidden [--t:0]"
        style={reverse ? { transform: "scaleX(-1)" } : undefined}
      >
        <div className="absolute inset-x-0 bottom-4 h-[2px] bg-[oklch(1_0_0_/_0.08)]" />
        <div className="road-dash-x absolute inset-x-0 bottom-4 h-[2px] opacity-30" />
        <div
          className="absolute bottom-[10px] will-change-transform"
          style={{ left: "calc(var(--t) * 100%)", transform: "translateX(calc(var(--t) * -100%))" }}
        >
          <div>
            <svg width="72" height="30" viewBox="0 0 64 26" fill="none">
              <path
                d="M22 6h26l6 8h4a2 2 0 0 1 2 2v3H22Z"
                fill="oklch(0.30 0.008 260)"
                stroke="oklch(1 0 0 / 0.18)"
              />
              <path
                d="M24 6 26 2h14l4 4Z"
                fill="color-mix(in oklab, var(--color-primary) 55%, transparent)"
              />
              <rect x="4" y="12" width="18" height="7" rx="1.5" fill="oklch(0.26 0.007 260)" />
              <rect x="2" y="17" width="56" height="2" rx="1" fill="oklch(0.18 0.004 260)" />
              <circle className="hud-wheel" cx="14" cy="20" r="3.4" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.25)" />
              <circle className="hud-wheel" cx="46" cy="20" r="3.4" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.25)" />
              <rect className="hud-beacon" x="26" y="0" width="7" height="2.5" rx="1.25" fill="var(--color-primary)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
