import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ParallaxBackground } from "../common/ParallaxBackground";
import { Breadcrumbs } from "../navigation/Breadcrumbs";
import type { Service } from "../../data/services";

type ServiceProfileHeroProps = {
  service: Service;
  variant: "security" | "cleaning" | "pest";
  eyebrow: string;
  promise: string;
};

export function ServiceProfileHero({
  service,
  variant,
  eyebrow,
  promise,
}: ServiceProfileHeroProps) {
  const ServiceIcon = service.icon;

  return (
    <section className={`service-profile-hero service-profile-hero--${variant}`}>
      <ParallaxBackground src={service.heroImage} />
      <div className="site-container service-profile-hero__container">
        <Breadcrumbs current={service.title} />
        <div className="service-profile-hero__content">
          <div className="service-profile-hero__copy">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{service.title}</h1>
            <p className="service-profile-hero__intro">{service.intro}</p>
            <Link className="button button--frost" to="/contact">
              Discuss your requirements <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <aside className="service-profile-hero__signature">
            <ServiceIcon aria-hidden="true" size={44} strokeWidth={1.2} />
            <p>{promise}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
