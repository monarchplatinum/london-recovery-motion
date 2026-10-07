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
            We use Google Analytics to count how many people visit each page, how they
            found the site, and which pages lead to a WhatsApp message or a phone call. It
            only sets cookies if you choose Accept in the cookie banner.
          </p>
          <p>
            If you accept, Google Analytics sets two cookies: <code>_ga</code>, which
            tells one visitor from another, and <code>_ga_7R34PXC9XX</code>, which keeps
            track of the current visit. Both last up to two years. If you reject, or make
            no choice, no analytics cookies are set and Google receives only anonymous,
            cookieless signals that cannot identify you.
          </p>
          <p>
            Your choice is remembered in your browser&rsquo;s local storage under
            <code> mpg-analytics-consent</code>. You can change it at any time with the
            &ldquo;Cookie settings&rdquo; link at the bottom of every page.
          </p>
        </section>

        <section>
          <h2>Third parties</h2>
          <p>
            Tapping a WhatsApp link opens WhatsApp, which is operated by Meta under its
            own privacy and cookie policies. Google Analytics is provided by Google under
            its own privacy policy. Fonts are served from this website, not from a third
            party.
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
