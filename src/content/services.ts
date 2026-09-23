/**
 * The service list MPG Recovery publishes on its own Google Business Profile,
 * grouped for the /services hub. Descriptions are rewritten in the site's
 * voice but describe only what the owner listed there.
 *
 * `to` points at the page that covers the service today. Services without a
 * page of their own are covered by their group's page until a child page
 * exists — never link to a page that has not been built.
 */

export type ServiceItem = {
  name: string;
  blurb: string;
  /** The page covering this service. */
  to: string;
  /** True once this service has a page of its own rather than a parent page. */
  hasOwnPage?: boolean;
};

export type ServiceGroup = {
  heading: string;
  intro: string;
  to: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    heading: "Vehicle recovery",
    intro:
      "When something has gone wrong and the vehicle cannot be driven. We are on call 24 hours a day, and the bed lowers to the road so a car that will not start, roll or steer still travels safely.",
    to: "/vehicle-recovery-london",
    items: [
      {
        name: "24 hour vehicle recovery",
        blurb:
          "Recovery at any hour, including nights, weekends and bank holidays, across London.",
        to: "/vehicle-recovery-london",
        hasOwnPage: true,
      },
      {
        name: "Breakdown recovery",
        blurb:
          "A car that will not start or drive, collected from the roadside and taken where you need it.",
        to: "/breakdown-recovery-london",
        hasOwnPage: true,
      },
      {
        name: "Accident recovery",
        blurb:
          "Damaged and undriveable vehicles cleared from the scene and delivered to a garage, bodyshop or storage.",
        to: "/accident-recovery-london",
        hasOwnPage: true,
      },
      {
        name: "Non-runner collection",
        blurb:
          "Seized engines, flat batteries, locked steering, long-term SORN cars and vehicles with no keys, winched onto the bed.",
        to: "/vehicle-recovery-london",
      },
      {
        name: "Jump start and roadside assistance",
        blurb:
          "We try to get you moving at the roadside. If it cannot be fixed there, the same truck recovers it.",
        to: "/breakdown-recovery-london",
      },
      {
        name: "Motorcycle recovery",
        blurb:
          "Bikes and scooters loaded with a front wheel chock and soft straps so nothing is scratched or bent.",
        to: "/vehicle-recovery-london",
      },
      {
        name: "EV and hybrid recovery",
        blurb:
          "Electric and hybrid vehicles carried with all four wheels off the ground, which is the safe way to move them.",
        to: "/vehicle-recovery-london",
      },
      {
        name: "Underground car park recovery",
        blurb:
          "Vehicles brought up from underground and multi-storey car parks where a full-size truck cannot reach.",
        to: "/vehicle-recovery-london",
      },
    ],
  },
  {
    heading: "Vehicle transport",
    intro:
      "Planned movements where nothing is wrong with the vehicle — it simply needs to be somewhere else. Vehicles travel on the bed, so no mileage is added and nothing needs to be taxed, insured or driven.",
    to: "/vehicle-transport-london",
    items: [
      {
        name: "Vehicle transport",
        blurb:
          "Cars, vans and motorcycles moved across London and the rest of the UK on the bed rather than towed.",
        to: "/vehicle-transport-london",
        hasOwnPage: true,
      },
      {
        name: "Car collection and delivery",
        blurb:
          "Collected from one address and delivered to another: private sales, house moves and cars bought online.",
        to: "/vehicle-transport-london",
      },
      {
        name: "Garage and bodyshop transfers",
        blurb:
          "Moves between garages, bodyshops, MOT stations and dealerships, including part-stripped and mid-repair vehicles.",
        to: "/vehicle-transport-london",
      },
      {
        name: "Auction vehicle collection",
        blurb:
          "Collections from BCA, Copart, Manheim and Aston Barclay delivered to your home, garage or forecourt.",
        to: "/vehicle-transport-london",
      },
      {
        name: "Dealer and trade transport",
        blurb:
          "Stock movements, part-exchange collections and sold-car deliveries for dealers and traders.",
        to: "/vehicle-transport-london",
      },
      {
        name: "Low loader and tilt-and-slide",
        blurb:
          "Low, modified, classic and wide vehicles loaded at a shallow angle to keep the bumper and underside clear.",
        to: "/vehicle-transport-london",
      },
      {
        name: "Long distance UK transport",
        blurb:
          "Door-to-door moves from London to anywhere in the UK, at a price agreed before we set off.",
        to: "/vehicle-transport-london",
      },
    ],
  },
];

export const serviceCount = serviceGroups.reduce((n, g) => n + g.items.length, 0);
