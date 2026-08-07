import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { TransportRoute } from "@/components/sections/TransportRoute";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages, absoluteUrl } from "@/config/site";

const path = "/vehicle-transport-london";
const title = "Vehicle Transport London | Car Transport & Delivery | MPG Recovery";
const description =
  "Vehicle transport in London. Car collection and delivery for purchases, garages, dealers and auctions. Get a transport quote on WhatsApp or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "How do I request vehicle transport?",
    a: "Send the collection postcode, the delivery postcode, the vehicle make and model, and when it needs to move. We'll reply on WhatsApp in the same thread.",
  },
  {
    q: "Does the vehicle need to be taxed and insured?",
    a: "Not to travel on the bed of a transporter — that is one of the main reasons people use this service after a purchase. Check your own obligations for the vehicle once it is at its destination.",
  },
  {
    q: "Can you collect from an auction site or dealership?",
    a: "Yes, where the site allows third-party collection. Send us the release details, reference number and collection window and we can work to it.",
  },
];

export const Route = createFileRoute("/vehicle-transport-london")({
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
        children: JSON.stringify(serviceSchema("Vehicle Transport", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Vehicle Transport London", path }]),
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
        eyebrow="Vehicle transport"
        title="Vehicle Transport in London"
        intro="Moving a vehicle that doesn't need to be driven — a purchase, a sale, a garage visit or a relocation. Send both postcodes and the vehicle details for a quote."
        crumbs={[{ label: "Vehicle Transport London" }]}
        ctaLabel="Get a transport quote on WhatsApp"
        ctaMessage={waMessages.transport}
      />

      <TransportRoute />

      <Prose>
        <section>
          <h2>Vehicle collection and delivery</h2>
          <p>
            Transport work is planned rather than reactive. You tell us where the vehicle
            is now, where it needs to be, and roughly when — and it travels on the back of
            a transporter rather than on its own wheels. That keeps mileage off the clock
            and avoids the tax, insurance and MOT questions that come with driving a
            newly-bought car home.
          </p>
        </section>

        <section>
          <h2>Dealer purchases</h2>
          <p>
            Dealers rarely release a vehicle without a named collection slot and a
            reference. Send us the dealership address, the contact name, the reference and
            the release window, and we can work to it rather than turning up cold.
          </p>
        </section>

        <section>
          <h2>Private purchases</h2>
          <p>
            Buying privately usually means a residential street, a driveway or a lock-up.
            A photo of where the car sits, plus whether it starts and steers, tells us
            everything we need to know about loading it. If the seller is only around at
            certain times, say so early.
          </p>
        </section>

        <section>
          <h2>Garage and bodyshop movements</h2>
          <p>
            Moving a car in for work, between two specialists, or back home afterwards.
            Garage opening hours matter here — deliveries outside them usually need
            arranging with the garage first. See also{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery in London
            </Link>{" "}
            if the vehicle has already stopped running where it stands.
          </p>
        </section>

        <section>
          <h2>Relocation</h2>
          <p>
            Moving house, moving a second car to a family member, or putting a project
            vehicle into storage. Restricted access — height barriers, underground car
            parks, narrow mews — is worth flagging when you message.
          </p>
        </section>

        <section>
          <h2>Auction movements</h2>
          <p>
            Where the auction site permits third-party collection, send the lot number,
            release paperwork reference and the collection deadline. Auction sites are
            strict about windows, so the earlier we know, the better.
          </p>
        </section>

        <ContextualCta
          heading="Need a vehicle transported?"
          label="Get a quote on WhatsApp"
          message={waMessages.transport}
          event="transport_quote_click"
        />

        <section>
          <h2>Vehicle transport FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
