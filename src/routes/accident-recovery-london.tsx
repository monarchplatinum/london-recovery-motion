import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import accidentImg from "@/assets/jobs/mpg-recovery-accident-damaged-car-night.jpg";
import { ContextualCta } from "@/components/cta/Cta";
import { FaqList, faqSchema, type FaqItem } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { waMessages } from "@/config/site";

const path = "/accident-recovery-london";
const title = "Accident Vehicle Recovery London | Damaged Car Removal | MPG Recovery";
const description =
  "Accident vehicle recovery in London. If your vehicle needs moving after an accident, contact MPG Recovery with the location and vehicle details. Call 07884 889128.";

const faqs: FaqItem[] = [
  {
    q: "Can you recover a car that is not roadworthy after a crash?",
    a: "Yes. That is the normal case. Damaged and undriveable vehicles are winched onto the bed rather than driven or towed on their own wheels, so a car with wheel, suspension or steering damage can still be moved.",
  },
  {
    q: "Do you deal with my insurance company?",
    a: "No. MPG Recovery moves vehicles. We do not handle claims, advise on liability or act for insurers. If your insurer or a claims company has arranged recovery, that is between you and them.",
  },
  {
    q: "Can you recover at night or at the weekend?",
    a: "Yes. We are on call 24 hours a day, seven days a week. Collisions do not keep office hours, and a damaged vehicle usually cannot be left where it is.",
  },
  {
    q: "Can you move a damaged vehicle?",
    a: "Where it is safe and suitable to do so, yes. Send the location, the vehicle details and photographs of the damage so the position can be assessed before anything is arranged.",
  },
  {
    q: "Should I contact anyone else first?",
    a: "If anyone is injured or the road is blocked, contact the emergency services first. You may also need to notify your insurer — we do not give legal or insurance advice.",
  },
  {
    q: "What if the vehicle cannot roll or steer?",
    a: "Tell us that when you message. Wheels that will not turn or steering that is locked change how a vehicle can be loaded, and it is important we know before arriving.",
  },
];

export const Route = createFileRoute("/accident-recovery-london")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(serviceSchema("Accident Recovery", description, path)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([{ name: "Accident Recovery London", path }]),
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
        eyebrow="Accident recovery"
        title="Accident Vehicle Recovery in London"
        intro="If your vehicle needs moving following an accident, contact MPG Recovery with the location and vehicle details to discuss recovery."
        crumbs={[{ label: "Accident Recovery London" }]}
        ctaLabel="Message MPG Recovery"
        ctaMessage={waMessages.accident}
      />

      <Prose>
        <section>
          <p>
            After a collision there is a lot to sort out and very little patience left for
            any of it. Moving the vehicle should be the simple part. MPG Recovery collects
            damaged and undriveable vehicles across London, at any hour, and takes them to a
            garage, a bodyshop, a storage yard or your home.
          </p>
        </section>

        <section>
          <h2>Safety comes first</h2>
          <p>
            If anyone is injured, if the vehicle is in a dangerous position, or if the road
            is obstructed, contact the emergency services before anything else. Recovery can
            be arranged once the scene is safe and the vehicle is cleared for removal.
            Nothing about moving a car is more important than the people around it.
          </p>
          <p>
            Take photographs while you are waiting, if it is safe to do so. They help your
            insurer, and they help us: a picture of the damage tells us whether a wheel will
            turn and how the vehicle can be loaded.
          </p>
        </section>

        <InlineFigure
          src={accidentImg}
          alt="An accident-damaged car winched onto the MPG Recovery bed at night in East London"
          caption="Accident damage cleared at night in East London. The vehicle is winched on, so nothing has to be driven."
          width={576}
          height={778}
        />

        <section>
          <h2>What we can move</h2>
          <p>
            Vehicles with front, rear or side damage, cars sitting on a flat or collapsed
            wheel, vehicles with suspension or steering damage that will not roll straight,
            and cars that simply will not start after the impact. The bed lowers to the
            road and the winch does the work, so nothing has to be driven or dragged on its
            own wheels.
          </p>
          <p>
            Where a vehicle has leaked fluid, lost glass across the road, or is resting
            against something, say so when you message. It changes how we approach the job
            and what we bring. Motorcycles are recovered too, on a front wheel chock with
            soft straps.
          </p>
          <p>
            Where the vehicle is drivable and this is really a fault rather than a
            collision, see{" "}
            <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
              breakdown recovery
            </Link>
            . For the mechanics of how vehicles are loaded, see{" "}
            <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
              vehicle recovery
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What to send us</h2>
          <ul>
            <li>The exact location — a map pin or full postcode</li>
            <li>Vehicle make, model and registration if appropriate</li>
            <li>Whether the vehicle rolls and steers</li>
            <li>Photographs of the damage and of how the vehicle is sitting</li>
            <li>Where the vehicle needs to be taken</li>
            <li>Whether anyone else has already been called out to it</li>
          </ul>
          <p>
            Photographs matter more here than on any other kind of job. Damage to wheels,
            suspension or bodywork determines whether a vehicle can be winched or whether a
            different approach is needed.
          </p>
        </section>

        <section>
          <h2>Where the vehicle goes</h2>
          <p>
            Bodyshops, assessors and storage facilities all have their own procedures for
            accepting a damaged vehicle. Confirm the destination will receive it, and let us
            know any reference they have given you. If an assessor still has to inspect the
            car, it usually needs to go somewhere it can sit undisturbed rather than back
            onto a street.
          </p>
          <p>
            If you do not yet know where it should go, say so. It is a common position to be
            in an hour after a crash, and it is better to talk it through than to move the
            vehicle twice.
          </p>
        </section>

        <section>
          <h2>Accident recovery across London</h2>
          <p>
            Collisions happen in the worst places: the A13, the North Circular, box
            junctions, roundabout exits and narrow residential streets where a truck has to
            work around parked cars. We are based in the E1 arches, so{" "}
            <Link to="/vehicle-recovery-east-london" className="text-primary hover:underline">
              East London
            </Link>{" "}
            is closest, and the work runs across{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              the rest of London
            </Link>{" "}
            and the surrounding areas.
          </p>
        </section>

        <section>
          <h2>Insurance and legal matters</h2>
          <p>
            MPG Recovery moves vehicles. We do not give legal advice, handle claims or
            advise on liability — speak to your insurer or a solicitor for any of that. What
            we can tell you is where your vehicle is, when it was collected and where it was
            delivered, which is usually what the insurer asks for first.
          </p>
          <p>
            The company holds business hire and reward insurance, the cover required to
            carry customers&rsquo; vehicles for payment.
          </p>
        </section>

        <section>
          <h2>What it costs</h2>
          <p>
            Price depends on the location, the destination, the time of day and how much work
            the loading takes. A car that rolls is quicker than one resting on a collapsed
            wheel. Quotes are free and agreed before we set off, and there is no separate
            callout charge on a job we carry out.
          </p>
        </section>

        <section>
          <h2>Take your belongings out first</h2>
          <p>
            Once a damaged vehicle goes to a compound, a bodyshop or a storage yard, getting
            back into it is rarely as simple as turning up. Before we load it, clear out
            anything you need: documents, house keys, charger, sunglasses, the contents of
            the boot, anything on the parcel shelf. Check the glovebox even if you are sure
            it is empty.
          </p>
          <p>
            Take the V5 out too if it lives in the car, along with any service history. Those
            are awkward to replace and worth money when the vehicle is eventually sold or
            written off.
          </p>
        </section>

        <section>
          <h2>Vehicles on private land and in car parks</h2>
          <p>
            Not every collision happens on a public road. Where the vehicle is on private
            land — a supermarket car park, an estate road, a gated development or an
            underground level — we need safe access and permission from whoever controls the
            site before it can be moved.
          </p>
          <p>
            Usually that is straightforward and the operator simply wants to know a truck is
            coming. Tell us which it is when you message, and send a photograph of the
            barrier or ramp if the vehicle is below ground, including any posted height
            limit. It decides whether the vehicle can be loaded where it sits or has to be
            brought up to street level first.
          </p>
        </section>

        <ContextualCta
          heading="Need a damaged vehicle moved?"
          label="Message us on WhatsApp"
          message={waMessages.accident}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Accident recovery FAQs</h2>
          <div className="mt-4">
            <FaqList items={faqs} />
          </div>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
