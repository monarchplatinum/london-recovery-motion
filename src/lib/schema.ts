import { siteConfig, absoluteUrl, serviceAreas } from "@/config/site";

const { address } = siteConfig;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${address.line1}, ${address.line2}`,
  addressLocality: address.city,
  postalCode: address.postcode,
  addressCountry: address.countryCode,
};

/** AutomotiveBusiness is a recognised LocalBusiness subtype. */
export function localBusinessSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": absoluteUrl("/#business"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    identifier: siteConfig.companyNumber,
    description:
      "Vehicle recovery, towing and vehicle transport in London from MPG Recovery.",
    telephone: "+447884889128",
    address: postalAddress,
    areaServed: [
      { "@type": "City", name: "London" },
      ...serviceAreas.map((a) => ({ "@type": "Place", name: a.name })),
    ],
  };

  base['image'] = absoluteUrl('/og-image.jpg');
  base['logo'] = absoluteUrl('/icon-512.png');
  if (siteConfig.url) base['url'] = siteConfig.url;
  if (siteConfig.email) base['email'] = siteConfig.email;
  if (siteConfig.openingHours) base['openingHours'] = siteConfig.openingHours;
  if (siteConfig.social.length) base['sameAs'] = siteConfig.social;
  if (siteConfig.GOOGLE_MAPS_URL) base['hasMap'] = siteConfig.GOOGLE_MAPS_URL;

  return base;
}

export function websiteSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    publisher: { "@id": absoluteUrl("/#business") },
  };
  if (siteConfig.url) base['url'] = siteConfig.url;
  return base;
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": absoluteUrl("/#business") },
    areaServed: { "@type": "City", name: "London" },
    url: absoluteUrl(path),
  };
}

/** Sitewide Organization node — brand identity for knowledge panels. */
export function organizationSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    identifier: siteConfig.companyNumber,
    telephone: siteConfig.phoneIntl.replace(/\s/g, ""),
    address: postalAddress,
    areaServed: { "@type": "City", name: "London" },
    logo: absoluteUrl("/icon-512.png"),
    image: absoluteUrl("/og-image.jpg"),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phoneIntl.replace(/\s/g, ""),
        areaServed: "GB",
        availableLanguage: ["English"],
      },
    ],
  };
  if (siteConfig.url) base['url'] = siteConfig.url;
  if (siteConfig.email) base['email'] = siteConfig.email;
  if (siteConfig.social.length) base['sameAs'] = siteConfig.social;
  return base;
}
