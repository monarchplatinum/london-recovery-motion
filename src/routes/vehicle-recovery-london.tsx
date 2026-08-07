import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages, absoluteUrl } from "@/config/site";

const path = "/vehicle-recovery-london";
const title = "Vehicle Recovery London | Car Recovery & Towing | MPG Recovery";
const description =
  "Vehicle recovery in London from MPG Recovery. Non-runners, breakdowns and vehicle relocation moved on a recovery truck. WhatsApp or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Do you recover non-running vehicles?",
    a: "Yes. Let us know whether the vehicle rolls and steers, whether the keys are available and how it is currently parked, as that changes how it is loaded.",
  },
  {
    q: "Can you recover a vehicle from a car park or private land?",
    a: "In many cases, yes, provided there is safe access and the necessary permission from the landowner or operator. Send a photo of where the vehicle is parked and we can tell you whether it is workable.",
  },
  {
    q: "Can the vehicle be delivered to my home instead of a garage?",
    a: "Yes. The destination is your choice — a home address, a garage, a storage facility or another address entirely. Just include it when you message us.",
  },
];

export const Route = createFileRoute("/vehicle-recovery-london")({
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
        children: JSON.stringify(
          serviceSchema("Vehicle Recovery", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Vehicle Recovery London", path }]),
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
        eyebrow="Vehicle recovery"
        title="Vehicle Recovery in London"
        intro="If a vehicle needs lifting onto a recovery truck and moving somewhere else in London, that's the job. Send the location, the destination and a few details about the vehicle."
        crumbs={[{ label: "Vehicle Recovery London" }]}
        ctaLabel="WhatsApp for vehicle recovery"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <h2>Non-running vehicles</h2>
          <p>
            A vehicle that won&rsquo;t start, won&rsquo;t select a gear or has a
            mechanical fault serious enough to stop it being driven needs to travel on the
            bed rather than under its own power. The two things that matter most to us are
            whether it rolls and whether it steers — that decides how it comes onto the
            truck.
          </p>
          <p>
            If the keys are missing, the handbrake is seized or the vehicle is boxed in,
            say so up front. It changes the equipment and the time needed, and it is
            better known before we set off than on arrival.
          </p>
        </section>

        <section>
          <h2>Breakdown situations</h2>
          <p>
            Roadside breakdowns in London come with their own complications: red routes,
            bus lanes, permit bays and camera-enforced restrictions. Send your exact
            location — a WhatsApp location pin or a Google Maps link is ideal — along with
            the road name and anything nearby that identifies the spot.
          </p>
          <p>
            If you are in a live traffic lane, get yourself somewhere safe first and call
            the emergency services if there is any risk to people. See our{" "}
            <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
              breakdown recovery page
            </Link>{" "}
            for more.
          </p>
        </section>

        <section>
          <h2>Vehicle relocation</h2>
          <p>
            Not every recovery starts with a fault. Vehicles get moved because a lease has
            ended, a project car is going into storage, a driveway is being resurfaced or
            a car has been off the road long enough that it is no longer taxed or insured.
            Those all move the same way.
          </p>
        </section>

        <section>
          <h2>Transport to garages, home or another destination</h2>
          <p>
            Plenty of independent garages and specialists don&rsquo;t run their own
            recovery vehicle, so the customer has to arrange collection. Give us both
            addresses and the garage&rsquo;s opening times and we can plan around them.
            For planned, non-urgent movements, see{" "}
            <Link to="/vehicle-transport-london" className="text-primary hover:underline">
              vehicle transport in London
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>How to enquire</h2>
          <ul>
            <li>Collection location or postcode</li>
            <li>Destination address or postcode</li>
            <li>Vehicle make, model and approximate year</li>
            <li>Whether it runs, rolls and steers</li>
            <li>Whether the keys are available</li>
            <li>When it needs moving</li>
          </ul>
          <p>
            Photos of the vehicle and how it is parked are genuinely useful — a picture of
            a low car on a tight kerb tells us more than a paragraph.
          </p>
        </section>

        <section>
          <h2>Our London service area</h2>
          <p>
            MPG Recovery works out of the railway arches in E1, so East London and the
            Docklands are the most familiar ground, but recovery work runs across{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              Central, North, South and West London
            </Link>{" "}
            and the surrounding areas too. Send both postcodes and we can confirm
            availability.
          </p>
        </section>

        <ContextualCta
          heading="Need recovery?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Vehicle recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
