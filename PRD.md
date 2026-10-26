# Product Requirements Document (PRD)

**Project:** Fix Your Moments — Photography Studio Website  
**Owner/client:** Fix Your Moments (founder: Koushik Pramanik, per supplied demo)  
**Delivery:** Next.js marketing and portfolio website  
**Status:** Implementation-ready working specification; several client inputs pending  
**Last updated:** 2026-10-26

## 1. Source of truth and decision status

- **Confirmed:** Client supplied `fix-your-moments.html` as the functional/content reference and shared https://www.rabinsphotography.com and https://www.sengalleries.com as inspiration. Client dislikes the green/teal-heavy styling in the HTML; redesign colors.
- **Confirmed:** Final photographs and videos are not yet supplied; expected in approximately 2–3 days. Development must proceed with clearly labeled placeholders.
- **Working recommendation, NOT client-approved:** Cinematic Black & Champagne theme; five-page static-first Next.js website; WhatsApp enquiry flow; no CMS/database in v1.
- **Source-specific example content, pending client verification:** Founder name, establishment year (2022), six service categories, descriptions, contact details, and business claims. Do not present placeholders or unverified claims as facts on a public launch.
- **Reference priority:** This PRD + `Design.md` for agreed implementation decisions > client-approved updates > demo HTML for functional behavior > third-party websites for inspiration only. Do not copy third-party branding, photography, text, or code.

## 2. Product vision

Deliver a visually striking, trustworthy, fast, mobile-first photography website that (1) showcases high-quality work, (2) explains photographic services and the studio's story, and (3) converts interested visitors into enquiries through WhatsApp and direct contact.

## 3. Target audiences

1. **Couples and families:** wedding, pre-wedding, haldi, rice ceremony/annaprashan coverage. Need emotional evidence of quality, relevant gallery work, straightforward contact.
2. **Business/event organizers:** corporate event coverage. Need professional examples, service clarity, simple booking enquiry.
3. **Models, creators, brands:** editorial, lookbook and portfolio sessions. Need relevant samples and a fast enquiry path.
4. **Studio owner/team:** wants content that is easy for the developer to update now and can be CMS-powered later if commissioned.

## 4. Success criteria

- Fully functional pages at `/`, `/portfolio`, `/services`, `/about`, `/contact`.
- Gallery categories and full-screen image viewer work on desktop and mobile.
- Contact form validates input and generates a correctly encoded WhatsApp message **only after user action**; user must still press Send in WhatsApp.
- Site looks polished with placeholder media, and swapping to client media requires edits to data/config/files rather than component redesign.
- Good responsive behavior at small mobile (320–375 px), tablet and desktop; no unintended horizontal scrolling.
- Semantic HTML, keyboard accessibility, visible focus, reduced-motion support; no inaccessible hidden navigation.
- Page metadata, crawlable links, sitemap and robots setup, reasonable loading performance.
- Production launch blocked until brand/contact claims and image rights are confirmed.

## 5. Sitemap and page requirements

### 5.1 Global UI

- Fixed/sticky header with brand, Home, Portfolio, Services, About Us, Contact Us and **Book a Shoot** CTA.
- Responsive mobile navigation with proper toggle, keyboard controls and route close behavior.
- Footer containing brand summary, links, contact methods, copyright.
- Floating WhatsApp CTA when a valid client WhatsApp number is configured (otherwise hide/disable responsibly).
- Scroll-to-top on route change; animations do not block core navigation.
- Shared visual tokens and accessible buttons/links.

### 5.2 Home (`/`)

- Cinematic hero with strong headline from provided reference, media backdrop, dark overlay, **Book Your Date** and **See Our Work** CTA.
- Hero uses static placeholder image first; support muted inline background video later with poster/fallback and user-controlled sound only if appropriate.
- Optional subtle photographic viewfinder/REC treatment from demo; avoid competing with imagery.
- Service-name ribbon or less distracting category treatment.
- Split-layout studio introduction + founder image (placeholder until received).
- Six-service photographic card grid linking to services (and relevant section).
- Featured horizontal gallery / selected work linking to portfolio.
- Prominent enquiry CTA band.

### 5.3 Portfolio (`/portfolio`)

- Responsive, pleasing masonry-like gallery with stable layout and appropriate aspect ratios.
- Filter chips: All, Wedding, Pre-wedding, Haldi, Rice Ceremony, Corporate Events, Editorial & Portfolio Shoots.
- Clickable/tappable images open accessible modal lightbox with close, next/previous, Escape, arrow keys, focus handling and image captions.
- Filtered state and current modal list stay consistent; empty states are informative.
- Use data-defined images with descriptive alt text; placeholders must be identifiable in development.
- **Optional future scope (not v1):** `/portfolio/[slug]` dedicated stories/galleries, pagination and CMS.

### 5.4 Services (`/services`)

- Six service sections based on demo: Wedding; Pre-wedding; Haldi; Rice Ceremony; Corporate Events; Editorial & Portfolio Shoots.
- Each service: photo, title, tagline, description, key offerings, **Enquire** and **See Work** actions.
- Section anchors/quick-jump controls; direct links to specific services must work after refresh.
- End with enquiry CTA.

### 5.5 About (`/about`)

- Founder photo, studio story, approach, 4 steps: Talk → Plan → Shoot → Deliver.
- Facts/claims from demo (2022 founded, delivery promises, etc.) are **unverified** until client approves.
- CTA to Contact.

### 5.6 Contact (`/contact`)

- Form fields: name (required), mobile (required), shoot location (required), service/purpose (required), preferred date (recommended, optional until client confirms), message (optional).
- Human-readable inline validation, optional client-side schema validation; clear non-deceptive success state.
- On submit, construct encoded `https://wa.me/<countrycode-number>?text=...` and open via explicit submit interaction. **Do not claim an enquiry was delivered**; WhatsApp opening is not delivery confirmation.
- Display phone, email, social links and studio address only after configured and validated. Map may remain hidden until location is confirmed.
- No database capture or automatic email sending in v1.

## 6. Non-functional requirements

- **SEO:** unique metadata per route, canonical strategy, Open Graph previews, valid heading hierarchy, sitemap/robots, meaningful alt text, schema markup only for verified business facts.
- **Performance:** use `next/image` for photographs; defer below-fold assets; hero image prioritized; video has poster and does not block first render; reserve layout dimensions; avoid sending full-resolution camera originals.
- **Accessibility:** keyboard-friendly navigation and lightbox, focus management, ARIA labels where needed, adequate contrast, logical forms and reduced motion.
- **Security/privacy:** no credentials in code, no private contact details accidentally exposed, no unvalidated unsanitized HTML injection, safe external links, form should not pretend to store personal data.
- **Browser/device:** modern Chromium, Firefox, Safari; iOS and Android layouts.
- **Hosting:** Vercel is planned; domain ownership/DNS details client-controlled.

## 7. Data and content model (v1)

- `SiteSettings`: brand, headline, contact channels, social links, address, map configuration, hero media.
- `Service`: id, slug, title, tagline, description, cover image, offerings, display order.
- `PortfolioItem`: id, title, category, image, alt, aspect ratio (optional), featured, display order.
- `Testimonial` (optional, client-approved only): quote, reviewer attribution, permission.
- Content lives in typed `src/data/*` modules and/or `src/config/*`, not copied across pages.

## 8. Explicitly out of scope for v1

- CMS/admin authentication and custom dashboard.
- Payment gateway, paid bookings, availability calendar and automatic booking confirmation.
- Customer accounts, album delivery portal, order tracking.
- Database-backed CRM, email automation, analytics beyond optional approved basic measurement.
- Blog, extensive portfolio-story URLs, multilanguage pages, advanced editing of images.

These can be quoted as later features and should not be silently implemented.

## 9. Client dependencies and release gates

| Item | Status | Development workaround | Required before production? |
|---|---|---|---|
| Final palette | Proposed only | Use tokenized provisional palette | Yes, obtain approval |
| Gallery photos | Pending | Local licensed placeholders | Yes |
| Hero video | Pending | Static hero poster; optional placeholder reel only in local preview | No: can launch with photo if approved |
| Logo | Pending confirmation | Text wordmark | Approval required |
| Phone/WhatsApp/email | Demo includes placeholders | Central config with empty values; hide broken actions | Yes |
| Studio address/map | Demo placeholder | Hide map pending verification | If displaying map, yes |
| Founder/about claims | Demo content | Label as review-needed | Yes |
| Domain | Unknown | Preview on Vercel | Yes for custom-domain launch |
| CMS vs manual updates | Not yet confirmed | Typed static content | Confirm scope before expanding |

## 10. Acceptance tests / definition of done

- All five routes render on direct load and browser refresh.
- Nav/mobile links, service anchors, gallery filters and lightbox work with mouse, touch and keyboard.
- Blank/invalid form values show clear errors; valid submit opens correct encoded WhatsApp message when number configured; no fake delivery success.
- Replacing one portfolio entry's image path changes relevant UI without component source edits.
- Site does not display broken stock photo/video URLs or invalid contact details at release.
- Mobile screenshots reviewed and typography/contrast approved; automated lint/typecheck/build pass.
- No hydration errors or major console warnings; accessibility and performance spot checks complete.
- Client signs off final imagery, palette, copy, contact info and deployment destination.
