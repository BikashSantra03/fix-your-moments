export type ServiceId =
  | "wedding"
  | "prewedding"
  | "engagement"
  | "bridhi"
  | "rice"
  | "corporate";

export interface Service {
  id: ServiceId;
  name: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceId;
  src: string;
  alt: string;
  aspectRatio?: `${number}/${number}`;
  featured?: boolean;
}

export interface ClientReview {
  id: string;
  quote: string;
  name: string;
  occasion: string;
  image: string;
  alt: string;
  position: string;
}

export interface EnquiryInput {
  name: string;
  mobile: string;
  location: string;
  purposes: string[];
  date?: string;
  message?: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface SiteSettings {
  brandName: string;
  founderName: string;
  tagline: string;
  phone: string | null;
  whatsappNumber: string | null;
  email: string | null;
  address: string | null;
  mapQuery: string | null;
  mapEmbedUrl: string | null;
  googleReviewUrl?: string;
  social: SocialLinks;
  siteUrl: string | null;
}
