import truckBca from "@/assets/gallery/mpg-recovery-truck-bca-auction.jpg";
import carLoaded from "@/assets/gallery/mpg-recovery-car-loaded-on-bed.jpg";
import suvStrapped from "@/assets/gallery/mpg-recovery-suv-strapped-down.jpg";
import archInterior from "@/assets/gallery/mpg-recovery-arch-interior-e1.jpg";
import tentStreet from "@/assets/gallery/mpg-recovery-arch-90-tent-street.jpg";
import vanDoorway from "@/assets/gallery/mpg-recovery-van-arch-doorway.jpg";
import vanOutside from "@/assets/gallery/mpg-recovery-van-outside-arch-90.jpg";
import vanInside from "@/assets/gallery/mpg-recovery-van-inside-the-arch.jpg";

import accidentNight from "@/assets/jobs/mpg-recovery-accident-damaged-car-night.jpg";
import damagedMercedes from "@/assets/jobs/mpg-recovery-damaged-mercedes-loading.jpg";
import nightCarPark from "@/assets/jobs/mpg-recovery-night-collection-car-park.jpg";
import nightCanary from "@/assets/jobs/mpg-recovery-night-recovery-canary-wharf.jpg";
import copart from "@/assets/jobs/mpg-recovery-auction-collection-copart.jpg";
import bca from "@/assets/jobs/mpg-recovery-auction-collection-bca.jpg";
import mini from "@/assets/jobs/mpg-recovery-mini-loaded-for-transport.jpg";
import retailPark from "@/assets/jobs/mpg-recovery-car-loaded-retail-park.jpg";
import bedLowered from "@/assets/jobs/mpg-recovery-tilt-and-slide-bed-lowered.jpg";
import strapDetail from "@/assets/jobs/mpg-recovery-wheel-strap-detail.jpg";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  /** Describes the picture for screen readers and image search. */
  alt: string;
  /** Short line shown under the image on the gallery page. */
  caption: string;
};

/**
 * Photographs of MPG Recovery's own truck, van and base. Every image is an
 * owner-uploaded photo from the Google Business Profile — no stock imagery.
 * Customer number plates are blurred; only MPG's own registration is shown.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: truckBca,
    width: 1242,
    height: 700,
    alt: "The MPG Recovery flatbed truck parked at a BCA vehicle auction site",
    caption: "Collecting from a BCA auction site",
  },
  {
    src: carLoaded,
    width: 1242,
    height: 1170,
    alt: "A car strapped down on the deck of the MPG Recovery flatbed truck at dusk",
    caption: "Strapped down for transport at dusk",
  },
  {
    src: suvStrapped,
    width: 1008,
    height: 1400,
    alt: "An SUV secured with wheel straps on the MPG Recovery truck bed",
    caption: "Wheel straps, not chassis hooks",
  },
  {
    src: vanOutside,
    width: 1200,
    height: 1600,
    alt: "The MPG Recovery van outside Arch 90 on Tent Street in London E1",
    caption: "Outside the arch on Tent Street, E1",
  },
  {
    src: tentStreet,
    width: 1400,
    height: 1892,
    alt: "Arch 90 Tent Street, the MPG Recovery base under the railway arches in East London",
    caption: "The railway arches in Bethnal Green",
  },
  {
    src: vanDoorway,
    width: 1200,
    height: 1600,
    alt: "The MPG Recovery van reversed into the arch doorway at the London base",
    caption: "Back at base between jobs",
  },
  {
    src: vanInside,
    width: 1200,
    height: 1600,
    alt: "The MPG Recovery van inside the lit railway arch workshop in E1",
    caption: "Inside the arch",
  },
  {
    src: archInterior,
    width: 1200,
    height: 1600,
    alt: "Vehicles parked inside the MPG Recovery arch in East London beside the recovery truck",
    caption: "Vehicles kept inside the arch",
  },
];

/**
 * Stills pulled from the owner's own job videos. Lower resolution (576px
 * wide, WhatsApp compressed) so they are used at card size, never as heroes.
 * Location captions burned in by the camera app are cropped off and customer
 * number plates are blurred.
 */
export const jobImages: GalleryImage[] = [
  {
    src: accidentNight,
    width: 576,
    height: 778,
    alt: "An accident-damaged car winched onto the MPG Recovery bed at night in East London",
    caption: "Accident damage cleared at night",
  },
  {
    src: damagedMercedes,
    width: 576,
    height: 778,
    alt: "A damaged Mercedes being winched onto the MPG Recovery flatbed",
    caption: "Winching a damaged car on",
  },
  {
    src: nightCarPark,
    width: 576,
    height: 778,
    alt: "A vehicle collected from a multi-storey car park at night by MPG Recovery",
    caption: "A night collection from a car park",
  },
  {
    src: nightCanary,
    width: 576,
    height: 778,
    alt: "A car on the MPG Recovery bed at night beside the towers at Canary Wharf",
    caption: "Working through the night at Canary Wharf",
  },
  {
    src: copart,
    width: 576,
    height: 778,
    alt: "A car collected from a Copart auction site on the MPG Recovery transporter",
    caption: "Collected from a Copart auction",
  },
  {
    src: bca,
    width: 576,
    height: 778,
    alt: "A car loaded at a BCA auction site ready for delivery by MPG Recovery",
    caption: "A BCA auction collection",
  },
  {
    src: mini,
    width: 576,
    height: 778,
    alt: "A Mini strapped down on the MPG Recovery flatbed in daylight",
    caption: "Loaded and strapped for transport",
  },
  {
    src: retailPark,
    width: 576,
    height: 778,
    alt: "A car secured on the MPG Recovery bed at a London retail park",
    caption: "Collected from a retail park",
  },
  {
    src: bedLowered,
    width: 576,
    height: 778,
    alt: "The MPG Recovery tilt-and-slide bed lowered to the road ready to load",
    caption: "The tilt-and-slide bed, lowered to load",
  },
  {
    src: strapDetail,
    width: 576,
    height: 778,
    alt: "A wheel strap ratcheted over the tyre of a car on the MPG Recovery bed",
    caption: "Strapped by the wheels, not the bodywork",
  },
];

/** Everything, for the gallery page. */
export const allImages: GalleryImage[] = [...galleryImages, ...jobImages];
