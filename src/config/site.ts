import type { SiteSettings } from "@/types/content";

// Contact values come from the client; leave a field null rather than using placeholder info (Rules.md §7).
export const siteSettings: SiteSettings = {
  brandName: "Fix Your Moments",
  founderName: "Koushik Pramanik",
  tagline: "Some moments happen once. We fix them forever.",
  phone: "+91 93821 39215",
  whatsappNumber: "919382139215",
  email: "hello@fixyourmoments.com", // TODO: dummy email for preview. Replace with the client's real address before launch.
  address: "F50, Karimpur Regulated Market, 1st Floor, Nadia, West Bengal 741152",
  // Google plus code for Karimpur Regulated Market: resolves to an exact point for "Get directions".
  mapQuery: "XJJH+2CC Karimpur, West Bengal 741152",
  // Client-supplied Google Maps embed for Karimpur Regulated Market (the studio is inside it).
  // "1d<metres>" sets how much of the map is visible: larger = more zoomed out. Swap for the
  // business's own embed once a "Fix Your Moments" Google Business Profile exists.
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d88.62824421373664!3d23.980055236307198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f95bc0f82a9a4f%3A0x3db767707f62b86f!2sKarimpur%20Regulated%20Market!5e0!3m2!1sen!2sin!4v1793062461720!5m2!1sen!2sin",
  // TODO: dummy links for preview. Replace with the client's real profile URLs before launch (Rules.md §7).
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    youtube: "https://www.youtube.com",
  },
  siteUrl: null,
  // Preview link only; replace with the client's Google Business review URL before launch.
  googleReviewUrl: "https://www.google.com/maps",
};
