import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { WhatsAppCta, CallCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/breakdown-recovery-london";
const title = "Breakdown Recovery London | Broken Down Car Collection | MPG Recovery";
const description =
  "Broken down in London? MPG Recovery collects non-running vehicles and moves them where they need to be. WhatsApp your location or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "What should I do first if I break down?",
    a: "Get yourself and any passengers somewhere safe, away from live traffic. If anyone is at risk, or you have stopped on a motorway or a fast dual carriageway, contact the emergency services first. Then message us with your location.",
  },
  {
    q: "What do you need to know about the vehicle?",
    a: "Whether it rolls and steers, whether the keys are available, the make and model, and how it is parked. A photo of the vehicle where it sits answers most of this at once.",
  },
  {
    q: "Where can the vehicle be taken?",
    a: "Wherever you need it — a garage, your home address, a storage facility or another address. Tell us the destination when you message and we can confirm.",
  },
];

export const Route = createFileRoute("/breakdown-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Breakdown Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Breakdown Recovery London", path }]),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Breakdown recovery"
        title="Breakdown Recovery in London"
        intro="Vehicle stopped and won't restart? Message MPG Recovery with your location and we'll talk through collecting it and where it needs to go."
        crumbs={[{ label: "Breakdown Recovery London" }]}
        ctaLabel="Send my location on WhatsApp"
        ctaMessage={waMessages.breakdown}
      />

      {/* Fast-contact panel kept high on the page for stranded visitors */}
      <section className="border-b border-border bg-primary/10">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-8 sm:px-6">
          <h2 className="font-display text-xl font-extrabold">Stopped right now?</h2>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li>1. Move somewhere safe, away from moving traffic.</li>
            <li>
              2. If anyone is in danger, or you are on a motorway or fast dual
              carriageway, contact the emergency services first.
            </li>
            <li>3. Send us your location, the vehicle and what happened.</li>
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta
              label="WhatsApp my location"
              message={waMessages.breakdown}
              size="lg"
            />
            <CallCta size="lg" />
          </div>
        </div>
      </section>

      <Prose>
        <section>
          <h2>What counts as a breakdown job</h2>
          <p>
            Anything that has left a vehicle where it should not be: a car that won&rsquo;t
            crank, a van that lost drive, an EV that stopped charging, a clutch that has
            gone, a gearbox stuck in gear. If it cannot be driven safely, it travels on the
            truck.
          </p>
        </section>

        <section>
          <h2>Sending your location accurately</h2>
          <p>
            London street names repeat across boroughs, so a name alone is rarely enough.
            The most reliable options, in order: a WhatsApp location pin, a Google Maps
            link, a full postcode, then a street name plus a nearby landmark. If you are in
            an underground car park, tell us the level and the height restriction.
          </p>
        </section>

        <section>
          <h2>Details that speed things up</h2>
          <ul>
            <li>Make, model and rough age of the vehicle</li>
            <li>Whether it rolls freely and whether the steering unlocks</li>
            <li>Whether the keys are with you</li>
            <li>Whether it is on a red route, in a bay, or on private land</li>
            <li>Where you want it taken</li>
          </ul>
        </section>

        <section>
          <h2>Where the vehicle goes next</h2>
          <p>
            Most breakdowns end at a garage or at home. If you don&rsquo;t yet know, that
            is fine — say so, and we can talk it through. Related:{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery in London
            </Link>{" "}
            and{" "}
            <Link to="/vehicle-transport-london" className="text-primary hover:underline">
              vehicle transport in London
            </Link>
            .
          </p>
          <p>
            We don&rsquo;t publish arrival times, because London traffic makes any promise
            of that kind unreliable. Message or call and we&rsquo;ll tell you honestly
            what we can do.
          </p>
        </section>

        <section>
          <h2>Breakdown recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
