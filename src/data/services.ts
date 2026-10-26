import type { Service } from "@/types/content";

// Copy/claims pending client review (PRD.md §1); image paths are placeholders.
export const services: Service[] = [
  {
    id: "wedding",
    name: "Wedding",
    tagline: "The whole day, told properly",
    description:
      "From the gaye holud to the last bidaai, we document every ritual, every face and every in-between moment, balancing candid storytelling with the family portraits you'll want later.",
    image: "/images/placeholders/wedding-1.jpg",
    features: [
      "Candid and traditional coverage",
      "Ritual-by-ritual shot planning",
      "Hand-edited photographs",
      "Premium printed albums on request",
    ],
    order: 1,
  },
  {
    id: "prewedding",
    name: "Pre-wedding",
    tagline: "Your story before the big day",
    description:
      "A relaxed, styled shoot at a location that means something to you. Heritage lanes, riverbanks or somewhere further away. We help with concept, outfits and timing.",
    image: "/images/placeholders/prewedding-1.jpg",
    features: [
      "Concept and location planning",
      "Outfit and styling guidance",
      "Golden-hour scheduling",
      "Edits ready for invites and reels",
    ],
    order: 2,
  },
  {
    id: "haldi",
    name: "Haldi",
    tagline: "Colour, chaos and laughter",
    description:
      "The most joyful mess of the wedding. We move fast and stay close to catch the turmeric, the teasing and the people who make the morning unforgettable.",
    image: "/images/placeholders/haldi-1.jpg",
    features: [
      "Fast, close candid coverage",
      "Weather-sealed gear for the mess",
      "Family and friends group frames",
      "Vivid, true-to-colour edits",
    ],
    order: 3,
  },
  {
    id: "rice",
    name: "Rice Ceremony",
    tagline: "Annaprashan, the first feast",
    description:
      "Gentle, patient coverage of your little one's first rice, the elders' blessings and the family gathered around. Calm, child-friendly and never rushed.",
    image: "/images/placeholders/rice-ceremony-1.jpg",
    features: [
      "Child-paced, patient shooting",
      "Blessings and ritual details",
      "Family portraits",
      "Keepsake album options",
    ],
    order: 4,
  },
  {
    id: "corporate",
    name: "Corporate Events",
    tagline: "Professional, discreet, on brief",
    description:
      "Conferences, launches, award nights and team offsites, photographed to your brief with fast turnaround for press, social media and internal use.",
    image: "/images/placeholders/corporate-1.jpg",
    features: [
      "Speaker, stage and audience coverage",
      "Brand and sponsor visibility",
      "Same-day selects on request",
      "Usage-ready, consistent edits",
    ],
    order: 5,
  },
  {
    id: "editorial",
    name: "Editorial & Portfolio Shoots",
    tagline: "For models, creators and brands",
    description:
      "Studio or outdoor portfolio, lookbook and influencer content shoots. We direct poses, lighting and mood to build a portfolio that gets you noticed.",
    image: "/images/placeholders/editorial-1.jpg",
    features: [
      "Model and creator portfolios",
      "Fashion and lookbook shoots",
      "Lighting and pose direction",
      "Social-ready crops and retouching",
    ],
    order: 6,
  },
];
