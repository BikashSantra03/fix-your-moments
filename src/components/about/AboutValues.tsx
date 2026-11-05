import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues } from "@/data/about";

export function AboutValues() {
  return (
    <section aria-labelledby="values-heading" className="bg-(--color-surface) py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 sm:mb-14">
          <SectionHeading id="values-heading" eyebrow="What we believe">
            Three things we <em>hold on to.</em>
          </SectionHeading>
        </div>
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {aboutValues.map((value) => (
            <li key={value.title} className="reveal">
              <div className="relative aspect-[4/5] overflow-hidden bg-(--color-border-dark)">
                <Image
                  src={value.image}
                  alt={value.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
                  className="object-cover"
                  style={value.position ? { objectPosition: value.position } : undefined}
                />
              </div>
              <h3 className="mt-6 text-[clamp(1.5rem,2.2vw,2rem)] leading-tight">{value.title}</h3>
              <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-(--color-muted)">{value.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
