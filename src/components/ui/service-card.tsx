import { Icon } from "@/components/ui/icon";
import type { Service } from "@/types/content";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className={`service-card reveal ${compact ? "service-card--compact" : ""}`}>
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon name={service.icon} size={22} />
        </span>
        <span className="service-card__accent" aria-hidden="true" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {!compact && (
        <ul className="tag-list" aria-label={`${service.title} focus areas`}>
          {service.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
