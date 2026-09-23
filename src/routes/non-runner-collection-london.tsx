import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import pageImg from "@/assets/jobs/mpg-recovery-wheel-strap-detail.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/non-runner-collection-london";
const title = "Non-Runner Collection London | MPG Recovery";
const description =
  "Non-runner collection across London. Seized engines, flat batteries, locked steering, SORN cars and vehicles with no keys, winched onto the bed. Call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Can you collect a car with no keys?",
    a: "Usually yes. Without keys the steering is often locked and the car cannot be pushed or steered, so it goes on with the winch and skates where needed. Tell us up front so the right kit is on the truck.",
  },
  {
    q: "The car has not moved in years. Is that a problem?",
    a: "No, and it is common. Expect seized brakes, flat or perished tyres and a dead battery. None of it stops a collection; it just means the winch does more of the work and the job takes longer.",
  },
  {
    q: "Does the vehicle need to be taxed or insured?",
    a: "Not to be carried. It travels on the bed rather than being driven, so a SORN, untaxed or uninsured vehicle can still be collected legally.",
  },
];

export const Route = createFileRoute("/non-runner-collection-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Non-Runner Collection", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Non-Runner Collection", path },
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
        eyebrow="Non-runner collection"
        title="Non-Runner Collection in London"
        intro="A car that will not start, will not roll and will not steer can still be moved. The bed lowers to the road and the winch does the rest."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Non-Runner Collection" }]}
        ctaLabel="WhatsApp about a non-runner"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <p>
            A non-runner is any vehicle that cannot be driven onto a truck under its own
            power — the engine will not start, the gearbox will not select, the brakes have
            seized, the steering is locked, or the keys are long gone. MPG Recovery collects
            them across London, 24 hours a day, on a tilt-and-slide bed with a winch.
          </p>
        </section>

        <section>
          <h2>What counts as a non-runner</h2>
          <p>
            A seized or blown engine. A flat battery that no jump pack will bring back. A
            car that has sat on a driveway or in a garage for years and is now on SORN. A
            project that was started and never finished. A vehicle with no keys, or one
            where the steering lock has engaged and will not release.
          </p>
          <p>
            It also covers cars that technically run but must not be driven: no MOT, no tax,
            no insurance, or a fault serious enough that driving it would finish it off.
          </p>
        </section>

        <InlineFigure
          src={pageImg}
          alt="A wheel strap ratcheted over the tyre of a car on the MPG Recovery bed"
          caption="Strapped by the wheels rather than the bodywork, so nothing is pulled out of shape."
          width={576}
          height={778}
        />

        <section>
          <h2>How a dead car gets loaded</h2>
          <p>
            The bed tilts and slides down until it meets the road, which removes the steep
            ramp angle that damages bumpers and underside trim. The winch then pulls the
            vehicle up. Where the wheels will not turn at all, skates go underneath so it
            can be moved without dragging it on locked brakes or flat tyres.
          </p>
          <p>
            Once on, it is strapped by the wheels rather than the bodywork. That matters on
            a car that has been standing: suspension bushes, sills and jacking points are
            often the first things to rot, and they are exactly what a badly placed strap
            would pull on.
          </p>
        </section>

        <section>
          <h2>Where it is parked matters</h2>
          <p>
            A non-runner on an open driveway is straightforward. The same car reversed into a
            tight garage, boxed in by other vehicles, on a permit street with no room behind
            it, or below ground in a car park is a different job. The winch needs a clear
            pull, and the truck needs somewhere legal to stand while the vehicle comes on.
          </p>
          <p>
            Send a photograph of how it is sitting and what is around it. It is the quickest
            way for us to tell you whether it is workable as it stands, or whether something
            needs moving first.
          </p>
        </section>

        <section>
          <h2>What to tell us</h2>
          <ul>
            <li>Whether the wheels turn and whether the steering is locked</li>
            <li>Whether the keys are available</li>
            <li>How long it has been standing</li>
            <li>How it is parked, and what is around it</li>
            <li>Where it needs to go</li>
          </ul>
          <p>
            Quotes are free and agreed before we set off. Nights and weekends are the same
            phone number.
          </p>
        </section>

        <section>
          <h2>Part of our recovery work</h2>
          <p>
            Non-runner collection is the job we do most often, and it is the reason the bed and winch matter more than anything else on the truck. For everything we move on the bed, see{" "}
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
          <h2>What a non-runner collection costs</h2>
          <p>
            The price comes down to distance, access and effort. A car that rolls and steers
            on an open driveway is the quick version. Locked wheels, a tight garage, a car
            boxed in on a permit street or a vehicle below ground all add time, and the
            quote reflects that rather than surprising you afterwards.
          </p>
          <p>
            Quotes are free and the figure is agreed before we set off. There is no separate
            callout charge on a job we carry out. If you are weighing up whether an old
            project is worth moving at all, say so — we would rather give you an honest
            number and let you decide than turn up and have you change your mind.
          </p>
        </section>

        <ContextualCta
          heading="Got a car that will not move?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Non-Runner Collection FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
