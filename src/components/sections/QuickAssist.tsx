import { MapPin, Truck, Container, MessageSquare } from "lucide-react";

const items = [
  { icon: MapPin, label: "London Based" },
  { icon: Truck, label: "Vehicle Recovery" },
  { icon: Container, label: "Vehicle Transport" },
  { icon: MessageSquare, label: "Direct Contact" },
];

export function TrustStrip({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={`flex flex-wrap gap-x-5 gap-y-3 ${compact ? "text-[0.7rem]" : "text-xs"}`}
      aria-label="Service indicators"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.label}
            className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-[0.14em] text-muted-foreground"
          >
            <Icon className="size-4 text-primary" aria-hidden="true" />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}

/** Quick assistance bar directly under the hero. */
export function QuickAssist() {
  return (
    <section aria-label="Quick assistance" className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Broken down?
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Send your location and vehicle details on WhatsApp — it&rsquo;s the fastest way
            to reach us.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Bought a vehicle?
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Give us the collection and delivery postcodes and the make and model.
          </p>
        </div>
        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Going to a garage?
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Tell us whether the vehicle runs, rolls and steers, and where it needs to be.
          </p>
        </div>
      </div>
    </section>
  );
}
