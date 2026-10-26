import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
  staggerIndex?: number;
  className?: string;
  style?: CSSProperties;
};

export function ServiceCard({
  service,
  staggerIndex,
  className = "",
  style,
}: ServiceCardProps) {
  const Icon = service.icon;
  const cardStyle: CSSProperties = {
    ...style,
    ...(staggerIndex !== undefined
      ? ({ "--stagger-delay": `${Math.min(staggerIndex * 60, 300)}ms` } as CSSProperties)
      : {}),
  };

  return (
    <Link
      className={`service-card ${className}`.trim()}
      draggable={false}
      style={cardStyle}
      to={`/services/${service.slug}`}
    >
      <span aria-hidden="true" className="service-card__backdrop">
        <img alt="" decoding="async" draggable={false} loading="lazy" src={service.heroImage} />
      </span>
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
