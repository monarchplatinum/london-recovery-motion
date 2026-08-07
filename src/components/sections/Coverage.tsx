import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { serviceAreas, coveredPlaces, waMessages } from "@/config/site";
import { WhatsAppCta } from "@/components/cta/Cta";
import { useReveal } from "@/hooks/use-motion";

type AreaKey = (typeof serviceAreas)[number]["slug"];

const areaRoutes: Record<AreaKey, string> = {
  "east-london": "/vehicle-recovery-east-london",
  "central-london": "/vehicle-recovery-central-london",
  "north-london": "/vehicle-recovery-north-london",
  "south-london": "/vehicle-recovery-south-london",
  "west-london": "/vehicle-recovery-west-london",
};

const areaBlurb: Record<AreaKey, string> = {
  "east-london":
    "Our base sits in the E1 arches, so Tower Hamlets, Hackney, Newham and the Docklands are the roads we know best.",
  "central-london":
    "Congestion Charge zone, ULEZ, red routes and restricted loading — central jobs are planned around access.",
  "north-london":
    "Islington, Camden, Haringey and out towards the North Circular for garage and dealer movements.",
  "south-london":
    "River crossings, Greenwich, Lewisham, Southwark and the southern suburbs.",
  "west-london":
    "Westminster through to the western boroughs and the A40/M4 corridor for longer transport runs.",
};

/** Rough stylised positions (%) for each quadrant chip on the diagram. */
const areaPos: Record<AreaKey, { x: number; y: number }> = {
  "north-london": { x: 50, y: 18 },
  "east-london": { x: 76, y: 50 },
  "central-london": { x: 50, y: 50 },
  "west-london": { x: 24, y: 50 },
  "south-london": { x: 50, y: 80 },
};

export function Coverage() {
  const [active, setActive] = useState<AreaKey>("east-london");
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="coverage" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
      <div ref={ref} className="reveal grid gap-9 lg:gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-eyebrow">Coverage</p>
          <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold leading-[1.05] sm:text-4xl sm:leading-[1.02] md:text-5xl">
            Vehicle Recovery Across London
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Based in London and serving customers across the capital and surrounding
            areas. Contact us with your collection and destination postcodes and we can
            confirm availability.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <button
                  type="button"
                  onClick={() => setActive(area.slug)}
                  aria-pressed={active === area.slug}
                  className={`min-h-11 rounded-full border px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                    active === area.slug
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface-2/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {area.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-5 min-h-[86px] rounded-xl border border-border bg-surface/60 p-5">
            <h3 className="font-display text-lg font-bold">
              Vehicle recovery in {serviceAreas.find((a) => a.slug === active)?.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {areaBlurb[active]}
            </p>
            <Link
              to={areaRoutes[active] as "/"}
              className="mt-3 inline-block font-display text-xs font-bold uppercase tracking-[0.16em] text-primary hover:underline"
            >
              View {serviceAreas.find((a) => a.slug === active)?.name} page
            </Link>
          </div>

          <div className="mt-6">
            <WhatsAppCta
              label="Send us your location"
              message={waMessages.location}
              size="lg"
            />
          </div>
        </div>

        {/* Stylised diagram — illustrative, not a live tracking map */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface/40 grid-lines">
          <svg
            viewBox="0 0 400 400"
            className="absolute inset-0 size-full"
            role="img"
            aria-label="Stylised diagram of London showing the five broad areas MPG Recovery covers"
          >
            <circle cx="200" cy="200" r="150" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="98" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="52" fill="none" stroke="oklch(1 0 0 / 0.14)" strokeWidth="1.5" />
            {/* Thames */}
            <path
              d="M20 250 C 90 230, 130 285, 200 268 S 320 225, 385 252"
              fill="none"
              stroke="oklch(0.55 0.07 240 / 0.5)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            {/* radial roads */}
            <g stroke="oklch(1 0 0 / 0.07)" strokeWidth="1.5">
              <line x1="200" y1="30" x2="200" y2="370" />
              <line x1="30" y1="200" x2="370" y2="200" />
              <line x1="70" y1="70" x2="330" y2="330" />
              <line x1="330" y1="70" x2="70" y2="330" />
            </g>
            {/* all area markers */}
            {serviceAreas.map((a) => {
              const p = areaPos[a.slug as AreaKey];
              const isActive = a.slug === active;
              const cx = (p.x / 100) * 400;
              const cy = (p.y / 100) * 400;
              return (
                <g key={a.slug} className="transition-opacity duration-500" opacity={isActive ? 1 : 0.55}>
                  <circle cx={cx} cy={cy} r={isActive ? 5.5 : 4} fill={isActive ? "var(--color-primary)" : "oklch(0.75 0.01 260)"} />
                  <text
                    x={cx}
                    y={cy - 14}
                    textAnchor="middle"
                    fill={isActive ? "var(--color-primary)" : "oklch(0.78 0.01 260)"}
                    fontSize="12"
                    fontWeight="700"
                    letterSpacing="1.2"
                    fontFamily="var(--font-display)"
                  >
                    {a.name.replace(" London", "").toUpperCase()}
                  </text>
                </g>
              );
            })}
            {/* active pin */}
            <circle
              cx={(areaPos[active].x / 100) * 400}
              cy={(areaPos[active].y / 100) * 400}
              r="26"
              fill="oklch(0.78 0.17 64 / 0.16)"
              className="transition-all duration-500"
            />

            {/* E1 base marker */}
            <g>
              <circle cx="288" cy="196" r="4" fill="oklch(0.98 0 0)" />
              <text x="298" y="200" fill="oklch(0.8 0.01 260)" fontSize="12" fontFamily="var(--font-display)">
                E1 base
              </text>
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Areas we regularly cover
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {coveredPlaces.map((place) => (
            <li
              key={place}
              className="rounded-full border border-border bg-surface-2/40 px-3.5 py-2 text-xs text-muted-foreground"
            >
              {place}
            </li>
          ))}
        </ul>
        <Link
          to="/areas-we-cover"
          className="mt-5 inline-block font-display text-xs font-bold uppercase tracking-[0.16em] text-primary hover:underline"
        >
          See all areas we cover
        </Link>
      </div>
    </section>
  );
}
