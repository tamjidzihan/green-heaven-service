import { ServiceCard } from "./ServiceCard";
import type { Service } from "../../data/services";
import { useScrollReveal } from "../../hooks/useScrollReveal";

type ServiceGridProps = {
  services: Service[];
  className?: string;
};

export function ServiceGrid({ services, className = "" }: ServiceGridProps) {
  const [containerRef, isRevealed] = useScrollReveal<HTMLDivElement>();

  return (
    <div
      className={`service-grid gh-reveal-group${isRevealed ? " is-revealed" : ""} ${className}`.trim()}
      ref={containerRef}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.slug}
          service={service}
          staggerIndex={index}
        />
      ))}
    </div>
  );
}
