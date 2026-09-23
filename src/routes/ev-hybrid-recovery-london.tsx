import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/ev-hybrid-recovery-london";
const title = "EV & Hybrid Recovery London | MPG Recovery";
const description =
  "Electric and hybrid vehicle recovery in London. EVs carried with all four wheels off the ground, which is the safe way to move them. Flat traction batteries and charging faults.";

const faqs: FaqItem[] = [
  {
    q: "Why can an electric car not simply be towed?",
    a: "Because the wheels drive the motors as well as the other way round. Rolling an EV along on its driven wheels can turn the motor into a generator and damage it, and on many models the handbook forbids towing outright. Carrying it on the bed avoids all of that.",
  },
  {
    q: "My EV has run out of charge. Can you help?",
    a: "Yes. A flat traction battery is a recovery job rather than a roadside one — there is no equivalent of a jerry can. We collect the vehicle and take it to a charger, your home or a dealer, whichever you prefer.",
  },
  {
    q: "Do you charge more for an electric vehicle?",
    a: "The price is worked out the same way as any other job: distance, access, time of day and how it has to be loaded. EVs are heavier than the equivalent petrol car, which is taken into account, but there is no surcharge for being electric.",
  },
];

export const Route = createFileRoute("/ev-hybrid-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("EV and Hybrid Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "EV & Hybrid Recovery", path },
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
        eyebrow="EV and hybrid recovery"
        title="EV and Hybrid Recovery in London"
        intro="Electric and hybrid vehicles carried with all four wheels off the ground. Towing an EV on its driven wheels can damage the motors, so it travels on the bed instead."
        crumbs={[{ label: "Services", to: "/services" }, { label: "EV & Hybrid Recovery" }]}
        ctaLabel="WhatsApp about an EV"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <p>
            Electric and hybrid vehicles cannot be recovered the way a petrol car can. The
            drive motors are connected to the wheels, so rolling one along behind a truck
            risks damaging them. MPG Recovery carries EVs and hybrids on the bed with all
            four wheels off the ground, across London, at any hour.
          </p>
        </section>

        <section>
          <h2>Why all four wheels come off the ground</h2>
          <p>
            On an electric car the motor and the driven wheels turn together. Towing it on
            those wheels spins the motor whether the car is on or not, which generates
            current the vehicle is not expecting and can damage the drivetrain. Plenty of
            manufacturers state plainly in the handbook that the car must not be towed.
          </p>
          <p>
            Putting the whole vehicle on the bed sidesteps the question. Nothing rotates,
            nothing generates, and the car arrives in the state it left in. The same applies
            to hybrids, which have the same arrangement for part of the time.
          </p>
        </section>

        <section>
          <h2>What usually goes wrong</h2>
          <p>
            A flat traction battery, which is the electric equivalent of running out of
            fuel, and just as common in London where drivers rely on public chargers. A
            charging fault, either in the car or discovered when every charger at a site
            rejects it. A dead 12 volt battery, which stops the car waking up at all even
            with a full traction battery. Punctures, since many EVs carry no spare. And
            collision damage, like any other car.
          </p>
          <p>
            Tell us which it is if you know, because it changes where the vehicle should go.
            A flat battery may only need a run to the nearest working rapid charger. A
            charging fault usually means a dealer or specialist.
          </p>
        </section>

        <section>
          <h2>Loading an EV safely</h2>
          <p>
            EVs are heavy — often several hundred kilos more than the petrol car they
            resemble — and the weight sits low in the floor where the battery pack is. That
            affects where straps go and how the vehicle is positioned on the bed.
          </p>
          <p>
            We also need to know whether the car can be put into neutral. Some EVs need
            power to release the parking pawl, so a completely dead 12 volt battery can lock
            the wheels. Mention it up front and we will bring what is needed rather than
            discovering it on your driveway.
          </p>
        </section>

        <section>
          <h2>What to tell us</h2>
          <ul>
            <li>Make and model, and whether it is fully electric or hybrid</li>
            <li>Whether the car will wake up and go into neutral</li>
            <li>Whether it is a flat traction battery or something else</li>
            <li>Whether it is plugged in or blocked in at a charging bay</li>
            <li>Where it needs to go</li>
          </ul>
        </section>

        <section>
          <h2>Part of our recovery work</h2>
          <p>
            Electric vehicles use the same bed as everything else we carry, which is precisely why they can be moved safely. For everything we move on the bed, see{" "}
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
          <h2>Where an electric car should go</h2>
          <p>
            It depends on what stopped it. A flat traction battery usually just needs a run
            to a working rapid charger, and you drive away from there. A charging fault,
            where the car refuses every charger, is a job for a franchised dealer or an EV
            specialist rather than a general garage.
          </p>
          <p>
            A dead 12 volt battery is the one that catches people out: the car can have
            plenty of drive charge and still be completely unresponsive. That is often a
            quick fix once somebody can get to it, so home or a local garage may be enough.
            Tell us what the car is doing and we will talk it through before anything is
            booked.
          </p>
        </section>

        <ContextualCta
          heading="Electric car stopped?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>EV & Hybrid Recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
