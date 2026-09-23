import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceGroups, serviceCount } from "@/content/services";
import { siteConfig, absoluteUrl, waMessages } from "@/config/site";

const path = "/services";
const title = "Vehicle Recovery & Transport Services London | MPG Recovery";
const description =
  "Every service MPG Recovery offers in London: breakdown and accident recovery, non-runners, motorcycles, EVs, underground car parks, auction collection and UK transport.";

function serviceListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteConfig.name} services`,
    description,
    url: absoluteUrl(path),
    about: { "@id": absoluteUrl("/#business") },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: serviceCount,
      itemListElement: serviceGroups.flatMap((group) =>
        group.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: item.name,
            description: item.blurb,
            serviceType: item.name,
            provider: { "@id": absoluteUrl("/#business") },
            areaServed: { "@type": "City", name: "London" },
            url: absoluteUrl(item.to),
          },
        })),
      ),
    },
  };
}

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceListSchema()) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Services", path }])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Vehicle Recovery and Transport Services in London"
        intro="Everything MPG Recovery handles, from a car that will not start on a side street to a vehicle bought at auction three counties away. If what you need is not listed, message us anyway and describe the job."
        crumbs={[{ label: "Services" }]}
        ctaLabel="WhatsApp MPG Recovery"
        ctaMessage={waMessages.general}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        {serviceGroups.map((group) => (
          <div key={group.heading} className="mb-14 last:mb-0">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              <Link to={group.to as "/"} className="hover:text-primary">
                {group.heading}
              </Link>
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">{group.intro}</p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to as "/"}
                    className="group flex h-full flex-col rounded-xl border border-border bg-surface/60 p-5 transition-colors hover:border-primary/45 hover:bg-surface-2/70"
                  >
                    <h3 className="font-display text-lg font-bold">{item.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {item.hasOwnPage ? "Read more" : `See ${group.heading.toLowerCase()}`}
                      <ArrowUpRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <ContextualCta
          heading="Not sure which one you need?"
          label="Describe it on WhatsApp"
          message={waMessages.general}
          event="recovery_enquiry_click"
        />

        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Every job runs across{" "}
          <Link to="/areas-we-cover" className="text-primary hover:underline">
            London and the surrounding areas
          </Link>
          , quotes are free, and we are on call 24 hours a day. See{" "}
          <Link to="/reviews" className="text-primary hover:underline">
            what customers say
          </Link>{" "}
          or look through the{" "}
          <Link to="/gallery" className="text-primary hover:underline">
            photo gallery
          </Link>
          .
        </p>
      </section>

      <ContactSection />
    </>
  );
}
