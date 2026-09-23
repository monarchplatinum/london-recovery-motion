import truckBca from "@/assets/gallery/mpg-recovery-truck-bca-auction.jpg";
import carLoaded from "@/assets/gallery/mpg-recovery-car-loaded-on-bed.jpg";
import suvStrapped from "@/assets/gallery/mpg-recovery-suv-strapped-down.jpg";
import archInterior from "@/assets/gallery/mpg-recovery-arch-interior-e1.jpg";
import tentStreet from "@/assets/gallery/mpg-recovery-arch-90-tent-street.jpg";
import vanDoorway from "@/assets/gallery/mpg-recovery-van-arch-doorway.jpg";
import vanOutside from "@/assets/gallery/mpg-recovery-van-outside-arch-90.jpg";
import vanInside from "@/assets/gallery/mpg-recovery-van-inside-the-arch.jpg";

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
