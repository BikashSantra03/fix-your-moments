# Architecture — Fix Your Moments

**Implementation style:** Static-first, App Router, component-driven and content-configurable.  
**Related docs:** `PRD.md`, `Rules.md`, `phases.md`, `Design.md`.

## 1. System overview

```text
Visitor (mobile / desktop)
         |
         v
Vercel CDN + Next.js App Router
         |
         +--> Server-rendered/static route content + SEO metadata
         |       +--> typed site settings, services, portfolio data
         |
         +--> Small client-side interactive islands
                 +--> mobile navigation
                 +--> hero media playback (if configured)
                 +--> portfolio filtering / accessible lightbox
                 +--> contact validation and WhatsApp deep link
         |
         +--> Optimized local/static photographs (future: approved CDN)

Form submission --> user-initiated wa.me link --> WhatsApp compose window
(no API, DB, account system, or automatic message delivery in v1)
```

## 2. Technology selection

| Concern | Choice | Notes |
|---|---|---|
| Framework | Next.js App Router | Use current project-compatible stable version; don't chase latest during delivery |
| Language | TypeScript (strict) | No `any` without justification |
| UI | React Server Components by default | Client components only for interactivity |
| Styles | Tailwind CSS + CSS design tokens | Use supported syntax for installed Tailwind version |
| Fonts | `next/font/google` | Bodoni Moda headings, Outfit UI/body (provisional) |
| Animations | CSS first; `motion` if needed | Don't add heavyweight animation stack for basic fades |
| Icons | `lucide-react` | Consistent iconography |
| Forms | React Hook Form + Zod as needed | Central schemas; lightweight forms can use controlled React |
| Media | `next/image`, public directory | Dedicated poster for video; no uploads yet |
| Deployment | Vercel | Standard Next.js deployment |
| Storage / CMS | None in v1 | Future extension point only |

## 3. Routing

| URL | File | Render strategy |
|---|---|---|
| `/` | `src/app/page.tsx` | static-capable server page |
| `/portfolio` | `src/app/portfolio/page.tsx` | server shell + client gallery |
| `/services` | `src/app/services/page.tsx` | static-capable server page |
| `/about` | `src/app/about/page.tsx` | static-capable server page |
| `/contact` | `src/app/contact/page.tsx` | server shell + client form |
| `/sitemap.xml` | `src/app/sitemap.ts` | generated sitemap |
| `/robots.txt` | `src/app/robots.ts` | generated robots |

**Not in v1:** `/portfolio/[slug]` or `/services/[slug]` unless the client approves them explicitly.

## 4. Recommended directory structure

```text
fix-your-moments/
├── public/
│   ├── images/
│   │   ├── placeholders/            # temporary licensed stand-ins
│   │   ├── hero/
│   │   ├── portfolio/
│   │   ├── services/
│   │   └── team/
│   └── videos/                     # only after assets supplied
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── portfolio/page.tsx
│   │   ├── services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── layout/                 # Header, Nav, Footer
│   │   ├── home/                   # Hero, Intro, ServiceGrid, FeaturedWork, CTA
│   │   ├── portfolio/              # FilterBar, Gallery, Lightbox
│   │   ├── services/               # ServiceSection, JumpLinks
│   │   ├── contact/                # ContactForm, ContactDetails
│   │   ├── motion/                 # Optional ShutterTransition
│   │   └── ui/                     # Button, SectionTitle, MediaFrame
│   ├── config/
│   │   ├── site.ts                 # brand + contact + social + runtime config
│   │   └── media.ts                # hero, founder, portfolio placeholders
│   ├── data/
│   │   ├── services.ts
│   │   └── portfolio.ts
│   ├── lib/
│   │   ├── whatsapp.ts            # pure message and URL construction
│   │   └── validation.ts          # form schema
│   └── types/
│       └── content.ts
├── docs/                            # optional copies of these specs
├── PRD.md
├── Architecture.md
├── Rules.md
├── phases.md
├── Design.md
├── .env.example                    # only if configuration needs env
├── package.json
├── tsconfig.json
└── next.config.ts
```

Do not create empty files/components simply to fill out the tree. Keep a smaller layout when appropriate.

## 5. Module responsibilities

- `app/*`: route composition, metadata, server-side data selection; avoid large event-handling implementations.
- `components/layout`: navigation, header and footer shared globally.
- `components/home`: marketing page presentation, no data fetching unless required.
- `components/portfolio`: client-side category state, image viewer interaction; display data is passed as props.
- `components/contact`: validation UI and user-triggered handoff; no fake backend endpoint.
- `config/site.ts`: one source for number/email, social links, brand name, address/map and public URL.
- `config/media.ts` and `data/*`: placeholder/final media paths and typed project/service information.
- `lib/whatsapp.ts`: encode a valid message using `URLSearchParams` or `encodeURIComponent`; only use verified country-code phone number.
- `types/content.ts`: shared types for all configured data.

## 6. Suggested TypeScript contracts

```ts
export type ServiceCategory =
  | 'wedding'
  | 'prewedding'
  | 'haldi'
  | 'rice'
  | 'corporate'
  | 'editorial';

export interface Service {
  id: ServiceCategory;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  src: string;
  alt: string;
  aspectRatio?: `${number}/${number}`;
  featured?: boolean;
}

export interface EnquiryInput {
  name: string;
  mobile: string;
  location: string;
  purpose: string;
  date?: string;
  message?: string;
}
```

## 7. Navigation and animation design

- Use semantic `<Link href="/portfolio">`, not demo-style `#portfolio` hash-based pseudo-pages.
- Anchors within a page may use `#wedding` but must work on direct link and refresh.
- Preferred base: lightweight scroll reveals/hover states; camera shutter between routes is a **progressive enhancement**.
- If implementing shutter transition, it must not corrupt browser history, slow navigation excessively, create hydration mismatch or trap focus; respect `prefers-reduced-motion`.
- Route content must be fully usable even if JavaScript animations fail.

## 8. Media pipeline and placeholder swapping

1. Add locally hosted, permitted low-volume placeholders to `public/images/placeholders/`.
2. Declare all asset mappings in config/data; use descriptive filenames, stable IDs and `alt` text.
3. Preserve aspect ratio using `sizes`, `width/height` or appropriate `fill` container semantics.
4. When originals arrive: verify reuse rights, select crops, export web-ready assets (AVIF/WebP/JPEG as applicable), replace paths, review each layout.
5. Hero video: serve compressed video and `poster`; start muted, `playsInline`, avoid autoplay dependency, load only when beneficial. Always allow static fallback.
6. Never use a third-party reference site's photography without licensed permission.

## 9. Enquiry flow

```text
User completes form
    -> validate required fields + mobile number
    -> if invalid: inline field error, no redirect
    -> if number missing in config: show honest alternative contact info
    -> if valid: prepare multiline enquiry text
    -> user clicks send/open WhatsApp
    -> browser opens wa.me compose URL
    -> website says "WhatsApp opened; please press Send"
```

No information is actually delivered to the photographer unless the user sends it from WhatsApp. Don't add an unnecessary Next.js API route.

## 10. SEO / deployment decisions

- Root layout provides base metadata; each page overrides route-specific title/description and canonical URLs.
- Site URL configured centrally after domain confirmation.
- Use route sitemap/robots, no-index preview environments if feasible.
- Business schema only when studio address, name, and contacts are client-verified.
- Monitor Vercel builds and image optimization constraints appropriate to the hosting plan.
- Avoid private secrets for public config; future secrets, if any, go in server-only environment variables.

## 11. Future extensions (design only; don't implement)

- Headless CMS adapter to replace static `data/*`.
- `/portfolio/[slug]` individual project galleries.
- Backend enquiry persistence + notifications.
- Booking dates/calendar integration.
- Testimonials/blog and analytics when approved.
