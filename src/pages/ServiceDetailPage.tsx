import { ArrowRight, Check, ClipboardCheck } from "lucide-react";
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
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFoundPage />;

  const Icon = service.icon;
  const isAdditional = service.category === "additional";

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
              <Icon size={112} strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </section>

      {isAdditional ? (
        <section className="section section--bone">
          <ScrollReveal className="site-container additional-note">
            <ClipboardCheck aria-hidden="true" size={27} />
            <div>
              <p className="eyebrow">Confirming the scope</p>
              <h2>Let's talk about what you need.</h2>
              <p>
                This is a listed business activity. Specific services, products, operating details, and availability have not been confirmed in the project information. Contact Green Heaven Service to discuss the current scope.
              </p>
              <Link className="text-link" to="/contact">
                Contact Green Heaven Service <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      ) : (
        <section className="section section--bone">
          <ScrollReveal className="site-container detail-content">
            <div>
              <p className="eyebrow">Service offering</p>
              <h2>What this service can include.</h2>
              <ul className="offering-list">
                {service.offerings.map((offering) => (
                  <li key={offering}><Check aria-hidden="true" size={18} />{offering}</li>
                ))}
              </ul>
            </div>
            <aside className="approach-card">
              <p className="eyebrow">Service approach</p>
              <h3>Planned around the site.</h3>
              <ul>
                {service.approach.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="approach-card__note">
                Specific requirements should be discussed with the company.
              </p>
            </aside>
          </ScrollReveal>
        </section>
      )}

      <section className="related-services section--soft">
        <ScrollReveal className="site-container related-services__inner" stagger>
          <div className="gh-reveal-item">
            <p className="eyebrow">Explore further</p>
            <h2>Related services</h2>
          </div>
          <div className="related-services__links gh-reveal-item">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <Link key={item.slug} to={`/services/${item.slug}`}>
                  {item.title}<ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
          </div>
        </ScrollReveal>
      </section>
      <ContactCta />
    </>
  );
}
