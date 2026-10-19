# Implementation Tasks

## Green Heaven Service Website

Use this as the project checklist. Mark tasks complete only after
implementation and verification.

## Phase 0 --- Repository Review

-   [x] Inspect repository and current working tree.
-   [x] Identify package manager, scripts, installed dependencies, and
    existing conventions.
-   [x] Confirm whether this is a new project or an existing
    application.
-   [x] Review `PRD.md`, `Design.md`, `Memory.md`, `Rules.md`, and
    `Architecture.md`.
-   [x] Record any conflicts or missing prerequisites before changing
    configuration.

## Phase 1 --- Foundation

-   [x] Configure React + Vite + TypeScript if not already present.
-   [x] Confirm TypeScript strict mode and working build scripts.
-   [x] Configure Tailwind CSS using the project's compatible version.
-   [x] Add React Router.
-   [x] Add lucide-react.
-   [x] Evaluate motion needs; CSS transitions are sufficient for the
    current interactions and respect reduced-motion preferences.
-   [x] Evaluate React Hook Form and Zod; native validation is sufficient
    for the email-draft enquiry fallback.
-   [x] Configure ESLint and project-appropriate formatting.
-   [x] Define shared color, typography, spacing, radius, and shadow
    tokens.
-   [x] Confirm fonts and font-loading strategy.
-   [x] Create the shared layout, container, button, and link
    primitives.

## Phase 2 --- Shared Components

-   [x] Build responsive site header.
-   [x] Build accessible mobile navigation sheet/drawer.
-   [x] Build Services navigation menu.
-   [x] Build footer with accurate contact information.
-   [x] Build CTA section.
-   [x] Build service card.
-   [x] Build breadcrumbs.
-   [x] Build reusable page hero/banner.
-   [x] Build loading, error, and not-found states where needed.
-   [x] Verify focus, hover, active, and reduced-motion states.

## Phase 3 --- Homepage

-   [x] Build cinematic hero using approved or properly licensed
    imagery.
-   [x] Add a separate dark scrim for readable text.
-   [x] Add headline: "Protection You Trust. Service You Can Rely On."
-   [x] Add Request a Quote and Explore Services CTAs.
-   [x] Build service overview with all nine service categories.
-   [x] Add factual company introduction.
-   [x] Add why-choose-us/operational-practices section using supported
    details.
-   [x] Add quality and safety preview.
-   [x] Add contact CTA and complete footer.
-   [x] Check mobile and desktop layouts.

## Phase 4 --- Service Directory and Detail Pages

-   [x] Build `/services` directory.
-   [x] Build `/services/security-services`.
-   [x] Build `/services/cleaning-housekeeping`.
-   [x] Build `/services/pest-control`.
-   [x] Build `/services/manpower-outsourcing`.
-   [x] Build `/services/gardening-landscaping`.
-   [x] Build `/services/event-management`.
-   [x] Build `/services/contracting-supply`.
-   [x] Build `/services/trading-import-export`.
-   [x] Build `/services/dairy-farm`.
-   [x] Add relevant related-service links and enquiry CTAs.
-   [x] Add breadcrumbs and unique metadata to each page.
-   [x] Flag uncertain scope for the six additional activities for
    client review.

## Phase 5 --- Company, Quality, and Contact Pages

-   [x] Build `/about` using confirmed company facts.
-   [x] Build `/quality-safety` using supported screening, training,
    supervision, and quality practices.
-   [x] Build `/contact` with accurate contact information.
-   [x] Implement enquiry form validation.
-   [x] Decide and implement the actual form delivery mechanism or a
    clearly documented fallback.
-   [x] Build `/privacy-policy` based on the data actually collected.
-   [x] Add working `tel:` and `mailto:` links.
-   [x] Add a 404/not-found page.

## Phase 6 --- SEO, Accessibility, and Performance

-   [x] Add unique page titles and meta descriptions.
-   [x] Add Open Graph metadata.
-   [ ] Add sitemap and robots configuration when the deployment URL is
    confirmed.
-   [x] Check heading hierarchy and semantic landmarks.
-   [x] Check keyboard navigation and visible focus.
-   [ ] Check contrast and form error accessibility.
-   [x] Test reduced-motion preferences.
-   [x] Optimize images and lazy-load appropriate below-the-fold assets.
-   [x] Test responsive behavior and horizontal overflow.
-   [x] Check external links and route fallbacks.

## Phase 7 --- Verification

-   [x] Run TypeScript checks.
-   [x] Run ESLint.
-   [x] Run production build.
-   [ ] Run available tests.
-   [x] Fix broken links and console errors.
-   [x] Confirm every required route renders.
-   [x] Confirm no fake testimonials, statistics, badges, or claims were
    introduced.
-   [x] Confirm form behavior is truthful.
-   [x] Review all company details against `Memory.md`.
-   [x] Update documentation with any implementation decisions.

## Phase 8 --- Client Review / Launch

-   [ ] Confirm official logo and approved brand assets.
-   [ ] Confirm scope for the six additional business activities.
-   [ ] Confirm form destination and receiving address.
-   [ ] Confirm production domain and hosting.
-   [ ] Confirm whether Bangla localization is required.
-   [ ] Obtain approval for any project photographs, client logos,
    testimonials, or certifications before publishing.
-   [ ] Perform final content and mobile review.
-   [ ] Prepare deployment instructions and handoff summary.

## Definition of Done

A task is complete only when: 1. Its implementation is present. 2. Its
responsive and accessible states have been considered. 3. Relevant
checks pass or any limitation is documented. 4. No unsupported company
claims were added. 5. Any required client decision is recorded rather
than guessed.

## Subtle Motion System Implementation

-   [x] Build typed `useScrollReveal` hook with cleanup, single-reveal execution, and viewport thresholds.
-   [x] Build reusable `ScrollReveal` polymorphic wrapper component with stagger support.
-   [x] Implement staggered entrance for service cards and grids (60ms step, capped at 300ms max delay).
-   [x] Implement single container observer pattern for feature groups (`ServiceGrid`, `practice-grid`, `company-band`, `about-grid`, `contact-grid`, `related-services`).
-   [x] Implement lightweight route transition in `Layout` using React Router DOM v7 (200ms subtle fade + 6px translateY, no blank screens).
-   [x] Implement micro-interactions for cards (`translateY(-3px)`, subtle border and box-shadow transitions, hover-only media query).
-   [x] Implement button and interactive link micro-interactions (hover lift, active press states, arrow icon subtle translation).
-   [x] Guarantee accessibility and reduced-motion compliance (`prefers-reduced-motion: reduce` disables entrance movement, transitions, and delays).
-   [x] Provide progressive enhancement `.no-js` fallback so content is never hidden if JavaScript fails or is disabled.
-   [x] Zero new dependencies introduced.
-   [x] Verify TypeScript compile and build (`npm run build`) and ESLint (`npm run lint`).

## Implementation Status — 2026-10-19

- Phases 0–5 are implemented in this workspace.
- Subtle motion system implemented across all primary and service routes:
  - Scroll reveals on grouped content and section headings.
  - Staggered entrances for service cards and practice items.
  - Smooth 200ms SPA route transitions without content flash or blank layout states.
  - Micro-interactions for buttons, quote CTAs, service cards, practice cards, and links.
  - Global `prefers-reduced-motion: reduce` support and progressive enhancement `.no-js` fallback.
- Browser verification covered all required routes plus the not-found
  route, the desktop Services menu, mobile menu Escape/focus behavior,
  320 × 700 and 390 × 844 mobile viewports, and the 900 × 560 short
  desktop viewport.
- All page heroes use local, topic-relevant background imagery where
  available and a subtle scroll-linked parallax shift, which remains still when
  reduced motion is enabled.
- `npm run build` and `npm run lint` pass with zero errors.
- Contrast has not been quantitatively measured. Reduced-motion behavior
  is implemented in CSS and was browser-tested. No automated test suite
  was present in the initial workspace.
- Production URL/hosting, approved logo/brand colors and photography,
  Bangla localization, additional-activity scope, and any server-backed
  enquiry integration remain client decisions.
