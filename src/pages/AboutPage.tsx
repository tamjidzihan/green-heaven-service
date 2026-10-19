import { PageIntro } from "../components/common/PageIntro";
import { ContactCta } from "../components/common/ContactCta";
import { ScrollReveal } from "../components/common/ScrollReveal";
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
        <ScrollReveal className="site-container about-grid" stagger>
          <div className="gh-reveal-item">
            <p className="eyebrow">Our company</p>
            <h2>Green Heaven Service</h2>
            <p>
              Established in {company.established}, Green Heaven Service operates across Rafi Real Estate, Green Heaven Security Service, Green Heaven Pest Control Service, Green Heaven Cleaning Service, Green Heaven Events Management Service, R.S Trading Corporation, Green Heaven Dairy Farm-1, Green Heaven Land Keeping, Green Heaven Outsourcing, Green Heaven Export & Import, and First Class Contractor.
            </p>
            <p>
              Its stated service philosophy is “{company.philosophy}.”
            </p>
          </div>
          <aside className="company-facts gh-reveal-item">
            <p className="eyebrow">Company details</p>
            <dl>
              <div><dt>Established</dt><dd>{company.established}</dd></div>
              <div><dt>Managing Director</dt><dd>{company.managingDirector}</dd></div>
              <div><dt>Director</dt><dd>{company.director}</dd></div>
              <div><dt>Trade license</dt><dd>{company.tradeLicense}</dd></div>
            </dl>
          </aside>
        </ScrollReveal>
      </section>
      <ContactCta />
    </>
  );
}
