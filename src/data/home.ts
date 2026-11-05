import type { ServiceId } from "@/types/content";

interface HomeServiceTile {
  id: ServiceId;
  image: string;
  alt: string;
  line: string;
  position?: string;
  sizes: string;
  layoutClassName: string;
}

const wideTile = "col-span-2 aspect-[3/2] lg:aspect-auto lg:h-[clamp(380px,34vw,480px)]";
const smallTile = "aspect-[4/5] lg:col-span-3 lg:aspect-auto lg:h-[clamp(300px,27vw,390px)]";
const smallTileSizes = "(max-width: 1023px) 50vw, 25vw";

export const homeServiceTiles: HomeServiceTile[] = [
  {
    id: "wedding",
    image: "/images/services/wedding/wedding-ritual-with-family.webp",
    alt: "Newlyweds seated together during a wedding ritual, surrounded by family",
    line: "The rituals, the rush and the quiet glances.",
    sizes: "(max-width: 1023px) 100vw, 42vw",
    layoutClassName: `${wideTile} lg:col-span-5`,
  },
  {
    id: "prewedding",
    image: "/images/services/prewedding/couple-on-mountain-terrace.webp",
    alt: "Couple on a glass terrace above the mountains, her red gown reflected in the floor",
    line: "A place you love, and a little time for you.",
    sizes: "(max-width: 1023px) 100vw, 58vw",
    layoutClassName: `${wideTile} lg:col-span-7`,
  },
  {
    id: "engagement",
    image: "/images/services/engagement/engagement-rings-and-henna.webp",
    alt: "Hands with henna and engagement rings held together",
    line: "The beginning of a new chapter.",
    position: "center 40%",
    sizes: smallTileSizes,
    layoutClassName: smallTile,
  },
  {
    id: "bridhi",
    image: "/images/services/Bridhi/bride-peeking-around-tree.webp",
    alt: "Bride in a white and red sari smiling from behind a tree",
    line: "Tradition, colour and laughter.",
    position: "60% 35%",
    sizes: smallTileSizes,
    layoutClassName: smallTile,
  },
  {
    id: "rice",
    image: "/images/services/rice-ceremony/baby-in-krishna-attire-portrait.webp",
    alt: "Baby dressed as Krishna, wearing a golden crown and pearls",
    line: "A little one's first big day.",
    position: "center 25%",
    sizes: smallTileSizes,
    layoutClassName: smallTile,
  },
  {
    id: "corporate",
    image: "/images/services/corporate/cricket-league-event-hall.webp",
    alt: "Event hall with a lit stage, branded backdrop and seated guests",
    line: "The stage, the people and the occasion.",
    sizes: smallTileSizes,
    layoutClassName: smallTile,
  },
];

// An asymmetric arrangement inside a 5:6 frame: each photo is placed by hand, and the last overlaps the first.
export const processPhotos = [
  {
    src: "/images/services/wedding/couple-under-fairy-lights.webp",
    alt: "Couple together under warm fairy lights",
    sizes: "(max-width: 1023px) 58vw, 30vw",
    className: "top-0 left-0 aspect-[2/3] w-[58%]",
  },
  {
    src: "/images/services/prewedding/couple-under-flowering-tree.webp",
    alt: "Couple walking beneath a flowering tree",
    sizes: "(max-width: 1023px) 38vw, 20vw",
    className: "top-[5%] right-0 aspect-[2/3] w-[37%]",
  },
  {
    src: "/images/services/rice-ceremony/baby-with-yellow-teddy-bear.webp",
    alt: "Baby in a red outfit sitting beside a large yellow teddy bear",
    sizes: "(max-width: 1023px) 46vw, 24vw",
    className: "right-[6%] bottom-0 aspect-[4/5] w-[46%] border-[6px] border-(--color-bg) sm:border-8 [&_img]:object-[center_78%]",
  },
];

export const processSteps = [
  { title: "Talk", description: "Tell us the date, the place and what matters most to you." },
  { title: "Plan", description: "We shape the shoot around your day, your rituals and your people." },
  { title: "Shoot", description: "We stay close to the moments and out of your way." },
  { title: "Deliver", description: "Your finished photographs come back to you, ready to keep and share." },
];
