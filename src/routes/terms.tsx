import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/config/site";

const path = "/terms";
const title = "Terms of Use | MPG Recovery";
const description =
  "Terms of use for the MPG Recovery website, including the basis on which information on this site is provided.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Terms of Use", path }])),
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
        title="Terms of Use"
        intro="The basis on which this website and the information on it are provided."
        crumbs={[{ label: "Terms of Use" }]}
      />
      <Prose>
        <section>
          <h2>About this site</h2>
          <p>
            This website is operated by {siteConfig.legalName}, company number{" "}
            {siteConfig.companyNumber}. By using the site you accept these terms.
          </p>
        </section>
        <section>
          <h2>Information on this site</h2>
          <p>
            Descriptions of services are provided for general information. They are not an
            offer or a guarantee that a particular job can be carried out, at a particular
            time or price. Availability, timings and prices are confirmed individually
            when you contact us with the details of your job.
          </p>
        </section>
        <section>
          <h2>Quotes and bookings</h2>
          <p>
            Nothing on this website constitutes a binding quotation. A job is only
            arranged once it has been discussed and confirmed directly with us.
          </p>
        </section>
        <section>
          <h2>Links</h2>
          <p>
            Where this site links to third-party services such as WhatsApp or mapping
            providers, we are not responsible for their content or their terms.
          </p>
        </section>
        <section>
          <h2>Liability</h2>
          <p>
            We do not exclude liability where it would be unlawful to do so. Otherwise, we
            are not liable for loss arising from reliance on general information published
            on this website rather than on details confirmed with us directly.
          </p>
        </section>
        <section>
          <h2>Governing law</h2>
          <p>
            These terms are governed by the law of England and Wales, and the courts of
            England and Wales have exclusive jurisdiction.
          </p>
        </section>
      </Prose>
    </>
  );
}
