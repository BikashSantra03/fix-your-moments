"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const base = "/images/services/wedding/";

const photos = [
  { src: "couple-under-fairy-lights.webp", alt: "Couple together under warm fairy lights", label: "Together", wide: false },
  { src: "groom-at-wedding-ritual.webp", alt: "Groom seated at the wedding ritual", label: "The ceremony", wide: false },
  { src: "couple-beneath-chandelier.webp", alt: "Couple standing beneath a chandelier", label: "Evening", wide: false },
  { src: "bride-jewellery-closeup.webp", alt: "Close portrait of the bride and her wedding jewellery", label: "The details", wide: false },
  { src: "bride-in-red-veil-profile.webp", alt: "Bride in profile beneath a red veil", label: "The bride", wide: true },
  { src: "couple-with-sparklers.webp", alt: "Couple standing together with sparklers behind them", label: "The night", wide: false },
  { src: "bride-in-ceremonial-crown.webp", alt: "Bride wearing a ceremonial crown", label: "The crown", wide: false },
  { src: "bride-in-evening-attire.webp", alt: "Bride in evening attire", label: "A quiet portrait", wide: false },
  { src: "couple-at-floral-stage.webp", alt: "Couple standing together at a floral wedding stage", label: "At the stage", wide: false },
  { src: "bride-behind-red-veil.webp", alt: "Bride looking through her red wedding veil", label: "Behind the veil", wide: false },
  { src: "couple-under-red-drapes.webp", alt: "Couple standing together beneath red wedding drapes", label: "Red drapes", wide: false },
  { src: "bride-in-shadow.webp", alt: "Bride photographed in soft shadow", label: "In the shadows", wide: false },
  { src: "couple-in-evening-attire.webp", alt: "Couple dressed for an evening celebration", label: "The celebration", wide: false },
  { src: "bride-silhouette.webp", alt: "Silhouette portrait of the bride", label: "The silhouette", wide: false },
] as const;

export function WeddingGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const viewerOpen = activeIndex !== null;

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

  return (
    <section id="wedding-gallery" className="scroll-mt-24 bg-(--color-surface) py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-10 sm:mb-14">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">The wedding collection</p>
            <h2 className="text-[clamp(2.5rem,4.5vw,4.25rem)]">A wedding, in moments.</h2>
          </div>
        </div>
        <div id="wedding-photo-grid" className="grid grid-cols-2 gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <figure key={photo.src} className={`${photo.wide ? "col-span-2" : ""} ${index >= 7 && !showAll ? "hidden sm:block" : ""}`}>
              <button type="button" onClick={() => open(index)} aria-label={`View photograph: ${photo.alt}`} className="wedding-gallery-photo relative block w-full cursor-pointer overflow-hidden bg-(--color-border-dark) text-left focus-visible:outline-offset-4">
                <span className={`relative block ${photo.wide ? "aspect-[1.56] lg:aspect-[1.53]" : "aspect-[3/4]"}`}>
                  <Image src={`${base}${photo.src}`} alt="" fill sizes={photo.wide ? "(max-width: 1023px) 100vw, 66vw" : "(max-width: 1023px) 50vw, 33vw"} className="object-cover" />
                </span>
              </button>
              <figcaption className="mt-1.5 text-xs font-medium uppercase tracking-[0.1em] text-(--color-muted) sm:mt-2 sm:text-sm sm:tracking-[0.12em]">{photo.label}</figcaption>
            </figure>
          ))}
        </div>
        {!showAll && (
          <div className="mt-9 text-center sm:hidden">
            <button type="button" onClick={() => setShowAll(true)} aria-controls="wedding-photo-grid" aria-expanded={false} className="min-h-11 rounded-full border border-(--color-accent) px-6 py-3 text-sm font-medium text-(--color-accent-text) transition-colors hover:bg-(--color-accent) hover:text-white">
              Show more photographs
            </button>
          </div>
        )}
      </Container>
      <dialog ref={dialogRef} onClose={() => setActiveIndex(null)} onClick={(event) => { if (event.target === dialogRef.current) close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") step(-1); if (event.key === "ArrowRight") step(1); }} aria-label="Wedding photograph viewer" className="fixed inset-0 m-auto h-dvh w-dvw max-h-none max-w-none bg-black/95 p-4 text-white backdrop:bg-black/90 sm:p-8">
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
