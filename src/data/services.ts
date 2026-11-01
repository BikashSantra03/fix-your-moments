import type { Service } from "@/types/content";

// Short descriptions are provisional until each service page is developed.
export const services: Service[] = [
  { id: "wedding", name: "Wedding", tagline: "Wedding photography", description: "Wedding celebrations and the people who make them memorable.", image: "/images/services/wedding/couple-under-red-drapes.webp", features: [], order: 1 },
  { id: "prewedding", name: "Pre-wedding", tagline: "Pre-wedding photography", description: "Portraits of your story before the wedding day.", image: "/images/services/prewedding/couple-in-ornate-hall.webp", features: [], order: 2 },
  { id: "engagement", name: "Engagement", tagline: "Engagement photography", description: "The beginning of a new chapter, captured together.", image: "/images/services/engagement/couple-in-festive-attire.webp", features: [], order: 3 },
  { id: "bridhi", name: "Bridhi", tagline: "Bridhi photography", description: "Portraits and moments from the Bridhi celebration.", image: "/images/services/Bridhi/bride-with-ritual-crown.webp", features: [], order: 4 },
  { id: "rice", name: "Rice Ceremony", tagline: "Rice ceremony photography", description: "A family celebration around a little one's first rice.", image: "/images/services/rice-ceremony/baby-in-festive-setting.webp", features: [], order: 5 },
  { id: "corporate", name: "Corporate Events", tagline: "Event photography", description: "Photography for events and gatherings.", image: "/images/services/corporate/cricket-league-event-hall.webp", features: [], order: 6 },
];
