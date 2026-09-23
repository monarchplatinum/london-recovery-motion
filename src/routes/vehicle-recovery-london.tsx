import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import bedImg from "@/assets/jobs/mpg-recovery-tilt-and-slide-bed-lowered.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/vehicle-recovery-london";
const title = "Vehicle Recovery London | Car Recovery & Towing | MPG Recovery";
const description =
  "Vehicle recovery in London from MPG Recovery. Non-runners, breakdowns and vehicle relocation moved on a recovery truck. WhatsApp or call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "How quickly can you recover my vehicle?",
    a: "We answer the phone and WhatsApp at any hour, usually straight away. From the E1 base we are typically with you in 5 to 15 minutes across East London. Further out, traffic and distance decide it, and we will give you a realistic time before you commit to anything.",
  },
  {
    q: "What does vehicle recovery cost in London?",
    a: "It depends on where the vehicle is, where it is going, whether it rolls and steers, and how awkward it is to reach. Quotes are free and the price is agreed before we set off. There is no separate callout charge on a job we carry out.",
  },
  {
    q: "Do you recover non-running vehicles?",
    a: "Yes. Let us know whether the vehicle rolls and steers, whether the keys are available and how it is currently parked, as that changes how it is loaded.",
  },
  {
    q: "Can you recover a vehicle from a car park or private land?",
    a: "In many cases, yes, provided there is safe access and the necessary permission from the landowner or operator. Send a photo of where the vehicle is parked and we can tell you whether it is workable.",
  },
  {
    q: "Can the vehicle be delivered to my home instead of a garage?",
    a: "Yes. The destination is your choice — a home address, a garage, a storage facility or another address entirely. Just include it when you message us.",
  },
];

export const Route = createFileRoute("/vehicle-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema("Vehicle Recovery", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Vehicle Recovery London", path }]),
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
        eyebrow="Vehicle recovery"
        title="Vehicle Recovery in London"
        intro="If a vehicle needs lifting onto a recovery truck and moving somewhere else in London, that's the job. Send the location, the destination and a few details about the vehicle."
        crumbs={[{ label: "Vehicle Recovery London" }]}
        ctaLabel="WhatsApp for vehicle recovery"
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        <section>
          <p>
            A vehicle that will not move is a problem that gets worse by the hour. It may
            be blocking a bay you are paying for, sitting on a red route collecting
            tickets, or stuck somewhere you cannot leave it overnight. MPG Recovery moves
            vehicles across London on a tilt-and-slide bed, 24 hours a day, and the first
            thing we will do is tell you honestly how soon we can be there.
          </p>
        </section>

        <section>
          <h2>When a vehicle needs recovering</h2>
          <p>
            Some of it is obvious. The engine will not turn over, the gearbox will not
            select, there is a bang followed by silence, or the car has been hit and is no
            longer roadworthy. Some of it is less obvious: a slipping clutch that finally
            goes, a snapped cambelt, a flat battery a jump pack will not revive, or a wheel
            that has locked solid.
          </p>
          <p>
            There are also vehicles with nothing mechanically wrong with them at all. A car
            sat long enough to be untaxed and uninsured cannot legally be driven to a
            garage, however well it runs. Nor can one bought at auction before cover is in
            place. Those travel on the bed for the same reason a broken one does.
          </p>
          <p>
            What matters to us is not the fault itself but three practical things: does it
            roll, does it steer, and are the keys available. Those decide whether the
            vehicle is driven onto the bed, winched on, or needs skates underneath it.
          </p>
        </section>

        <InlineFigure
          src={bedImg}
          alt="The MPG Recovery tilt-and-slide bed lowered to the road ready to load"
          caption="The bed lowered to the road. A car that will not roll or steer is winched straight on."
          width={576}
          height={778}
        />

        <section>
          <h2>How we recover different vehicles</h2>
          <p>
            Most jobs are a straightforward non-runner collection. The bed tilts and slides
            down to road level, the winch pulls the vehicle up, and it is strapped by the
            wheels rather than the bodywork so nothing is pulled out of shape. Seized
            engines, locked steering, long-term SORN cars and vehicles with no keys all
            load this way.
          </p>
          <p>
            Not everything needs recovering. Where the fault is something we can deal with
            at the roadside we will try, which is what{" "}
            <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
              breakdown recovery
            </Link>{" "}
            usually starts as — a jump start, or getting a car running well enough to move
            itself. If it cannot be fixed there, the same truck takes it, so you are not
            waiting on a second callout.
          </p>
          <p>
            Motorcycle recovery uses a front wheel chock and soft straps, so a bike is held
            upright without anything being clamped to the frame or the bars. Electric and
            hybrid vehicles go on the bed with all four wheels off the ground, which is the
            only safe way to move them, because towing an EV on its driven wheels can
            damage the motors. Underground and multi-storey car parks are their own
            problem: a full-size recovery truck will not clear the ramp, so the vehicle has
            to be brought up to street level and loaded there.
          </p>
          <p>
            Where a vehicle has been damaged in a collision, see{" "}
            <Link to="/accident-recovery-london" className="text-primary hover:underline">
              accident recovery
            </Link>
            . Where nothing is wrong and it simply needs to be somewhere else, see{" "}
            <Link to="/vehicle-transport-london" className="text-primary hover:underline">
              vehicle transport
            </Link>
            . The full list is on our{" "}
            <Link to="/services" className="text-primary hover:underline">
              services page
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Recovery on London roads</h2>
          <p>
            London makes recovery work harder than it needs to be. Red routes where you
            cannot stop, bus lanes under camera enforcement, permit bays, box junctions,
            width restrictions on streets built long before anyone owned a car, and height
            barriers across half the car parks. A recovery truck cannot simply pull up
            wherever the casualty happens to be.
          </p>
          <p>
            That is why we ask for the exact location and a photograph of how the vehicle
            is sitting. A picture of a low car tight against a kerb, or a bay with a
            bollard at the end of it, tells us more than a paragraph of description, and it
            decides what we bring.
          </p>
          <p>
            We work out of the railway arches on Tent Street in E1, so{" "}
            <Link to="/vehicle-recovery-east-london" className="text-primary hover:underline">
              East London
            </Link>{" "}
            and the Docklands are the ground we cover most often. Recovery work also runs
            across{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              Central, North, South and West London
            </Link>{" "}
            and the surrounding areas. Send both postcodes and we can confirm availability
            before anything is arranged.
          </p>
        </section>

        <section>
          <h2>What happens when you call</h2>
          <p>
            You message or ring the same number and speak to someone directly. There is no
            queue and no reference number. Tell us where the vehicle is, where it needs to
            go, what it is and whether it runs, and we will come back with a price and a
            realistic arrival time.
          </p>
          <p>
            Once you are happy with both, the truck is on its way. On arrival the vehicle
            is loaded, strapped down and checked before we move, then delivered to the
            address you gave us — a garage, your home, a storage yard or anywhere else. If
            the destination has opening hours, tell us and we will plan around them.
          </p>
        </section>

        <section>
          <h2>What recovery costs</h2>
          <p>
            Price depends on the distance, the time of day, whether the vehicle rolls and
            steers, and how difficult it is to reach. A car on a driveway is not the same
            job as one on the third level of a car park with a flat battery and no keys.
          </p>
          <p>
            Quotes are free and the figure is agreed before we set off, so nothing moves
            afterwards. There is no separate callout charge on a job we carry out. The only
            time a callout fee applies is when we have already travelled to you and the
            vehicle then does not need moving after all.
          </p>
        </section>

        <section>
          <h2>What to send us</h2>
          <ul>
            <li>Collection location or postcode</li>
            <li>Destination address or postcode</li>
            <li>Vehicle make, model and approximate year</li>
            <li>Whether it runs, rolls and steers</li>
            <li>Whether the keys are available</li>
            <li>When it needs moving</li>
            <li>Photos of the vehicle and how it is parked</li>
          </ul>
          <p>
            A WhatsApp location pin is the most reliable way to tell us where you are,
            particularly at night or on a stretch of road with no obvious landmark.
          </p>
        </section>

        <section>
          <h2>Why people call us</h2>
          <p>
            We are on call 24 hours a day, every day of the year, and the phone is answered
            by someone who can tell you what is actually possible. MPG Recovery is rated{" "}
            <Link to="/reviews" className="text-primary hover:underline">
              5.0 on Google from 19 reviews
            </Link>
            , every one of them five stars, and the company holds business hire and reward
            insurance to carry customers&rsquo; vehicles.
          </p>
          <p>
            For everything else we move,{" "}
            <Link to="/" className="text-primary hover:underline">
              vehicle recovery and transport across London
            </Link>{" "}
            starts on the same number.
          </p>
        </section>

        <ContextualCta
          heading="Need recovery?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Vehicle recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
