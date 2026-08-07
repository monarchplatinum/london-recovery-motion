import type { ReactNode } from "react";

export type LocationContent = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  body: ReactNode;
  places: string[];
};

export const locationBodies: Record<string, { sections: { h2: string; paras: string[] }[] }> = {
  "east-london": {
    sections: [
      {
        h2: "Recovery from our own doorstep",
        paras: [
          "MPG Recovery works out of Arch 90 on Tent Street, E1 — a few minutes from Whitechapel Road and the Bethnal Green end of the Regent's Canal. East London isn't a region we service from a distance; it's the ground the business sits on.",
          "That matters practically. Knowing which Tower Hamlets estates have height-restricted car parks, which Shoreditch side streets are too tight for a full-length bed, and where you can legally stop long enough to load a car on Whitechapel Road saves a wasted trip.",
        ],
      },
      {
        h2: "Areas covered across East London",
        paras: [
          "Whitechapel, Bethnal Green, Stepney, Mile End, Bow, Limehouse and Poplar sit within a short run of the base. Further out we cover Hackney, Stratford, Canary Wharf, Newham, Ilford, Barking, Dagenham and Romford.",
          "Canary Wharf and the Docklands come with their own quirks — private estate roads, security barriers and underground parking with clearance limits. If your vehicle is below ground, send the level and the posted height restriction with your message.",
        ],
      },
      {
        h2: "Typical East London jobs",
        paras: [
          "Non-runners on residential permit streets in Tower Hamlets. Cars bought at the trade end of the market around Romford and Barking that need moving home. Vehicles going into or coming out of the arch and railway-side garages that run across Bethnal Green, Hackney Wick and Bow.",
        ],
      },
      {
        h2: "Getting in touch",
        paras: [
          "Send your postcode, the destination and the vehicle make and model on WhatsApp. If the car is parked awkwardly — on a kerb, in a bay with a low bollard, or nose-in against a wall — a photo saves a conversation.",
        ],
      },
    ],
  },
  "central-london": {
    sections: [
      {
        h2: "Working inside the zones",
        paras: [
          "Central London recovery is a planning job as much as a driving one. The Congestion Charge zone, ULEZ, red routes, bus lanes and camera-enforced loading bans all shape when and where a vehicle can be loaded.",
          "Tell us the exact street and, if you can, whether there is a loading bay or a legal stopping point nearby. On red routes there are often only a handful of spots within a few hundred metres where a truck can safely stop.",
        ],
      },
      {
        h2: "Areas covered",
        paras: [
          "The City, Westminster, Holborn, Clerkenwell, Soho, Marylebone, Fitzrovia, Southwark's northern edge and the Islington and Camden fringes of the centre.",
        ],
      },
      {
        h2: "Typical central jobs",
        paras: [
          "Vehicles stranded in office and hotel car parks, cars that have failed on the way through town, and movements between city-centre dealerships and workshops further out. Underground car parks are common here — send the level and the height restriction so we know what will fit.",
        ],
      },
      {
        h2: "Timing",
        paras: [
          "Central jobs are often easier outside peak hours, and some buildings only allow vehicle movements at set times. If your building or car park has a window, mention it when you message and we'll plan around it.",
        ],
      },
    ],
  },
  "north-london": {
    sections: [
      {
        h2: "From the inner boroughs to the North Circular",
        paras: [
          "North London runs from the Islington and Camden edges of the centre out through Haringey, Enfield and Barnet towards the A406 and the M1. It's a mix of dense terraced streets with tight permit parking and faster arterial routes.",
        ],
      },
      {
        h2: "Areas covered",
        paras: [
          "Islington, Camden, Haringey, Hackney's northern edge, Tottenham, Wood Green, Finsbury Park, Holloway, Enfield and Barnet.",
        ],
      },
      {
        h2: "Typical north London jobs",
        paras: [
          "Garage and MOT-station movements are frequent here, along with private sale collections from residential streets in Islington and Camden where a transporter needs a clear run at the vehicle. Controlled parking zones are the usual constraint — narrow roads with cars parked both sides.",
        ],
      },
      {
        h2: "What to send",
        paras: [
          "A postcode, the destination and a photo of the street. If the road is one-way, has a width restriction or a school-street closure at certain hours, that is worth mentioning up front.",
        ],
      },
    ],
  },
  "south-london": {
    sections: [
      {
        h2: "South of the river",
        paras: [
          "South London jobs almost always involve a crossing. Which bridge or tunnel makes sense depends on the time of day, and the Blackwall and Rotherhithe tunnels both carry restrictions worth planning around.",
        ],
      },
      {
        h2: "Areas covered",
        paras: [
          "Greenwich, Lewisham, Southwark, Bermondsey, Peckham, Deptford, Woolwich, Bromley's northern edge, Croydon and the surrounding suburbs.",
        ],
      },
      {
        h2: "Typical south London jobs",
        paras: [
          "Suburban driveways and garages make loading easier than in the centre, and there is a lot of collection-and-delivery work here from private sales. Steep residential roads around Greenwich and Sydenham can affect where a vehicle can be safely winched, so a photo helps.",
        ],
      },
      {
        h2: "Enquiring",
        paras: [
          "Send both postcodes — collection and destination — plus the vehicle details, and we'll come back to you on WhatsApp.",
        ],
      },
    ],
  },
  "west-london": {
    sections: [
      {
        h2: "Westminster out to the M4 corridor",
        paras: [
          "West London covers the western half of the centre and runs out along the A40 and M4 towards Heathrow. It's a common direction for longer transport runs leaving the capital.",
        ],
      },
      {
        h2: "Areas covered",
        paras: [
          "Westminster, Kensington and Chelsea, Hammersmith and Fulham, Notting Hill, Ealing, Acton, Chiswick, Brentford and Hounslow.",
        ],
      },
      {
        h2: "Typical west London jobs",
        paras: [
          "Mews properties and narrow private roads in Kensington and Chelsea often need a vehicle rolled out to a wider street before it can be loaded. Further west, the A40 and M4 make dealer collections and out-of-London deliveries straightforward.",
        ],
      },
      {
        h2: "Access notes",
        paras: [
          "Gated developments and residents-only roads may need permission or an access code arranged in advance. Let us know when you message so it can be sorted before the collection.",
        ],
      },
    ],
  },
};
