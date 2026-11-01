import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore wedding, pre-wedding, engagement, Bridhi, rice ceremony and event photography by Fix Your Moments.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1 py-16 sm:py-24">
      <Container>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-(--color-accent-text)">Our services</p>
        <h1 className="max-w-[15ch] text-[clamp(2.75rem,6vw,5.5rem)]">Every story deserves its frame.</h1>
        <p className="mt-5 max-w-[55ch] text-(--color-muted) sm:text-lg">Explore the moments we photograph. Each service page is being prepared with its own collection of images.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.id} href={`/services/${service.id}`} className="group overflow-hidden rounded-sm border border-(--color-border-dark) bg-(--color-surface) transition-shadow hover:shadow-lg focus-visible:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={service.image} alt="" fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-3xl">{service.name}</h2>
                <p className="mt-2 text-sm text-(--color-muted)">{service.description}</p>
                <span className="mt-5 inline-block text-sm font-medium text-(--color-accent-text)">Explore service →</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
