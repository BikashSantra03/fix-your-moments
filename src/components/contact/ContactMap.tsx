import { siteSettings } from "@/config/site";

export function ContactMap() {
  const { mapEmbedUrl, brandName, address } = siteSettings;
  if (!mapEmbedUrl) return null;

  return (
    <div className="mt-16 sm:mt-20">
      <h2 className="mb-6 text-3xl text-(--color-text) sm:text-4xl">Find the studio</h2>
      <div className="relative overflow-hidden rounded-3xl border border-(--color-border-dark) bg-(--color-surface)">
        <iframe
          title={`Map to ${brandName}`}
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="block h-80 w-full border-0 sm:h-[26rem]"
        />
        {/* Google labels the pin with the market's name; this card names the studio inside it. Below sm it sits under the map so it doesn't cover Google's place card. */}
        <div className="border-t border-(--color-border-dark) bg-(--color-bg)/90 px-5 py-4 sm:pointer-events-none sm:absolute sm:right-4 sm:top-4 sm:max-w-[16rem] sm:rounded-2xl sm:border sm:px-4 sm:py-3 sm:shadow-lg sm:backdrop-blur">
          <p className="flex items-center gap-2 font-display text-lg leading-tight text-(--color-text)">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-(--color-map-pin)" aria-hidden="true" />
            {brandName}
          </p>
          {address && <p className="mt-1 text-xs text-(--color-muted)">{address}</p>}
        </div>
      </div>
    </div>
  );
}
