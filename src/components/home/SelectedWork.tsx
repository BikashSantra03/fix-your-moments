import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkStrip } from "@/components/home/WorkStrip";
import { Container } from "@/components/ui/Container";
import { portfolioItems } from "@/data/portfolio";
import { services } from "@/data/services";

function workTiles(isLoopCopy: boolean) {
  return portfolioItems.filter((item) => item.featured).map((item) => (
    <li key={item.id} className="shrink-0">
      <Link href={`/services/${item.category}`} tabIndex={isLoopCopy ? -1 : undefined} className="group block focus-visible:outline-white">
        <figure>
          <span
            className="service-gallery-photo relative block h-[280px] max-w-[84vw] overflow-hidden bg-white/10 sm:h-[400px] lg:h-[clamp(420px,58svh,540px)]"
            style={{ aspectRatio: item.aspectRatio }}
          >
            <Image
              src={item.src}
              alt={isLoopCopy ? "" : item.alt}
              fill
              sizes={item.aspectRatio === "2/3" ? "(max-width: 639px) 50vw, 360px" : "(max-width: 639px) 84vw, 810px"}
              className="object-cover"
            />
          </span>
          <figcaption className="mt-2.5 text-xs font-medium uppercase tracking-[0.12em] text-white/75 transition-colors group-hover:text-white sm:text-sm">
            {services.find((service) => service.id === item.category)?.name}
          </figcaption>
        </figure>
      </Link>
    </li>
  ));
}

export function SelectedWork() {
  return (
    <section id="selected-work" aria-labelledby="work-heading" className="scroll-mt-20 bg-(--color-text) py-16 text-white sm:py-24 lg:py-28">
      <Container className="mb-9 sm:mb-12">
        <SectionHeading id="work-heading" eyebrow="Selected work" tone="dark">
          Moments, <em>kept.</em>
        </SectionHeading>
      </Container>
      <WorkStrip label="Selected photographs" loopCopy={workTiles(true)}>
        {workTiles(false)}
      </WorkStrip>
    </section>
  );
}
