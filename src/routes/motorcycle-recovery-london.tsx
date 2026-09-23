import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/motorcycle-recovery-london";
const title = "Motorcycle Recovery London | Bike Transport | MPG Recovery";
const description =
  "Motorcycle and scooter recovery across London, day or night. Bikes loaded with a front wheel chock and soft straps. Breakdowns, non-runners and track day moves.";

const faqs: FaqItem[] = [
  {
    q: "How is the bike held on the truck?",
    a: "In a front wheel chock, which holds the bike upright, with soft straps over the handlebars or footpegs. Nothing is clamped to the frame or the fairings, and the bike is not laid down.",
  },
  {
    q: "Can you collect a bike that will not start or has a flat tyre?",
    a: "Yes. A bike that will not start still rolls, which is all that is needed to get it into the chock. A flat or damaged tyre makes it harder to push, so mention it and we will allow for it.",
  },
  {
    q: "Can you move a bike after a crash?",
    a: "Yes, where it is safe to do so. Tell us what is damaged, particularly whether the front wheel and forks still turn, since that is what the chock holds.",
  },
];

export const Route = createFileRoute("/motorcycle-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Motorcycle Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Motorcycle Recovery", path },
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
        eyebrow="Motorcycle recovery"
        title="Motorcycle Recovery in London"
        intro="Bikes and scooters recovered and transported across London. Loaded into a front wheel chock and held with soft straps, so nothing is scratched, clamped or bent."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Motorcycle Recovery" }]}
        ctaLabel="WhatsApp about a bike"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <p>
            A motorcycle is easier to damage in transit than a car and harder to move once it
            will not run. MPG Recovery collects bikes and scooters across London at any hour,
            loaded into a front wheel chock on the bed and secured with soft straps.
          </p>
        </section>

        <section>
          <h2>How a bike travels</h2>
          <p>
            The bike is walked up onto the bed and into a front wheel chock, which grips the
            wheel and holds the machine upright without anyone having to balance it. Soft
            straps then compress the suspension slightly and hold it steady.
          </p>
          <p>
            Nothing is clamped to the frame, nothing is tied to the fairings, and the bike is
            never laid on its side. That matters on anything with plastics, on a restored
            classic, and on a bike still under warranty.
          </p>
        </section>

        <section>
          <h2>What we collect</h2>
          <p>
            Breakdowns at the roadside, bikes that will not start at home, machines being
            delivered after a sale, track day moves out to a circuit and back, non-runners
            and projects, and bikes recovered after a theft that are no longer rideable.
          </p>
          <p>
            Scooters and mopeds are the same job, and are often easier because they are
            lighter and roll freely. Where a bike has been damaged in a collision, see{" "}
            <Link to="/accident-recovery-london" className="text-primary hover:underline">
              accident recovery
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Riding in London, and what goes wrong</h2>
          <p>
            Bikes get used all year here, and they get stopped by things cars shrug off: a
            pothole that buckles a rim, a puncture from road debris, a chain that snaps in
            traffic, a battery that dies after a fortnight of not being ridden. None of that
            is fixable at the kerb.
          </p>
          <p>
            Where you are matters too. A bike parked in a motorcycle bay on a busy road, in
            an underground car park with a height barrier, or down an alley behind a block of
            flats all change how we approach it. A photograph tells us in a second.
          </p>
        </section>

        <section>
          <h2>What to tell us</h2>
          <ul>
            <li>Make, model and rough weight if it is a large machine</li>
            <li>Whether the front wheel and forks still turn</li>
            <li>Whether it rolls freely or the wheels are locked</li>
            <li>Whether the tyres are up</li>
            <li>Where it is, and where it needs to go</li>
          </ul>
          <p>
            Quotes are free and agreed before anything is arranged, day or night.
          </p>
        </section>

        <section>
          <h2>Part of our recovery work</h2>
          <p>
            Motorcycle work uses the same bed and the same phone number as everything else we recover. For everything we move on the bed, see{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery in London
            </Link>
            , or browse{" "}
            <Link to="/services" className="text-primary hover:underline">
              all our services
            </Link>
            .
          </p>
        </section>


        <section>
          <h2>Where the bike goes, and what it costs</h2>
          <p>
            Most go to a dealer or an independent specialist, some go home, and some go to
            storage over winter. If the destination is a workshop, ring ahead: bike
            specialists are often one or two people, and an unannounced delivery can sit
            outside until somebody is free.
          </p>
          <p>
            Price depends on distance, access and the time of day, as with anything else we
            carry. Quotes are free and agreed before we set off. Where a bike is being
            delivered to a buyer after a sale, we can collect from one address and deliver to
            another rather than the two of you meeting halfway.
          </p>
        </section>

        <ContextualCta
          heading="Bike need moving?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Motorcycle Recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
