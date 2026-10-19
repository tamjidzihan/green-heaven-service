# Product Requirements Document (PRD)

## Green Heaven Service Website

**Status:** Initial draft\
**Product type:** Corporate service website\
**Business:** Green Heaven Service\
**Primary market:** Bangladesh\
**Primary goal:** Present the company professionally, explain its
service portfolio, and convert visitors into qualified enquiries.

## 1. Product Overview

Green Heaven Service is a service provider established in May 2019. Its
stated slogan is **"Security is Stronger than the Threat."** The website
should communicate reliability, operational discipline, safety, and a
broad service offering.

The website will use a cinematic, dark visual language inspired by the
supplied GLOAM design brief, adapted for a corporate service company.
The reference is a design direction---not a restriction to a single
landing page and not a reason to copy unrelated film or entertainment
content.

## 2. Business Information

Use the following supplied information consistently:

-   **Company name:** Green Heaven Service
-   **Established:** May 2019
-   **Managing Director:** MD. Rabul Karim
-   **Director:** Sabina Yesmin
-   **Address:** 218/2-1, Achia Mansion, South Paikpara, Mirpur,
    Dhaka-1216, Bangladesh
-   **Phone:** +880 1713-481317
-   **Phone:** +880 1711-348400
-   **Email:** greenheavenservice@gmail.com
-   **Trade license:** TRAD/DNCC/020668/2023
-   **Slogan:** Security is Stronger than the Threat
-   **Service philosophy:** Quality service at minimum cost

Do not invent customer counts, testimonials, certifications, awards,
statistics, branch locations, or client logos.

## 3. Goals

1.  Explain the company's identity and service philosophy.
2.  Make all service categories easy to discover.
3.  Give every service category its own dedicated page.
4.  Make calling and emailing the company straightforward on mobile and
    desktop.
5.  Provide a clear enquiry/quotation path.
6.  Present quality, safety, staff screening, training, supervision, and
    service checks where relevant.
7.  Create a maintainable, accessible, responsive React application with
    reusable components.

## 4. Target Audiences

-   Businesses and organizations seeking security personnel or security
    support.
-   Offices, commercial properties, industrial facilities, and
    residences seeking cleaning services.
-   Property owners and organizations seeking pest-control services.
-   Organizations seeking manpower outsourcing or support services.
-   Prospective clients researching the company's other listed business
    activities.

These audiences are inferred from the company's listed services;
validate specific buyer personas with the client.

## 5. Scope and Service Taxonomy

Create the following service directory and individual routes.

### Primary service pages

1.  **Security Services** --- `/services/security-services`
    -   Security personnel
    -   Security consultancy and risk assessments
    -   Security planning and training
    -   Employee/background verification
    -   Mobile escort services
    -   Cash-in-transit security
    -   Security equipment installation, maintenance, and rental
2.  **Cleaning & Housekeeping** --- `/services/cleaning-housekeeping`
    -   Corporate, industrial, commercial, and residential cleaning
    -   Janitorial staffing
    -   Glass and carpet cleaning
    -   Sofa and chair shampooing
    -   Floor scrubbing and polishing
    -   Water-tank cleaning
    -   Pressure washing and deep cleaning
3.  **Pest Control** --- `/services/pest-control`
    -   Cockroach control
    -   Rodent control
    -   Pre- and post-construction termite control
    -   Mosquito and fly control
    -   Ant and other insect control

### Other listed business activities

4.  **Manpower Outsourcing** --- `/services/manpower-outsourcing`
5.  **Gardening & Landscaping** --- `/services/gardening-landscaping`
6.  **Event Management** --- `/services/event-management`
7.  **Contracting & Supply** --- `/services/contracting-supply`
8.  **Trading & Import-Export** --- `/services/trading-import-export`
9.  **Dairy Farm** --- `/services/dairy-farm`

The source profile lists these additional activities but provides less
detail about their exact scope. Build restrained pages using only
confirmed descriptions and mark uncertain copy for client confirmation.
Do not invent operational capabilities, product catalogs, licenses, or
guarantees.

## 6. Required Pages

-   `/` --- Home
-   `/about` --- About Green Heaven Service
-   `/services` --- All services directory
-   `/services/security-services`
-   `/services/cleaning-housekeeping`
-   `/services/pest-control`
-   `/services/manpower-outsourcing`
-   `/services/gardening-landscaping`
-   `/services/event-management`
-   `/services/contracting-supply`
-   `/services/trading-import-export`
-   `/services/dairy-farm`
-   `/quality-safety` --- Quality, safety, training, and supervision
    approach
-   `/contact` --- Contact and enquiry/quotation form
-   `/privacy-policy` --- Basic privacy policy appropriate to the
    implemented data collection

## 7. Homepage Requirements

-   Responsive navigation with logo/wordmark, Services menu, About,
    Quality & Safety, Contact, and a prominent enquiry CTA.
-   Cinematic hero headline: **"Protection You Trust. Service You Can
    Rely On."**
-   Supporting copy that positions the company around security and
    supporting services without making unverified performance claims.
-   Primary CTA: **Request a Quote**; secondary CTA: **Explore
    Services**.
-   Overview cards for all nine service categories.
-   Why choose us section based on supportable operating practices:
    screening, training, supervision, work schedules, quality checks,
    standby cleaning staff, worker replacement, and site evaluations
    where relevant.
-   Company introduction with establishment date and service philosophy.
-   Quality and safety preview.
-   Clear contact CTA and complete footer details.

## 8. Dedicated Service Page Requirements

Each service page must include: - Page title and concise, accurate
introduction. - Relevant service list. - Appropriate, non-misleading
imagery. - How the service is approached or delivered, only where
supported by the company profile. - Relevant quality/safety notes. -
Related services. - A clear contact/quote CTA. - Page-specific SEO title
and description. - Breadcrumbs and mobile-friendly layout.

For security, cleaning, and pest control, use the detailed service lists
above. For other activities, keep the content concise and add a content
TODO where client confirmation is needed.

## 9. Contact and Enquiry

Show phone numbers as `tel:` links and email as a `mailto:` link.
Display the physical address in the contact page and footer.

The enquiry form should collect only useful information: - Name -
Organization (optional) - Phone or email - Service of interest - Message
/ requirements

Use client-side validation and clear success/error states. **Do not
imply that a form submission reaches the company unless a working
backend or configured form provider is connected.** If no backend
exists, provide a clearly documented integration point and a safe
demo-disabled state, or implement a deliberate mailto fallback.

## 10. Non-Functional Requirements

-   Responsive from small mobile screens through large desktop.
-   Keyboard accessible, semantic HTML, visible focus, sufficient
    contrast, reduced-motion support.
-   Good performance: optimized image sizes, lazy loading for
    below-the-fold imagery, avoid unnecessary libraries.
-   Search-engine-friendly titles, descriptions, canonical strategy if
    deployment URL is known, Open Graph metadata, sitemap and robots
    configuration as appropriate.
-   Clean TypeScript with strict mode and reusable components.
-   No demo accounts, fake reviews, fake statistics, or non-functional
    buttons.
-   No exposed secrets or unnecessary personal data collection.

## 11. Acceptance Criteria

-   All listed routes render correctly and can be reached through
    navigation or relevant links.
-   Every service has a dedicated page.
-   Contact information is accurate and consistent.
-   All CTAs work and lead to a meaningful destination.
-   Form behavior is honest and validated.
-   Layout is usable on mobile, tablet, and desktop.
-   Reduced-motion preferences are respected.
-   No unsupported company claims appear.
-   Build, lint, and type checks pass.
-   README explains setup, available scripts, routes, and any missing
    integrations.

## 12. Open Questions for Client

-   Which additional service activities are currently offered and should
    be promoted?
-   Are there approved client names/logos, case studies, testimonials,
    or project photographs?
-   Is there an official logo and brand color palette?
-   What is the preferred enquiry destination: email, WhatsApp, CRM, or
    backend API?
-   Are there approved certifications, licenses, or compliance
    statements beyond the listed trade license?
-   Should the website support Bangla as well as English?
