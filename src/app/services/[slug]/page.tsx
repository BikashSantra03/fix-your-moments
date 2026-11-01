import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { WeddingPage } from "@/components/services/WeddingPage";
import { PreWeddingPage } from "@/components/services/PreWeddingPage";
import { EngagementPage } from "@/components/services/EngagementPage";
import { BridhiPage } from "@/components/services/BridhiPage";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (slug === "wedding") return { title: "Wedding Photography", description: "Wedding celebrations, portraits and rituals photographed by Fix Your Moments." };
  if (slug === "prewedding") return { title: "Pre-wedding Photography", description: "Relaxed, personal pre-wedding photography by Fix Your Moments in Kolkata and beyond." };
  if (slug === "engagement") return { title: "Engagement Photography", description: "Engagement and ring ceremony photography by Fix Your Moments. Candid moments, intimate portraits and the details of your celebration." };
  if (slug === "bridhi") return { title: "Bridhi Photography", description: "Bridhi photography by Fix Your Moments. Traditional details, candid celebrations and personal portraits from your day." };
  return service ? { title: service.name, description: service.description } : {};
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();
  if (slug === "wedding") return <WeddingPage />;
  if (slug === "prewedding") return <PreWeddingPage />;
  if (slug === "engagement") return <EngagementPage />;
  if (slug === "bridhi") return <BridhiPage />;

  return (
    <main className="flex-1">
      <Container className="py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-(--color-accent-text)">Fix Your Moments · Services</p>
            <h1 className="text-[clamp(3rem,6vw,6rem)]">{service.name}</h1>
            <p className="mt-6 max-w-[48ch] text-lg text-(--color-muted)">{service.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`/contact?service=${service.id}`}>Enquire about {service.name}</Button>
              <Button href="/services" variant="secondary">Other services</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[650px] overflow-hidden rounded-sm bg-(--color-surface)">
            <Image src={service.image} alt={`${service.name} photography by Fix Your Moments`} fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
        <div className="mt-16 border-t border-(--color-border-dark) pt-8 text-(--color-muted)">
          <p>More photographs and service details will be added here.</p>
        </div>
      </Container>
    </main>
  );
}
