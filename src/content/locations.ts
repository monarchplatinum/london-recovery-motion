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
        h2: "How quickly we can reach you",
        paras: [
          "This is where we are quickest. From Tent Street we are typically with you in 5 to 15 minutes across the nearby parts of East London: Whitechapel, Bethnal Green, Stepney, Mile End and Bow. Further out towards Ilford, Barking and Romford it takes longer, and we will give you a realistic time when you message.",
          "The phone and WhatsApp are answered 24 hours a day, so that applies at 3am as much as mid-afternoon.",
        ],
      },
      {
        h2: "The A12, the A13 and the tunnel approaches",
        paras: [
          "East London's fast roads are the A12, from Bow out through Leyton and Redbridge, and the A13, from Limehouse past Canning Town, Barking and Dagenham. Both are dual carriageways with few places to stop, and a breakdown on either is a get-safe-first situation: out on the side away from traffic, well back from the vehicle, then ring.",
          "If you have stopped in or near the Blackwall Tunnel or the Limehouse Link, follow the signs and any instructions you are given there first. Those are managed roads, and getting people clear comes before moving the car.",
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
        h2: "Car parks under buildings",
        paras: [
          "Much of central London's parking is below ground: office basements, hotel car parks, residential blocks and public car parks. Almost all have a height limit that rules out a recovery truck, so the vehicle is brought up to street level and loaded there.",
          "How that is done depends on the building. Some have a car lift, some have a ramp with a tight turn, and most want notice before a recovery takes place. Send the level, the posted height limit and a photo of the entrance.",
        ],
      },
      {
        h2: "When a car stops in a live lane",
        paras: [
          "A vehicle that fails on the Embankment, Euston Road or Park Lane is blocking a red route, and the priority is getting it somewhere legal rather than working out what is wrong where it sits. Put the hazards on, get out on the pavement side and send a location pin.",
        ],
      },
      {
        h2: "Getting there from E1",
        paras: [
          "Our base on Tent Street is a short run from the City, so the eastern half of the centre is close to home. The West End and Westminster take longer, and at peak times the roads decide the timing more than the distance does. You will get a realistic time before you agree to anything.",
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
        h2: "The A1, the A10 and the North Circular",
        paras: [
          "Three routes carry most of north London. The A1 climbs from Highbury Corner up Holloway Road to Archway and on towards Barnet. The A10 runs from Shoreditch through Dalston, Stoke Newington and Tottenham to Enfield. The A406 North Circular ties them together, with the M1 leaving it at Staples Corner.",
          "From our base in E1 the A10 is on the doorstep, so Dalston, Stoke Newington and Tottenham are some of the quicker places for us to reach outside East London. We still give you a realistic time for the hour you ring, not a standard figure.",
        ],
      },
      {
        h2: "Terraces, permit zones and match days",
        paras: [
          "Most of Islington, Camden and Haringey is Victorian terrace: narrow roads, cars parked on both sides, and controlled parking throughout. A flatbed needs room behind the vehicle to load, so on the tightest streets the car may have to be moved to the end of the road first.",
          "Event days change things. Roads around the Arsenal and Tottenham stadiums close or go residents-only before and after matches, which can leave a broken-down car hard to reach for a few hours. If there is a game on, say so when you message.",
        ],
      },
      {
        h2: "Barnet, Enfield and beyond",
        paras: [
          "The outer boroughs are more suburban, with driveways and wider roads, and they are where longer transport jobs tend to start: cars heading up the M1 or the A1, and collections from dealers and auction sites north of London.",
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
        h2: "Getting across the river",
        paras: [
          "We are based north of the Thames in E1, so every south London job starts with a crossing. Tower Bridge is the nearest, the Blackwall Tunnel serves Greenwich and everything east of it, and the Rotherhithe Tunnel is too low and too narrow for a recovery truck at all.",
          "That choice decides the arrival time more than the mileage does. A closure or a queue at Blackwall can add a long time to a short trip. When you message, we will tell you a realistic time for that hour, not a figure that assumes clear roads.",
        ],
      },
      {
        h2: "The A2, the A20 and the South Circular",
        paras: [
          "South London has no equivalent of the North Circular's dual carriageway. The A205 South Circular is an ordinary road for most of its length, through Catford, Forest Hill and Dulwich, and it moves slowly. The A2 through Blackheath and Kidbrooke and the A20 through Lewisham and Eltham are the faster routes.",
          "Both are places where a stopped vehicle needs moving quickly. If you have broken down on a fast stretch of either, get out on the side away from traffic and stand well back before you ring.",
        ],
      },
      {
        h2: "Croydon, Bromley and the outer suburbs",
        paras: [
          "Further out the work changes character. There is more space, more driveways and more garages with forecourts, so loading is usually simple. Distances are longer, which is why we ask for both postcodes before quoting.",
          "A lot of what we move here is planned: cars bought privately, vehicles going to a garage that does not collect, and non-runners that have sat on a drive. Those can be booked for a time that suits you.",
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
        h2: "Roads that shape a west London job",
        paras: [
          "Three roads do most of the work. The A40 Westway carries traffic from Marylebone out past White City to Hanger Lane, the A4 runs through Hammersmith and Chiswick to become the M4, and the North Circular links the two. When they flow, west London is quick to cross. When one stops, the streets around it fill within minutes.",
          "A breakdown on any of them is a get-safe-first situation. There is very little room to stop on the Westway or the elevated section of the M4, so tell us exactly where you are and which direction you were travelling.",
        ],
      },
      {
        h2: "Mews, basements and permit streets",
        paras: [
          "Kensington, Chelsea and Notting Hill are where access takes the most thought. Mews are often cobbled, single-width and closed at one end. Many newer buildings park cars in basements reached by a lift or a tight ramp, and most streets are residents' permit bays with nowhere for a truck to wait.",
          "None of that prevents a recovery. It means the vehicle may need bringing out to a wider road first, so a photograph of the street and the entrance is worth sending before we set off. Shopping centre car parks have height limits at the entrance too: send the level and the posted limit.",
        ],
      },
      {
        h2: "How long it takes to reach west London",
        paras: [
          "We work from Tent Street in E1, so west London is the far side of town for us. We will not quote you the arrival times we can manage around Bethnal Green. Tell us where you are and we will give you a realistic time for that journey at that hour, before you commit to anything.",
          "For planned work the distance matters much less. Dealer collections, garage transfers and runs out towards Heathrow and the M4 corridor are booked for a time that suits both ends.",
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
