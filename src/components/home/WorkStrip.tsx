"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const setClassName = "flex shrink-0 items-start gap-3 pr-3 sm:gap-4 sm:pr-4";

interface WorkStripProps {
  label: string;
  children: ReactNode;
  /** The same photos, hidden from keyboards and screen readers, that make the loop endless. */
  loopCopy: ReactNode;
}

// The movement itself is the CSS work-loop animation; this only starts it when the visitor arrives.
export function WorkStrip({ label, children, loopCopy }: WorkStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    // Lazy images off to the side of a scroller load late, so fetch them as the visitor approaches.
    const approach = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      strip.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
      approach.disconnect();
    }, { rootMargin: "1200px 0px" });
    approach.observe(strip);

    const arrival = new IntersectionObserver(([entry]) => setReached(entry.isIntersecting), { threshold: 0.4 });
    arrival.observe(strip);

    return () => {
      approach.disconnect();
      arrival.disconnect();
    };
  }, []);

  // Scrolling by one full set looks identical, so keep the scroll within one set's width. Without this,
  // the animation moves a scrolled strip past its last photo and it goes blank. A keyboard user's focused
  // photo must stay on screen, so that waits until focus leaves.
  function keepInLoop() {
    const strip = stripRef.current;
    const setWidth = strip?.querySelector("ul")?.getBoundingClientRect().width;
    if (!strip || !setWidth || strip.querySelector(":focus-visible")) return;
    const wrapped = (((strip.scrollLeft - 1) % setWidth) + setWidth) % setWidth + 1;
    if (Math.abs(wrapped - strip.scrollLeft) > 1) strip.scrollLeft = wrapped;
  }

  return (
    <div ref={stripRef} onScroll={keepInLoop} onBlur={keepInLoop} className="work-strip overflow-x-auto py-1">
      <div data-running={reached || undefined} className="work-track flex w-max">
        <ul aria-hidden="true" className={setClassName}>{loopCopy}</ul>
        <ul aria-hidden="true" className={setClassName}>{loopCopy}</ul>
        {/* Third, so it can always be scrolled to when a keyboard user tabs into it. */}
        <ul aria-label={label} className={setClassName}>{children}</ul>
        <ul aria-hidden="true" className={setClassName}>{loopCopy}</ul>
      </div>
    </div>
  );
}
