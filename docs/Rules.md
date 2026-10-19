# Project Rules

## Green Heaven Service Website

These rules apply to developers and AI coding assistants working in this
repository.

## 1. Before Making Changes

1.  Inspect the current project structure, package manager,
    dependencies, routes, and existing styling.
2.  Read `PRD.md`, `Design.md`, `Memory.md`, `Architecture.md`, and
    `Tasks.md` before significant implementation work.
3.  Do not replace working architecture or rewrite unrelated files
    without a clear reason.
4.  Make incremental changes and validate them.

## 2. Technology Rules

-   Use React, TypeScript, Tailwind CSS, and React Router as the target
    stack.
-   Keep TypeScript strict; avoid `any`. If unavoidable, explain why and
    narrow the type.
-   Use reusable components for navigation, footer, buttons, service
    cards, breadcrumbs, and CTA sections.
-   Use `lucide-react` for common icons.
-   Use Framer Motion sparingly and respect reduced-motion preferences.
-   Use React Hook Form and Zod if the enquiry form warrants them.
-   Do not add dependencies for functionality that can be implemented
    simply with existing tools.
-   Do not change package manager or lockfiles unnecessarily.

## 3. Design Rules

-   Follow `Design.md` and use shared design tokens.
-   Maintain consistent spacing, type hierarchy, buttons, card patterns,
    and focus states.
-   Use the dark cinematic treatment primarily for the homepage hero and
    selected high-impact sections; use readability-first layouts for
    detailed pages.
-   Never use blur instead of a contrast overlay.
-   Avoid excessive animation, scroll-jacking, and decorative effects
    that harm usability.
-   Keep the mobile navigation accessible and stable on initial render.
-   Do not introduce unrelated visual redesigns while fixing a specific
    component.

## 4. Content Rules

-   Use only verified company details and service descriptions.
-   Do not fabricate testimonials, clients, statistics, certifications,
    awards, pricing, response times, or service guarantees.
-   Keep the three detailed service categories---security,
    cleaning/housekeeping, and pest control---specific and useful.
-   Keep the other six activity pages restrained until the client
    confirms exact scope.
-   Preserve the official spelling of company names, names, phone
    numbers, email, address, and trade license.
-   Do not publish placeholder text such as "Lorem ipsum" or generic
    fake testimonials.
-   If a fact is unknown, add a TODO in the source or ask for
    confirmation instead of guessing.

## 5. Routing Rules

-   Each required route in `PRD.md` must have a real page.
-   Use a central route definition or consistent routing structure.
-   Every page must include an appropriate title, navigation, and
    footer.
-   Add breadcrumbs on service detail pages.
-   Include a useful not-found page.
-   Internal links must point to valid routes.

## 6. Interaction Rules

-   Every button, link, dropdown, and form control must work as
    advertised.
-   Do not leave decorative buttons with no action.
-   Phone links use `tel:`; email links use `mailto:`.
-   Do not claim a form was submitted unless a configured
    endpoint/provider confirms it.
-   Show loading, success, and error states when an actual asynchronous
    submission exists.
-   Validate user input and avoid collecting unnecessary personal data.

## 7. Accessibility Rules

-   Use semantic HTML and correct heading hierarchy.
-   Inputs must have labels and accessible error messages.
-   Icon-only controls need accessible names.
-   Ensure keyboard navigation, visible focus, and appropriate contrast.
-   Support `prefers-reduced-motion`.
-   Provide meaningful alt text for informative images and empty alt
    text for decorative images.
-   Menus and dialogs must have correct keyboard and focus behavior.

## 8. Code Quality Rules

-   Keep components focused and reasonably small.
-   Extract repeated content into typed data structures when
    appropriate.
-   Avoid duplicating the same service data in multiple components.
-   Use clear naming and consistent file organization.
-   Avoid dead code, unused imports, console logging, and unexplained
    magic values.
-   Do not commit secrets, API keys, environment files containing
    credentials, or private client information.
-   Keep external URLs and integration configuration centralized where
    useful.

## 9. SEO and Performance Rules

-   Give each route a unique, accurate title and description.
-   Use semantic page structure and descriptive link text.
-   Optimize image sizes and loading behavior.
-   Avoid large background video unless approved and performance-tested.
-   Configure sitemap, robots, canonical URL, and Open Graph metadata
    when the production URL is known.
-   Do not add structured data that asserts unverified reviews, ratings,
    or business facts.

## 10. Verification Before Finishing

Run the available checks, such as: - TypeScript type check - ESLint -
Production build - Relevant automated tests

If a check cannot run, state the reason. Report changed files, checks
completed, known limitations, and any client confirmations still needed.
