import { siteSettings } from "@/config/site";
import { directionsUrl } from "@/lib/contact";

export function ContactMap() {
  const { mapEmbedUrl, brandName, address, mapQuery } = siteSettings;
  if (!mapEmbedUrl) return null;
  const destination = mapQuery ?? address;

  return (
    <section aria-labelledby="studio-heading" className="py-9 sm:py-20">
      <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-(--color-accent-text)">Come say hello</p>
          <h2 id="studio-heading" className="text-3xl sm:text-5xl">Find the studio.</h2>
          {address && <address className="mt-4 max-w-[48ch] text-base not-italic text-(--color-muted)">{address}</address>}
        </div>
        {destination && <a href={directionsUrl(destination)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-(--color-accent) px-6 text-sm font-medium text-(--color-accent-text) transition-colors hover:bg-(--color-surface)">Open directions <span aria-hidden="true">↗</span></a>}
      </div>
      <div className="overflow-hidden border border-(--color-border-dark) bg-(--color-surface)">
        <iframe title={`Map to ${brandName}`} src={mapEmbedUrl} loading="eager" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="block h-64 w-full border-0 sm:h-[26rem]" />
      </div>
    </section>
  );
}
