# Implementation Phases — Fix Your Moments

**Execution model:** Incremental delivery in Claude Code. Each phase has a checkpoint; do not treat a timeline as a promise. Actual durations depend on feedback and asset delivery.

## Phase overview

| Phase | Goal | Dependency | Status |
|---|---|---|---|
| 0 | Project audit and requirement mapping | Project docs | Not started |
| 1 | Next.js setup and visual tokens | None | Not started |
| 2 | Shared shell and navigation | Phase 1 | Not started |
| 3 | Homepage with placeholders | Phase 2 | Not started |
| 4 | Portfolio and accessible lightbox | Phase 2 | Not started |
| 5 | Services and About pages | Phase 2 | Not started |
| 6 | Contact and WhatsApp enquiry | Client number for working external send; otherwise mocked/disabled | Not started |
| 7 | Real media integration and visual polish | Client assets; palette approval | Blocked on client for finalization |
| 8 | SEO, accessibility, performance, QA | Feature-complete pages | Not started |
| 9 | Client review, deployment and handover | Client approval + domain details | Not started |

> Phases 1–6 can be implemented immediately using approved-to-use placeholders. Phase 7 cannot be fully signed off until client media arrives.

## Phase 0 — Inspect and plan

**Tasks**
- Read `PRD.md`, `Architecture.md`, `Rules.md`, `Design.md` and this file.
- Confirm scope: five pages, six service categories, sample content, slideshow/video fallback, photo filters/lightbox, shutter navigation and WhatsApp form.
- Record what to preserve, adapt or omit; confirm unresolved inputs without blocking foundation work.
- Audit current repo before creating or overwriting anything.

**Acceptance:** short implementation checklist mapped to pages/components; no coding assumptions masquerading as client approval.

## Phase 1 — Scaffold and design system

**Tasks**
- Initialize Next.js App Router + TypeScript + Tailwind CSS + ESLint; `src/` structure and alias `@/*`.
- Add tokenized provisional Cinematic Black & Champagne theme and two-family type scale.
- Add typed `site.ts`, `media.ts`, `services.ts` and `portfolio.ts` starter data; make placeholders valid local assets or explicit CSS fallbacks.
- Set up base metadata, body background, responsive container and reusable Button/SectionTitle components.

**Acceptance:** app starts; theme is centralized; lint/typecheck/build pass; no broken asset references.

## Phase 2 — Global shell

**Tasks**
- Header/logo text fallback, active page navigation, Book a Shoot CTA.
- Mobile menu with keyboard/ARIA support, focus styling and close-on-navigation.
- Footer, social/contact areas guarded by verified values; optional WhatsApp floating button only with verified number.
- Consistent section spacing and layout containers.

**Acceptance:** direct loading all routes shows sensible shell; 320px mobile navigation works; no dead buttons.

## Phase 3 — Home

**Tasks**
- Hero with compelling copy, correctly cropped still image and readable overlay; build future video interface without depending on video.
- Intro/story split, six-service overview grid, featured image strip, CTA band.
- Light purposeful reveals, hover/focus states and reduced-motion fallback.
- Optional viewfinder accents; defer complex shutter until functional pages are stable.

**Acceptance:** complete responsive homepage, valid CTA destinations, sensible content with placeholders, no hero layout jump.

## Phase 4 — Portfolio

**Tasks**
- Typed portfolio data and category mapping.
- Responsive grid/masonry-like layout; accessible filter controls.
- Lightbox with captions, previous/next, Escape, arrow keys, backdrop close where safe, focus restoration and scroll locking.
- Empty state and mobile image performance.

**Acceptance:** all filters work, filtering updates modal list, no keyboard trap, every image has alt, loading is stable.

## Phase 5 — Services and About

**Tasks**
- Six well-designed services with image, tagline, description, highlights, Enquire and See Work links.
- Service anchor navigation and filter preselection only if simple/reliable.
- About story/founder placeholder, four-step process, verified-only stats, CTA.

**Acceptance:** all six services represented accurately; anchors work; About has no unverified promotional claims presented as confirmed.

## Phase 6 — Contact enquiry

**Tasks**
- Responsive form, required field labels, validation and errors.
- Build proper WhatsApp message from submitted data and encode safe URL.
- If business WhatsApp is not configured, show clear disabled/not-yet-available state; do not use a fake number.
- Render contact links and map only with verified configuration.
- Explain WhatsApp handoff accurately.

**Acceptance:** validation paths tested; encoded messages include required info; no false success state or broken phone/address links.

## Phase 7 — Replace assets and freeze visual direction

**Tasks**
- Obtain client-approved palette (or adjust provisional tokens), logo, photos, founder portrait, contact details and optional hero video.
- Verify image permissions, optimize exports, set meaningful alt text, configure crop/aspect ratios.
- Replace media config paths; refine contrast/overlays based on each real image.
- Integrate optional showreel with muted autoplay only if supported; use poster + fallback.
- Request written sign-off on wording, brand claims and image selection.

**Acceptance:** no placeholder visuals or fake details remain in release build; client approves design and content.

## Phase 8 — Quality, SEO and performance

**Tasks**
- Page-specific metadata, social previews, sitemap, robots, proper headings and structured data only where verified.
- Audit mobile layouts 320/375/768/1024/1440; keyboard and reduced-motion support.
- Optimize LCP hero, CLS, gallery loading and media size; avoid video stealing initial bandwidth.
- Check major browsers, 404, links, console, Lighthouse and error cases.
- Run lint, strict TypeScript and production build.

**Acceptance:** checks pass; no critical broken paths/accessibility regressions; performance risks documented and addressed.

## Phase 9 — Launch and handoff

**Tasks**
- Share Vercel preview, collect feedback, implement agreed revision rounds.
- Configure domain/DNS/SSL with client-owned access; confirm SEO canonical and indexability after launch.
- Document how to update gallery/hero/services/contact config in v1.
- Handover repository, deployment ownership, media/license notes and open issues.

**Acceptance:** approved production site accessible over HTTPS and handoff documentation provided.

## Suggested Claude Code phase prompt

```text
Read PRD.md, Architecture.md, Rules.md, phases.md and Design.md first.
Inspect the existing repository. Implement ONLY Phase <N> from phases.md.
Respect provisional client decisions, use placeholder media where necessary,
and do not add out-of-scope features. Before edits, summarize the plan.
After edits, run relevant lint, typecheck and build checks, fix errors,
and report changed files, validated behavior and outstanding inputs.
```

## Decision log to update throughout development

| Question | Provisional default | Client status |
|---|---|---|
| Theme | Cinematic Black & Champagne | Awaiting approval |
| Content edits | Developer-managed typed static files | Awaiting scope confirmation |
| Enquiries | WhatsApp handoff only | Awaiting confirmation |
| Hero media | Photo until final reel provided | Assets pending |
| Logo | Text wordmark | Pending |
| Final business details | Hide unknown values | Pending |
