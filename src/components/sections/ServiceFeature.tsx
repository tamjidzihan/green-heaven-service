import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../common/ScrollReveal";
import type { Service } from "../../data/services";

type ServiceFeatureProps = {
  service: Service;
};

export function ServiceFeature({ service }: ServiceFeatureProps) {
  const feature = service.homepageFeature;

  if (!feature) return null;

  const ServiceIcon = service.icon;

  return (
    <section
      aria-labelledby={`featured-${service.slug}`}
      className={`section service-feature service-feature--${feature.order}`}
    >
      <div className="site-container service-feature__grid">
        <ScrollReveal className="service-feature__visual">
          <img
            alt={feature.imageAlt}
            className="service-feature__image"
            decoding="async"
            loading="lazy"
            src={service.heroImage}
          />
          <span className="service-feature__caption">
            <ServiceIcon aria-hidden="true" size={17} />
            {service.title}
          </span>
        </ScrollReveal>
        <ScrollReveal className="service-feature__content" delay={100}>
          <p className="eyebrow">{feature.eyebrow}</p>
          <h2 id={`featured-${service.slug}`}>{feature.headline}</h2>
          <p className="service-feature__description">{feature.description}</p>
          <ul className="service-feature__points">
            {feature.highlights.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon aria-hidden="true" size={19} />
                {label}
              </li>
            ))}
          </ul>
          <Link className="text-link" to={`/services/${service.slug}`}>
            Explore {service.title} <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
