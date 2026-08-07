import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/config/site";

const path = "/about";
const title = "About MPG Recovery | London Vehicle Recovery & Transport";
const description =
  "MPG Recovery is a London-based vehicle recovery and transport company. MPG RECOVERY LTD, company number 17231248, registered in London E1.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "About", path }])),
      },
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
        intro="MPG Recovery provides vehicle recovery and transportation services from its London base."
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
          <h2>How we work</h2>
          <p>
            There is no call queue and no enquiry portal. You message the same number you
            would call, and the conversation stays in one thread — photos, locations and
            confirmations all in the same place. It suits recovery work, where the useful
            information is usually a picture and a map pin rather than a paragraph.
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
            are served.
          </p>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
