import { useState } from "react";
import { MapPin, Flag } from "lucide-react";
import { useReveal } from "@/hooks/use-motion";

const examples = [
  { from: "Auction site", to: "Your driveway" },
  { from: "Private seller", to: "Your garage" },
  { from: "Home", to: "Specialist workshop" },
  { from: "Dealership", to: "Storage facility" },
];

/** Interactive collection → destination visual for the transport page. */
export function TransportRoute() {
  const [active, setActive] = useState(0);
  const ref = useReveal<HTMLDivElement>();
  const current = examples[active]!;

  return (
    <section className="border-b border-border bg-surface/30">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          Collection to destination
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Every transport job is two points and a vehicle. Pick an example to see the
          shape of it.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {examples.map((example, i) => (
            <button
              key={example.from + example.to}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`min-h-11 rounded-full border px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-surface-2/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {example.from}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background/60 p-6">
          <div className="flex items-center gap-4">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate font-display text-base font-bold">
                {current.from}
              </span>
            </div>
            <svg
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="hidden h-5 flex-[2] sm:block"
            >
              <line x1="0" y1="10" x2="200" y2="10" stroke="oklch(1 0 0 / 0.14)" strokeWidth="2" />
              <line
                x1="0"
                y1="10"
                x2="200"
                y2="10"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="12 12"
                className="road-dash"
              />
            </svg>
            <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
              <span className="truncate font-display text-base font-bold">{current.to}</span>
              <Flag className="size-5 shrink-0 text-primary" aria-hidden="true" />
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Send us both postcodes plus the vehicle make and model and we&rsquo;ll come
            back with the detail.
          </p>
        </div>
      </div>
    </section>
  );
}
