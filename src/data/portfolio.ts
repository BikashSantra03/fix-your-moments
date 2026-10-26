import type { PortfolioItem } from "@/types/content";

/**
 * Starter portfolio data adapted from fix-your-moments.html.
 * All src paths are local placeholders pending real client assets
 * (see PRD.md §9). Extend this list in Phase 4 without touching gallery UI.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "wedding-pheras",
    title: "The pheras",
    category: "wedding",
    src: "/images/placeholders/wedding-1.jpg",
    alt: "Placeholder — wedding ceremony ritual",
    aspectRatio: "3/4",
    featured: true,
    order: 1,
  },
  {
    id: "editorial-red",
    title: "Editorial in red",
    category: "editorial",
    src: "/images/placeholders/editorial-2.jpg",
    alt: "Placeholder — editorial portrait",
    aspectRatio: "4/5",
    featured: true,
    order: 2,
  },
  {
    id: "haldi-morning",
    title: "Morning of turmeric",
    category: "haldi",
    src: "/images/placeholders/haldi-1.jpg",
    alt: "Placeholder — haldi ceremony",
    aspectRatio: "1/1",
    featured: true,
    order: 3,
  },
  {
    id: "prewedding-river",
    title: "By the river",
    category: "prewedding",
    src: "/images/placeholders/prewedding-1.jpg",
    alt: "Placeholder — pre-wedding shoot by the river",
    aspectRatio: "4/3",
    order: 4,
  },
  {
    id: "corporate-keynote",
    title: "Keynote, full house",
    category: "corporate",
    src: "/images/placeholders/corporate-1.jpg",
    alt: "Placeholder — corporate keynote session",
    aspectRatio: "3/4",
    order: 5,
  },
  {
    id: "rice-first",
    title: "First rice",
    category: "rice",
    src: "/images/placeholders/rice-ceremony-1.jpg",
    alt: "Placeholder — rice ceremony",
    aspectRatio: "5/4",
    order: 6,
  },
];

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === "all") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
