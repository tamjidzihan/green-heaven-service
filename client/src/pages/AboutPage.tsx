import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCta } from "../components/common/ContactCta";
import { PageIntro } from "../components/common/PageIntro";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";
import { ManagingDirectorSection } from "../components/sections/ManagingDirectorSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ServiceCard } from "../components/services/ServiceCard";
import { company } from "../data/company";
import { services } from "../data/services";

const values = [
  {
    icon: HeartHandshake,
    title: "A stated service philosophy",
    text: "“Quality service at minimum cost” is the philosophy stated in the company profile.",
  },
  {
    icon: Users,
    title: "People and preparation",
    text: "The profile describes staff as central to the business, with screening, training, and supervision practices in relevant service teams.",
  },
  {
    icon: ShieldCheck,
    title: "A security-specific commitment",
    text: `“${company.slogan}” is the company's security slogan and is presented here in that context.`,
  },
];

export function AboutPage() {
  const coreServices = services.filter((service) => service.category === "primary");
  const otherActivities = services.filter(
    (service) => service.category === "additional",
  );

  return (
    <>
      <Seo
        title="About Green Heaven Service"
        description="Learn about Green Heaven Service, established in May 2019, its service philosophy, documented operating approach, and business portfolio."
      />
      <PageIntro
        description="Established in May 2019, Green Heaven Service describes a portfolio spanning security, cleaning and maintenance, pest control, and other listed business activities."
        eyebrow="About Green Heaven Service"
        image="/assets/facility-hero.jpg"
        title="Practical services, planned around real needs."
      />

      <section className="section section--bone">
        <ScrollReveal className="site-container about-grid" stagger>
          <div className="gh-reveal-item">
            <p className="eyebrow">Our background</p>
            <h2>A Bangladesh-based service company.</h2>
            <p>
              Green Heaven Service was established in {company.established}. Its
              company profile presents security consultancy and services as a
              central activity, alongside cleaning, maintenance, and pest
              control. The profile also describes an ambition to develop a
              one-stop service solution for customers.
            </p>
            <p>
              The work described ranges from assessing sites and planning
              security to agreeing cleaning schedules, training staff, and
              checking work. Separate business concerns are listed in the
              company profile and are shown below without assuming their
              unconfirmed service scope.
            </p>
            <Link className="text-link" to="/quality-safety">
              Read about quality & safety <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
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

      <ManagingDirectorSection />

      <section className="section section--bone about-portfolio">
        <div className="site-container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">Business portfolio</p>
              <h2>Core services and other listed activities.</h2>
              <p className="section-heading__description">
                Explore the three services described in detail in the company
                profile. Other concerns are listed as such; their current
                services and availability should be confirmed with the company.
              </p>
            </div>
          </ScrollReveal>

          <p className="about-portfolio__label">Core services</p>
          <div className="service-grid about-portfolio__core">
            {coreServices.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                staggerIndex={index}
              />
            ))}
          </div>

          <p className="about-portfolio__label about-portfolio__label--additional">
            Other listed business concerns
          </p>
          <div className="service-grid about-portfolio__other">
            {otherActivities.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                staggerIndex={index}
              />
            ))}
          </div>

          <p className="about-portfolio__note">
            The company profile also lists “Green Heaven Trading” and “Green
            Heaven All Kinds of Supplier.” Their specific scope is not detailed
            in the available materials; contact the company to confirm current
            information.
          </p>
        </div>
      </section>
      <section className="section about-values">
        <div className="site-container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">What guides the work</p>
              <h2>Principles stated in the company materials.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal className="about-values__grid" stagger>
            {values.map(({ icon: Icon, title, text }, index) => (
              <article
                className="about-value gh-reveal-item"
                key={title}
                style={{ "--stagger-delay": `${index * 70}ms` } as React.CSSProperties}
              >
                <span className="about-value__icon"><Icon aria-hidden="true" size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>
      <section className="section about-security-note">
        <ScrollReveal className="site-container about-security-note__inner">
          <div>
            <p className="eyebrow">Security service slogan</p>
            <h2>{company.slogan}</h2>
            <p>
              The company profile uses this slogan in its discussion of
              security services. Its stated company-wide service philosophy
              remains “{company.philosophy}.”
            </p>
          </div>
          <Link className="button button--frost" to="/services/green-heaven-security-service">
            Explore security services <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </ScrollReveal>
      </section>

      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
