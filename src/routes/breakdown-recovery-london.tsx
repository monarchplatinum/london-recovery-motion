import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import nightImg from "@/assets/jobs/mpg-recovery-night-collection-car-park.jpg";
import { WhatsAppCta, CallCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/breakdown-recovery-london";
const title = "Breakdown Recovery London | Broken Down Car Collection | MPG Recovery";
const description =
  "Broken down in London? MPG Recovery collects non-running vehicles and moves them where they need to be. WhatsApp your location or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "How fast can you get to a breakdown?",
    a: "We answer at any hour, usually straight away. From the E1 base we are typically with you in 5 to 15 minutes across East London; further out it depends on traffic and distance. You will be given a realistic time before anything is agreed.",
  },
  {
    q: "Can you jump start it instead of recovering it?",
    a: "Where the problem is something that can be dealt with at the roadside, we will try. If it starts and runs properly, that may be the end of it. If it does not, the same truck recovers the vehicle, so you are not waiting on a second callout.",
  },
  {
    q: "What if I broke down at 3am?",
    a: "Ring anyway. MPG Recovery is on call 24 hours a day, seven days a week, including nights, weekends and bank holidays.",
  },
  {
    q: "What should I do first if I break down?",
    a: "Get yourself and any passengers somewhere safe, away from live traffic. If anyone is at risk, or you have stopped on a motorway or a fast dual carriageway, contact the emergency services first. Then message us with your location.",
  },
  {
    q: "What do you need to know about the vehicle?",
    a: "Whether it rolls and steers, whether the keys are available, the make and model, and how it is parked. A photo of the vehicle where it sits answers most of this at once.",
  },
  {
    q: "Where can the vehicle be taken?",
    a: "Wherever you need it — a garage, your home address, a storage facility or another address. Tell us the destination when you message and we can confirm.",
  },
];

export const Route = createFileRoute("/breakdown-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Breakdown Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Breakdown Recovery London", path }]),
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
        eyebrow="Breakdown recovery"
        title="Breakdown Recovery in London"
        intro="Vehicle stopped and won't restart? Message MPG Recovery with your location and we'll talk through collecting it and where it needs to go."
        crumbs={[{ label: "Breakdown Recovery London" }]}
        ctaLabel="Send my location on WhatsApp"
        ctaMessage={waMessages.breakdown}
      />

      {/* Fast-contact panel kept high on the page for stranded visitors */}
      <section className="border-b border-border bg-primary/10">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-8 sm:px-6">
          <h2 className="font-display text-xl font-extrabold">Stopped right now?</h2>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li>1. Move somewhere safe, away from moving traffic.</li>
            <li>
              2. If anyone is in danger, or you are on a motorway or fast dual
              carriageway, contact the emergency services first.
            </li>
            <li>3. Send us your location, the vehicle and what happened.</li>
          </ol>
          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta
              label="WhatsApp my location"
              message={waMessages.breakdown}
              size="lg"
            />
            <CallCta size="lg" />
          </div>
        </div>
      </section>

      <Prose>
        <section>
          <p>
            Breaking down is bad enough. Breaking down in London, in a live lane or a bay
            you cannot stay in, with traffic going past a foot from the door, is worse.
            Get yourself somewhere safe first. Then message or ring us: MPG Recovery is on
            call 24 hours a day, and the phone is answered by someone who can tell you
            straight away what happens next.
          </p>
        </section>

        <section>
          <h2>Get safe first</h2>
          <p>
            If you are on a fast road, get out on the side away from traffic and stand well
            back from the vehicle, behind a barrier where there is one. If anybody is hurt,
            or the vehicle is in a position that puts other people at risk, call the
            emergency services before you call us. A car can be replaced.
          </p>
          <p>
            Once you are clear, send us a location. A WhatsApp location pin is the most
            reliable thing you can give us, especially at night or on a stretch of road
            with nothing obvious to name. A Google Maps link or the nearest junction number
            works too.
          </p>
        </section>

        <InlineFigure
          src={nightImg}
          alt="A vehicle collected from a multi-storey car park at night by MPG Recovery"
          caption="A night collection in London. The phone is answered around the clock."
          width={576}
          height={778}
        />

        <section>
          <h2>What counts as a breakdown job</h2>
          <p>
            Anything that has stopped the vehicle being driven safely. A car that turns over
            but will not fire. A battery flat enough that the dash lights die when you try.
            A clutch that has finally let go, a snapped belt, a gearbox that will not select,
            overheating that has pushed the temperature gauge into the red, or a warning
            light the handbook tells you to stop driving on.
          </p>
          <p>
            Also the ones people hesitate to call about: a flat tyre with no usable spare, a
            wheel that will not turn, keys locked somewhere unhelpful, or a car that started
            fine this morning and now will not do anything at all. If you are unsure whether
            it is worth a callout, describe it and we will tell you honestly.
          </p>
        </section>

        <section>
          <h2>Roadside first, recovery if not</h2>
          <p>
            Not every breakdown needs a truck. Where the fault is something we can deal with
            where you are — a jump start being the common one — we will try that first, and
            you may be driving away rather than waiting on a flatbed.
          </p>
          <p>
            When it cannot be fixed at the roadside, the same truck recovers the vehicle, so
            there is no second wait and no second charge for turning up. It goes onto the bed
            on a winch if it will not roll or steer, and it is strapped by the wheels. Full
            detail of how that works is on the{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery page
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Breaking down on London roads</h2>
          <p>
            London adds its own complications. Red routes where stopping is an offence in
            itself, bus lanes under camera enforcement, box junctions, and the North
            Circular and A13 where there is nowhere sensible to stand. Multi-storey and
            underground car parks bring height limits a full-size truck cannot clear, so the
            vehicle has to be brought up to street level before it can be loaded.
          </p>
          <p>
            Our base is in the E1 arches, so{" "}
            <Link to="/vehicle-recovery-east-london" className="text-primary hover:underline">
              East London
            </Link>{" "}
            is the ground we cover most often, but breakdown work runs across{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              the whole of London
            </Link>{" "}
            and the surrounding areas.
          </p>
        </section>

        <section>
          <h2>Details that speed things up</h2>
          <ul>
            <li>Your exact location — a pin, a link, or the road and nearest junction</li>
            <li>Vehicle make, model and colour</li>
            <li>What happened, and whether it still turns over</li>
            <li>Whether it rolls and steers</li>
            <li>Whether you have the keys</li>
            <li>Where it needs to go afterwards</li>
            <li>A photo of how and where it is parked</li>
          </ul>
        </section>

        <section>
          <h2>Where the vehicle goes next</h2>
          <p>
            That is your call. Most go to a garage, which is worth ringing first so you know
            they can take it and when they are open. Others go home, to a storage yard, or
            to a bodyshop. If the garage is closed until Monday and the car cannot stay where
            it is, say so and we will talk through the options.
          </p>
        </section>

        <section>
          <h2>What it costs</h2>
          <p>
            Price depends on where you are, where the vehicle is going, the time of day, and
            how awkward it is to load. Quotes are free and the price is agreed before we set
            off. There is no separate callout charge on a job we carry out; a callout fee
            only applies if we have travelled to you and the vehicle then does not need
            moving.
          </p>
        </section>

        <section>
          <h2>Why people call us</h2>
          <p>
            We answer day and night, we tell you a realistic arrival time rather than the one
            you want to hear, and we are rated{" "}
            <Link to="/reviews" className="text-primary hover:underline">
              5.0 on Google from 19 reviews
            </Link>
            . Several of those were written by people we picked up at the roadside, including
            one at 4am on the way back from a long drive. For everything else we handle, see{" "}
            <Link to="/services" className="text-primary hover:underline">
              our services
            </Link>{" "}
            or start at{" "}
            <Link to="/" className="text-primary hover:underline">
              vehicle recovery and transport in London
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Breakdown recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
