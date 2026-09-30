import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { serviceGroups } from "@/content/services";

const allServices = serviceGroups.flatMap((group) => group.items);

/**
 * Cards for the child pages that sit under a parent service page. Takes
 * routes rather than copy, so the names and blurbs stay the ones on /services.
 */
export function RelatedServices({ heading, routes }: { heading: string; routes: string[] }) {
  const items = routes
    .map((to) => allServices.find((service) => service.to === to))
    .filter((service) => service !== undefined);

  return (
    <section>
      <h2>{heading}</h2>
      {/* inline styles beat the Prose wrapper's list rules, which would add bullets */}
      <ul className="mt-5 grid gap-4 sm:grid-cols-2" style={{ listStyle: "none", paddingLeft: 0 }}>
        {items.map((item) => (
          <li key={item.to} style={{ marginTop: 0 }}>
            <Link
              to={item.to as "/"}
              className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/45"
            >
              <span className="font-display text-lg font-bold text-foreground">{item.name}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.blurb}
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Learn more
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
