import type { ClientReview } from "@/types/content";

// TODO: PLACEHOLDER REVIEWS for preview only. These people and quotes are not real.
// Replace them with the client's approved reviews before launch (Rules.md §2).
export const clientReviews: ClientReview[] = [
  {
    id: "wedding",
    quote: "We barely noticed the camera all day, yet nothing was missed. Every ritual and every quiet glance is there, even moments we did not know had happened.",
    name: "Ananya & Rohan",
    occasion: "Wedding",
    image: "/images/services/wedding/couple-at-floral-stage.webp",
    alt: "Couple standing together at a floral wedding stage",
    position: "center 72%",
  },
  {
    id: "prewedding",
    quote: "Our pre-wedding shoot felt like an easy afternoon out, not a photoshoot. We laughed the whole time, and the photographs look exactly like us.",
    name: "Sneha & Arjun",
    occasion: "Pre-wedding",
    image: "/images/services/prewedding/couple-by-window.webp",
    alt: "Couple sharing a tender moment in soft window light",
    position: "center 62%",
  },
  {
    id: "rice",
    quote: "Our little one would not sit still for a second, and the team stayed patient and cheerful throughout. Now we have the whole family's joy in one set of photographs.",
    name: "Riya & Sourav",
    occasion: "Rice Ceremony",
    image: "/images/services/rice-ceremony/family-kissing-child.webp",
    alt: "Parents kissing their child on both cheeks",
    position: "42% center",
  },
  {
    id: "corporate",
    quote: "From the stage to the conversations around the hall, they captured the feeling of the whole event. Our team had a story ready to share the next morning.",
    name: "Neha S.",
    occasion: "Corporate Event",
    image: "/images/services/corporate/event-group-portrait-01.webp",
    alt: "Event guests posing together for a group portrait",
    position: "center",
  },
];
