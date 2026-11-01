"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { ServicePageContent, ServicePhoto } from "@/components/services/service-page.types";

type ServiceGalleryProps = Pick<ServicePageContent, "base" | "gallery">;

const desktopGridClasses = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  6: "lg:grid-cols-6",
} as const;

export function ServiceGallery({ base, gallery }: ServiceGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const viewerOpen = activeIndex !== null;
  const photos = gallery.photos;
  const centeredLastPair = gallery.desktopColumns === 6 && gallery.centerLastPair && photos.length % 3 === 2;

  function photoAspectClassName(photo: ServicePhoto) {
    if (gallery.desktopColumns === 6) return "aspect-[4/5]";
    if (photo.wide) return "aspect-[1.56] lg:aspect-[1.53]";
    return "aspect-[3/4]";
  }

  useEffect(() => {
    if (!viewerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [viewerOpen]);

  function open(index: number) {
    setActiveIndex(index);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: number) {
    setActiveIndex((current) => current === null ? null : (current + direction + photos.length) % photos.length);
  }

  function cardClassName(photo: ServicePhoto, index: number) {
    const columnClass = gallery.desktopColumns === 6 ? "lg:col-span-2" : photo.wide ? "col-span-2" : "";
    const finalPairClass = centeredLastPair && index === photos.length - 2
      ? "lg:col-start-2"
      : centeredLastPair && index === photos.length - 1
        ? "lg:col-start-4"
        : "";
    const visibilityClass = index >= gallery.mobileVisibleCount && !showAll ? "hidden sm:block" : "";
    return `${columnClass} ${finalPairClass} ${visibilityClass}`;
  }

  return (
    <section id={gallery.id} className="scroll-mt-24 bg-(--color-surface) py-14 sm:py-20 lg:py-28">
      <Container>
        <div className={gallery.headingMarginClassName}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">{gallery.eyebrow}</p>
          <h2 className="text-[clamp(2.5rem,4.5vw,4.25rem)]">{gallery.title}</h2>
        </div>
        <div
          id={`${gallery.id}-photo-grid`}
          className={`grid grid-cols-2 ${gallery.gridGapClassName} ${desktopGridClasses[gallery.desktopColumns]}`}
        >
          {photos.map((photo, index) => (
            <figure key={photo.src} className={cardClassName(photo, index)}>
              <button type="button" onClick={() => open(index)} aria-label={`View photograph: ${photo.alt}`} className="service-gallery-photo relative block w-full cursor-pointer overflow-hidden bg-(--color-border-dark) text-left focus-visible:outline-offset-4">
                <span className={`relative block ${photoAspectClassName(photo)}`}>
                  <Image
                    src={`${base}${photo.src}`}
                    alt=""
                    fill
                    sizes={photo.wide ? "(max-width: 1023px) 100vw, 66vw" : gallery.desktopColumns === 4 ? "(max-width: 1023px) 50vw, 25vw" : "(max-width: 1023px) 50vw, 33vw"}
                    className="object-cover"
                    style={photo.position ? { objectPosition: photo.position } : undefined}
                  />
                </span>
              </button>
              <figcaption className="mt-1.5 text-xs font-medium uppercase tracking-[0.1em] text-(--color-muted) sm:mt-2 sm:text-sm sm:tracking-[0.12em]">{photo.label}</figcaption>
            </figure>
          ))}
        </div>
        {!showAll && photos.length > gallery.mobileVisibleCount && (
          <div className="mt-9 text-center sm:hidden">
            <button type="button" onClick={() => setShowAll(true)} aria-controls={`${gallery.id}-photo-grid`} aria-expanded={false} className="min-h-11 rounded-full border border-(--color-accent) px-6 py-3 text-sm font-medium text-(--color-accent-text) transition-colors hover:bg-(--color-accent) hover:text-white">
              Show more photographs
            </button>
          </div>
        )}
      </Container>
      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onClick={(event) => { if (event.target === dialogRef.current) close(); }}
        onKeyDown={(event) => { if (event.key === "ArrowLeft") step(-1); if (event.key === "ArrowRight") step(1); }}
        aria-label={`${gallery.eyebrow} photo viewer`}
        className="fixed inset-0 m-auto h-dvh w-dvw max-h-none max-w-none bg-black/95 p-4 text-white backdrop:bg-black/90 sm:p-8"
      >
        {activeIndex !== null && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 pb-4 text-sm">
              <span>{activeIndex + 1} / {photos.length} · {photos[activeIndex].label}</span>
              <button type="button" onClick={close} className="rounded-full border border-white/50 px-4 py-2 hover:bg-white/15">Close ✕</button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={`${base}${photos[activeIndex].src}`} alt={photos[activeIndex].alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 pt-4">
              <button type="button" onClick={() => step(-1)} className="rounded-full border border-white/50 px-5 py-2 hover:bg-white/15">← Previous</button>
              <button type="button" onClick={() => step(1)} className="rounded-full border border-white/50 px-5 py-2 hover:bg-white/15">Next →</button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
