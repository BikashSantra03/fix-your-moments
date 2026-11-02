import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import type { ServicePageContent } from "@/components/services/service-page.types";

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  const { slug, base, hero, story, gallery, closing } = content;

  return (
    <main className="-mt-[78px] flex-1 overflow-hidden">
      <section className="relative isolate min-h-[690px] overflow-hidden bg-(--color-text) sm:min-h-[720px] lg:min-h-[min(900px,100svh)]">
        <Image src={`${base}${hero.image}`} alt={hero.alt} fill priority sizes="100vw" className={`-z-20 object-cover ${hero.imageClassName}`} />
        <div aria-hidden="true" className={`absolute inset-0 -z-10 ${hero.overlayClassName}`} />
        <Container className={`flex min-h-[690px] items-start sm:min-h-[720px] sm:items-center lg:min-h-[min(900px,100svh)] ${hero.containerClassName}`}>
          <div className={`text-white ${hero.contentClassName}`}>
            <p className="mb-4 flex items-center gap-3 text-xs sm:mb-5 sm:text-sm font-medium uppercase tracking-[0.18em] text-white/90">
              <span aria-hidden="true" className="h-px w-8 bg-white/80" /> {hero.eyebrow}
            </p>
            <h1 className={hero.titleClassName}>
              <span className={hero.titleLeadClassName}>{hero.title}</span>{" "}
              <em className={`font-normal text-[#ffd9dc] ${hero.emphasisClassName ?? ""}`}>{hero.emphasis}</em>
            </h1>
            <p className={`mt-5 text-[15px] leading-relaxed sm:mt-7 text-white/90 sm:text-lg ${hero.descriptionClassName}`}>{hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-9">
              <Button href={`/contact?service=${slug}#enquiry`}>{hero.primaryAction}</Button>
              <a href={`#${gallery.id}`} className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-white underline-offset-4 hover:underline">{hero.galleryAction} ↓</a>
            </div>
          </div>
        </Container>
      </section>

      {story && <section className="py-14 sm:py-20 lg:py-28">
        <Container className={`grid items-center gap-10 lg:gap-20 ${story.columnsClassName}`}>
          <div className={story.imageOrderClassName}>
            {story.eyebrowPosition === "image" && <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">{story.eyebrow}</p>}
            <div className="relative aspect-[4/5] max-h-[590px] overflow-hidden bg-(--color-surface)">
              <Image src={`${base}${story.image}`} alt={story.alt} fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover" style={story.imagePosition ? { objectPosition: story.imagePosition } : undefined} />
            </div>
          </div>
          <div className={story.textOrderClassName}>
            {story.eyebrowPosition === "text" && <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">{story.eyebrow}</p>}
            <h2 className={story.titleClassName}>{story.title}</h2>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-(--color-muted) sm:text-lg">{story.description}</p>
          </div>
        </Container>
      </section>}

      <ServiceGallery base={base} gallery={gallery} />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className={closing.photos ? "grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20" : "text-center"}>
          {closing.photos && <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {closing.photos.map((photo, index) => (
              <div key={photo.src} className={`relative aspect-[3/4] overflow-hidden bg-(--color-surface) ${index === 0 ? "translate-y-3 sm:translate-y-5 lg:translate-y-8" : ""}`}>
                <Image src={`${base}${photo.src}`} alt={photo.alt} fill sizes="(max-width: 1023px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>}
          <div className={closing.photos ? undefined : "mx-auto max-w-[760px]"}>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">{closing.eyebrow}</p>
            <h2 className={`${closing.titleClassName} ${closing.photos ? "" : "mx-auto"}`}>{closing.title}</h2>
            <p className={`mt-6 max-w-[46ch] text-base leading-relaxed text-(--color-muted) sm:text-lg ${closing.photos ? "" : "mx-auto"}`}>{closing.description}</p>
            <div className="mt-8"><Button href={`/contact?service=${slug}#enquiry`}>{closing.action}</Button></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
