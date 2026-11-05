# Home page

How the home page is built, and why. All images are under `public/images/services/`.

## Goal

Within one scroll, a visitor should feel the quality of the work, see that their occasion is covered, and know how to book.

## Sections

| # | Section | Component | Surface | Job |
|---|---|---|---|---|
| 1 | Hero and service strip | `HomeHero` | Near-black, then crimson | Emotional first impression; two clear actions |
| 2 | Studio introduction | `StudioIntro` | White | Who we are and how we work |
| 3 | Services mosaic | `ServiceMosaic` | Rose | "Do they shoot my occasion?" |
| 4 | Selected work | `SelectedWork`, `WorkStrip` | Dark | Proof of quality and range |
| 5 | Photo pause | `PhotoQuote` | Photo | Breathing space and an emotional beat |
| 6 | How it works | `ProcessSteps` | White | Removes uncertainty about booking |
| 7 | Client reviews | `ClientReviews`, `ReviewSlider`, `ReviewCard` | Rose | Trust just before the booking prompt |
| 8 | Enquiry band | `EnquiryBand` | Crimson | The final conversion point |

Shared with the About page: `ClientReviews`, `ReviewSlider`, `ReviewCard`, `EnquiryBand` and `PhotoQuote` in `src/components/sections/`, and `SectionHeading` in `src/components/ui/`. Content lives in `src/data/home.ts`, `portfolio.ts`, `reviews.ts`, `process.ts` and `src/config/media.ts`.

## About page

Sections: `AboutHero`, `FounderStory`, `AboutValues`, a `PhotoQuote` of the Durga Puja idol, `AboutProcess` (a timeline of the same four steps as the home page, with more detail from `src/data/process.ts`), then the shared reviews and enquiry band. Its photos are not used on the home page.

**Placeholders to replace before launch:** the founder portrait (`media.founder` in `src/config/media.ts`) and the founder story in `src/data/about.ts`. Add no dates, numbers or achievements until the client confirms them.

## Decisions

- **Hero text:** no eyebrow line and no text animation, by client request. "See our work" scrolls to Selected work until the Portfolio page exists.
- **Service strip:** static links rather than a marquee, left-aligned on desktop to stay clear of the floating WhatsApp button.
- **Studio introduction:** links to How it works, because About is still a stub.
- **Selected work:** auto-scrolls with no buttons, by client request. It starts when the visitor reaches it, pauses on mouse hover and keyboard focus, and can be swiped on touch screens.
- **How it works:** three photos in an asymmetric, layered arrangement, chosen by the client over a grid and a staggered column. No turnaround times or other promises until the client confirms them.
- **Client reviews:** auto-slides every 6 seconds and loops in both directions. It cross-fades on desktop and swaps instantly on phones and tablets, by client request.
- **Enquiry band:** plain crimson. A tinted photo behind it was tried and rejected, because it hid the photography and competed with the text. No inline contact form, which would duplicate the Contact page.
- **Left out:** stats (no verified numbers), Instagram feed (social links are dummies and it adds a third-party script) and a founder portrait (not delivered).

## Images

No photo may appear twice on the home page; the Selected work strip repeats only to make its loop.

| Section | Images |
|---|---|
| Hero | `wedding/bride-in-red-veil-profile` |
| Studio introduction | `prewedding/couple-closeup`, `wedding/bride-jewellery-closeup` |
| Services mosaic | `wedding/wedding-ritual-with-family`, `prewedding/couple-on-mountain-terrace`, `engagement/engagement-rings-and-henna`, `Bridhi/bride-peeking-around-tree`, `rice-ceremony/baby-in-krishna-attire-portrait`, `corporate/cricket-league-event-hall` |
| Selected work | The nine `featured` items in `src/data/portfolio.ts` |
| Photo pause | `prewedding/couple-hands-by-sea` |
| How it works | `wedding/couple-under-fairy-lights`, `prewedding/couple-under-flowering-tree`, `rice-ceremony/baby-with-yellow-teddy-bear` |
| Client reviews | `wedding/couple-at-floral-stage`, `prewedding/couple-by-window`, `rice-ceremony/family-kissing-child`, `corporate/event-group-portrait-01` |

**Avoid:**

- Anything in a service's `design`, `Design` or `Deign` folder. Those album spreads are reference only.
- `contact/bride-red-veil-hero.webp` for the home hero. It is only 2172x724.
- The four 1280x720 film stills in `corporate/` at large sizes.
- `wedding/wedding-stage-through-smoke.webp` as a large image, because of its teal smoke.
- `corporate/cricket-team-standing.webp`, which has a visible cable on the floor.

## Motion

CSS only. Framer Motion was tried and removed by client decision.

- Hero: the photo settles on load.
- Sections: `.reveal` fades content in with `animation-timeline: view()`. Browsers without it simply show the content, so nothing can stay hidden.
- Selected work: the `work-loop` CSS animation. `WorkStrip` only starts it and wraps any scrolling, so the strip cannot run past its last photo.
- Client reviews: a CSS cross-fade on desktop only.

**Deliberate exception to `Rules.md` §5:** the Selected work strip and the review slider's auto-slide keep moving for visitors whose device asks for reduced motion, and neither has a pause button, by client decision. Reduced motion turns off everything else.

## Before launch

- **Placeholder reviews:** the people and quotes in `src/data/reviews.ts` are invented. Replace them, and their photos, with client-approved reviews.
- **Permissions:** confirm the children and the recognisable sports teams and sponsors are cleared for use.
- **Location:** the home page's search description names Kolkata and West Bengal, while the only address on the site is Karimpur, Nadia. Confirm it.
- **Portfolio page:** when it exists, point "See our work" at `/portfolio` and add a "View the full portfolio" link to Selected work. `PortfolioItem.title` is kept for its captions.
