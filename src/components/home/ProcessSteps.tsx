import Image from "next/image";
import { SectionHeading } from "@/components/home/SectionHeading";
import { Container } from "@/components/ui/Container";
import { processPhotos, processSteps } from "@/data/home";

export function ProcessSteps() {
  return (
    <section id="how-it-works" aria-labelledby="process-heading" className="scroll-mt-20 py-16 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="process-heading" eyebrow="How it works" className="max-w-[14ch]">
            Simple, from the <em>first hello.</em>
          </SectionHeading>
          <ol className="mt-9 border-t border-(--color-border-dark) sm:mt-12">
            {processSteps.map((step, index) => (
              <li key={step.title} className="reveal grid grid-cols-[3rem_1fr] gap-x-3 border-b border-(--color-border-dark) py-5 sm:grid-cols-[4.5rem_8rem_1fr] sm:items-baseline sm:py-6">
                <span aria-hidden="true" className="row-span-2 font-display text-3xl text-(--color-accent-text) sm:row-span-1 sm:text-4xl">{index + 1}</span>
                <h3 className="text-2xl sm:text-[1.75rem]">{step.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-(--color-muted) sm:mt-0 sm:text-base">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal relative aspect-[5/6]">
          {processPhotos.map((photo) => (
            <div key={photo.src} className={`absolute overflow-hidden bg-(--color-surface) ${photo.className}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes={photo.sizes} className="object-cover" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
