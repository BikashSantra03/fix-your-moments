# Design System — Fix Your Moments

## Current direction (2026-11-01)

The client photography has arrived in `public/images/services/`. The site now uses a single white and red palette with no theme switch. These decisions supersede the provisional black and champagne proposal below; the remaining layout and accessibility guidance still applies where compatible.

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Main canvas |
| `--color-surface` | `#FFF5F4` | Soft rose sections and cards |
| `--color-accent` | `#B42332` | Buttons, dividers and focus |
| `--color-accent-text` | `#A51F2D` | Red labels and links on white |
| `--color-text` | `#241B1D` | Primary copy |
| `--color-muted` | `#665D60` | Secondary copy |

The service pages and galleries will be developed separately, using the delivered images.

**Status:** Provisional visual proposal, NOT yet client approved. The client expressly rejected a green-heavy look.

## 1. Creative direction

**Theme:** Cinematic Black & Champagne — elegant editorial photography, restrained luxurious accents, warmth through images and typography rather than colored backgrounds.

**Keywords:** cinematic, timeless, intimate, understated, premium, responsive, photography-first.

**Avoid:** deep green/midnight teal backgrounds, generic wedding pink everywhere, saturated gradients, overdesigned cards, excessive glows and animations that compete with photos.

The site's identity should feel appropriate for wedding, haldi, pre-wedding, rice ceremony, corporate and editorial photography without using six unrelated visual themes.

## 2. Core tokens (provisional)

| Semantic role | Hex | Usage |
|---|---|---|
| `--color-bg` | `#111114` | Dramatic hero / dark sections |
| `--color-surface` | `#222126` | Raised dark panels, footer variations |
| `--color-accent` | `#D8B878` | CTA, subtle dividers, labels and focus |
| `--color-ivory` | `#F6F1E9` | Text on dark backgrounds; warm light sections |
| `--color-muted` | `#A6A2A0` | Secondary text on dark |
| `--color-ink` | `#242125` | Primary text on light sections |
| `--color-border-dark` | `#403C40` | Dark dividers |
| `--color-border-light` | `#DED7CD` | Light dividers |
| `--color-white` | `#FFFFFF` | Occasional high contrast |

**Contrast note:** Champagne on dark is generally suitable for highlighted text; dark-on-champagne for primary filled buttons. Muted text and borders must be checked against real backgrounds and images. Do not use accent as low-contrast body text on ivory.

### Suggested CSS foundation

```css
:root {
  --color-bg: #111114;
  --color-surface: #222126;
  --color-accent: #d8b878;
  --color-ivory: #f6f1e9;
  --color-muted: #a6a2a0;
  --color-ink: #242125;
  --color-border-dark: #403c40;
  --color-border-light: #ded7cd;
  --page-max: 1240px;
  --page-gutter: clamp(16px, 5vw, 72px);
  --radius-card: 6px;
}
```

Align Tailwind integration to the version created by the Next.js scaffold (e.g., modern CSS tokens/theme syntax) rather than forcing outdated config files.

## 3. Surface strategy

- **Hero:** dark cinematic overlay over full-bleed image/video; white/ivory headline with small champagne emphasis.
- **Service section:** alternating ivory and dark surfaces to create rhythm.
- **Portfolio:** dark or nearly black canvas to prioritize the photographs.
- **About:** ivory editorial section with dark copy + portraits; dark CTA band.
- **Contact:** calm ivory/dark split or cohesive light form with clear rules and prominent submit button.
- **Footer:** near black with restrained accent details.
- Avoid using one dark background on every page without variation.

## 4. Typography

| Role | Font | Weight | Guideline |
|---|---|---|---|
| Headings/display | Bodoni Moda, serif | 400–600 | Elegant expressive headline hierarchy |
| Body/UI | Outfit, sans-serif | 300–600 | Readable navigation, labels, descriptions |

Use `next/font/google` for local optimization/fewer layout shifts. Set practical fallbacks.

**Suggested sizes using `clamp` and responsive behavior:**

- Hero H1: `clamp(3rem, 7vw, 7rem)`; ideally 2–4 short lines, strong image contrast.
- Page H1: `clamp(3rem, 6vw, 6rem)`.
- Section H2: `clamp(2.25rem, 4.2vw, 4.5rem)`.
- Card H3: `clamp(1.4rem, 2.4vw, 2rem)`.
- Body: `1rem–1.125rem`, line-height ~1.6.
- Small labels: `0.8125rem–0.9375rem`, moderate tracking, never unreadably small.
- Headings line-height ~1.05–1.15; avoid excessively tight spacing for paragraphs.

## 5. Layout and spacing

- Max content width around 1240px, with fluid gutters `clamp(16px,5vw,72px)`.
- Sections: 72–120px vertical on large screens; 56–80px mobile depending on content.
- Grid gaps: 12–20px for photo mosaics; 24–48px for editorial sections.
- Use asymmetry selectively, with generous white/negative space.
- The design should be tested at 320, 375, 768, 1024 and 1440 px widths.
- No forced equal-sized photo cards everywhere: varied ratios create editorial character without sacrificing stable layout.

## 6. Components

### Header
- Transparent over hero; switches to readable opaque/blurred dark or ivory surface on scrolling.
- Logo/text wordmark at left; quiet nav at right; accent booking CTA.
- On mobile, use easily tapped accessible menu button and sufficient menu spacing.

### Buttons
- **Primary:** champagne background with near-black text, high contrast, medium weight; understated hover/focus.
- **Secondary:** transparent with contrasting border/text; fill or underline on hover.
- Minimum comfortable touch target ~44px.
- Avoid giant pill shapes everywhere; choose modest rounding or pill for CTA consistency.

### Photography cards
- Image-first, edge-to-edge crop; small corner radius (4–8px).
- On hover/focus, mild zoom `scale(1.03–1.05)` or short caption reveal.
- Title overlays require gradient/solid backing; don't place unreadable text across faces.

### Gallery and lightbox
- Portfolio filter pills/chips, accent for selected state, visible focus.
- Darkened modal backdrop, image `contain`, caption, accessible close and prev/next controls.

### Forms
- Clear labels above inputs; consistent spacing and borders; obvious required state.
- Use concise errors near each field; no color-only error signalling.
- Button behavior must accurately describe WhatsApp handoff.

## 7. Hero visual specification

- Full-screen-feeling editorial area: ~85–100svh subject to content/mobile comfort.
- One highly emotive photography image with **safe text area** and a readable overlay.
- Headline: “Some moments happen once. We fix them forever.” Copy pending final approval.
- Two CTAs: Book Your Date / See Our Work.
- Optional small camera/viewfinder framing, subtle and removable.
- Until final hero video arrives, implement a performant still-image hero with poster readiness; do not depend on stock autoplay video.

## 8. Animation guidelines

- Prioritize purposeful motion: 200–400ms hover/focus, 400–700ms reveal; no major layout moves.
- Slideshow cross-fades only if enough suitable images; no rapid/flashing transitions.
- An aperture-shutter page transition is a signature option, **not a blocker**; add after navigation is stable and make it bypassable for reduced-motion preference.
- Use transforms/opacity rather than layout-affecting animation for better performance.
- Implement `prefers-reduced-motion: reduce` behavior with minimal or no decorative motion.

## 9. Responsive design principles

- Keep headline legible and cropped hero subjects visible on small screens; select mobile-specific crop/position if needed.
- Collapse multi-column services and about sections thoughtfully.
- Portfolio: approximately 1 column narrow mobile, 2 columns tablet, 3 on desktop when imagery supports it; adapt by actual viewport.
- Lightbox controls must remain usable on touch devices.
- Don't rely exclusively on hover for essential information.

## 10. Image and video art direction

- Use photography that feels authentic and intimate; aim for warm natural skin tones, vivid ceremonies and cinematic black/white contrast.
- Preserve variety across wedding, ceremony, corporate and model portfolios.
- Avoid unnatural filters and dramatic color tints over the actual portfolio images.
- Final crops only after client assets arrive; use alt text about the image rather than SEO stuffing.
- For video, show a readable poster, mute autoplay if used, do not force large initial downloads or play sound without action.

## 11. Alternative themes for client review (not implement simultaneously)

**Option B — Ivory & Burgundy:** background `#FAF6F0`, surface `#EEE5DA`, accent `#7C263E`, text `#241D20`, muted `#817476`. Romantic and wedding-oriented.

**Option C — Editorial White & Charcoal:** background `#FAFAF8`, surface `#EBE9E5`, accent `#B18B5F`, text `#222222`, muted `#777571`. Minimal and broad-service portfolio.

Keep colors behind tokens so client selection is a single controlled theme change rather than a complete rewrite.

## 12. Sign-off checklist

- [ ] Client chooses final palette and confirms theme direction.
- [ ] Client provides/approves logo or text wordmark.
- [ ] Client delivers licensed photography and optional showreel.
- [ ] Client approves hero/copy, service details, founder story and contact info.
- [ ] Review actual photographic crops and contrast across mobile and desktop.
- [ ] No dominant green/teal backgrounds remain.
