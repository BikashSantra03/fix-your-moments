import type { SiteSettings } from "@/types/content";

/**
 * Central site configuration. Contact fields are null until the client
 * provides and verifies real values — never fall back to the HTML demo's
 * placeholder phone/email/address (see Rules.md §7).
 */
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
