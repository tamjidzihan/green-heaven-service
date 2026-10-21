import type { Testimonial } from "../../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = "" }: TestimonialCardProps) {
  const { quote, author, role, organization, initials } = testimonial;

  return (
    <article
      className={`testimonial-card${className ? ` ${className}` : ""}`}
      tabIndex={0}
    >
      <div className="testimonial-card__header">
        <div aria-hidden="true" className="testimonial-card__avatar">
          {initials}
        </div>
        <div className="testimonial-card__meta">
          <h3 className="testimonial-card__author">{author}</h3>
          <p className="testimonial-card__role">
            {role}
            {organization ? <span className="testimonial-card__org"> • {organization}</span> : null}
          </p>
        </div>
      </div>

      <blockquote className="testimonial-card__quote">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
    </article>
  );
}
