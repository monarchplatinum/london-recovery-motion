import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import pageImg from "@/assets/jobs/mpg-recovery-mini-loaded-for-transport.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/garage-bodyshop-transfers-london";
const title = "Garage & Bodyshop Transfers London | MPG Recovery";
const description =
  "Vehicle transfers between garages, bodyshops, MOT stations and dealerships across London. Part-stripped and mid-repair vehicles moved. Trade accounts welcome.";

const faqs: FaqItem[] = [
  {
    q: "Can you move a car that is mid-repair with parts removed?",
    a: "Yes. A vehicle with the bumper off, the engine out or the wheels not fitted still loads on a winch. Tell us what is missing so we know how it can be secured before we arrive.",
  },
  {
    q: "Can you carry the keys and paperwork between the two garages?",
    a: "Where both sites agree to it, yes. It needs to be arranged in advance, and both ends need to know who is handing over what.",
  },
  {
    q: "Do you work with trade accounts?",
    a: "Yes. Garages, bodyshops and dealers who move vehicles regularly can arrange repeat work rather than quoting job by job. Regular runs are welcome.",
  },
];

export const Route = createFileRoute("/garage-bodyshop-transfers-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.transport }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Garage and Bodyshop Transfers", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Garage & Bodyshop Transfers", path },
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
        eyebrow="Garage transfers"
        title="Garage and Bodyshop Transfers in London"
        intro="Most independent garages have no recovery vehicle of their own. We move cars between garages, bodyshops, MOT stations and dealerships, including ones that are half apart."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Garage & Bodyshop Transfers" }]}
        ctaLabel="WhatsApp about a transfer"
        ctaMessage={waMessages.transport}
      />

      <Prose>
        <section>
          <p>
            A car needs to go to a specialist, come back from a bodyshop, or move between
            two garages that both expected the other to sort it out. Plenty of independents
            run no recovery vehicle at all, so it lands on the customer. MPG Recovery moves
            vehicles between trade premises across London, whether they run or not.
          </p>
        </section>

        <section>
          <h2>Between two garages</h2>
          <p>
            The common version: a garage has diagnosed something it does not do — gearbox
            work, bodywork, air conditioning, a specialist marque — and the car needs to get
            to whoever does. It may not be driveable, and even where it is, driving it
            defeats the point if the fault is what stopped it.
          </p>
          <p>
            Give us both addresses and both sets of opening hours. Trade premises close
            earlier than people expect and a Saturday lunchtime shutter comes down hard, so
            it is worth planning around rather than hoping.
          </p>
        </section>

        <InlineFigure
          src={pageImg}
          alt="A Mini strapped down on the MPG Recovery flatbed in daylight"
          caption="Loaded and strapped for a transfer between sites."
          width={576}
          height={778}
        />

        <section>
          <h2>Part-stripped and mid-repair vehicles</h2>
          <p>
            A car does not have to be whole to travel. Bumpers off, lights out, engine
            removed, interior stripped, wheels not fitted — all of it loads, provided we know
            beforehand. What changes is where the straps go and what the winch can pull
            against, which is a decision best made before the truck is on site.
          </p>
          <p>
            Where wheels are missing entirely, say so early. It is workable, but it needs
            planning rather than improvising in a yard.
          </p>
        </section>

        <section>
          <h2>MOT stations and dealerships</h2>
          <p>
            Failed MOTs that cannot legally be driven away, cars going in for warranty work
            at a franchised dealer, and vehicles moving between forecourts all work the same
            way. Where a dealership needs the vehicle at a particular time to hold a
            workshop slot, tell us the slot and we will work to it.
          </p>
        </section>

        <section>
          <h2>Trade work</h2>
          <p>
            Garages, bodyshops and dealers who move vehicles regularly can arrange repeat
            work rather than pricing every job from scratch, including several movements in a
            single day. Quotes are free, prices are agreed in advance, and we are reachable
            at any hour rather than only during workshop hours.
          </p>
        </section>

        <section>
          <h2>Part of our transport work</h2>
          <p>
            Garage transfers are planned movements rather than emergencies, so they are usually the easiest jobs to book in advance. For planned movements of every kind, see{" "}
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
          <h2>Booking it in</h2>
          <p>
            These are planned jobs, which makes them the easiest to arrange well. Give us
            both addresses, both sets of opening hours, and any slot the receiving workshop
            has held for the vehicle. Where a bodyshop has an assessor booked or a garage has
            a ramp free at a particular time, that is what we work to.
          </p>
          <p>
            Tell us who will be present at each end and whether anyone needs to sign for the
            vehicle. Trade sites are often busy enough that a driver arriving unannounced
            waits, which helps nobody. Quotes are free and agreed in advance, and repeat work
            can be arranged rather than priced job by job.
          </p>
        </section>

        <ContextualCta
          heading="Need a car moved to a garage?"
          label="Message us on WhatsApp"
          message={waMessages.transport}
          event="transport_quote_click"
        />

        <section>
          <h2>Garage & Bodyshop Transfers FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
