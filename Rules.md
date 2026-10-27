# Claude Code Project Rules — Fix Your Moments

> Read `PRD.md`, `Architecture.md`, `Design.md` and `phases.md` before implementing. Treat this file as build guardrails, not a license to invent product requirements.

## 1. Core working principles

1. Deliver a responsive, accessible, premium photography website that matches approved client requirements.
2. Work **one phase at a time** from `phases.md`; finish a phase's acceptance checks before moving on.
3. Implement working UI over speculative infrastructure. Use real routes (no hash router) and avoid a green-heavy palette.
4. Prefer small, reviewable changes and simple components. Do not rewrite unrelated working code.
5. If a requirement is undecided, use the documented provisional default and label it; avoid inventing confirmed client decisions.
6. Keep a short progress summary after each phase: files changed, functionality completed, checks run, unresolved inputs.

## 2. Scope boundaries

**Build:** five routes, responsive UI, six services, data-driven portfolio, gallery filtering and lightbox, Home hero, About, Contact → WhatsApp flow, SEO essentials, optimized media handling.

**Do NOT build unless explicitly authorized:** CMS/admin login, database, Next.js contact API, Stripe/payment gateway, appointment/availability booking, customer accounts, email server, analytics tracking, blog, project-detail pages.

**Do NOT decide independently:** public studio phone/address/email, portrait identity, real images/videos, factual client achievements, final palette, packages/prices, client reviews.

## 3. Tooling and dependency boundaries

- Next.js with App Router + React + TypeScript strict; server components by default.
- Tailwind CSS with named CSS variables and responsive utility classes.
- Use `next/image` for gallery/portfolio photographs. Native `<video>` for hero showreel only when available.
- `lucide-react` for icons; use CSS for simple transitions and install `motion` only for purposeful interaction.
- For forms, Zod + React Hook Form are permitted but not mandatory; don't add form dependencies if basic accessible controls suffice.
- Do not add a UI kit, CMS, state-management framework, animation package or backend infrastructure without a clear requirement.
- Prefer framework-native APIs and familiar libraries; check package/version compatibility rather than blindly upgrading everything.

## 4. Code quality

- TypeScript strict; meaningful types, no accidental `any` or `@ts-ignore` without an explanation.
- Use named exports for reusable components where possible; Next.js route defaults as required.
- Favor composition; avoid monolithic >300-line UI files when extraction is clearer.
- No direct DOM construction (`innerHTML`, `createElement`) for React UI; use JSX/state/refs.
- Don't call browser globals during server rendering. Effects must have cleanups.
- Use stable keys for mapped items; derive UI from typed data, not copied literals.
- Avoid heavy client bundles; restrict `"use client"` to interactive leaves.
- Maintain semantic headings, links, forms, buttons and appropriate alt text.
- Avoid generic filler lorem ipsum in final UI; placeholder copy must be reviewed before launch.

## 5. Design and styling guardrails

- A midnight-teal/green palette (e.g. `#0E2B2F`) is **rejected**. Do not reintroduce it as dominant surface, background or overlay.
- **Provisional** palette: cinematic charcoal/black + champagne accents and ivory text, defined in `Design.md`.
- Use semantic tokens (`--background`, `--surface`, `--accent`, `--text`, `--muted`, etc.). Avoid scattering hex values throughout components.
- Photography is the hero: avoid oversized decorative animations, busy backgrounds and excessive gradient effects.
- Maintain visual hierarchy and readable overlays when actual images are delivered.
- Respect motion reduction; avoid autoplay audio.
- Theme decisions remain reversible until client approval.

## 6. Images/video and ownership

- Client has **not yet delivered real photos/videos**. Build using explicit placeholders in `public/images/placeholders/` and central media config.
- Never falsely label stand-in images as the studio's previous work in public production.
- Don't pull photos from the two inspiration websites. Use media only with permission/license.
- No broken `<img>`/`video` assets. Provide graceful fallback and reasonable dimensions.
- Keep original delivered camera files out of Git/build assets; work from optimized exports. Do not commit huge videos unnecessarily.
- Video must be muted by default if auto-playing, with poster fallback, `playsInline`, pause strategy and no unavoidable audio.

## 7. Contact and privacy

- Never hardcode placeholder phone (`+91 00000 00000`), bogus email, studio address or random map query into deployed contact links.
- The contact form submits to a Google Sheet (endpoint pending; `src/lib/enquiry.ts` is a stub until then). Do not launch publicly until the endpoint is live.
- Validate client-side; normalize numbers cautiously and do not silently alter user intent.
- Show the "we will get back to you shortly" confirmation only after the submit call resolves; surface an error if it fails.
- Don't collect/store personal info in localStorage, analytics or logs without scope and consent.
- Avoid `dangerouslySetInnerHTML` for user/customer content.

## 8. Accessibility and UX

- Visible focus states, keyboard navigation for menus/filters/lightbox, Escape close, restore focus on modal close.
- All buttons have clear text/accessible names and functional click handlers.
- Use correct label/input associations and concise validation errors.
- Aim for WCAG AA contrast for text and actionable controls.
- Lightbox should be a real accessible dialog; verify keyboard behavior and scroll locking.
- Mobile menu should close on navigation, respect browser resize and not trap invisible focus.
- Test 320px, 375px, 768px, 1024px, 1440px layouts; avoid horizontal overflow.

## 9. Performance and SEO

- Prefer static/server rendering for content. Avoid rendering the whole website as a client component.
- Use `sizes` for responsive images; prioritize only the actual hero/LCP image.
- Reserve dimensions to minimize CLS; lazy-load below-the-fold images; limit giant slideshows.
- Keep metadata page-specific, use one descriptive H1 per page, create sitemap and robots.
- Keep external social links safe (`rel="noopener noreferrer"` when opening new windows).
- Avoid unnecessary third-party embeds and scripts.

## 10. Testing and completion protocol

At the end of each phase:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Run available checks that are relevant to current changes. If a command fails, investigate and fix it; do not claim a clean build without running it. Manually verify affected routes, mobile behavior, interaction, and browser console errors.

Phase complete means:
- No type/build errors in changed scope.
- No misleading placeholder contact action.
- Visual appearance matches provisional or approved tokens.
- New UI works without relying on assets not yet supplied.
- Any uncertainties are recorded for client review.

## 11. How Claude Code should respond/work

- Start by reading all five `.md` files and inspecting repository state.
- Identify the active phase from `phases.md`. Implement it without simultaneously starting later phases.
- Before coding, state a concise plan and list expected changed files.
- After coding, report what was implemented, tested, and any unresolved dependencies.
- If the user requests a new feature that contradicts these docs, explain the conflict and ask whether to change scope, unless the user's instruction explicitly supersedes it.
- Never fabricate test results, deploy URLs or approvals.
