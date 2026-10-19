import { PageIntro } from "../components/common/PageIntro";
import { ContactCta } from "../components/common/ContactCta";
import { Seo } from "../components/common/Seo";
import { company } from "../data/company";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Green Heaven Service"
        description="Learn about Green Heaven Service, established in May 2019, its leadership, service philosophy, and business activities."
      />
      <PageIntro
        description="A Bangladesh-based company bringing together security, cleaning and housekeeping, pest control, and other listed business activities."
        eyebrow="About us"
        title="Service built around people, places, and practical needs."
      />
      <section className="section section--bone">
        <div className="site-container about-grid">
          <div>
            <p className="eyebrow">Our company</p>
            <h2>Green Heaven Service</h2>
            <p>
              Established in {company.established}, Green Heaven Service works across security, cleaning and housekeeping, and pest control. The company also lists manpower outsourcing, gardening and landscaping, event management, contracting and supply, trading and import-export, and dairy farm among its business activities.
            </p>
            <p>
              Its stated service philosophy is “{company.philosophy}.”
            </p>
          </div>
          <aside className="company-facts">
            <p className="eyebrow">Company details</p>
            <dl>
              <div><dt>Established</dt><dd>{company.established}</dd></div>
              <div><dt>Managing Director</dt><dd>{company.managingDirector}</dd></div>
              <div><dt>Director</dt><dd>{company.director}</dd></div>
              <div><dt>Trade license</dt><dd>{company.tradeLicense}</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
