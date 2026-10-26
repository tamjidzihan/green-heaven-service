import {
  ArrowRight,
  ClipboardCheck,
  GraduationCap,
  HardHat,
  Leaf,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ContactCta } from "../components/common/ContactCta";
import { PageIntro } from "../components/common/PageIntro";
import { ScrollReveal } from "../components/common/ScrollReveal";
import { Seo } from "../components/common/Seo";

const practices = [
  {
    icon: SearchCheck,
    title: "Assess the site",
    text: "Security surveys identify reported gaps and recommend measures. The cleaning profile describes risk assessment before work starts.",
  },
  {
    icon: Users,
    title: "Prepare the people",
    text: "The security profile describes screening that includes police verification, training, and induction. Cleaning staff receive a stated seven-day training program.",
  },
  {
    icon: ClipboardCheck,
    title: "Check and communicate",
    text: "Cleaning projects use a coordinator and quality-control sheets; the profile says each site is evaluated at least weekly.",
  },
  {
    icon: ShieldCheck,
    title: "Plan for continuity",
    text: "Work schedules, regular customer communication, standby cleaners, and worker replacement are described in the cleaning profile.",
  },
];

const trainingDays = [
  {
    title: "Days 1–2 · Cleaning methods and equipment",
    text: "The training outline covers cleaning chemicals and equipment, dusting, mopping, glass and floor cleaning, waste handling, and room, stair, lift, and washroom cleaning.",
  },
  {
    title: "Day 3 · Work practices and safety",
    text: "Topics include company rules, customer communication, attendance, schedules, equipment management, health and safety, teamwork, and absence management.",
  },
  {
    title: "Day 4 · Practical testing",
    text: "The profile describes testing cleaning solutions and equipment, with practical toilet cleaning, glass cleaning, and vacuuming.",
  },
  {
    title: "Days 5–6 · On-the-job training",
    text: "The training outline assigns these days to on-the-job training.",
  },
  {
    title: "Day 7 · Assessment",
    text: "The profile describes assessing a cleaner by deploying them on a project.",
  },
];

export function QualitySafetyPage() {
  return (
    <>
      <Seo
        title="Quality & Safety | Green Heaven Service"
        description="Explore the site assessment, staff training, safety, supervision, and quality-check practices described by Green Heaven Service."
      />
      <PageIntro
        description="A clear view of documented practices for site assessment, staff preparation, safety, supervision, and customer communication."
        eyebrow="Quality & safety"
        image="/assets/green-heaven-security-service-hero.jpg"
        title="Preparation, checks, and safer ways of working."
      />

      <section className="section section--bone">
        <div className="site-container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">A practical approach</p>
              <h2>What the company materials describe.</h2>
              <p className="section-heading__description">
                Practices differ by service. These summaries reflect statements
                in the company profiles and are not certifications or
                independent guarantees.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="practice-grid" stagger>
            {practices.map(({ icon: Icon, title, text }, index) => (
              <article
                className="practice-card gh-reveal-item"
                key={title}
                style={{ "--stagger-delay": `${index * 60}ms` } as CSSProperties}
              >
                <span className="practice-card__number">0{index + 1}</span>
                <span className="practice-card__icon"><Icon aria-hidden="true" size={23} /></span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section quality-detail">
        <div className="site-container">
          <ScrollReveal className="quality-detail__heading">
            <p className="eyebrow">Quality management</p>
            <h2>Regular supervision and a way to record checks.</h2>
            <p>
              The cleaning profile describes assigning a project coordinator
              for customer communication, quality checks, replacement handling,
              and on-the-job training. It says sites are evaluated at least
              weekly, with more frequent visits for some sites depending on
              their needs, size, and complexity.
            </p>
          </ScrollReveal>
          <ScrollReveal className="quality-detail__grid" stagger>
            <article className="quality-panel gh-reveal-item">
              <ClipboardCheck aria-hidden="true" size={24} />
              <h3>Documented site checks</h3>
              <p>
                A quality-control sheet is described for each job site to
                support direct communication between clients, cleaners, and
                supervisors. The profile says discrepancies are corrected
                when found.
              </p>
            </article>
            <article className="quality-panel gh-reveal-item">
              <Users aria-hidden="true" size={24} />
              <h3>Customer communication</h3>
              <p>
                The cleaning approach includes discussing requirements before
                work, regular contact during delivery, collecting feedback, and
                following up.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section--bone quality-training">
        <div className="site-container quality-training__grid">
          <ScrollReveal className="quality-training__intro">
            <GraduationCap aria-hidden="true" size={29} />
            <p className="eyebrow">Staff preparation</p>
            <h2>Training matched to the work.</h2>
            <p>
              Security and cleaning have separate training descriptions. The
              security profile describes screening that includes police
              verification, training by experienced ex-Defence personnel, and
              induction at the assigned post.
            </p>
            <p>
              For cleaning staff, the company profile outlines a seven-day
              training program. Open the stages for the topics listed in that
              outline.
            </p>
          </ScrollReveal>
          <ScrollReveal className="quality-training__days" delay={100}>
            <h3>Seven-day cleaning training outline</h3>
            {trainingDays.map(({ title, text }) => (
              <details className="training-day" key={title}>
                <summary>{title}</summary>
                <p>{text}</p>
              </details>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="section quality-safety-practices">
        <div className="site-container">
          <ScrollReveal>
            <div className="section-heading">
              <p className="eyebrow">Safety and responsible work</p>
              <h2>Risk assessment before shortcuts.</h2>
              <p className="section-heading__description">
                The cleaning profile describes risk assessment before work,
                recurring health and safety training, and not using equipment
                without appropriate training or safety materials.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="quality-safety-practices__grid" stagger>
            <article className="quality-safety-card gh-reveal-item">
              <HardHat aria-hidden="true" size={24} />
              <h3>Before work begins</h3>
              <ul>
                <li>Assess risks associated with the work.</li>
                <li>Choose suitable safety materials and methods.</li>
                <li>Consult workers about ways to prevent accidents and work-related ill health.</li>
              </ul>
            </article>
            <article className="quality-safety-card gh-reveal-item">
              <ShieldCheck aria-hidden="true" size={24} />
              <h3>Equipment and working practices</h3>
              <ul>
                <li>Do not use faulty ladders.</li>
                <li>Do not use risky equipment without proper training.</li>
                <li>Do not work in risky places without appropriate safety materials.</li>
              </ul>
            </article>
            <article className="quality-safety-card gh-reveal-item">
              <Leaf aria-hidden="true" size={24} />
              <h3>Environmental considerations</h3>
              <p>
                Rafi Real Estat Ltd. describes environmentally mindful building
                concepts. The available materials do not identify an
                environmental certification or a group-wide environmental
                policy.
              </p>
            </article>
          </ScrollReveal>
          <p className="quality-disclosure">
            The company profile states that it practices the country's labour
            law, including in areas such as working hours, wages, and overtime.
            This is a statement in the supplied company material, not an
            independent assessment or certification.
          </p>
        </div>
      </section>

      <section className="section section--bone quality-links">
        <ScrollReveal className="site-container quality-links__inner">
          <div>
            <p className="eyebrow">Service-specific information</p>
            <h2>Explore how each service is described.</h2>
          </div>
          <div className="quality-links__list">
            <Link to="/services/green-heaven-security-service">
              Security service <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link to="/services/green-heaven-cleaning-service">
              Cleaning service <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <Link to="/services/green-heaven-pest-control-service">
              Pest control <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
      <ContactCta />
    </>
  );
}
