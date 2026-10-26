# Green Heaven Service website

Responsive corporate website built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Setup

```sh
cd client
npm install
npm run dev
```

The frontend app uses Node.js and npm inside `client/`. The Vite development server supports direct route access while developing.

## Scripts (run inside `client/`)

- `npm run dev` — start the local development server.
- `npm run build` — type-check the application and create a production build in `client/dist/`.
- `npm run preview` — locally preview the production build.
- `npm run lint` — lint the project with ESLint.

## Routes

- `/` — Home
- `/about` — About Green Heaven Service
- `/services` — Service directory
- `/services/security-services`
- `/services/cleaning-housekeeping`
- `/services/pest-control`
- `/services/manpower-outsourcing`
- `/services/gardening-landscaping`
- `/services/event-management`
- `/services/contracting-supply`
- `/services/trading-import-export`
- `/services/dairy-farm`
- `/quality-safety` — Quality and safety practices
- `/contact` — Contact details and email-draft enquiry
- `/privacy-policy` — Website privacy information

Configure the production host to serve the SPA entry point for these direct routes.

## Content, assets, and integrations

Company and service details are centralized in `client/src/data/`. Security, cleaning, and pest-control details are based on the supplied company profile; Rafi Real Estate details are based on its supplied text profile. Other listed activities are described conservatively where the reference materials do not document their scope. The homepage features security, cleaning, and pest control as the three services described in detail in the company profile.

Hero backgrounds use locally stored Unsplash photographs with a subtle scroll-linked parallax effect. The motion is disabled when reduced motion is requested. Assets are decorative stock imagery—not depictions of Green Heaven Service staff, customers, or projects—and are subject to the [Unsplash License](https://unsplash.com/license):

- `client/public/assets/security-hero.jpg` — commercial buildings; [source](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab)
- `client/public/assets/cleaning-hero.jpg` — person cleaning a window; [source](https://images.unsplash.com/photo-1581578731548-c64695cc6952)
- `client/public/assets/facility-hero.jpg` — office interior; [source](https://images.unsplash.com/photo-1497366811353-6870744d04b2)
- `client/public/assets/landscaping-hero.jpg` — person tending plants; [source](https://images.unsplash.com/photo-1589923188900-85dae523342b)
- `client/public/assets/dairy-hero.jpg` — agricultural landscape; [source](https://images.unsplash.com/photo-1500382017468-9049fed747ef)

The office image is used as a neutral fallback where a suitable service-specific image is unavailable. Replace stock assets with approved company imagery if supplied.

The enquiry form does not submit data to a server. It prepares a `mailto:` draft addressed to the confirmed company email; the visitor must send the message from their email application. No backend or form provider is configured.

The production domain, hosting-specific privacy practices, official logo and brand colors, and Bangla localization remain to be confirmed. Detailed current scope also remains to be confirmed for Events Management, R.S Trading Corporation, Dairy Farm-1, Land Keeping, Export & Import, and First Class Contractor. The source profile additionally lists Green Heaven Trading and Green Heaven All Kinds of Supplier without detailed descriptions; outsourcing information is limited to a manpower-provision statement.
