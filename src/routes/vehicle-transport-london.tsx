import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import auctionImg from "@/assets/jobs/mpg-recovery-auction-collection-bca.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { TransportRoute } from "@/components/sections/TransportRoute";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/vehicle-transport-london";
const title = "Vehicle Transport London | Car Transport & Delivery | MPG Recovery";
const description =
  "Vehicle transport in London. Car collection and delivery for purchases, garages, dealers and auctions. Get a transport quote on WhatsApp or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Can you collect a car I have bought at auction?",
    a: "Yes. We collect from BCA, Copart, Manheim and Aston Barclay among others, and deliver to your home, garage or forecourt. Send the site, the release or lot reference and the collection deadline, as most auctions charge storage after a few days.",
  },
  {
    q: "Does the vehicle need to be taxed and insured?",
    a: "Not to travel on our bed. The vehicle is carried rather than driven, so it does not need to be road legal at the point of collection. It will need to be taxed and insured before you drive it yourself.",
  },
  {
    q: "Will transport add mileage to my car?",
    a: "No. The vehicle sits on the bed for the whole journey, so no mileage is added and nothing wears — which matters on classics, low mileage cars and anything being sold.",
  },
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
    meta: seoMeta({ title, description, path, image: OG_IMAGES.transport }),
    links: canonical(path),
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
          <p>
            Not every job starts with something going wrong. A car bought online three
            counties away, a sale that needs delivering to the buyer, a project going into
            storage, or a vehicle heading to a specialist who does not run recovery of their
            own. MPG Recovery moves vehicles on the bed rather than towing them, so nothing
            has to be driven, taxed or insured to travel.
          </p>
        </section>

        <section>
          <h2>Vehicle collection and delivery</h2>
          <p>
            The job is simple to describe: collect from one address, deliver to another.
            What makes it work is the detail. Send the collection postcode, the delivery
            postcode, the make and model, and when it needs to happen, and we can price it
            properly rather than guessing.
          </p>
          <p>
            Collections can be made where you are not present, by arrangement — a common
            need on private sales and house moves, where the seller is at work and the buyer
            is two hundred miles away. Tell us who will be there and how they can be
            reached.
          </p>
        </section>

        <InlineFigure
          src={auctionImg}
          alt="A car loaded at a BCA auction site ready for delivery by MPG Recovery"
          caption="An auction collection loaded and strapped, ready for delivery."
          width={576}
          height={778}
        />

        <section>
          <h2>Auction and dealer collections</h2>
          <p>
            Auction sites run to their own rules. Vehicles have release paperwork, collection
            windows and storage charges that start the moment the window closes, and many
            lots are non-runners, untaxed or unregistered. None of that stops a vehicle
            travelling on a bed.
          </p>
          <p>
            We{" "}
            <Link
              to="/auction-vehicle-collection-london"
              className="text-primary hover:underline"
            >
              collect from BCA, Copart, Manheim and Aston Barclay
            </Link>{" "}
            among others. Send the site, the lot or release reference, and the deadline, and
            we will work to it.
            Dealers and traders can arrange stock movements, part-exchange collections and
            deliveries to their own customers the same way, including several moves in one
            day.
          </p>
        </section>

        <section>
          <h2>Garage, bodyshop and specialist movements</h2>
          <p>
            Plenty of independent garages and specialists have no recovery vehicle of their
            own, so it falls to the customer to arrange collection. We handle{" "}
            <Link
              to="/garage-bodyshop-transfers-london"
              className="text-primary hover:underline"
            >
              garage and bodyshop transfers
            </Link>{" "}
            across London — give us both addresses and the garage&rsquo;s opening times and
            we can plan around them.
          </p>
          <p>
            Mid-repair and part-stripped vehicles are fine — a car with no bumper, no wheels
            fitted or an engine out still loads on a winch. Where both sites agree to it, we
            can carry keys and paperwork between them.
          </p>
        </section>

        <section>
          <h2>Low, classic and awkward vehicles</h2>
          <p>
            A tilt-and-slide bed loads at a shallow angle, which is what low and modified
            cars need: a steep ramp is how bumpers, splitters and exhausts get damaged.
            Classics and low-mileage cars benefit from travelling on the bed for a different
            reason — the odometer does not move and nothing is worn on the journey.
          </p>
          <p>
            Motorcycles travel in a front wheel chock with soft straps. Electric and hybrid
            vehicles are carried with all four wheels off the ground, which is how they
            should be moved, since towing them on their driven wheels can damage the motors.
          </p>
        </section>

        <section>
          <h2>Long distance and out of London</h2>
          <p>
            Transport work is not limited to the capital. We run door-to-door moves from
            London to anywhere in the UK and back, at a price agreed before we set off, with
            collections and deliveries outside normal hours where that suits better.
          </p>
          <p>
            Around London itself, work runs across{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              all five London areas
            </Link>
            , with{" "}
            <Link to="/vehicle-recovery-east-london" className="text-primary hover:underline">
              East London
            </Link>{" "}
            closest to the E1 base.
          </p>
        </section>

        <section>
          <h2>What it costs</h2>
          <p>
            Distance is the main factor, then whether the vehicle rolls and steers, how
            accessible both ends are, and how quickly it needs to happen. Quotes are free and
            fixed before the job starts, so the figure agreed is the figure paid.
          </p>
        </section>

        <section>
          <h2>What to send for a quote</h2>
          <ul>
            <li>Collection postcode</li>
            <li>Delivery postcode</li>
            <li>Vehicle make, model and approximate year</li>
            <li>Whether it runs, rolls and steers</li>
            <li>Any release reference or collection deadline</li>
            <li>When it needs to move</li>
          </ul>
        </section>

        <section>
          <h2>Why people call us</h2>
          <p>
            Quotes are free, the price is agreed up front, and we are on call 24 hours a day
            — useful when an auction gives you a collection window that ends on Saturday. MPG
            Recovery is rated{" "}
            <Link to="/reviews" className="text-primary hover:underline">
              5.0 on Google from 19 reviews
            </Link>
            , and the company holds business hire and reward insurance to carry
            customers&rsquo; vehicles.
          </p>
          <p>
            If the vehicle has broken down rather than simply needing to move, see{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery in London
            </Link>
            , or browse{" "}
            <Link to="/services" className="text-primary hover:underline">
              everything we handle
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Before collection day</h2>
          <p>
            A few minutes of preparation saves a wasted trip. Make sure whoever is releasing
            the vehicle knows we are coming and has the keys, and that anything needed to
            get it out — a gate code, a barrier fob, a parking permit — is available on the
            day.
          </p>
          <p>
            Tell us in advance about anything unusual about the car itself: an immobiliser
            or alarm that triggers when it is moved, a steering lock that engages, no spare
            wheel, very low ground clearance, a flat battery, or fuel so low it will not run
            onto the bed. None of it stops the job. It just decides how we load, and it is
            far better known beforehand than discovered on arrival.
          </p>
          <p>
            On a private sale, agree with the other party who is present at each end.
            Deliveries to an address where nobody is home can be arranged, but we will need
            somewhere sensible and legal to leave the vehicle.
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
