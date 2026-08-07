/**
 * Central site configuration for MPG Recovery.
 *
 * EDIT THIS FILE to update business details site-wide.
 * Anything left as an empty string is intentionally NOT rendered — do not
 * populate it with placeholder/fabricated data.
 */

export const siteConfig = {
  // --- Identity -----------------------------------------------------------
  name: "MPG Recovery",
  legalName: "MPG RECOVERY LTD",
  companyNumber: "17231248",
  tagline: "Vehicle Recovery & Transport in London",

  // --- Contact ------------------------------------------------------------
  phoneDisplay: "07884 889128",
  phoneIntl: "+44 7884 889128",
  phoneHref: "tel:+447884889128",
  whatsappNumber: "447884889128",
  whatsappDisplay: "07884 889128",

  /** TODO: owner to supply a business email address. */
  email: "",

  // --- Address (registered office — service-area business) ----------------
  address: {
    line1: "Arch 90",
    line2: "Tent Street",
    city: "London",
    postcode: "E1 5DZ",
    country: "United Kingdom",
    countryCode: "GB",
  },
  /**
   * Set to true ONLY if the owner confirms customers may attend the address.
   * While false the site describes it as a registered office only.
   */
  addressIsPublicPremises: false,

  /** TODO: owner to confirm real availability hours before publishing. */
  openingHours: "" as string,

  // --- Google ---------------------------------------------------------------
  // Do not fabricate these. Populate once the real profile exists.
  GOOGLE_BUSINESS_PROFILE_URL: "",
  GOOGLE_REVIEW_URL: "",
  GOOGLE_MAPS_URL: "",

  // --- Social ----------------------------------------------------------------
  // Only add URLs for profiles that genuinely exist; used for schema `sameAs`.
  social: [] as string[],

  // --- Analytics (nothing loads until an ID is supplied) --------------------
  analytics: {
    GA4_MEASUREMENT_ID: "",
    GTM_CONTAINER_ID: "",
    GOOGLE_SITE_VERIFICATION: "",
  },

  // --- Site --------------------------------------------------------------
  /** Production domain. Update if a custom domain is connected. */
  url: "https://london-recovery-motion.lovable.app",

  areaServed: "London",
} as const;

export const serviceAreas = [
  { slug: "east-london", name: "East London" },
  { slug: "central-london", name: "Central London" },
  { slug: "north-london", name: "North London" },
  { slug: "south-london", name: "South London" },
  { slug: "west-london", name: "West London" },
] as const;

/** Places we mention as covered. These are references, not doorway pages. */
export const coveredPlaces = [
  "Tower Hamlets",
  "Whitechapel",
  "Bethnal Green",
  "Stepney",
  "Shoreditch",
  "Hackney",
  "Stratford",
  "Bow",
  "Mile End",
  "Canary Wharf",
  "Poplar",
  "Limehouse",
  "Newham",
  "Ilford",
  "Barking",
  "Dagenham",
  "Romford",
  "Greenwich",
  "Lewisham",
  "Islington",
  "Camden",
  "Westminster",
];

// --- WhatsApp helpers -----------------------------------------------------

export const waMessages = {
  general: "Hi MPG Recovery, I need help with a vehicle. My current location is:",
  transport:
    "Hi MPG Recovery, I'd like a vehicle transport quote.\n\nCollection postcode:\nDelivery postcode:\nVehicle:\nWhen required:",
  breakdown:
    "Hi MPG Recovery, my vehicle has broken down.\n\nLocation:\nVehicle:\nDoes it run:\nKeys available:",
  accident:
    "Hi MPG Recovery, my vehicle needs moving following an accident.\n\nLocation:\nVehicle:\nIs the vehicle drivable:",
  recovery:
    "Hi MPG Recovery, I need a vehicle recovered.\n\nCollection location:\nDestination:\nVehicle:\nDoes it run:",
  location: "Hi MPG Recovery, here is my location:",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// --- Absolute URL helper (safe when no domain is configured yet) ----------

export function absoluteUrl(path: string) {
  return siteConfig.url ? `${siteConfig.url}${path}` : path;
}
