# Architecture

## Green Heaven Service Website

## 1. Architectural Goals

-   Keep the website easy to maintain and extend.
-   Separate reusable layout/components from route-specific page
    content.
-   Keep company and service data in one typed source of truth.
-   Avoid unnecessary backend complexity until the enquiry workflow is
    decided.
-   Make accessibility, responsive behavior, SEO, and content integrity
    part of the implementation rather than later add-ons.

## 2. Proposed Stack

-   React + Vite
-   TypeScript (strict)
-   Tailwind CSS
-   React Router
-   lucide-react
-   Framer Motion for limited motion where useful
-   React Hook Form + Zod for form handling and validation
-   Axios / TanStack Query only if an API is introduced
-   ESLint and project-compatible formatting

Inspect the existing repository before adopting or upgrading versions.
Use versions compatible with the current toolchain rather than blindly
installing the latest major releases.

## 3. High-Level Structure

``` text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── PageContainer.tsx
│   ├── navigation/
│   │   ├── ServicesMenu.tsx
│   │   └── Breadcrumbs.tsx
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── PageHero.tsx
│   │   ├── ContactCTA.tsx
│   │   └── SeoHead.tsx
│   └── services/
│       ├── ServiceCard.tsx
│       ├── ServiceGrid.tsx
│       └── RelatedServices.tsx
├── data/
│   ├── company.ts
│   └── services.ts
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ServiceDetailPage.tsx
│   ├── QualitySafetyPage.tsx
│   ├── ContactPage.tsx
│   ├── PrivacyPolicyPage.tsx
│   └── NotFoundPage.tsx
├── features/
│   └── contact/
│       ├── ContactForm.tsx
│       ├── contactSchema.ts
│       └── contactService.ts
├── hooks/
├── lib/
│   ├── utils.ts
│   └── siteConfig.ts
├── styles/
│   └── globals.css
├── types/
│   └── service.ts
└── main.tsx
```

This is a suggested structure, not a mandate to move an existing project
into it if a suitable structure already exists.

## 4. Routing

Use React Router with explicit route definitions. Required routes:

-   `/`
-   `/about`
-   `/services`
-   `/services/security-services`
-   `/services/cleaning-housekeeping`
-   `/services/pest-control`
-   `/services/manpower-outsourcing`
-   `/services/gardening-landscaping`
-   `/services/event-management`
-   `/services/contracting-supply`
-   `/services/trading-import-export`
-   `/services/dairy-farm`
-   `/quality-safety`
-   `/contact`
-   `/privacy-policy`
-   `*` --- not-found page

A shared `ServiceDetailPage` may render service pages from typed service
data, as long as each route has a meaningful unique title, content,
metadata, and CTA.

## 5. Data Model

### Company data

Keep approved company details in one typed module, for example:

``` ts
export const company = {
  name: "Green Heaven Service",
  established: "May 2019",
  slogan: "Security is Stronger than the Threat",
  managingDirector: "MD. Rabul Karim",
  director: "Sabina Yesmin",
  address:
    "House- 2/1, Block-A, Lalmatia, Mohammadpur, Dhaka-1209, Bangladesh",
  hotline: "09697228400",
  tnt: "+8802223314766",
  mobile: "+88 01711348400",
  phones: ["09697228400", "+8802223314766", "+88 01711348400"],
  email: "info@greenheavenserviceltd.com",
  tradeLicense: "TRAD/DNCC/020668/2023",
} as const;
```

### Service data

Use a typed structure with fields such as: - `slug` - `title` -
`shortDescription` - `intro` - `category` (`primary` or `additional`) -
`offerings` - `qualityNotes` - `image` - `seoTitle` - `seoDescription` -
`contentNeedsConfirmation`

Use the same data for the directory, navigation, related-service links,
and route content where practical. Do not fill uncertain fields with
fabricated detail.

## 6. Component Boundaries

-   **SiteHeader:** logo/wordmark, desktop navigation, mobile menu,
    enquiry CTA.
-   **SiteFooter:** company contact details, service links, legal links.
-   **ServiceCard:** one consistent presentation for each service.
-   **ServiceGrid:** typed service collection and responsive layout.
-   **PageHero:** shared title/intro layout for non-home pages.
-   **Breadcrumbs:** route-aware navigation trail.
-   **ContactCTA:** consistent enquiry call to action.
-   **ContactForm:** accessible fields, schema validation, submission
    state.
-   **ServiceDetailPage:** renders the selected service content from
    typed data where appropriate.

Keep content-specific sections in page components when their layouts
materially differ.

## 7. Contact Form Integration Boundary

The form must separate UI validation from delivery.

Suggested flow: 1. User fills fields. 2. Zod validates values. 3. The UI
calls a `contactService` abstraction. 4. The service sends data to a
real configured backend/provider---or returns an explicit
unavailable/configuration state. 5. The UI displays a truthful result.

Do not pretend that frontend validation sends an enquiry. Do not place
secrets in frontend environment variables. If the form uses a
third-party provider, document its setup and privacy implications.

## 8. Styling Architecture

-   Centralize theme values in Tailwind configuration/CSS variables
    appropriate to the installed Tailwind version.
-   Use consistent reusable utility patterns for containers, buttons,
    section spacing, and typography.
-   Prefer semantic component classes or small shared components over
    repeated long utility strings when repetition becomes difficult to
    maintain.
-   Keep dark cinematic treatments localized to the hero and selected
    sections.
-   Ensure the text/background contrast remains sufficient over imagery.
-   Avoid inline one-off styling unless it solves a clear
    component-specific need.

## 9. SEO and Metadata

-   Use unique title and description per route.
-   Use semantic headings and descriptive links.
-   Add Open Graph metadata.
-   Add canonical URLs, sitemap, and robots configuration once the
    production domain is known.
-   Use structured data only for facts the company has confirmed and
    that accurately match the chosen schema.
-   Avoid review/rating schema without genuine verifiable reviews.
-   Ensure service pages can be reached by internal links and direct
    URLs.

## 10. Assets

Suggested asset groups: - Approved logo and favicon. - Security
operations imagery. - Professional cleaning and facility-maintenance
imagery. - Pest-control imagery. - Supporting imagery for other
activities only after confirming relevance.

Use local optimized assets or a documented image source. Avoid
hotlinking unreliable image URLs. Keep meaningful alt text near the
image usage.

## 11. Testing and Quality Gates

At minimum: - TypeScript check. - ESLint. - Production build. - Manual
route verification. - Mobile navigation and keyboard testing. - Contact
form validation and failure-state testing. - Reduced-motion check. -
Broken-link and missing-image review.

Add automated tests if the repository already uses a test framework or
the project scope warrants it.

## 12. Deployment Considerations

Deployment platform and domain are not yet confirmed. Before launch: -
Configure the host to serve the SPA fallback for direct route visits. -
Set the production site URL for metadata and sitemap generation. -
Configure any form endpoint and required environment variables. - Verify
HTTPS, caching, and asset paths. - Test every route by opening it
directly, not only through in-app navigation.
