import { useEffect, useRef } from "react";
import { useRichMotion } from "@/hooks/use-motion";

/**
 * Interactive London recovery scene.
 *
 * Pure SVG + CSS transforms driven by a single rAF-throttled pointer/scroll
 * listener. On touch devices and reduced-motion the same artwork renders as a
 * static composition — no JS work, no layout shift.
 */
export function HeroScene() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { reduced, pointerParallax } = useRichMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    let scroll = 0;

    const apply = () => {
      frame = 0;
      root.style.setProperty("--px", px.toFixed(3));
      root.style.setProperty("--py", py.toFixed(3));
      root.style.setProperty("--sy", scroll.toFixed(3));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onPointer = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width - 0.5;
      py = (e.clientY - r.top) / r.height - 0.5;
      schedule();
    };

    const onScroll = () => {
      const r = root.getBoundingClientRect();
      scroll = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      if (!pointerParallax) {
        px = scroll * 0.5 - 0.25;
      }
      schedule();
    };

    if (pointerParallax) root.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [reduced, pointerParallax]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden [--px:0] [--py:0] [--sy:0] sm:block"
    >
      {/* Depth layer 1 — distant skyline glow (the photograph carries the real skyline) */}
      <div
        className="absolute inset-x-0 bottom-[22%] h-[30%] bg-[radial-gradient(60%_100%_at_70%_100%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_70%)]"
        style={{ transform: "translate3d(calc(var(--px) * -14px), calc(var(--sy) * -18px), 0)" }}
      />


      {/* Depth layer 2 — street furniture */}
      <svg
        viewBox="0 0 1200 300"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-[20%] h-[28%] w-full opacity-70 sm:bottom-[22%] sm:h-[34%]"
        style={{ transform: "translate3d(calc(var(--px) * -30px), calc(var(--sy) * -34px), 0)" }}
      >
        <g stroke="oklch(0.34 0.01 260)" strokeWidth="5" fill="none">
          <path d="M120 300V120h44" /><path d="M1080 300V140h-44" />
        </g>
        <circle cx="176" cy="120" r="9" fill="oklch(0.85 0.15 90)" opacity="0.5" />
        <circle cx="1028" cy="140" r="9" fill="oklch(0.85 0.15 90)" opacity="0.5" />
      </svg>

      {/* Depth layer 3 — road surface + markings */}
      <svg
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[24%] w-full opacity-80 sm:h-[26%]"
        style={{ transform: "translate3d(calc(var(--px) * -46px), 0, 0) scale(1.12)" }}

      >
        <rect width="1200" height="260" fill="oklch(0.19 0.005 260)" />
        <line x1="0" y1="18" x2="1200" y2="18" stroke="oklch(1 0 0 / 0.1)" strokeWidth="2" />
        <line
          x1="-200"
          y1="150"
          x2="1400"
          y2="150"
          stroke="oklch(0.9 0.02 90 / 0.5)"
          strokeWidth="8"
          strokeDasharray="60 46"
          className="road-dash"
        />
        <line
          x1="-200"
          y1="228"
          x2="1400"
          y2="228"
          stroke="oklch(0.9 0.02 90 / 0.22)"
          strokeWidth="5"
          strokeDasharray="34 90"
          className="road-dash"
        />
      </svg>

      {/* Foreground — flatbed recovery truck */}
      <svg
        viewBox="0 0 720 260"
        preserveAspectRatio="xMidYMax meet"
        className="absolute bottom-[9%] left-[64%] h-[34%] w-[min(58%,660px)] -translate-x-1/2 opacity-90"
        style={{
          transform:
            "translate3d(calc(-50% + var(--px) * 34px + var(--sy) * 70px), calc(var(--py) * 10px), 0)",
        }}
      >

        {/* headlight beam */}
        <defs>
          <linearGradient id="beam" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="oklch(0.95 0.06 90)" stopOpacity="0.42" />
            <stop offset="100%" stopColor="oklch(0.95 0.06 90)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.34 0.008 260)" />
            <stop offset="100%" stopColor="oklch(0.21 0.006 260)" />
          </linearGradient>
        </defs>

        <path d="M96 168 L-40 120 L-40 216 Z" fill="url(#beam)" />

        {/* flatbed deck + loaded car silhouette */}
        <g style={{ transform: "translateY(calc(var(--sy) * -6px))" }}>
          <rect x="250" y="150" width="420" height="16" rx="3" fill="oklch(0.30 0.008 260)" />
          <path
            d="M320 150c14-32 30-44 52-46h96c26 2 44 16 66 30l40 16Z"
            fill="oklch(0.26 0.007 260)"
            stroke="oklch(1 0 0 / 0.12)"
            strokeWidth="2"
          />
          <circle cx="372" cy="150" r="14" fill="oklch(0.15 0 0)" />
          <circle cx="518" cy="150" r="14" fill="oklch(0.15 0 0)" />
        </g>

        {/* cab */}
        <path
          d="M96 168V96c0-8 6-14 14-14h74c8 0 12 4 16 10l26 40h24v36Z"
          fill="url(#body)"
          stroke="oklch(1 0 0 / 0.14)"
          strokeWidth="2"
        />
        <path d="M120 100h58l20 30h-78Z" fill="oklch(0.46 0.02 240)" opacity="0.55" />
        <rect x="248" y="120" width="14" height="46" rx="3" fill="oklch(0.28 0.008 260)" />

        {/* beacons */}
        <g fill="oklch(0.85 0.15 90)">
          <rect x="112" y="76" width="16" height="7" rx="3" opacity="0.9" />
          <rect x="150" y="76" width="16" height="7" rx="3" opacity="0.7" />
        </g>

        {/* headlight */}
        <circle cx="100" cy="150" r="7" fill="oklch(0.97 0.04 90)" />

        {/* wheels */}
        <g>
          <circle cx="140" cy="196" r="26" fill="oklch(0.13 0 0)" />
          <circle cx="140" cy="196" r="11" fill="oklch(0.3 0.005 260)" />
          <circle cx="470" cy="196" r="26" fill="oklch(0.13 0 0)" />
          <circle cx="470" cy="196" r="11" fill="oklch(0.3 0.005 260)" />
          <circle cx="546" cy="196" r="26" fill="oklch(0.13 0 0)" />
          <circle cx="546" cy="196" r="11" fill="oklch(0.3 0.005 260)" />
        </g>
        <ellipse cx="350" cy="228" rx="300" ry="14" fill="oklch(0 0 0 / 0.5)" />
      </svg>
    </div>
  );
}
