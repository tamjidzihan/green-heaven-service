import { row1Testimonials, row2Testimonials } from "../../data/testimonials";
import { TestimonialCard } from "./TestimonialCard";
import { ScrollReveal } from "../common/ScrollReveal";

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="section testimonials-section">
      <div className="site-container">
        <ScrollReveal className="testimonials-section__header">
          <p className="eyebrow">Client Feedback</p>
          <h2 id="testimonials-heading">Built on Trust. Driven by Service.</h2>
          <p className="testimonials-section__description">
            Discover what clients have to say about their experience with Green Heaven Service.
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Viewport with Edge Masking */}
      <div className="testimonials-viewport">
        {/* Row 1: Moving Right to Left */}
        <div className="testimonial-marquee-track testimonial-marquee-track--left">
          <div className="testimonial-marquee-group">
            {row1Testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Duplicate set for seamless continuous loop */}
          <div aria-hidden="true" className="testimonial-marquee-group">
            {row1Testimonials.map((t) => (
              <TestimonialCard className="pointer-events-none" key={`dup-${t.id}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2: Moving Left to Right */}
        <div className="testimonial-marquee-track testimonial-marquee-track--right">
          <div className="testimonial-marquee-group">
            {row2Testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Duplicate set for seamless continuous loop */}
          <div aria-hidden="true" className="testimonial-marquee-group">
            {row2Testimonials.map((t) => (
              <TestimonialCard className="pointer-events-none" key={`dup-${t.id}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
