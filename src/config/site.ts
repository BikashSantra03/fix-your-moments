import type { SiteSettings } from "@/types/content";

// Contact fields stay null until the client provides real values — never fall back to placeholder contact info (Rules.md §7).
export const siteSettings: SiteSettings = {
  brandName: "Fix Your Moments",
  founderName: "Koushik Pramanik",
  tagline: "Some moments happen once. We fix them forever.",
  phone: null,
  whatsappNumber: null,
  email: null,
  address: null,
  mapQuery: null,
  social: {
    facebook: undefined,
    instagram: undefined,
    youtube: undefined,
  },
  siteUrl: null,
};
