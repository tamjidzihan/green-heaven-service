import { ScrollReveal } from "../common/ScrollReveal";
import { company } from "../../data/company";

export function ManagingDirectorSection() {
  return (
    <section
      aria-labelledby="managing-director-title"
      className="section managing-director"
    >
      <div className="site-container managing-director__grid">
        <ScrollReveal className="managing-director__portrait">
          <img
            alt={`${company.managingDirector}, Managing Director of Green Heaven Service`}
            decoding="async"
            loading="lazy"
            src="/assets/md_rabiul_karim.jpg"
          />
          <div className="managing-director__caption">
            <span>{company.managingDirector}</span>
            <span>Managing Director</span>
          </div>
        </ScrollReveal>
        <ScrollReveal className="managing-director__content" delay={100}>
          <p className="eyebrow">Leadership</p>
          <h2 id="managing-director-title">
            An entrepreneurial outlook, shaped by experience.
          </h2>
          <p>
            Md. Rabiul Karim began his business career in commodity trading in
            2016. His business interests include importing goods and ventures
            across garments, chemicals, real estate, dairy farming, agriculture,
            raw cotton, and rice.
          </p>
          <p>
            As the founder of Green Heaven Service Limited, he leads a group
            with a broad portfolio of business interests in Bangladesh.
          </p>
          <div className="managing-director__milestone">
            <span>Business journey</span>
            <strong>Since 2016</strong>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
