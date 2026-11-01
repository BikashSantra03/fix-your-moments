# Service pages implementation plan

## Current content audit

The existing `/services` route is a placeholder. `src/data/services.ts` describes Wedding, Pre-wedding, Haldi, Rice Ceremony, Corporate Events, and Editorial, but its image paths point to missing placeholders. The supplied image folders are Wedding (26), Pre-wedding (40), Engagement (7), Bridhi (28), Rice Ceremony (16), and Corporate (36). The Corporate folder includes sports, film, and festival photography as well as event work.

## Page structure

1. Build `/services` as an image-led index with a short introduction and cards for the agreed service categories. Each card links to its service page.
2. Build individual pages at `/services/[slug]`. Use a shared layout for the hero, introduction, selected photo gallery, enquiry call to action, and links to other services. Keep each page's photo selection, alt text, copy, and metadata in typed data.
3. Use `next/image`, responsive `sizes`, and deliberate crops. Keep designed album spreads separate from the main photo gallery, where they can be shown with a suitable aspect ratio.
4. Link each enquiry button to `/contact?service=<id>` so the contact form preselects the service. Keep the current white and red design tokens throughout.

## Delivery order

1. **Wedding:** establish the page layout using the 26 wedding assets. Select a varied set of portraits, rituals, and celebration frames; check mobile crops and image loading.
2. **Pre-wedding:** reuse the layout, adapting the gallery to its wider range of locations and portrait orientations.
3. **Engagement:** add the supplied engagement work and its own service entry.
4. **Bridhi:** add the supplied portraits after confirming the public service name and description.
5. **Rice Ceremony:** add the baby and family photographs, with careful alt text.
6. **Corporate:** select the work that accurately represents the service; decide where the sports, film, and festival images belong before publishing them under a corporate heading.

After the Wedding page is approved, implement the remaining pages one at a time. Update the index and navigation as each page becomes ready, rather than linking to unfinished detail pages.

## Content decisions before implementation

- Confirm whether Engagement and Bridhi replace the old Haldi and Editorial entries, or whether Haldi and Editorial remain as services without supplied galleries.
- Confirm the spelling and customer-facing description of “Bridhi.”
- Review service descriptions and feature claims in `src/data/services.ts`; several are provisional and should not be presented as verified offerings.

## Acceptance checks for each page

- All displayed images resolve and have meaningful alt text; gallery order and crop work on mobile and desktop.
- A clear page title, page-specific metadata, working service index link, and enquiry link are present.
- Keyboard focus, text contrast, and reduced-motion behavior remain usable.
- Lint, TypeScript, and production build pass after each page.
