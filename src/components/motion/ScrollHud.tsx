import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-motion";

/**
 * Game-style scroll HUD.
 *
 * A fixed rail under the header showing route progress: a mini recovery truck
 * drives along the road as you scroll, with a distance readout. Purely
 * decorative — hidden from assistive tech and disabled for reduced motion.
 */
export function ScrollHud() {
  const railRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const root = document.documentElement;
    let frame = 0;

    const apply = () => {
      frame = 0;
      const max = root.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--scroll-progress", p.toFixed(4));
      railRef.current?.style.setProperty("--p", p.toFixed(4));
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

  if (reduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -bottom-[1px] z-40 hidden select-none sm:block"
    >
      <div ref={railRef} className="relative h-[3px] w-full bg-[oklch(1_0_0_/_0.06)] [--p:0]">
        {/* travelled road */}
        <div
          className="absolute inset-y-0 left-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-primary)_35%,transparent),var(--color-primary))]"
          style={{ width: "calc(var(--p) * 100%)" }}
        />
        {/* lane markings on the road ahead */}
        <div className="road-dash-x absolute inset-y-[1px] right-0 left-0 opacity-40" />

        {/* the truck */}
        <div
          className="absolute -top-[13px] left-0 will-change-transform"
          style={{ transform: "translateX(calc(var(--p) * (100vw - 76px) + 6px))" }}
        >
          <svg width="64" height="26" viewBox="0 0 64 26" fill="none">
            <path
              d="M22 6h26l6 8h4a2 2 0 0 1 2 2v3H22Z"
              fill="oklch(0.30 0.008 260)"
              stroke="oklch(1 0 0 / 0.18)"
            />
            {/* loaded car */}
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
  );
}
