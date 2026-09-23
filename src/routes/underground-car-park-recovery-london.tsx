import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import pageImg from "@/assets/jobs/mpg-recovery-night-collection-car-park.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/underground-car-park-recovery-london";
const title = "Underground Car Park Recovery London | MPG Recovery";
const description =
  "Vehicle recovery from underground and multi-storey car parks in London, where a full-size truck cannot clear the ramp. Low clearance access, dead vehicles and no keys.";

const faqs: FaqItem[] = [
  {
    q: "My car is on level -2 with a 2 metre height limit. Is that a problem?",
    a: "It is the normal situation and it is workable. The truck stays at street level and the vehicle is brought up to it. Send the level and the posted height limit when you message so we arrive with the right kit.",
  },
  {
    q: "The car will not start and will not steer. Can it still come up?",
    a: "In most cases yes, using skates and a winch. It is slower than a car that rolls, and tight ramps with pillars make it slower again, so tell us in advance rather than on arrival.",
  },
  {
    q: "Do you need permission from the car park?",
    a: "Usually the operator or building manager just needs to know a recovery is happening, and may want to open a barrier or hold a lift. On private estates and gated developments that permission is essential before we attend.",
  },
];

export const Route = createFileRoute("/underground-car-park-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Underground Car Park Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Services", path: "/services" },
            { name: "Underground Car Park Recovery", path },
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
        eyebrow="Car park recovery"
        title="Underground Car Park Recovery in London"
        intro="A recovery truck cannot follow you down a ramp with a two metre height bar. We bring the vehicle up to street level and load it there."
        crumbs={[{ label: "Services", to: "/services" }, { label: "Underground Car Park Recovery" }]}
        ctaLabel="WhatsApp about a car park"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <p>
            Half the parking in central London is below ground, and almost none of it will
            take a recovery truck. Height bars, tight spiral ramps, pillars on every corner
            and no room to turn a long wheelbase vehicle. MPG Recovery works around it by
            bringing the vehicle up to street level and loading there.
          </p>
        </section>

        <section>
          <h2>Why a truck cannot come down</h2>
          <p>
            A flatbed recovery truck is roughly three metres tall. Underground car parks are
            commonly barred at 2.0 or 2.1 metres, and the bar is there to protect ducting,
            sprinkler pipes and the ceiling itself. Even where the height works, the ramp
            radius and the pillar spacing usually do not.
          </p>
          <p>
            So the vehicle comes to the truck rather than the other way round. Where it
            rolls and steers that is straightforward. Where it does not, skates go under the
            wheels and a winch does the pulling, taking the ramp in stages.
          </p>
        </section>

        <InlineFigure
          src={pageImg}
          alt="A vehicle collected from a multi-storey car park at night by MPG Recovery"
          caption="Loaded at street level after coming up from the car park."
          width={576}
          height={778}
        />

        <section>
          <h2>Where these jobs come up</h2>
          <p>
            Residential blocks with parking underneath, which covers most new development in
            Tower Hamlets, the Docklands and along the river. Office buildings in the City
            and Canary Wharf. Shopping centre and supermarket car parks. Hotel parking.
            Gated estates where the barrier is as much of an obstacle as the ramp.
          </p>
          <p>
            Cars in these places tend to have sat for a while — a resident away for a month,
            a company car nobody has moved — which is why flat batteries and seized brakes
            come up so often alongside the access problem.
          </p>
        </section>

        <section>
          <h2>What we need to know first</h2>
          <ul>
            <li>The level the vehicle is on</li>
            <li>The posted height restriction at the entrance</li>
            <li>Whether the vehicle rolls and steers, and whether you have the keys</li>
            <li>How tight the ramp is, and whether there is a lift</li>
            <li>Who controls access, and whether a barrier or fob is needed</li>
            <li>Any time restriction on when work can happen</li>
          </ul>
          <p>
            Photographs of the entrance, the height bar and the bay the car is in tell us
            more in ten seconds than a long description. Send them and we will tell you
            honestly whether it is workable before anyone travels.
          </p>
        </section>

        <section>
          <h2>Access and permission</h2>
          <p>
            On private land — which is what nearly all of these car parks are — the operator
            or building management needs to know the recovery is happening. Most simply want
            notice and someone to open a barrier. On gated estates it is essential, and
            without it the job cannot go ahead however straightforward the car is.
          </p>
        </section>

        <section>
          <h2>Part of our recovery work</h2>
          <p>
            Car park work is ordinary recovery with an access problem bolted on, and the access problem is the part worth planning. For everything we move on the bed, see{" "}
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
          <h2>Timing, and what it costs</h2>
          <p>
            Car parks come with rules about when work can happen. Residential blocks often
            prefer it outside quiet hours, commercial sites want it away from the morning
            rush, and some barriers are only staffed at certain times. Since we work 24
            hours a day, that is usually something to work around rather than a problem.
          </p>
          <p>
            Price reflects the extra work: bringing a vehicle up a ramp on skates takes
            longer than winching one off a driveway. The quote is free and agreed before we
            travel, and if the photographs show it cannot be done as things stand, we will
            tell you that instead of turning up and charging you for the trip.
          </p>
        </section>

        <ContextualCta
          heading="Car stuck below ground?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Underground Car Park Recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
