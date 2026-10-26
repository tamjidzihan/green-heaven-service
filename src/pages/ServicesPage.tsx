import { SectionHeading } from "../components/common/SectionHeading";
import { PageIntro } from "../components/common/PageIntro";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";
import { ServiceGrid } from "../components/services/ServiceGrid";
import { ContactCta } from "../components/common/ContactCta";
import { services } from "../data/services";

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Services & Business Concerns | Green Heaven Service"
        description="Explore the Green Heaven Service portfolio, including detailed security, cleaning, pest-control, and Rafi Real Estate information."
      />
      <PageIntro
        description="Browse the services described in detail in the company materials and other listed business concerns. Where an activity's scope is not documented, contact the company to confirm current details."
        eyebrow="Our services"
        title="Core services and other listed activities."
      />
      <section className="section section--bone">
        <div className="site-container">
          <ScrollReveal>
            <SectionHeading
              description="Explore security, cleaning, pest control, and Rafi Real Estate. The remaining business concerns are listed with clear notes where their scope needs confirmation."
              eyebrow="Service catalogue"
              title="All services & business divisions."
            />
          </ScrollReveal>
          <ServiceGrid services={services} />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
