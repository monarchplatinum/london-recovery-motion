import { siteConfig, absoluteUrl } from "@/config/site";

export const OG_IMAGES = {
  default: "/og-image.jpg",
  recovery: "/og-recovery.jpg",
  transport: "/og-transport.jpg",
} as const;

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  /** Absolute-from-root path of the share image, e.g. "/og-image.jpg". */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
};

/**
 * Full per-page meta set: title, description, Open Graph, Twitter and robots.
 * Always self-references the page in og:url so crawlers attribute the
 * preview to this route.
 */
export function seoMeta({
  title,
  description,
  path,
  image = OG_IMAGES.default,
  imageAlt = `${siteConfig.name} — vehicle recovery and transport in London`,
  type = "website",
  noindex = false,
}: SeoInput) {
  const url = absoluteUrl(path) || path;
  const imageUrl = absoluteUrl(image) || image;

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:locale", content: "en_GB" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
    { name: "geo.region", content: "GB-LND" },
    { name: "geo.placename", content: "London" },
  ];

  if (noindex) meta.push({ name: "robots", content: "noindex, follow" });
  else meta.push({ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" });

  return meta;
}

/** Canonical link for a leaf route. */
export function canonical(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) || path }];
}
