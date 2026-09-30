import { Link } from "@tanstack/react-router";
import doorway from "@/assets/arch-doorway-wide.webp";
import { reviewSummary } from "@/content/reviews";
import { siteConfig } from "@/config/site";

/**
 * Caleb's about/credentials section: who the business is, stated as
 * checkable facts rather than claims. Nothing here that the owner or the
 * Google profile has not confirmed — see CLAUDE.md.
 */
export function Credentials() {
  const { address } = siteConfig;

  const facts = [
    { k: "Company", v: `${siteConfig.legalName}, No. ${siteConfig.companyNumber}` },
    { k: "Base", v: `${address.line1}, ${address.line2}, ${address.postcode}` },
    { k: "Hours", v: "24 hours a day, 7 days a week" },
    { k: "Insurance", v: "Business hire and reward cover" },
    { k: "Equipment", v: "Tilt-and-slide bed with winch" },
    { k: "Rating", v: `${reviewSummary.rating.toFixed(1)} from ${reviewSummary.count} Google reviews` },
  ];

  return (
    <section aria-labelledby="credentials-heading" className="border-t border-foreground/10">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        <img
          src={doorway}
          alt="The MPG Recovery van in the doorway of Arch 90 on Tent Street, London E1"
          width={2000}
          height={1124}
          loading="lazy"
          decoding="async"
          className="h-72 w-full object-cover sm:h-96 lg:h-full"
        />
        <div className="px-4 py-14 sm:px-10 sm:py-20 lg:px-16">
          <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
            About MPG Recovery
          </p>
          <h2
            id="credentials-heading"
            className="mt-3 text-balance font-display text-[2rem] font-bold leading-tight sm:text-[2.6rem]"
          >
            A London recovery firm working out of the E1 arches
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            MPG Recovery runs from a railway arch on Tent Street, between Bethnal Green and
            Whitechapel, which is why East London and the Docklands are the ground we cover
            most. We handle recovery and transport across the rest of London and the
            surrounding areas too, and long-distance moves anywhere in the UK.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            There is no call centre. You message or ring one number, you speak to the
            people who do the job, and the price is agreed before anything moves.
          </p>

          <dl className="mt-8 grid gap-x-8 border-t border-foreground/10 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.k} className="border-b border-foreground/10 py-3">
                <dt className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {fact.k}
                </dt>
                <dd className="mt-1 text-sm">{fact.v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="mt-7 inline-block font-display text-sm font-bold uppercase tracking-wide underline underline-offset-4 hover:text-primary"
          >
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}
