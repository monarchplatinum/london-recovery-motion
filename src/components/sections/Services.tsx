import { Link } from "@tanstack/react-router";
import {
  Truck,
  BatteryWarning,
  ShieldAlert,
  Container,
  PackageCheck,
  Wrench,
  Gavel,
  ArrowUpRight,
} from "lucide-react";
import { useReveal } from "@/hooks/use-motion";

const services = [
  {
    icon: Truck,
    title: "Vehicle Recovery",
    copy: "For vehicles that need recovering and moving safely from one location to another.",
    to: "/vehicle-recovery-london",
  },
  {
    icon: BatteryWarning,
    title: "Breakdown Recovery",
    copy: "For non-running or stranded vehicles requiring collection.",
    to: "/breakdown-recovery-london",
  },
  {
    icon: ShieldAlert,
    title: "Accident Recovery",
    copy: "Vehicle movement following an accident where suitable and safe to do so.",
    to: "/accident-recovery-london",
  },
  {
    icon: Container,
    title: "Vehicle Transportation",
    copy: "Transport vehicles between homes, garages, dealerships, auctions, storage facilities and other destinations.",
    to: "/vehicle-transport-london",
  },
  {
    icon: PackageCheck,
    title: "Car Collection & Delivery",
    copy: "Useful for vehicle purchases, sales, repairs and relocations.",
    to: "/vehicle-transport-london",
  },
  {
    icon: Wrench,
    title: "Garage Transport",
    copy: "Move a vehicle to or from a garage or repair centre.",
    to: "/vehicle-transport-london",
  },
  {
    icon: Gavel,
    title: "Auction / Dealer Transport",
    copy: "Transportation for vehicles purchased or sold through automotive businesses and auctions.",
    to: "/vehicle-transport-london",
  },
] as const;

export function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
      <div ref={ref} className="reveal">
        <p className="text-eyebrow">What we do</p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-[1.8rem] font-extrabold leading-[1.05] sm:text-4xl sm:leading-[1.02] md:text-5xl">
          Breakdown & Vehicle Transportation
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Recovery and transport work across London and the surrounding areas. Send the
          vehicle details and locations and we&rsquo;ll take it from there.
        </p>
      </div>

      <ul className="mt-8 grid gap-3.5 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.title} data-reveal-child className="reveal">
              <Link
                to={service.to as "/"}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/60 p-5 transition-all sm:p-6 duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-surface-2/70"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold sm:mt-5 sm:text-xl">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <span className="mt-4 inline-flex sm:mt-5 items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  Read more
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
