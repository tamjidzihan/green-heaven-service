import { Quote } from "lucide-react";
import type { Testimonial } from "../../data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, author, role, organization, initials } = testimonial;

  return (
    <article className="testimonial-card">
      <Quote aria-hidden="true" className="testimonial-card__quote-icon" size={22} />
      <blockquote>
        <p>“{quote}”</p>
      </blockquote>
      <div className="testimonial-card__header">
        <span aria-hidden="true" className="testimonial-card__avatar">
          {initials}
        </span>
        <div className="testimonial-card__meta">
          <h3>{author}</h3>
          <p>
            {role}
            {organization ? <span> · {organization}</span> : null}
          </p>
        </div>
      </div>
    </article>
  );
}
