import type { Metadata } from "next";
import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { WeddingPage } from "@/components/services/WeddingPage";
import { PreWeddingPage } from "@/components/services/PreWeddingPage";
import { EngagementPage } from "@/components/services/EngagementPage";
import { BridhiPage } from "@/components/services/BridhiPage";
import { RiceCeremonyPage } from "@/components/services/RiceCeremonyPage";
import { CorporateEventsPage } from "@/components/services/CorporateEventsPage";

type ServicePageProps = { params: Promise<{ slug: string }> };
type ServicePageDefinition = { component: ComponentType; metadata: Metadata };

const servicePages = new Map<string, ServicePageDefinition>([
  ["wedding", {
    component: WeddingPage,
    metadata: { title: "Wedding Photography", description: "Wedding celebrations, portraits and rituals photographed by Fix Your Moments." },
  }],
  ["prewedding", {
    component: PreWeddingPage,
    metadata: { title: "Pre-wedding Photography", description: "Relaxed, personal pre-wedding photography by Fix Your Moments in Kolkata and beyond." },
  }],
  ["engagement", {
    component: EngagementPage,
    metadata: { title: "Engagement Photography", description: "Engagement and ring ceremony photography by Fix Your Moments. Candid moments, intimate portraits and the details of your celebration." },
  }],
  ["bridhi", {
    component: BridhiPage,
    metadata: { title: "Bridhi Photography", description: "Bridhi photography by Fix Your Moments. Traditional details, candid celebrations and personal portraits from your day." },
  }],
  ["rice", {
    component: RiceCeremonyPage,
    metadata: { title: "Rice Ceremony Photography", description: "Rice ceremony photography by Fix Your Moments. Gentle baby portraits and memories of a milestone shared with family." },
  }],
  ["corporate", {
    component: CorporateEventsPage,
    metadata: { title: "Corporate Event Photography", description: "Corporate and event photography by Fix Your Moments. Stage coverage, candid interactions and group portraits for your event story." },
  }],
]);

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  return servicePages.get(slug)?.metadata ?? {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = servicePages.get(slug);
  if (!page) notFound();
  const Page = page.component;
  return <Page />;
}
