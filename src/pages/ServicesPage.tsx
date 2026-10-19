import { SectionHeading } from "../components/common/SectionHeading";
import { PageIntro } from "../components/common/PageIntro";
import { Seo } from "../components/common/Seo";
import { ServiceGrid } from "../components/services/ServiceGrid";
import { ContactCta } from "../components/common/ContactCta";
import { services } from "../data/services";

export function ServicesPage() {
  const coreServices = services.filter((service) => service.category === "primary");
  const listedActivities = services.filter((service) => service.category === "additional");

  return (
    <>
      <Seo
        title="Services | Green Heaven Service"
        description="Explore Green Heaven Service's security, cleaning and housekeeping, pest control, and other listed business activities."
      />
      <PageIntro
        description="Explore our core service categories alongside other business activities listed by Green Heaven Service."
        eyebrow="Our services"
        title="Practical support for your property and operations."
      />
      <section className="section section--bone">
        <div className="site-container">
          <SectionHeading
            description="These service categories have detailed offerings described in the company profile."
            eyebrow="Core services"
            title="Focused service areas."
          />
          <ServiceGrid services={coreServices} />
        </div>
      </section>
      <section className="section section--soft">
        <div className="site-container">
          <SectionHeading
            description="The following activities are listed by the company. Please contact us to discuss current scope and requirements."
            eyebrow="Other listed activities"
            title="Additional areas of business."
          />
          <ServiceGrid services={listedActivities} />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
