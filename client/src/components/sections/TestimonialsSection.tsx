import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { row1Testimonials, row2Testimonials } from "../../data/testimonials";
import { ScrollReveal } from "../common/ScrollReveal";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [...row1Testimonials, ...row2Testimonials];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.8,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section aria-labelledby="testimonials-heading" className="section testimonials-section">
      <div className="site-container">
        <ScrollReveal className="testimonials-section__header">
          <div>
            <p className="eyebrow">Client feedback</p>
            <h2 id="testimonials-heading">Built on trust. Driven by service.</h2>
            <p>
              Feedback shared by clients across security, cleaning, pest
              control, and property services.
            </p>
          </div>
          <div aria-label="Testimonial controls" className="testimonials-controls">
            <button
              aria-label="Scroll testimonials left"
              className="testimonials-controls__button"
              onClick={() => scroll(-1)}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={18} />
            </button>
            <button
              aria-label="Scroll testimonials right"
              className="testimonials-controls__button"
              onClick={() => scroll(1)}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </div>
        </ScrollReveal>
      </div>
      <div
        aria-label="Client testimonials"
        className="testimonials-viewport"
        ref={trackRef}
        tabIndex={0}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
