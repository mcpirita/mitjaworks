/**
 * All user-facing copy lives here so an Estonian version can be added as a
 * sibling file (et.ts) implementing the same shape, without touching components.
 *
 * Image paths and blur previews are language-independent and live in blurData.ts.
 */

export const site = {
  brand: "Mitja Works",
  photographer: "Dmitri Gubin",

  meta: {
    title: "Mitja Works — Commercial real estate photography, Tallinn",
    description:
      "Commercial real estate, architecture, interior and aerial photography in Tallinn and across Estonia. Full property coverage in a single visit, edited photos in two working days.",
  },

  nav: {
    work: "Work",
    aerial: "Aerial",
    services: "Services",
    about: "About",
    contact: "Contact",
  },

  hero: {
    label: "Tallinn · Estonia",
    titleTop: "Commercial real estate,",
    titleBottom: "architecture & aerial.",
    lede: "Exteriors, interiors and drone coverage of the whole property in a single visit.",
    delivery: "Edited photos in 2 working days",
    cta: "Start a project",
    frame: {
      src: "/photos/aerial/solo-stock.jpg",
      ratio: "16/9",
      caption: "Stock office, Tallinn — photographed for Restate",
    },
  },

  work: {
    index: "01",
    label: "Selected work",
    title: "Properties, shot end to end.",
    note: "Full coverage, one visit.",
  },

  aerial: {
    index: "02",
    label: "Aerial",
    title: "Drone photo and video.",
    lede: "The angle that shows the plot, the access roads and the surroundings — the things a tenant asks about before booking a viewing.",
    reel: {
      src: "/video/aerial-reel.mp4",
      poster: "/video/aerial-reel-poster.jpg",
      ratio: "16/9",
      caption: "Drone reel — commercial properties across Tallinn",
      /* No year: the only date on the file is its render date, not the shoot. */
      meta: "Restate · 0:48",
    },
    frames: [
      {
        src: "/photos/aerial/tahesaju-park.jpg",
        ratio: "4/3",
        caption: "Retail park, Tähesaju — plot, parking and access roads",
      },
      {
        src: "/photos/aerial/tahesaju-11.jpg",
        ratio: "4/3",
        caption: "Tähesaju tee 11 — tenant frontage and parking",
      },
    ],
    credit: "Photographed for Restate.",
  },

  services: {
    index: "03",
    label: "Services",
    title: "What a shoot covers.",
    items: [
      {
        name: "Interiors",
        description:
          "Offices, retail and warehouse space — rooms shot to read as usable area, not as decor.",
      },
      {
        name: "Commercial exteriors",
        description:
          "The building as a tenant first sees it: facade, entrances, parking and loading areas.",
      },
      {
        name: "Architecture",
        description:
          "Straight lines, corrected perspective and light timed to the facade.",
      },
      {
        name: "Aerial photo & video",
        description:
          "Drone stills and short clips showing the plot, its access and its surroundings.",
      },
    ],
    terms: [
      { key: "Delivery", value: "2 working days" },
      { key: "Coverage", value: "Whole property, one visit" },
      { key: "Area", value: "Tallinn, all of Estonia" },
      { key: "Pricing", value: "On request" },
    ],
  },

  about: {
    index: "04",
    label: "About",
    title: "One photographer, the whole property.",
    body: [
      "I photograph commercial property in Tallinn and across Estonia — business parks, warehouses, offices and retail space.",
      "The aerial work here was shot for Restate — their commercial developments across Tallinn.",
      "I fly the drone myself, so the ground and aerial coverage come from one shoot — no second crew, no second booking.",
    ],
    signature: "Dmitri Gubin",
    role: "Photographer",
    portrait: {
      src: "/photos/portrait/dmitri-gubin.jpg",
      /* The frame's own ratio — this one is shown uncropped. */
      ratio: "2/3",
      caption: "Dmitri Gubin",
    },
  },

  contact: {
    index: "05",
    label: "Contact",
    title: "Have a property to shoot?",
    lede: "Send the address and the date. I will confirm availability the same day.",
    email: "gubi.dima@gmail.com",
    phoneLabel: "WhatsApp",
    phone: "+372 5624 9209",
    phoneHref: "https://wa.me/37256249209",
    instagramLabel: "Instagram",
    instagram: "@mc_pirita",
    instagramHref: "https://instagram.com/mc_pirita",
  },

  footer: {
    rights: "All photographs by Dmitri Gubin.",
  },
} as const;

export type Frame = {
  /** Path under /public. */
  src: string;
  /** Plate aspect ratio. Matches the frame's own ratio unless a crop is intended. */
  ratio: string;
  caption: string;
  /** object-position, for the few plates whose ratio crops the source. */
  position?: string;
};

export type WorkItem = {
  slug: string;
  name: string;
  location: string;
  type: string;
  year: string;
  tags: string[];
  /** Client credit, where there is one to state. */
  credit?: string;
  frames: Frame[];
};

/**
 * Case studies. Years come from the capture dates on the originals; locations
 * and object types are stated as shot. Nothing here is inferred.
 */
export const work: WorkItem[] = [
  {
    slug: "weizenbergi-18",
    name: "Weizenbergi 18",
    location: "Tallinn, Estonia",
    type: "Office building",
    year: "2026",
    tags: ["Exteriors", "Interiors"],
    credit: "Photographed for Silver Tree Capital OÜ.",
    frames: [
      {
        src: "/photos/weizenbergi-18/exterior-corner.jpg",
        ratio: "3/2",
        caption: "Corner elevation — glass and weathering steel",
      },
      {
        src: "/photos/weizenbergi-18/exterior-street.jpg",
        ratio: "3/2",
        caption: "Street side, along the tram line",
      },
      {
        src: "/photos/weizenbergi-18/ground-floor.jpg",
        ratio: "3/2",
        caption: "Ground-floor commercial space, unfitted",
      },
    ],
  },
  {
    slug: "cinemoon-pforzheim",
    name: "CINEMOON",
    location: "Pforzheim, Germany",
    type: "Cinema",
    year: "2025",
    tags: ["Interiors", "Exteriors", "Aerial"],
    credit: "Photographed for Pforzfald GmbH.",
    frames: [
      {
        src: "/photos/cinemoon-pforzheim/facade.jpg",
        ratio: "3/2",
        caption: "Street facade",
      },
      {
        src: "/photos/cinemoon-pforzheim/auditorium-main.jpg",
        ratio: "3/2",
        caption: "Main auditorium",
      },
      {
        src: "/photos/cinemoon-pforzheim/auditorium-dark.jpg",
        ratio: "3/2",
        caption: "Second screen, house lights down",
      },
      {
        src: "/photos/cinemoon-pforzheim/stairs-lounge.jpg",
        ratio: "3/2",
        caption: "Upper foyer, screens 5 and 6",
      },
      {
        src: "/photos/cinemoon-pforzheim/foyer-concession.jpg",
        ratio: "3/2",
        caption: "Concession and bar",
      },
      {
        src: "/photos/cinemoon-pforzheim/foyer-posters.jpg",
        ratio: "3/2",
        caption: "Lower foyer",
      },
      {
        src: "/photos/cinemoon-pforzheim/aerial.jpg",
        /* Native 4:3, cropped to match the row it shares. */
        ratio: "3/2",
        caption: "The building from the air",
      },
    ],
  },
];
