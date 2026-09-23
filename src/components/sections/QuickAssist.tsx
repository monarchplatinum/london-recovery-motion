import { Clock, Star, Receipt, Truck } from "lucide-react";
import { reviewSummary } from "@/content/reviews";

/**
 * Only claims the owner has confirmed, or that the Google profile states.
 * Nothing about licensing, accreditation or years in business — see CLAUDE.md.
 */
const items = [
  { icon: Clock, label: "24/7, day and night" },
  {
    icon: Star,
    label: `${reviewSummary.rating.toFixed(1)} from ${reviewSummary.count} Google reviews`,
  },
  { icon: Receipt, label: "Free quotes" },
  { icon: Truck, label: "Tilt-and-slide and winch" },
];

/**
 * Chips rather than bare text: the hero art sits behind this, and plain
 * labels disappeared into it. Each chip carries its own opaque background.
 */
export function TrustStrip({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap gap-2 ${compact ? "text-[0.7rem]" : "text-[0.68rem] sm:text-xs"}`}
      aria-label="Service indicators"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/95 px-3 py-1.5 font-display font-bold uppercase tracking-[0.1em] text-foreground shadow-sm backdrop-blur-sm sm:tracking-[0.12em]"
          >
            <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}

const assists = [
  {
    title: "Broken down?",
    copy: "Send your location and vehicle details on WhatsApp — it\u2019s the fastest way to reach us.",
  },
  {
    title: "Bought a vehicle?",
    copy: "Give us the collection and delivery postcodes and the make and model.",
  },
  {
    title: "Going to a garage?",
    copy: "Tell us whether the vehicle runs, rolls and steers, and where it needs to be.",
  },
];

/** Quick assistance bar directly under the hero. */
export function QuickAssist() {
  return (
    <section aria-label="Quick assistance" className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:gap-6 sm:px-6 sm:py-8 md:grid-cols-3">
        {assists.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border/70 bg-surface-2/40 p-4 md:border-0 md:bg-transparent md:p-0"
          >
            <h2 className="font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-primary sm:text-sm sm:tracking-[0.18em]">
              {item.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
