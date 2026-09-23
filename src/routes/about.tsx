import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose, InlineFigure } from "@/components/layout/PageParts";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { localBusinessSchema } from "@/lib/schema";
import { reviewSummary } from "@/content/reviews";
import { siteConfig } from "@/config/site";
import bedLowered from "@/assets/jobs/mpg-recovery-tilt-and-slide-bed-lowered.jpg";
import archOutside from "@/assets/gallery/mpg-recovery-van-outside-arch-90.jpg";

const path = "/about";
const title = "About MPG Recovery | 24/7 Vehicle Recovery in London";
const description =
  "MPG Recovery is a London vehicle recovery and transport company working out of the E1 railway arches. On call 24/7, free quotes, rated 5.0 on Google.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "About", path }])),
      },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
    ],
  }),
  component: Page,
});

function Page() {
  const { address } = siteConfig;

  return (
    <>
      <PageHero
        eyebrow="About"
        title="London Based. Vehicle Focused."
        intro="MPG Recovery moves vehicles across London and the surrounding areas, 24 hours a day, from a railway arch in E1. Recovery when something has gone wrong, and transport when a vehicle simply needs to be somewhere else."
        crumbs={[{ label: "About" }]}
      />

      <Prose>
        <section>
          <h2>What we do</h2>
          <p>
            Whether a vehicle has broken down, needs transporting to a garage, has been
            purchased or sold, or simply needs moving from A to B, customers can contact
            MPG Recovery directly by WhatsApp or phone.
          </p>
          <p>
            Keep communication simple: send the vehicle details, collection location and
            destination and we can discuss the job.
          </p>
        </section>

        <section>
          <h2>The truck, and what it can move</h2>
          <p>
            We run a tilt-and-slide bed with a winch. The bed lowers to the road, so a
            vehicle that won&rsquo;t start, won&rsquo;t roll and won&rsquo;t steer can
            still be pulled straight on without being dragged or towed on its own wheels.
            Vehicles are strapped by the wheels rather than the bodywork.
          </p>
          <p>
            That covers more than breakdowns. Low and modified cars load at a shallow
            enough angle to keep the bumper and underside clear. Motorcycles travel in a
            front wheel chock with soft straps. Electric and hybrid vehicles go on the bed
            with all four wheels off the ground, which is how they should be moved — towing
            them can damage the drive motors. We also collect from underground and
            multi-storey car parks, where a full-size recovery truck cannot get down the
            ramp.
          </p>
          <InlineFigure
            src={bedLowered}
            alt="The MPG Recovery tilt-and-slide bed lowered to the road ready to load"
            caption="The bed lowered to the road. A non-runner is winched straight on."
            width={576}
            height={778}
          />
        </section>

        <section>
          <h2>How we work</h2>
          <p>
            There is no call queue and no enquiry portal. You message the same number you
            would call, and the conversation stays in one thread — photos, locations and
            confirmations all in the same place. It suits recovery work, where the useful
            information is usually a picture and a map pin rather than a paragraph.
          </p>
          <p>
            Quotes are free, and the price is agreed before anything is arranged. There is
            no separate callout charge on a job we carry out; the only time a callout fee
            applies is when we have already travelled to you and the vehicle then
            doesn&rsquo;t need moving after all.
          </p>
        </section>

        <section>
          <h2>Hours and cover</h2>
          <p>
            MPG Recovery is on call 24 hours a day, seven days a week, including nights,
            weekends and bank holidays. Breakdowns rarely happen at a convenient hour, and
            a car sat on a red route or a dual carriageway at 2am cannot wait until
            morning.
          </p>
          <p>
            The company holds business hire and reward insurance, which is the cover
            required to carry customers&rsquo; vehicles for payment.
          </p>
        </section>

        <section>
          <h2>What customers say</h2>
          <p>
            MPG Recovery is rated {reviewSummary.rating.toFixed(1)} on Google from{" "}
            {reviewSummary.count} reviews, every one of them five stars. They are worth
            more than anything we could write here, so{" "}
            <Link to="/reviews" className="text-primary hover:underline">
              read them in full
            </Link>{" "}
            and check them against our profile on Google.
          </p>
        </section>

        <section>
          <h2>Company details</h2>
          <div className="not-prose mt-4 rounded-xl border border-border bg-surface/60 p-6">
            <p className="font-display text-lg font-extrabold uppercase tracking-wide text-foreground">
              {siteConfig.legalName}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Company No. {siteConfig.companyNumber}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">London, United Kingdom</p>
            <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
              Registered office: {address.line1}, {address.line2}, {address.city},{" "}
              {address.postcode}, {address.country}.
              {!siteConfig.addressIsPublicPremises
                ? " MPG Recovery operates as a service-area business — this address is a registered office, not a customer drop-in location."
                : null}
            </p>
          </div>
        </section>

        <section>
          <h2>Where we work</h2>
          <p>
            Recovery and transport jobs run across London and the surrounding areas. Our
            base in E1 means{" "}
            <Link to="/vehicle-recovery-east-london" className="text-primary hover:underline">
              East London
            </Link>{" "}
            is covered most regularly, but{" "}
            <Link to="/areas-we-cover" className="text-primary hover:underline">
              all five London areas
            </Link>{" "}
            are served. Vehicle transport runs further out again, including auction and
            dealer collections outside the capital.
          </p>
          <InlineFigure
            src={archOutside}
            alt="The MPG Recovery van outside Arch 90 on Tent Street in London E1"
            caption="Arch 90, Tent Street — the E1 base the trucks run from."
            width={1200}
            height={1600}
          />
          <p>
            You can see more of the truck, the arch and the jobs we have been out on in
            the{" "}
            <Link to="/gallery" className="text-primary hover:underline">
              photo gallery
            </Link>
            .
          </p>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
