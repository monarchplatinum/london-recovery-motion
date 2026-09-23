import { Link } from "@tanstack/react-router";
import { Star, ArrowUpRight } from "lucide-react";
import { reviews, reviewSummary, type Review } from "@/content/reviews";
import { siteConfig } from "@/config/site";
import { useReveal } from "@/hooks/use-motion";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
});

export function Stars({ count = 5, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="size-4 fill-primary text-primary" />
      ))}
    </span>
  );
}

/**
 * One review. Long reviews are clamped so a single wordy customer can't
 * stretch a whole row; the full text is a click away on Google.
 */
export function ReviewCard({ review, clamp = 6 }: { review: Review; clamp?: number }) {
  return (
    <figure className="rounded-xl border border-border bg-surface/60 p-4 sm:p-5">
      <Stars />
      <blockquote
        className="mt-2.5 text-[0.9rem] leading-relaxed text-muted-foreground"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: clamp,
          overflow: "hidden",
        }}
      >
        {review.text}
      </blockquote>
      <figcaption className="mt-3 text-xs">
        <span className="font-display font-bold text-foreground">{review.author}</span>
        <span className="text-muted-foreground">
          {" "}
          · {dateFormat.format(new Date(review.date))}
        </span>
      </figcaption>
    </figure>
  );
}

/** Rating, count and a link to the profile the reviews come from. */
export function ReviewSummary({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${className}`}>
      <span className="font-display text-3xl font-extrabold text-foreground">
        {reviewSummary.rating.toFixed(1)}
      </span>
      <Stars />
      <span className="text-sm text-muted-foreground">
        {reviewSummary.count} reviews on Google
      </span>
    </div>
  );
}

/** Homepage block: three substantial reviews, plus both links out. */
export function Reviews() {
  const ref = useReveal<HTMLDivElement>();
  // The three that actually say something, without being an essay.
  const featured = [...reviews]
    .filter((review) => review.text.length > 90 && review.text.length < 360)
    .slice(0, 3);

  return (
    <section
      aria-labelledby="reviews-heading"
      className="border-b border-border bg-surface/30"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <p className="text-eyebrow">Reviews</p>
        <h2
          id="reviews-heading"
          className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl"
        >
          What Our Customers Say
        </h2>
        <ReviewSummary className="mt-5" />

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {featured.map((review) => (
            <li key={review.author + review.date} data-reveal-child className="reveal">
              <ReviewCard review={review} clamp={5} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/reviews"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-3 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
          >
            Read all {reviewSummary.count} reviews
          </Link>
          <a
            href={siteConfig.GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:border-primary/60 hover:text-primary"
          >
            See them on Google
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
