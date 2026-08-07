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
        className="absolute bottom-[8%] left-[74%] h-[30%] w-[min(52%,560px)] -translate-x-1/2 opacity-80"
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

        <path d="M88 150 L-40 106 L-40 200 Z" fill="url(#beam)" />

        {/* ground shadow */}
        <ellipse cx="380" cy="224" rx="310" ry="13" fill="oklch(0 0 0 / 0.5)" />

        {/* chassis rail */}
        <rect x="104" y="168" width="596" height="14" rx="4" fill="oklch(0.17 0.004 260)" />

        {/* flatbed deck + rear ramp */}
        <path
          d="M248 152h444l26 34h-32l-14-18H248Z"
          fill="oklch(0.30 0.008 260)"
          stroke="oklch(1 0 0 / 0.10)"
          strokeWidth="2"
        />

        {/* loaded car — sits on the deck */}
        <g style={{ transform: "translateY(calc(var(--sy) * -5px))" }}>
          <path
            d="M300 138 L302 120 Q304 110 318 106 L372 96 L408 68 Q416 60 432 60 L522 60 Q538 60 546 70 L576 96 L604 104 Q618 108 618 120 L618 138 Z"
            fill="oklch(0.29 0.009 250)"
            stroke="oklch(1 0 0 / 0.16)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* glasshouse */}
          <path d="M382 94 L414 70 L452 70 L452 94 Z" fill="oklch(0.55 0.03 240)" opacity="0.5" />
          <path d="M462 70 L520 70 L542 94 L462 94 Z" fill="oklch(0.55 0.03 240)" opacity="0.36" />
          {/* wheels on the deck */}
          <circle cx="360" cy="136" r="16" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.18)" strokeWidth="2" />
          <circle cx="360" cy="136" r="6" fill="oklch(0.36 0.005 260)" />
          <circle cx="556" cy="136" r="16" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.18)" strokeWidth="2" />
          <circle cx="556" cy="136" r="6" fill="oklch(0.36 0.005 260)" />
          {/* securing straps */}
          <g stroke="oklch(0.85 0.15 90 / 0.45)" strokeWidth="3">
            <path d="M338 152V114" />
            <path d="M590 152V116" />
          </g>

        </g>

        {/* winch post behind the cab */}
        <rect x="250" y="104" width="16" height="50" rx="4" fill="oklch(0.26 0.007 260)" />

        {/* cab */}
        <path
          d="M88 170V112q0-12 12-14l16-2 14-24q5-10 17-10h76q14 0 14 14v94Z"
          fill="url(#body)"
          stroke="oklch(1 0 0 / 0.16)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* windscreen + side glass */}
        <path d="M104 124 L120 96 L166 96 L166 124 Z" fill="oklch(0.55 0.03 240)" opacity="0.55" />
        <path d="M176 96 h44 v28 h-44 Z" fill="oklch(0.55 0.03 240)" opacity="0.4" />
        {/* bumper + grille */}
        <rect x="86" y="152" width="24" height="18" rx="4" fill="oklch(0.24 0.006 260)" />
        <rect x="92" y="130" width="14" height="6" rx="2" fill="oklch(0.24 0.006 260)" />

        {/* beacons */}
        <g fill="oklch(0.85 0.15 90)">
          <rect x="128" y="56" width="18" height="8" rx="4" opacity="0.9" />
          <rect x="168" y="56" width="18" height="8" rx="4" opacity="0.65" />
        </g>

        {/* headlight */}
        <circle cx="97" cy="146" r="6" fill="oklch(0.97 0.04 90)" />

        {/* wheels */}
        <g>
          <circle cx="158" cy="196" r="26" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.16)" strokeWidth="2" />
          <circle cx="158" cy="196" r="10" fill="oklch(0.34 0.005 260)" />
          <circle cx="516" cy="196" r="26" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.16)" strokeWidth="2" />
          <circle cx="516" cy="196" r="10" fill="oklch(0.34 0.005 260)" />
          <circle cx="596" cy="196" r="26" fill="oklch(0.12 0 0)" stroke="oklch(1 0 0 / 0.16)" strokeWidth="2" />
          <circle cx="596" cy="196" r="10" fill="oklch(0.34 0.005 260)" />
        </g>


      </svg>
    </div>
  );
}
