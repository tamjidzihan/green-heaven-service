import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Link className="service-card" to={`/services/${service.slug}`}>
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
        </span>
        <ArrowUpRight className="service-card__arrow" aria-hidden="true" size={20} />
      </div>
      <div>
        <p className="service-card__category">
          {service.category === "primary" ? "Core service" : "Listed activity"}
        </p>
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
      </div>
    </Link>
  );
}
