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
        description="Explore Green Heaven Service's complete range of security, facility care, real estate, trading, contracting, and affiliated business divisions."
      />
      <PageIntro
        description="Explore our full portfolio of specialized services and affiliated business concerns, structured to deliver reliable support across properties, operations, and trade."
        eyebrow="Our services"
        title="Comprehensive solutions for property, operations, and trade."
      />
      <section className="section section--bone">
        <div className="site-container">
          <ScrollReveal>
            <SectionHeading
              description="Browse our specialized services and active business divisions below. Select any division to learn more or prepare an enquiry."
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
