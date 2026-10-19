# Design System & UX Specification
## Green Heaven Service Website

**Status:** Detailed implementation specification  
**Primary reference:** User-supplied GLOAM cinematic hero brief (`Pasted text(1).txt`)  
**Project stack:** React, TypeScript, Tailwind CSS, React Router  
**Scope:** A multi-page corporate service website, not a single-page film landing page

---

## 1. Design Intent

Translate the supplied GLOAM brief's measured cinematic visual language into a trustworthy corporate website for Green Heaven Service.

Preserve the reference's most important design principles:

- Cold slate, bone white, and one frost-blue accent.
- A cinematic hero image with a foreground intentionally composed dark enough to hold the main copy.
- Blur is decorative texture, **not** a substitute for darkening or contrast.
- Use separate layers for haze, foreground darkening, and top navigation readability.
- A dark glass surface with a hairline border—not a light glass pane behind white text.
- Geist typography, carefully clamped display sizing, and disciplined spacing.
- A single subtle entrance sequence, no looping interface animations.
- Synthesized/diffuse mist may move; the underlying image/landscape must not be displaced.
- A custom, accessible mobile menu with a distinct panel easing curve.
- Respect `prefers-reduced-motion`.
- Measure text contrast against the actual image behind it, rather than assuming an overlay or blur makes it readable.

This is a corporate adaptation. Do **not** copy the GLOAM film title, film synopsis, film metadata, or entertainment navigation. Use Green Heaven Service's identity, service categories, and contact actions. The GLOAM reference's “one standalone page / no framework” restrictions do not apply: this project explicitly uses React, TypeScript, Tailwind CSS, and multiple routes.

## 2. Art Direction and Design Tokens

### 2.1 Core palette

Use these source values as the foundation for the cinematic hero and dark UI:

| Token | Value | Intended use |
|---|---|---|
| Ground | `#04060A` | Deepest dark surface, hero foreground, dark page sections |
| Ink | `#F5F7FA` | Headings, navigation, metadata, button labels on dark surfaces |
| Ink 2 | `#C3CAD6` | Body copy on dark surfaces |
| Frost | `#8FB4D9` | Brand mark accent, focus ring, restrained interactive highlight |
| Glass | `rgba(4, 6, 10, 0.44)` | Dark glass navigation and secondary actions |
| Glass hairline | `rgba(245, 247, 250, 0.20)` | Thin glass borders |
| Bone | `#F7F5EF` | Light page backgrounds and content surfaces |
| Slate | `#18232D` | Dark panels and secondary dark surfaces |
| Forest | `#244A3A` | Restrained supporting accent, used sparingly |
| Muted | `#68737D` | Muted text on suitable light backgrounds only |
| Light border | `#D9DEE1` | Borders on light surfaces |

The first five values are directly derived from the supplied GLOAM brief. Bone, slate, forest, muted, and light-border values are the corporate adaptation already established for this project; they are proposed design tokens, not confirmed official company brand colors.

Example CSS variables:

```css
:root {
  --gh-ground: #04060A;
  --gh-ink: #F5F7FA;
  --gh-ink-muted: #C3CAD6;
  --gh-frost: #8FB4D9;
  --gh-glass: rgba(4, 6, 10, 0.44);
  --gh-glass-border: rgba(245, 247, 250, 0.20);

  --gh-bone: #F7F5EF;
  --gh-slate: #18232D;
  --gh-forest: #244A3A;
  --gh-muted: #68737D;
  --gh-light-border: #D9DEE1;
}
```

Do not use all accents in every component. Frost blue is the primary highlight; forest green is secondary and should be used only where it supports the brand. Never rely on color alone to communicate status.

### 2.2 Surface rules

- Use `#04060A` and slate surfaces for the cinematic hero, navigation overlay, and selected high-impact sections.
- Use bone-white/light surfaces for long-form service details when they improve reading comfort.
- On dark surfaces, use `#F5F7FA` for prominent type and `#C3CAD6` for body text.
- Do not use `text-gray-400` or similar muted gray over a photograph without checking contrast.
- Avoid light translucent glass behind white type over a bright image.
- Glass should be dark: `rgba(4, 6, 10, 0.44)` with a thin light hairline and a restrained inset highlight.
- Avoid heavy shadows, excessive gradients, and decorative borders that do not support hierarchy.

## 3. Typography

### 3.1 Typeface

Use **Geist** as the primary family, with this fallback stack:

```css
font-family: Geist, "Helvetica Neue", Arial, sans-serif;
```

Load the required weights (300, 400, 500, 600) using a reliable font source or approved local font files. Avoid layout shifts by choosing an appropriate loading strategy and fallback metrics. Do not substitute Inter.

### 3.2 Type scale

Use the GLOAM scale as a reference, adapting it to the responsive corporate layout:

| Role | Starting size | Weight | Tracking / line height |
|---|---|---|---|
| Homepage hero headline | `clamp(1.9rem, min(6.2vw, 9.6vh), 4.6rem)` | 400 | `-0.04em`, line-height `1.02` |
| Page H1 | `clamp(2rem, min(5vw, 7vh), 4rem)` | 400–500 | Slight negative tracking, line-height `1.05–1.12` |
| Section H2 | `clamp(1.6rem, 3.2vw, 2.7rem)` | 400–500 | Tight but readable |
| Body paragraph on dark | `clamp(.95rem, 1.35vw, 1.2rem)` | 300–400 | `1.55` |
| Body paragraph on light | `1rem–1.125rem` | 400 | `1.6–1.75` |
| Wordmark | `15px` | 600 | `.18em`, uppercase if appropriate |
| Desktop nav link | `13.5px–14px` | 400–500 | Normal |
| Metadata / eyebrow | `12.5px–13.5px` | 400–500 | Normal or modest tracking |
| Buttons | `13.5px–14px` | 500 | Normal |
| Form label | `13px–14px` | 500 | Normal |

For the homepage hero, keep the headline around `19ch` maximum and supporting copy around `44ch` maximum. Use viewport height as well as width when clamping display text so the hero remains usable in a wide, short window. Unlike the GLOAM reference page, the corporate site can scroll; nevertheless, avoid oversized type that pushes essential actions below the initial viewport.

## 4. Global Layout and Rhythm

- Use a consistent responsive container and spacing scale across all pages.
- Use `100svh` rather than relying only on `100vh` for full-screen hero sizing on mobile.
- The homepage hero should aim for a viewport-height composition, with a sensible minimum height and content that can still fit at short viewport sizes.
- Keep the page scrollable; the source's no-scroll rule is specific to its single film hero and does not apply to this multi-page site.
- Use a flex-column composition for the hero so the main content can sit near the bottom without absolute-positioning every element.
- Suggested horizontal padding: `16px` on small screens, `24px` at medium widths, and `48px` on wide screens.
- Suggested hero bottom padding: `30px` on small screens and `60px` on wide screens.
- Use a stable max-width for body copy and service-detail content.
- Keep the hero text and actions aligned deliberately. On wide screens, text can sit left and the CTA group can align to its right/baseline; stack them on narrow screens.
- Make section spacing generous but not wasteful. Use a consistent rhythm instead of ad hoc margins.
- Avoid horizontal overflow at all supported widths.

## 5. Homepage Cinematic Hero

### 5.1 Composition

The homepage hero is the primary cinematic expression of the design system.

- Use a high-quality, relevant image depicting professional security, facilities, or a service environment. Mountain imagery from the GLOAM reference should only be used if it genuinely supports the company's identity; do not use it merely to copy the reference.
- Prefer a source image whose lower third is naturally dark or has visual breathing room for copy.
- The image fills the hero using `object-fit: cover` / `background-size: cover`.
- Keep the foreground copy in the darker part of the composition.
- Hero headline: **“Protection You Trust. Service You Can Rely On.”**
- Supporting copy should accurately describe Green Heaven Service's services without unsupported superlatives.
- Primary CTA: **Request a Quote**
- Secondary CTA: **Explore Services**
- Keep contact and action affordances obvious without crowding the hero.

### 5.2 Layer stack

Keep the image, haze, darkening bands, navigation, and content as separate layers. Use clearly named project-specific classes or data attributes; do not copy the reference's identifiers verbatim.

Suggested layer order:

1. Base plate/image: `z-index: 0`
2. Haze/blur texture: `z-index: 1`
3. Foreground and crown darkening bands: `z-index: 2`
4. Main hero content: above the overlays
5. Header/navigation: above the hero content as needed

All decorative overlay layers must use `pointer-events: none`.

Use a bottom band and a separate top/crown band. Do not darken only the bottom and leave the navbar over a bright sky. The header needs its own contrast treatment.

Suggested CSS approach:

```css
.gh-hero__haze {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  mask-image: linear-gradient(to top, #000 0%, transparent 46%);
}

.gh-hero__floor {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    to top,
    rgba(4, 6, 10, 0.72) 0%,
    rgba(4, 6, 10, 0.42) 26%,
    rgba(4, 6, 10, 0.12) 44%,
    rgba(4, 6, 10, 0) 60%
  );
}

.gh-hero__crown {
  position: absolute;
  inset: 0 0 auto;
  height: 16%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(4, 6, 10, 0.70) 0%,
    rgba(4, 6, 10, 0.34) 55%,
    rgba(4, 6, 10, 0) 100%
  );
}
```

These are reference starting values. Verify them against the actual image and viewport rather than treating the values as a substitute for testing. The haze is a texture layer; the floor and crown bands are what control luminance and readability.

### 5.3 Contrast rules

- Blur reduces local variation; it does **not** reliably reduce the brightness level of the background.
- Never assume backdrop blur makes white text readable.
- Do not place a white headline over a lit part of a photo without checking it.
- Use a dark scrim when necessary. A dark overlay is allowed and expected in this corporate adaptation.
- Measure contrast with the image, overlays, and glass surfaces in their final rendered state.
- Target at least **4.5:1** for normal text and **3:1** for large text, following WCAG contrast guidance.
- Treat the source brief's numeric contrast measurements as evidence for its source image only; do not reuse them as measured results for the Green Heaven Service site.
- Check nav links, hero headline, description, buttons, metadata, and mobile-menu links separately.
- If the image varies substantially behind text, use a stronger stable scrim, a darker composed region, or a solid/dark content plate.

### 5.4 Glass controls

For secondary hero actions or header controls:
- Use a dark translucent background near `rgba(4, 6, 10, 0.44)`.
- Add a thin border near `rgba(245, 247, 250, 0.20)`.
- A subtle inset highlight may create a glass edge, but do not brighten the entire pane.
- Keep labels and icons at readable contrast.
- Use a solid, high-contrast primary CTA so the main conversion remains unmistakable.

## 6. Navigation

### 6.1 Desktop header

- Use a custom wordmark/mark for Green Heaven Service if no approved logo asset exists; do not claim it is the official logo.
- A simple custom ridge/leaf/line mark may be used as a temporary visual motif, but it must suit the company rather than imitate the GLOAM logo.
- Keep the wordmark compact, around `15px`, weight 600, with measured letter spacing.
- Main links should include Services, About, Quality & Safety, and Contact.
- Provide a clear Request a Quote CTA.
- Use the dark glass treatment over the homepage hero and a solid/opaque header treatment where needed on interior pages or after scrolling.
- Keep active-route indication visible.
- Avoid unstable initial styles that cause a white border flash or a brief low-contrast state.

### 6.2 Mobile menu

The source uses a sheet below `1024px`; use that as the starting breakpoint for this project unless actual layout testing supports another breakpoint.

- Collapse desktop links below the chosen breakpoint.
- Use a rounded sheet directly below or attached to the header.
- Suggested surface: `rgba(6, 9, 14, 0.96)`, a hairline border, and `blur(18px)`.
- The menu must not obscure the page without providing a reliable close path.
- Close the menu after selecting a route and on `Escape`.
- The burger transitions between two authored states (bars and close/cross); do not use a random icon swap without transition.
- The button must expose `aria-expanded`, `aria-controls`, and an accessible name.
- Ensure keyboard focus stays usable and returns to the trigger when the menu closes.
- Support keyboard navigation and touch targets.

Suggested motion:
- Panel enters from `translateY(-16px)` and opacity 0 to its resting state.
- Duration: approximately `500ms ease-out`, only when motion is allowed.
- Links enter from `translateX(-14px)` with `60ms + index * 50ms` stagger.
- Burger bars/cross can rotate and scale/fade across approximately `500ms ease-out`.
- Use the panel's easing for the panel and links; do not reuse the one-time entry easing indiscriminately.

## 7. Motion System

### 7.1 One-time entrance

Keep entry motion subtle and short. The reference's main device is a staggered entrance where elements arrive blurred, slightly low, and transparent.

Suggested CSS:

```css
@keyframes gh-lift {
  to {
    opacity: 1;
    filter: blur(0);
    transform: none;
  }
}

.gh-lift {
  opacity: 0;
  filter: blur(18px);
  transform: translateY(34px);
  animation: gh-lift 1s ease-out forwards;
}
```

Set per-element delays explicitly so the header and hero content animate in parallel rather than making the entire page wait in a queue. Suggested order:
- Wordmark: `0ms`
- Nav links: `100ms`, `150ms`, `200ms`, `250ms`
- Header action controls: `300ms–400ms`
- Metadata/eyebrow: `300ms`
- Hero headline: `400ms`
- Description: `500ms`
- Main/secondary CTA: `600ms`, `700ms`

For interior pages, use this sequence only if it adds polish without slowing access to the content. Do not animate every card on every scroll.

### 7.2 Easing

Keep two curves distinct:
- **One-time entry:** `ease-out`
- **Mobile sheet and its links:** `cubic-bezier(.16, 1, .3, 1)` or the described sheet `ease-out` motion

Do not add overshoot or bounce to the main content. The menu may feel slightly pushed into place, but should remain calm and predictable.

### 7.3 Reduced motion

When `prefers-reduced-motion: reduce` is active:
- Remove entry animation and blur transitions.
- Show content immediately.
- Remove mobile-sheet transitions.
- Disable ambient/mist motion and any nonessential parallax.
- Use the still image as the complete hero background.
- Keep all information visible and usable without motion.

### 7.4 Ambient mist / image movement

The GLOAM brief makes a precise distinction: **mist may move; rock/landscape must not move.**

For this corporate site:
- Ambient motion is optional, not a requirement for every hero.
- If a mist effect is used, synthesize a diffuse layer independent of the background image. Do not extract bright pixels using a luminance threshold; that can extract lit architecture, equipment, snow, or other hard silhouettes and make them drift like a ghost image.
- Do not translate, scale, or displace the entire background image to simulate weather.
- Keep any mist diffuse, low contrast, and away from text.
- Inspect the effect on its own against a dark background before compositing it.
- Avoid visible diagonal lattice patterns or repeated blobs. If using a multi-scale field, vary direction and spatial period between layers.
- Do not claim a specific cadence, frame rate, contrast measurement, or pixel difference unless it has actually been measured on the implemented asset.
- If there is no approved motion asset or a reliable implementation, use a still image. A static, well-composed hero is preferable to a broken or distracting effect.

Do not use the exact GLOAM film image/video URLs as Green Heaven Service production assets. The user-supplied URLs belong to the design reference and are not approved company assets. Use client-approved imagery or properly licensed, relevant alternatives.

## 8. Page Templates and Information Hierarchy

The GLOAM brief is a single-hero composition. This project is a multi-page website, so retain the visual language while extending the layout patterns consistently.

### 8.1 Home page

1. Cinematic hero with headline and two CTAs.
2. Service overview cards for all nine service categories.
3. Company introduction and established date.
4. Operational practices / reasons to choose the company, based only on supplied facts.
5. Quality and safety preview.
6. Supporting service categories or a restrained service highlight.
7. Contact / quote CTA.
8. Footer with phone, email, address, and important links.

Keep the hero dramatic; make the sections below it practical, scan-friendly, and not over-animated.

### 8.2 Services directory

- Clear page heading and concise introduction.
- Visually distinguish the three detailed service categories—Security, Cleaning & Housekeeping, and Pest Control—from the six additional listed activities without implying that the latter are more developed than the source information supports.
- Use a consistent card system, clear labels, and useful links.
- Do not add fake ratings, counts, “most popular” badges, or client logos.

### 8.3 Primary service details

Use for:
- Security Services
- Cleaning & Housekeeping
- Pest Control

Structure:
1. Breadcrumbs
2. Service title and concise intro
3. Relevant image or visual panel
4. Detailed offering list
5. Service approach / quality and safety notes where supported
6. Related services
7. Quote CTA

Prefer light/bone content surfaces for long text where it improves readability. Use dark sections as accents rather than forcing every page into a full-bleed dark treatment.

### 8.4 Additional activity details

Use for:
- Manpower Outsourcing
- Gardening & Landscaping
- Event Management
- Contracting & Supply
- Trading & Import-Export
- Dairy Farm

Keep these pages restrained until the client confirms precise scope. Use the same typography, spacing, navigation, and CTA patterns, but do not invent capabilities or detailed process claims.

### 8.5 About, Quality & Safety, Contact, Privacy

- **About:** company identity, established date, leadership names, and service philosophy.
- **Quality & Safety:** confirmed screening, training, schedules, supervision, quality checks, and site-evaluation practices.
- **Contact:** visible phone and email links, address, and a clearly explained enquiry form.
- **Privacy:** accurately describe only the information and processing the implemented site actually uses.

## 9. Components and Interaction Patterns

Create reusable components for:
- Site header and mobile navigation
- Wordmark/logo placeholder
- Page container and section heading
- Primary and secondary buttons
- Service cards and service grid
- Page hero
- Breadcrumbs
- Contact CTA
- Footer
- Contact form fields and validation messages

Use React components and Tailwind CSS, but keep complex or repeated visual styles expressed through shared tokens and component variants. Avoid repeating large utility strings inconsistently across pages.

Use `lucide-react` for common interface icons because it is the selected project stack; the source's “no icon package” rule is specific to its vanilla-only deliverable and does not override this project's chosen technology. If a custom brand mark is required, draw a small original inline SVG. Give every SVG its own project-specific identifiers.

Every button and link must have a real action. A decorative control must not look interactive.

## 10. Imagery and Assets

- Prefer client-provided or explicitly licensed imagery.
- Select images that genuinely match the service represented.
- Do not use a stock photo in a way that implies it depicts a real Green Heaven Service employee, customer, or project.
- Avoid hotlinking the GLOAM reference assets into the production website.
- Optimize images and use responsive sizes where practical.
- Lazy-load below-the-fold images; do not lazy-load the primary hero image if that would delay the main visual.
- Provide meaningful alt text for informative images; use empty alt text for decorative images.
- If a motion video is approved, provide a still poster, muted/autoplay/loop/playsinline behavior where appropriate, and a reliable fallback. Do not require video for the page to look complete.

## 11. Accessibility and Contrast QA

- Use semantic landmarks and logical heading order.
- All links and controls must work with a keyboard.
- Every focusable control must show a **2px focus ring in `#8FB4D9`**, with enough offset/contrast to remain visible.
- Give icon-only controls accessible names.
- Label all form inputs and associate validation errors with their fields.
- Ensure normal text reaches 4.5:1 contrast and large text reaches 3:1 against the final rendered background.
- Measure over images at the actual text locations. Where an image changes behind text, test the brightest relevant region, not only the darkest region.
- Do not use blur as a contrast fix.
- Respect reduced motion.
- Support zoom and narrow reflow without losing content or controls.
- Test mobile menu Escape handling, close-on-navigation, focus restoration, and expanded state.

Suggested focus style:

```css
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 2px solid #8FB4D9;
  outline-offset: 3px;
}
```

## 12. Responsive QA

Test at minimum:
- Narrow mobile
- Common mobile portrait
- Tablet
- `900 × 560` viewport
- Laptop
- Wide desktop

At `900 × 560`, ensure the hero headline, description, and CTAs remain visible and usable. Clamp the headline against both `vw` and `vh`, reduce spacing when needed, and allow the overall page to scroll rather than clipping important content.

Use `100svh` for full-screen hero sizing on mobile. Verify browser chrome does not cover the CTA. Test the header/menu breakpoint and prevent horizontal overflow.

## 13. Performance and Implementation Notes

- Avoid unnecessary animation libraries or heavy visual effects.
- Use CSS transitions for simple hover/focus states.
- Keep the hero image appropriately compressed and sized.
- If using video, ensure the still poster is visible while it loads and when reduced motion is enabled.
- Do not repeatedly retry video playback with unbounded timers. Any retry logic must be bounded, clean up listeners/timers, and handle rejected `play()` promises.
- Avoid content layout shifts when fonts or images load.
- Keep route content and service data typed and reusable.
- Do not introduce fake loading states or pretend a form submission succeeded without a real delivery service.

## 14. Design Acceptance Checklist

- [ ] The cinematic hero feels premium but remains clearly branded for Green Heaven Service.
- [ ] The lower hero text sits over a deliberately dark/composed region or a tested scrim.
- [ ] Blur is used only as texture and never as the only contrast treatment.
- [ ] The header has its own top/crown readability treatment over hero imagery.
- [ ] Glass surfaces are dark, with a subtle hairline and readable text.
- [ ] Geist is the loaded font; Inter is not substituted.
- [ ] The hero headline is clamped using both viewport width and height.
- [ ] All important content remains visible at `900 × 560`.
- [ ] Mobile menu links animate in sequence, the burger becomes a close icon, and Escape closes the menu.
- [ ] Reduced motion disables entry, sheet, and ambient motion.
- [ ] If mist is used, the landscape itself does not move and the mist has no obvious silhouettes or lattice pattern.
- [ ] Every text element has been checked against its actual background.
- [ ] All keyboard-focus states have a visible 2px frost-blue ring.
- [ ] Every service page uses the shared design system and has a clear enquiry CTA.
- [ ] No GLOAM film content or unapproved reference assets appear in the company website.
- [ ] No unsupported company claims or fabricated proof points appear.

## 15. Required Final Design Report

When implementation is complete, provide a short report listing:
- Anything that could not be implemented.
- Any approximations made.
- Any place the implementation departed from this specification.
- Any contrast or responsive checks that were not performed.

Do not claim that a measurement passed unless it was actually checked on the rendered implementation.
