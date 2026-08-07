import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageParts";
import { ContactSection } from "@/components/sections/ContactSection";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { localBusinessSchema } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const path = "/contact";
const title = "Contact MPG Recovery | WhatsApp or Call 07884 889128 | London";
const description =
  "Contact MPG Recovery for vehicle recovery and transport in London. Message on WhatsApp or call 07884 889128 with your location and vehicle details.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) || path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Contact", path }])),
      },
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
        intro="WhatsApp is the fastest way to reach us — you can send photos and a location pin in the same message. Prefer to talk? Call the number below."
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
    </>
  );
}
