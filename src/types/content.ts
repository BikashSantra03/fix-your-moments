export type ServiceCategory =
  | "wedding"
  | "prewedding"
  | "haldi"
  | "rice"
  | "corporate"
  | "editorial";

export type ServiceId = ServiceCategory | "engagement" | "bridhi";

export interface Service {
  id: ServiceId;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  order: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  src: string;
  alt: string;
  aspectRatio?: `${number}/${number}`;
  featured?: boolean;
  order: number;
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
