import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { siteConfig } from "@/config/site";

// Empty until the production domain is set in src/config/site.ts (siteConfig.url).
const BASE_URL = siteConfig.url;

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.8" },
  { path: "/vehicle-recovery-london", changefreq: "monthly", priority: "0.9" },
  { path: "/breakdown-recovery-london", changefreq: "monthly", priority: "0.9" },
  { path: "/accident-recovery-london", changefreq: "monthly", priority: "0.9" },
  { path: "/vehicle-transport-london", changefreq: "monthly", priority: "0.9" },
  { path: "/non-runner-collection-london", changefreq: "monthly", priority: "0.7" },
  { path: "/jump-start-roadside-assistance-london", changefreq: "monthly", priority: "0.7" },
  { path: "/motorcycle-recovery-london", changefreq: "monthly", priority: "0.7" },
  { path: "/ev-hybrid-recovery-london", changefreq: "monthly", priority: "0.7" },
  { path: "/underground-car-park-recovery-london", changefreq: "monthly", priority: "0.7" },
  { path: "/auction-vehicle-collection-london", changefreq: "monthly", priority: "0.7" },
  { path: "/garage-bodyshop-transfers-london", changefreq: "monthly", priority: "0.7" },
  { path: "/areas-we-cover", changefreq: "monthly", priority: "0.7" },
  { path: "/gallery", changefreq: "monthly", priority: "0.5" },
  { path: "/reviews", changefreq: "monthly", priority: "0.6" },
  { path: "/vehicle-recovery-east-london", changefreq: "monthly", priority: "0.7" },
  { path: "/vehicle-recovery-central-london", changefreq: "monthly", priority: "0.7" },
  { path: "/vehicle-recovery-north-london", changefreq: "monthly", priority: "0.7" },
  { path: "/vehicle-recovery-south-london", changefreq: "monthly", priority: "0.7" },
  { path: "/vehicle-recovery-west-london", changefreq: "monthly", priority: "0.7" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.8" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.2" },
  { path: "/cookie-policy", changefreq: "yearly", priority: "0.2" },
  { path: "/terms", changefreq: "yearly", priority: "0.2" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
