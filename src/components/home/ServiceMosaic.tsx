import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { homeServiceTiles } from "@/data/home";
import { services } from "@/data/services";

export function ServiceMosaic() {
  return (
    <section aria-labelledby="services-heading" className="bg-(--color-surface) py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 sm:mb-12">
          <SectionHeading id="services-heading" eyebrow="What we photograph">
            Whatever you&apos;re <em>celebrating.</em>
          </SectionHeading>
          <Link href="/services" className="reveal inline-flex min-h-11 items-center gap-2 text-sm font-medium text-(--color-accent-text) underline-offset-4 hover:underline">
            All services <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
          {homeServiceTiles.map((tile) => {
            const service = services.find((candidate) => candidate.id === tile.id);
            if (!service) return null;
            return (
              <li key={tile.id} className={`reveal ${tile.layoutClassName}`}>
                <Link href={`/services/${tile.id}`} className="service-gallery-photo relative block h-full overflow-hidden bg-(--color-border-dark) text-white">
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes={tile.sizes}
                    className="object-cover"
                    style={tile.position ? { objectPosition: tile.position } : undefined}
                  />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 via-45% to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 lg:p-6">
                    <h3 className="text-[clamp(1.35rem,2.4vw,2.1rem)] leading-tight">{service.name}</h3>
                    <p className="mt-1.5 hidden max-w-[34ch] text-sm leading-snug text-white/90 sm:block">{tile.line}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
