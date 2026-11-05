import Image from "next/image";
import { QuoteIcon } from "@/components/ui/icons";
import type { ClientReview } from "@/types/content";

const dividerClasses = "h-px w-10 bg-(--color-accent)/30 sm:w-16";

interface ReviewCardProps {
  review: ClientReview;
  label: string;
  isActive: boolean;
}

export function ReviewCard({ review, label, isActive }: ReviewCardProps) {
  return (
    <figure
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!isActive}
      className="review-slide flex flex-col items-center lg:flex-row"
    >
      <div className="relative z-10 -mb-14 aspect-square w-44 shrink-0 overflow-hidden rounded-full border-[6px] border-(--color-bg) bg-(--color-surface) shadow-xl sm:w-56 lg:-mr-[7%] lg:mb-0 lg:w-[36%] lg:border-8">
        <Image
          src={review.image}
          alt={review.alt}
          fill
          sizes="(max-width: 639px) 176px, (max-width: 1023px) 224px, 340px"
          className="object-cover"
          style={{ objectPosition: review.position }}
        />
      </div>
      <div className="flex w-full flex-1 flex-col items-center rounded-3xl border border-(--color-border-dark) bg-(--color-bg) px-5 pt-20 pb-8 text-center shadow-lg shadow-(--color-accent)/5 sm:px-10 sm:pb-10 lg:self-stretch lg:justify-center lg:py-12 lg:pr-12 lg:pl-[12%]">
        <div aria-hidden="true" className="flex items-center gap-4">
          <span className={dividerClasses} />
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--color-accent) text-white shadow-md sm:h-14 sm:w-14">
            <QuoteIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span className={dividerClasses} />
        </div>
        <blockquote className="mt-6 max-w-[46ch] text-base leading-relaxed text-(--color-muted) sm:text-lg">
          {review.quote}
        </blockquote>
        <figcaption className="mt-6">
          <span className="block font-display text-2xl text-(--color-text)">{review.name}</span>
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">{review.occasion}</span>
        </figcaption>
      </div>
    </figure>
  );
}
