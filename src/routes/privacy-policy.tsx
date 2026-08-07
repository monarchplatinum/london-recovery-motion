import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/config/site";

const path = "/privacy-policy";
const title = "Privacy Policy | MPG Recovery";
const description =
  "How MPG Recovery handles personal information provided when you contact us about vehicle recovery or transport in London.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Privacy Policy", path }])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This policy explains what happens to the information you share when you contact MPG Recovery."
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <Prose>
        <section>
          <h2>Who we are</h2>
          <p>
            {siteConfig.legalName} (company number {siteConfig.companyNumber}), registered
            at {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
            {siteConfig.address.city} {siteConfig.address.postcode}, is the data
            controller for information you provide to us.
          </p>
        </section>
        <section>
          <h2>What this website collects</h2>
          <p>
            This website does not run a server-side contact form and does not store
            enquiry data itself. The enquiry form on the contact page composes a message
            in your own WhatsApp application; nothing is submitted to or retained by this
            site.
          </p>
          <p>
            Analytics are not loaded unless a measurement ID has been configured by the
            business owner. If analytics are active, they collect standard usage data such
            as pages viewed, approximate location and device type.
          </p>
        </section>
        <section>
          <h2>Information you send us directly</h2>
          <p>
            When you contact us by WhatsApp, phone or message we receive whatever you
            choose to send: typically your name, phone number, vehicle details, collection
            and destination addresses, and any photographs or location pins you share.
          </p>
          <p>
            We use this only to quote for, arrange and carry out the vehicle movement you
            asked about, and to keep a record of the job.
          </p>
        </section>
        <section>
          <h2>Location sharing</h2>
          <p>
            The &ldquo;share my location&rdquo; feature uses your browser&rsquo;s
            geolocation and only runs when you tap it and grant permission. The
            coordinates are placed into a WhatsApp message for you to send; they are not
            transmitted to this website or stored here.
          </p>
        </section>
        <section>
          <h2>Legal basis and retention</h2>
          <p>
            We process this information to take steps at your request before entering a
            contract and to perform that contract, and to meet legal obligations such as
            accounting records. Job records are kept only as long as needed for those
            purposes.
          </p>
        </section>
        <section>
          <h2>Sharing</h2>
          <p>
            We do not sell personal information. It may be shared with a garage, storage
            site or recipient where that is part of completing your job, or with WhatsApp
            (Meta) as the messaging provider you have chosen to use.
          </p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p>
            You can ask for a copy of the information we hold about you, ask us to correct
            or delete it, or object to how it is used. Contact us on{" "}
            {siteConfig.phoneDisplay}. You can also complain to the Information
            Commissioner&rsquo;s Office (ico.org.uk).
          </p>
        </section>
      </Prose>
    </>
  );
}
