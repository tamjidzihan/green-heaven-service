import {
  ArrowRight,
  Check,
  ClipboardCheck,
  HelpCircle,
  ListChecks,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ContactCta } from "../components/common/ContactCta";
import { ParallaxBackground } from "../components/common/ParallaxBackground";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";
import { Breadcrumbs } from "../components/navigation/Breadcrumbs";
import { services } from "../data/services";
import { NotFoundPage } from "./NotFoundPage";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find(
    (item) => item.slug === slug || item.aliases?.includes(slug ?? ""),
  );

  if (!service) return <NotFoundPage />;

  const ServiceIcon = service.icon;
  const isAdditional = service.category === "additional";
  const relatedServices = services
    .filter(
      (item) =>
        item.category === "primary" &&
        item.slug !== service.slug &&
        (service.category === "additional" ||
          item.category === service.category),
    )
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${service.title} | Green Heaven Service`}
        description={service.shortDescription}
      />
      <section className="detail-hero">
        <ParallaxBackground src={service.heroImage} />
        <div className="site-container">
          <Breadcrumbs current={service.title} />
          <div className="detail-hero__content">
            <div>
              <p className="eyebrow">{isAdditional ? "Listed activity" : "Core service"}</p>
              <h1>{service.title}</h1>
              <p>{service.intro}</p>
              <Link className="button button--frost" to="/contact">
                Discuss your requirements <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
            <div aria-hidden="true" className="detail-hero__icon">
              <ServiceIcon size={112} strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </section>

      {service.detailsConfirmed ? (
        <>
          {service.offerings.length > 0 && (
            <section aria-labelledby="service-capabilities" className="section section--bone">
              <ScrollReveal className="site-container service-detail__capabilities">
                <div>
                  <p className="eyebrow">Service capabilities</p>
                  <h2 id="service-capabilities">What the company profile describes.</h2>
                  <ul className="offering-list">
                    {service.offerings.map((offering) => (
                      <li key={offering}>
                        <Check aria-hidden="true" size={18} />
                        {offering}
                      </li>
                    ))}
                  </ul>
                </div>
                {service.approach.length > 0 && (
                  <aside className="approach-card">
                    <p className="eyebrow">Operating approach</p>
                    <h3>Planned around the service and setting.</h3>
                    <ul>
                      {service.approach.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </aside>
                )}
              </ScrollReveal>
            </section>
          )}

          {service.process && service.process.length > 0 && (
            <section aria-labelledby="service-process" className="section service-process">
              <div className="site-container">
                <ScrollReveal>
                  <div className="section-heading">
                    <p className="eyebrow">A documented approach</p>
                    <h2 id="service-process">How the work is described.</h2>
                  </div>
                </ScrollReveal>
                <ScrollReveal className="service-process__steps" stagger>
                  {service.process.map((step, index) => (
                    <article className="service-process__step gh-reveal-item" key={step}>
                      <span className="service-process__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{step}</p>
                    </article>
                  ))}
                </ScrollReveal>
              </div>
            </section>
          )}

          {service.faqs && service.faqs.length > 0 && (
            <section aria-labelledby="service-faqs" className="section section--bone">
              <ScrollReveal className="site-container service-faqs">
                <div>
                  <p className="eyebrow">Helpful information</p>
                  <h2 id="service-faqs">Frequently asked questions.</h2>
                  <p>
                    Answers reflect the company information currently available.
                    Confirm project-specific details with the team.
                  </p>
                </div>
                <div className="service-faqs__list">
                  {service.faqs.map(({ question, answer }) => (
                    <details className="service-faq" key={question}>
                      <summary>
                        <span>{question}</span>
                        <HelpCircle aria-hidden="true" size={19} />
                      </summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </ScrollReveal>
            </section>
          )}
        </>
      ) : (
        <section className="section section--bone">
          <ScrollReveal className="site-container additional-note">
            <ClipboardCheck aria-hidden="true" size={27} />
            <div>
              <p className="eyebrow">Confirming the scope</p>
              <h2>Let's discuss what this activity currently includes.</h2>
              <p>
                The available profile lists this business concern without
                detailing its current services, products, operating methods, or
                availability. Contact Green Heaven Service to confirm the scope
                before making plans.
              </p>
              <Link className="text-link" to="/contact">
                Contact Green Heaven Service <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="related-services section--soft">
          <ScrollReveal className="site-container related-services__inner" stagger>
            <div className="gh-reveal-item">
              <p className="eyebrow">Explore the portfolio</p>
              <h2>More from Green Heaven Service</h2>
            </div>
            <div className="related-services__links gh-reveal-item">
              {relatedServices.map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`}>
                  {item.title}<ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
              <Link to="/services">
                All listed services<ListChecks aria-hidden="true" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      )}
      <ContactCta />
    </>
  );
}
