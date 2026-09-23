import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import pageImg from "@/assets/jobs/mpg-recovery-night-recovery-canary-wharf.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/jump-start-roadside-assistance-london";
const title = "Jump Start & Roadside Assistance London | MPG Recovery";
const description =
  "Jump start and roadside assistance across London, 24 hours a day. If we cannot get you going at the roadside, the same truck recovers the vehicle. Call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Will a jump start definitely fix it?",
    a: "Not always, and we will not pretend otherwise. A jump start gets you going when the battery is simply flat. If the battery will not hold a charge, or the fault is the alternator, the starter or something electrical, the car will stop again — so the same truck recovers it instead.",
  },
  {
    q: "Do I pay twice if it ends up being recovered?",
    a: "No. If we cannot get you going at the roadside and the vehicle is recovered on the same visit, it is one job and one price, agreed before we set off.",
  },
  {
    q: "Can you come out at night?",
    a: "Yes. We are on call 24 hours a day, seven days a week. Flat batteries are more common on cold nights than at any other time.",
  },
];

export const Route = createFileRoute("/jump-start-roadside-assistance-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Jump Start and Roadside Assistance", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Jump Start & Roadside Assistance", path },
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
        eyebrow="Roadside assistance"
        title="Jump Start and Roadside Assistance in London"
        intro="Flat battery or a car that will not start? We come out and try to get you moving. If it cannot be fixed where you are, the same truck takes it."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Jump Start & Roadside Assistance" }]}
        ctaLabel="WhatsApp for a jump start"
        ctaMessage={waMessages.breakdown}
      />

      <Prose>
        <section>
          <p>
            Sometimes a vehicle does not need recovering at all. It needs ten minutes of
            attention at the roadside and it is driving again. MPG Recovery comes out across
            London at any hour, tries the quick fix first, and recovers the vehicle on the
            same visit if the quick fix is not there.
          </p>
        </section>

        <section>
          <h2>When a jump start is the answer</h2>
          <p>
            Lights left on overnight. A car that has not been started for a fortnight. A
            short journey habit that never lets the battery recover. Cold weather, which
            finds every battery that was already on its way out. In each case the engine
            turns over slowly or not at all, the dash lights dim when you try, and everything
            else about the car is fine.
          </p>
          <p>
            If the car starts and runs properly afterwards, that is usually the end of it.
            Drive it for a decent run rather than straight home and off again, and get the
            battery tested soon — a battery that has gone flat once without an obvious reason
            tends to do it again.
          </p>
        </section>

        <InlineFigure
          src={pageImg}
          alt="A car on the MPG Recovery bed at night beside the towers at Canary Wharf"
          caption="Out at night in London. If it cannot be started, the same truck takes it."
          width={576}
          height={778}
        />

        <section>
          <h2>When it is not the battery</h2>
          <p>
            A jump start will not save a battery that no longer holds charge, and it will not
            fix an alternator that has stopped charging, a failed starter motor, an
            immobiliser fault, an empty tank, or a car that is turning over happily but will
            not fire.
          </p>
          <p>
            We would rather tell you that on the spot than jump it, watch you drive off, and
            have you ring back an hour later from somewhere worse. If the vehicle cannot be
            relied on, it goes on the bed and we take it where you want it — see{" "}
            <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
              breakdown recovery
            </Link>{" "}
            for how that works.
          </p>
        </section>

        <section>
          <h2>Where you are stopped</h2>
          <p>
            If you are on a red route, a bus lane, a live traffic lane or a fast dual
            carriageway, get yourself somewhere safe and tell us exactly where you are. In
            those spots the priority is getting the vehicle off the road rather than
            standing beside it trying things.
          </p>
          <p>
            In a car park, particularly an underground one, mention the level and any posted
            height restriction. It decides whether the truck can reach you or the vehicle has
            to come up to street level first.
          </p>
        </section>

        <section>
          <h2>What it costs</h2>
          <p>
            Quotes are free and the price is agreed before we set off. If the roadside
            attempt works, that is the job. If it does not and the vehicle is recovered
            instead, it is still one visit and one agreed price, with no separate callout
            charge on top.
          </p>
        </section>

        <section>
          <h2>Part of our recovery work</h2>
          <p>
            Roadside assistance is the first thing we try when a vehicle has stopped rather than been damaged. For everything we move on the bed, see{" "}
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
          <h2>Why batteries die in London</h2>
          <p>
            City driving is hard on a battery. Short journeys never put back what starting
            the engine takes out, and a car used twice a week for a mile at a time is
            running at a deficit almost permanently. Add stop-start systems, parking sensors,
            dash cams wired to run while parked and a fortnight away, and a battery that
            tested fine in summer gives up on the first cold morning.
          </p>
          <p>
            If yours has gone flat once with no obvious cause, get it tested rather than
            waiting for the second time — which, in our experience, tends to arrive at the
            least convenient hour. A battery is cheaper than a recovery.
          </p>
        </section>

        <ContextualCta
          heading="Car will not start?"
          label="Message us on WhatsApp"
          message={waMessages.breakdown}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Jump Start & Roadside Assistance FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
