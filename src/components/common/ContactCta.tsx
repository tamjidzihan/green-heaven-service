import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "./ScrollReveal";

export function ContactCta() {
  return (
    <section className="contact-cta">
      <ScrollReveal className="site-container contact-cta__inner">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what support you need.</h2>
          <p>Share your requirements and we can discuss the next step.</p>
        </div>
        <Link className="button button--light" to="/contact">
          Contact us <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </ScrollReveal>
    </section>
  );
}
