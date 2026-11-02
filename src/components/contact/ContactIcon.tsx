import type { ReactNode } from "react";

export type ContactIconName = "phone" | "whatsapp" | "location" | "facebook" | "instagram" | "review";

const drawings: Record<ContactIconName, ReactNode> = {
  phone: <><path fill="var(--color-accent)" d="M18 12 9 21c-2 15 22 39 37 36l9-9-13-12-7 7c-7-3-12-8-15-15l7-6Z"/><path stroke="white" d="m14 20 7 7m20 16 7 7"/><path fill="var(--color-surface)" d="M36 7h24v21H48l-8 6v-6h-4Z"/><path d="M42 15h12m-12 6h8"/></>,
  whatsapp: <><path fill="var(--color-accent)" d="M34 8a25 25 0 0 0-22 37L8 60l16-4A25 25 0 1 0 34 8Z"/><path stroke="white" fill="none" d="m24 22-5 5c1 11 11 21 22 21l5-5-8-6-4 4c-5-2-8-5-10-10l4-3Z"/></>,
  location: <><path fill="var(--color-surface)" d="m7 45 17-5 19 5 18-5v21l-18 5-19-5-17 5Z"/><path d="M24 47v14m19-11v16"/><path fill="var(--color-accent)" d="M34 5a17 17 0 0 0-17 17c0 13 17 29 17 29s17-16 17-29A17 17 0 0 0 34 5Z"/><circle cx="34" cy="22" r="6" fill="white"/></>,
  facebook: <><rect x="11" y="10" width="47" height="49" rx="10" fill="var(--color-surface)"/><path fill="var(--color-accent)" d="M36 59V38h8l2-10H36v-4c0-4 2-5 6-5h5V9h-7c-11 0-16 6-16 16v3h-7v10h7v21Z"/></>,
  instagram: <><rect x="10" y="10" width="48" height="48" rx="13" fill="var(--color-accent)"/><rect x="19" y="19" width="30" height="30" rx="9" stroke="white" fill="none"/><circle cx="34" cy="34" r="8" stroke="white" fill="none"/><circle cx="44" cy="24" r="2" fill="white" stroke="none"/></>,
  review: <><path fill="var(--color-surface)" d="M8 12h52v37H34L20 61V49H8Z"/><path fill="var(--color-accent)" d="m34 18 4 8 9 1-7 7 2 9-8-5-8 5 2-9-7-7 9-1Z"/></>,
};

// Original vector artwork, using the site's palette rather than external icon assets.
export function ContactIcon({ name }: { name: ContactIconName }) {
  return <svg viewBox="0 0 68 72" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-10 w-10 sm:h-14 sm:w-14"><ellipse cx="34" cy="66" rx="23" ry="3" fill="var(--color-border-dark)" stroke="none"/>{drawings[name]}</svg>;
}
