import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages, absoluteUrl } from "@/config/site";

const path = "/accident-recovery-london";
const title = "Accident Vehicle Recovery London | Damaged Car Removal | MPG Recovery";
const description =
  "Accident vehicle recovery in London. If your vehicle needs moving after an accident, contact MPG Recovery with the location and vehicle details. Call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Can you move a damaged vehicle?",
    a: "Where it is safe and suitable to do so, yes. Send the location, the vehicle details and photographs of the damage so the position can be assessed before anything is arranged.",
  },
  {
    q: "Should I contact anyone else first?",
    a: "If anyone is injured or the road is blocked, contact the emergency services first. You may also need to notify your insurer — we do not give legal or insurance advice.",
  },
  {
    q: "What if the vehicle cannot roll or steer?",
    a: "Tell us that when you message. Wheels that will not turn or steering that is locked change how a vehicle can be loaded, and it is important we know before arriving.",
  },
];

export const Route = createFileRoute("/accident-recovery-london")({
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
        children: JSON.stringify(serviceSchema("Accident Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Accident Recovery London", path }]),
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
        eyebrow="Accident recovery"
        title="Accident Vehicle Recovery in London"
        intro="If your vehicle needs moving following an accident, contact MPG Recovery with the location and vehicle details to discuss recovery."
        crumbs={[{ label: "Accident Recovery London" }]}
        ctaLabel="Message MPG Recovery"
        ctaMessage={waMessages.accident}
      />

      <Prose>
        <section>
          <h2>Safety comes first</h2>
          <p>
            If anyone is injured, if the vehicle is in a dangerous position, or if the road
            is obstructed, contact the emergency services before anything else. Recovery
            can be arranged once the scene is safe and the vehicle is cleared for removal.
          </p>
        </section>

        <section>
          <h2>What to send us</h2>
          <ul>
            <li>The exact location — a map pin or full postcode</li>
            <li>Vehicle make, model and registration if appropriate</li>
            <li>Whether the vehicle rolls and steers</li>
            <li>Photographs of the damage and of how the vehicle is sitting</li>
            <li>Where the vehicle needs to be taken</li>
          </ul>
          <p>
            Photographs matter more here than on any other kind of job. Damage to wheels,
            suspension or bodywork determines whether a vehicle can be winched or whether a
            different approach is needed.
          </p>
        </section>

        <section>
          <h2>Where the vehicle goes</h2>
          <p>
            Bodyshops, assessors and storage facilities all have their own procedures for
            accepting a damaged vehicle. Confirm with the destination that they will
            receive it, and let us know any reference they have given you.
          </p>
        </section>

        <section>
          <h2>Insurance and legal matters</h2>
          <p>
            MPG Recovery moves vehicles. We do not give legal advice, handle claims or
            advise on liability — speak to your insurer or a qualified adviser for that.
            If your insurer has already appointed a recovery operator, follow their
            instructions.
          </p>
        </section>

        <section>
          <h2>Related services</h2>
          <p>
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              Vehicle recovery in London
            </Link>{" "}
            covers general recovery work, and{" "}
            <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
              breakdown recovery
            </Link>{" "}
            covers vehicles that have stopped through a fault rather than an incident.
          </p>
        </section>

        <ContextualCta
          heading="Vehicle needs moving after an accident?"
          label="Message us on WhatsApp"
          message={waMessages.accident}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Accident recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
