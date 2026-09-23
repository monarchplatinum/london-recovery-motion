import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { galleryImages } from "@/content/gallery";
import { useReveal } from "@/hooks/use-motion";

/**
 * Horizontal photo reel. Shows the first six pictures and sends people to
 * the full gallery page.
 */
export function GalleryStrip() {
  const ref = useReveal<HTMLDivElement>();
  const images = galleryImages.slice(0, 6);

  return (
    <section
      aria-labelledby="gallery-strip-heading"
      className="border-y border-border bg-surface/30"
    >
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-eyebrow">On the road</p>
            <h2
              id="gallery-strip-heading"
              className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl"
            >
              Our Truck, Our Base, Our Work
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Photographs of the MPG Recovery truck and the arch it works out of in E1.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:border-primary/60 hover:text-primary"
          >
            View the gallery
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="pb-12 sm:pb-20">
        <ul className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:gap-4 sm:px-6 [scrollbar-width:thin]">
          {images.map((image) => (
            <li
              key={image.src}
              className="w-[74vw] shrink-0 snap-start sm:w-[42vw] lg:w-[30rem]"
            >
              <Link
                to="/gallery"
                className="group block overflow-hidden rounded-xl border border-border bg-surface-2"
                aria-label={`${image.caption} — open the gallery`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
