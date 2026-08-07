import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageParts";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { absoluteUrl, coveredPlaces, waMessages } from "@/config/site";

const path = "/areas-we-cover";
const title = "Areas We Cover | Vehicle Recovery Across London | MPG Recovery";
const description =
  "The London areas MPG Recovery covers for vehicle recovery and transport, from our E1 base across East, Central, North, South and West London.";

const areas = [
  {
    to: "/vehicle-recovery-east-london",
    name: "East London",
    blurb:
      "Home ground. Tower Hamlets, Whitechapel, Bethnal Green, Bow, Mile End, Hackney, Stratford, Canary Wharf, Newham, Barking and Romford.",
  },
  {
    to: "/vehicle-recovery-central-london",
    name: "Central London",
    blurb:
      "The City, Westminster, Holborn, Clerkenwell and Soho — planned around the Congestion Charge zone, red routes and loading restrictions.",
  },
  {
    to: "/vehicle-recovery-north-london",
    name: "North London",
    blurb:
      "Islington, Camden, Haringey, Tottenham, Finsbury Park, Enfield and Barnet, out towards the North Circular.",
  },
  {
    to: "/vehicle-recovery-south-london",
    name: "South London",
    blurb:
      "Greenwich, Lewisham, Southwark, Bermondsey, Peckham, Woolwich and Croydon, across whichever crossing works best.",
  },
  {
    to: "/vehicle-recovery-west-london",
    name: "West London",
    blurb:
      "Kensington and Chelsea, Hammersmith, Notting Hill, Ealing, Chiswick and Hounslow along the A40 and M4 corridor.",
  },
];

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) || path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Areas We Cover", path }])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Areas We Cover"
        intro="MPG Recovery works across London and the surrounding areas. Send your collection and destination postcodes and we can confirm availability for your job."
        crumbs={[{ label: "Areas We Cover" }]}
        ctaLabel="Send us your postcodes"
        ctaMessage={waMessages.transport}
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <ul className="grid gap-4 sm:grid-cols-2">
          {areas.map((area) => (
            <li key={area.name}>
              <Link
                to={area.to as "/"}
                className="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/45"
              >
                <h2 className="font-display text-xl font-bold">
                  Vehicle Recovery {area.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-extrabold">
            Places we&rsquo;re regularly asked about
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This list isn&rsquo;t exhaustive. If your area isn&rsquo;t here, message us
            with the postcodes anyway.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {coveredPlaces.map((place) => (
              <li
                key={place}
                className="rounded-full border border-border bg-surface-2/40 px-3.5 py-2 text-xs text-muted-foreground"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
