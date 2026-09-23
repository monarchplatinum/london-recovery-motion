import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { ContactSection } from "@/components/sections/ContactSection";
import { ReviewCard, ReviewSummary } from "@/components/sections/Reviews";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { reviews, reviewSummary } from "@/content/reviews";
import { siteConfig, waMessages } from "@/config/site";

const path = "/reviews";
const title = "Reviews | MPG Recovery London | 5.0 on Google";
const description =
  "Read what customers say about MPG Recovery. Rated 5.0 from 19 Google reviews for vehicle recovery and transport across London.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Reviews", path }])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Customers Say"
        intro="Every review below was left on our Google Business Profile and is reproduced here word for word. Follow the link to read them on Google, where they can be checked against the profile itself."
        crumbs={[{ label: "Reviews" }]}
        ctaLabel="WhatsApp MPG Recovery"
        ctaMessage={waMessages.general}
      />

      <section
        aria-label="Google reviews"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ReviewSummary />
          <a
            href={siteConfig.GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:border-primary/60 hover:text-primary"
          >
            Read them on Google
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <li key={review.author + review.date} className="mb-4 break-inside-avoid">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Been recovered by us?{" "}
          <a
            href={siteConfig.GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Leave a review on Google
          </a>
          . If something went wrong, call {siteConfig.phoneDisplay} first and we will try
          to put it right.
        </p>

        <p className="mt-3 max-w-3xl text-xs text-muted-foreground/80">
          Rating and reviews last checked {reviewSummary.lastChecked}. See what we do on{" "}
          <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
            vehicle recovery
          </Link>{" "}
          and{" "}
          <Link to="/vehicle-transport-london" className="text-primary hover:underline">
            vehicle transport
          </Link>
          , or look through the{" "}
          <Link to="/gallery" className="text-primary hover:underline">
            photo gallery
          </Link>
          .
        </p>

        <ContextualCta
          heading="Need a vehicle moved?"
          label="Message us on WhatsApp"
          message={waMessages.general}
          event="recovery_enquiry_click"
        />
      </section>

      <ContactSection />
    </>
  );
}
