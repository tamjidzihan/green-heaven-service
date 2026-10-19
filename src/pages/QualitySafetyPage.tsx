import { CheckCircle2, ClipboardCheck, GraduationCap, SearchCheck } from "lucide-react";
import { PageIntro } from "../components/common/PageIntro";
import { ContactCta } from "../components/common/ContactCta";
import { Seo } from "../components/common/Seo";

const practices = [
  {
    icon: SearchCheck,
    title: "Screening and verification",
    text: "Background checks and police verification are stated practices for security recruitment.",
  },
  {
    icon: GraduationCap,
    title: "Training and induction",
    text: "Security induction and training are supported. Cleaning staff training includes a stated seven-day training period.",
  },
  {
    icon: ClipboardCheck,
    title: "Site planning and checks",
    text: "Site evaluations, risk assessment, project coordination, quality checks, and quality-control sheets support service planning.",
  },
  {
    icon: CheckCircle2,
    title: "Schedules and continuity",
    text: "Work schedules and attendance are managed. Standby cleaning staff and worker replacement are listed operational practices.",
  },
];

export function QualitySafetyPage() {
  return (
    <>
      <Seo
        title="Quality & Safety | Green Heaven Service"
        description="Learn about the screening, training, site evaluation, supervision, and quality practices described by Green Heaven Service."
      />
      <PageIntro
        description="The company describes practical measures around staff preparation, site needs, and service checks."
        eyebrow="Our approach"
        image="/assets/security-hero.jpg"
        title="Quality & safety, considered from the start."
      />
      <section className="section section--bone">
        <div className="site-container">
          <div className="practice-grid">
            {practices.map(({ icon: Icon, title, text }, index) => (
              <article className="practice-card" key={title}>
                <span className="practice-card__number">0{index + 1}</span>
                <span className="practice-card__icon"><Icon aria-hidden="true" size={23} /></span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="qualification-note">
            These are operational practices described in the company information, not quantitative guarantees or certifications.
          </p>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
