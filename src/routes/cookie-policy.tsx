import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";

const path = "/cookie-policy";
const title = "Cookie Policy | MPG Recovery";
const description =
  "How cookies and similar technologies are used on the MPG Recovery website.";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Cookie Policy", path }])),
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
        title="Cookie Policy"
        intro="A short, honest summary of what this website stores on your device."
        crumbs={[{ label: "Cookie Policy" }]}
      />
      <Prose>
        <section>
          <h2>Essential storage</h2>
          <p>
            This website is a static marketing site. It does not require you to log in and
            sets no cookies of its own for advertising or profiling.
          </p>
        </section>
        <section>
          <h2>Analytics</h2>
          <p>
            Analytics scripts are only loaded if the business has configured a measurement
            ID. Where active, they set cookies to measure how many people visit each page
            and which pages lead to a WhatsApp or phone tap. No analytics provider is
            loaded while no ID is configured.
          </p>
        </section>
        <section>
          <h2>Third parties</h2>
          <p>
            Tapping a WhatsApp link opens WhatsApp, which is operated by Meta under its
            own privacy and cookie policies. Fonts are loaded from Google Fonts, which
            receives a request from your browser in order to serve them.
          </p>
        </section>
        <section>
          <h2>Controlling cookies</h2>
          <p>
            You can block or delete cookies in your browser settings. Doing so will not
            affect your ability to use this site or to contact us.
          </p>
        </section>
      </Prose>
    </>
  );
}
