import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import pageImg from "@/assets/jobs/mpg-recovery-auction-collection-copart.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/auction-vehicle-collection-london";
const title = "Auction Vehicle Collection London | MPG Recovery";
const description =
  "Auction vehicle collection and delivery from BCA, Copart, Manheim and Aston Barclay to anywhere in London or the UK. Non-runners and untaxed vehicles carried on the bed.";

const faqs: FaqItem[] = [
  {
    q: "Which auction sites do you collect from?",
    a: "BCA, Copart, Manheim and Aston Barclay among others, across the country rather than only around London. Send the site and we will confirm.",
  },
  {
    q: "What do you need from me to collect?",
    a: "The site, the lot or release reference, the collection deadline, and whatever release paperwork or gate pass the auction has issued to you. Auctions will not release a vehicle without it.",
  },
  {
    q: "Can you collect a non-runner or an unregistered vehicle?",
    a: "Yes. Salvage and non-runners are the normal case at Copart in particular. The vehicle is winched onto the bed and carried, so it does not need to start, be taxed or be insured to travel.",
  },
];

export const Route = createFileRoute("/auction-vehicle-collection-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.transport }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Auction Vehicle Collection", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Auction Vehicle Collection", path },
          ]),
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
        eyebrow="Auction collection"
        title="Auction Vehicle Collection and Delivery"
        intro="Bought at BCA, Copart, Manheim or Aston Barclay? We collect within the auction's window and deliver to your home, garage or forecourt. The vehicle does not need to be driveable."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Auction Vehicle Collection" }]}
        ctaLabel="WhatsApp for a collection quote"
        ctaMessage={waMessages.transport}
      />

      <Prose>
        <section>
          <p>
            Buying at auction is the easy part. Getting the vehicle home is where people get
            caught out — the collection window is short, the storage charges start
            immediately, and plenty of lots cannot legally be driven away. MPG Recovery
            collects from the major auction groups and delivers anywhere in London or the
            wider UK.
          </p>
        </section>

        <section>
          <h2>Working to the auction's window</h2>
          <p>
            Most sites give you a few days before storage charges begin, and some are
            stricter than that. They also have their own release procedures: paperwork that
            must match, gate passes, and collection hours that do not always suit.
          </p>
          <p>
            Send us the site, the lot or release reference and the deadline as soon as you
            have them. The earlier we know, the easier it is to fit the collection in before
            charges start rather than after.
          </p>
        </section>

        <InlineFigure
          src={pageImg}
          alt="A car collected from a Copart auction site on the MPG Recovery transporter"
          caption="A collection from a Copart site, loaded and ready to deliver."
          width={576}
          height={778}
        />

        <section>
          <h2>Non-runners, salvage and untaxed lots</h2>
          <p>
            A great many auction cars cannot be driven off the site. Salvage categories,
            vehicles with no keys, cars that will not start, and anything without tax or
            insurance in the buyer's name. None of that matters when the vehicle is carried.
          </p>
          <p>
            It goes on the bed with the winch, is strapped by the wheels, and travels
            without adding a mile to the odometer. That last point matters more than people
            expect on a car bought to sell on.
          </p>
        </section>

        <section>
          <h2>Trade and dealer collections</h2>
          <p>
            Dealers and traders use the same service for stock movements: several lots in a
            day, deliveries out to their own customers, and part-exchange collections on the
            way back. If you buy regularly, tell us the pattern and we will work to it
            rather than treating each job as a one-off.
          </p>
        </section>

        <section>
          <h2>What it costs</h2>
          <p>
            Distance is the main factor, then whether the vehicle rolls and steers and how
            quickly it has to happen. The quote is free and fixed before we set off, so the
            price agreed is the price paid — which makes it easy to work out whether a
            bargain at a distant site is still a bargain once it is home.
          </p>
        </section>

        <section>
          <h2>Part of our transport work</h2>
          <p>
            Auction collection is the busiest part of our transport work, and the deadlines are what make it worth arranging early. For planned movements of every kind, see{" "}
            <Link to="/vehicle-transport-london" className="text-primary hover:underline">
              vehicle transport in London
            </Link>
            , or browse{" "}
            <Link to="/services" className="text-primary hover:underline">
              all our services
            </Link>
            .
          </p>
        </section>


        <section>
          <h2>Worth checking before you bid</h2>
          <p>
            Two things decide what collection will cost you: where the site is, and whether
            the vehicle runs. A cheap lot two hundred miles away that will not start is a
            different proposition to the same car at a London site with keys in the office.
            It is worth knowing both before the hammer falls rather than after.
          </p>
          <p>
            Check the collection deadline and when storage charges begin, whether keys are
            included, and whether the V5 is with the vehicle or following by post. Send us
            the site and the lot and we can price the collection while you are still
            deciding, so the delivered cost is part of the sum rather than a surprise
            afterwards.
          </p>
        </section>

        <ContextualCta
          heading="Bought a car at auction?"
          label="Message us on WhatsApp"
          message={waMessages.transport}
          event="transport_quote_click"
        />

        <section>
          <h2>Auction Vehicle Collection FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
