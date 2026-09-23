import { Link } from "@tanstack/react-router";
import { MessageCircle, Star, CarFront, ClipboardList } from "lucide-react";
import { reviewSummary } from "@/content/reviews";
import transportImg from "@/assets/gallery/mpg-recovery-car-loaded-on-bed.jpg";
import archImg from "@/assets/mpg-arch-e1.jpg";
import { WhatsAppCta } from "@/components/cta/Cta";
import { waMessages } from "@/config/site";
import { useReveal } from "@/hooks/use-motion";

/**
 * Specific, checkable claims only. The rating comes from the reviews file;
 * hours, quotes and equipment are confirmed by the owner. Do not add
 * licensing, accreditation or years-in-business claims here — see CLAUDE.md.
 */
const reasons = [
  {
    icon: MessageCircle,
    title: "Answered day or night",
    copy: "We are on call 24 hours a day, every day of the year. WhatsApp or ring and you get a person, not a queue.",
  },
  {
    icon: Star,
    title: `${reviewSummary.rating.toFixed(1)} from ${reviewSummary.count} Google reviews`,
    copy: "Every review on our Google profile is five stars. Read them before you call.",
  },
  {
    icon: ClipboardList,
    title: "Free quotes, price agreed first",
    copy: "Quotes cost nothing. We confirm the price before anything is arranged, so the figure doesn't move later.",
  },
  {
    icon: CarFront,
    title: "Kit that moves non-runners",
    copy: "Tilt-and-slide bed and a winch, so a car that won't start, roll or steer still travels on the bed rather than being dragged.",
  },
];

export function WhyChoose() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-y border-border bg-surface/30">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <p className="text-eyebrow">Why MPG Recovery</p>
        <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">
          Why People Call Us
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} data-reveal-child className="reveal">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TransportSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
      <div ref={ref} className="reveal grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={transportImg}
            alt="A car strapped down on the deck of the MPG Recovery flatbed truck at dusk"
            width={1242}
            height={1170}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-eyebrow">Vehicle transport</p>
          <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold leading-[1.05] sm:text-4xl sm:leading-[1.02]">
            Vehicle Transport From A to B
          </h2>
          <p className="mt-4 text-muted-foreground">
            Bought a car at auction, sold one to a buyer across town, or need something
            moved to a specialist? Send the collection postcode, the delivery postcode and
            the make and model, and we&rsquo;ll come back with the detail.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <li>Dealer and private purchases collected and delivered</li>
            <li>Garage, bodyshop and specialist movements</li>
            <li>Auction and trade movements</li>
            <li>Relocations and long-term storage moves</li>
          </ul>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppCta
              label="Get a quote"
              message={waMessages.transport}
              event="transport_quote_click"
              size="lg"
              className="sm:whitespace-nowrap"
            />
            <Link
              to="/vehicle-transport-london"
              className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:border-primary/60 hover:text-primary"
            >
              Vehicle transport London
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

const scenarios = [
  {
    title: "It won't start on a side street",
    copy: "Non-runner in a residential bay or a permit street. Tell us the postcode, whether it rolls and steers, and where it needs to go.",
  },
  {
    title: "The garage can't collect it",
    copy: "Plenty of repairers don't run recovery. We collect from you and deliver to their door.",
  },
  {
    title: "You've just bought it",
    copy: "Purchased online or at auction and it isn't road legal or insured yet — it travels on the bed instead.",
  },
  {
    title: "Damaged after an incident",
    copy: "Where it's safe and suitable to move, send us the location and vehicle details and we'll discuss recovery.",
  },
];

export function Scenarios() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden border-y border-border">
      <img
        src={archImg}
        alt="The MPG Recovery van inside the railway arch workshop in E1, East London"
        width={1600}
        height={899}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div ref={ref} className="reveal relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <p className="text-eyebrow">Common situations</p>
        <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">
          Recovery Services in East London
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A few of the situations customers contact us about. If yours isn&rsquo;t listed,
          message us anyway and describe the vehicle and location.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              data-reveal-child
              className="reveal surface-panel rounded-xl p-6"
            >
              <h3 className="font-display text-lg font-bold">{scenario.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {scenario.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
