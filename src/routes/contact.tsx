import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageParts";
import { ContactSection } from "@/components/sections/ContactSection";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig, absoluteUrl, serviceAreas, coveredPlaces } from "@/config/site";

const path = "/contact";
const title = "Contact MPG Recovery | Call or WhatsApp 07884 889128";
const description =
  "Contact MPG Recovery for vehicle recovery and transport in London. Message on WhatsApp or call 07884 889128 with your location and vehicle details.";

function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntity: { "@id": absoluteUrl("/#business") },
    about: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneIntl.replace(/\s/g, ""),
      contactType: "customer service",
      areaServed: "GB",
      hoursAvailable: "Mo-Su 00:00-23:59",
    },
  };
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Contact", path }])),
      },
      { type: "application/ld+json", children: JSON.stringify(contactPageSchema()) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact MPG Recovery"
        intro="We are on call 24 hours a day, seven days a week, and quotes are free. WhatsApp is the fastest way to reach us — you can send photos and a location pin in the same message. Prefer to talk? Call the number below."
        crumbs={[{ label: "Contact" }]}
      />

      <ContactSection id="contact-details" />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
          Prefer to send an enquiry?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This opens WhatsApp with your details already written out, so nothing gets
          retyped. No account, no password, no waiting on a form submission.
        </p>
        <div className="mt-6">
          <EnquiryForm />
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Areas we serve</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Recovery and transport across London and the surrounding areas, from our base in
            E1. Not sure if we cover you? Call {siteConfig.phoneDisplay} and we&rsquo;ll tell
            you straight away.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  to={`/vehicle-recovery-${area.slug}` as "/"}
                  className="font-display font-bold text-foreground hover:text-primary"
                >
                  Vehicle recovery in {area.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Including {coveredPlaces.join(", ")}.
          </p>
        </div>
      </section>
    </>
  );
}
