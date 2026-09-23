import { seoMeta, canonical, OG_IMAGES } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { ContactSection } from "@/components/sections/ContactSection";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { galleryImages } from "@/content/gallery";
import { siteConfig, absoluteUrl, waMessages } from "@/config/site";

const path = "/gallery";
const title = "Gallery | MPG Recovery Truck & London Base | MPG Recovery";
const description =
  "Photos of the MPG Recovery flatbed truck, loaded vehicles and our railway arch base in London E1. WhatsApp or call 07884 889128.";

function imageGallerySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${siteConfig.name} photo gallery`,
    description,
    url: absoluteUrl(path),
    publisher: { "@id": absoluteUrl("/#business") },
    image: galleryImages.map((image) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(image.src),
      caption: image.caption,
      description: image.alt,
      width: image.width,
      height: image.height,
    })),
  };
}

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: seoMeta({ title, description, path, image: OG_IMAGES.recovery }),
    links: canonical(path),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(imageGallerySchema()) },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Gallery", path }])),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Truck, the Bed and the Arch"
        intro="Photographs of MPG Recovery's own flatbed, vehicles loaded for transport, and the railway arch in E1 the business works out of. All of them are ours — no stock photography."
        crumbs={[{ label: "Gallery" }]}
        ctaLabel="WhatsApp MPG Recovery"
        ctaMessage={waMessages.general}
      />

      <section
        aria-label="Photographs of MPG Recovery"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <li
              key={image.src}
              className="overflow-hidden rounded-xl border border-border bg-surface/60"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm text-muted-foreground">{image.caption}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
          Customer number plates in these photographs are blurred. If you need a vehicle
          moved, see{" "}
          <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
            vehicle recovery in London
          </Link>{" "}
          or{" "}
          <Link to="/vehicle-transport-london" className="text-primary hover:underline">
            vehicle transport in London
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
