"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import { ReviewCard } from "@/components/home/ReviewCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import type { ClientReview } from "@/types/content";

const autoSlideMs = 6000;

const arrowClasses =
  "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--color-border-dark) bg-(--color-bg) text-(--color-accent-text) shadow-sm transition-colors hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-white";

export function ReviewSlider({ reviews }: { reviews: ClientReview[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const keyboardFocus = useRef(false);
  const onScreen = useRef(false);
  const [active, setActive] = useState(0);

  // Wraps in both directions, so the reviews are circular.
  function move(step: number) {
    setActive((current) => (current + step + reviews.length) % reviews.length);
  }

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => { onScreen.current = entry.isIntersecting; }, { threshold: 0.3 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  // Restarts whenever the review changes, so an arrow click always gets a full turn on screen.
  useEffect(() => {
    const timer = setInterval(() => {
      const held = hovering.current || keyboardFocus.current || !onScreen.current || document.hidden;
      if (!held) setActive((current) => (current + 1) % reviews.length);
    }, autoSlideMs);
    return () => clearInterval(timer);
  }, [active, reviews.length]);

  // Only keyboard focus holds the slider: a mouse click leaves focus on the arrow, which shouldn't stop it for good.
  function handleFocus(event: FocusEvent<HTMLDivElement>) {
    keyboardFocus.current = event.target.matches(":focus-visible");
  }

  return (
    <div
      ref={rootRef}
      role="group"
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onPointerEnter={(event) => { if (event.pointerType === "mouse") hovering.current = true; }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") hovering.current = false; }}
      onFocusCapture={handleFocus}
      onBlurCapture={() => { keyboardFocus.current = false; }}
      className="grid grid-cols-2 items-center justify-items-center gap-x-3 gap-y-7 lg:grid-cols-[auto_1fr_auto] lg:gap-x-8"
    >
      <button type="button" onClick={() => move(-1)} aria-label="Previous review" className={`${arrowClasses} order-2 justify-self-end lg:order-1`}>
        <ChevronLeftIcon />
      </button>

      {/* Every review shares one grid cell, so the section keeps the height of the tallest and never jumps. */}
      <div className="order-1 col-span-2 grid w-full lg:order-2 lg:col-span-1">
        {reviews.map((review, index) => (
          <ReviewCard
            key={review.id}
            review={review}
            label={`Review ${index + 1} of ${reviews.length}`}
            isActive={index === active}
          />
        ))}
      </div>

      <button type="button" onClick={() => move(1)} aria-label="Next review" className={`${arrowClasses} order-3 justify-self-start`}>
        <ChevronRightIcon />
      </button>
    </div>
  );
}
