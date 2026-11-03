import {
  Banknote,
  Building2,
  Camera,
  ClipboardCheck,
  Flame,
  GraduationCap,
  Handshake,
  Plane,
  Route,
  ScanSearch,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "../common/ScrollReveal";
import { ServiceProfileHero } from "./ServiceProfileHero";
import type { Service } from "../../data/services";

type SecurityServiceDetailsProps = {
  service: Service;
};

const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: ScanSearch,
    title: "Survey the site",
    description:
      "Inspect offices, factories, project sites, and field installations to identify security gaps and recommend measures.",
  },
  {
    icon: ClipboardCheck,
    title: "Plan the system",
    description:
      "Develop security plans for organizations, offices, sites, and field installations around the requirements identified.",
  },
  {
    icon: UserRoundCheck,
    title: "Verify personnel",
    description:
      "Screen and vet people for organizations and sites, including the antecedent and police verification described in the profile.",
  },
  {
    icon: GraduationCap,
    title: "Train and induct",
    description:
      "Provide on-site security training, followed by post-specific induction for personnel assigned to a role.",
  },
  {
    icon: Building2,
    title: "Support site security",
    description:
      "Undertake security responsibilities with assigned personnel and, where agreed, a round-the-clock head-office control headquarters.",
  },
  {
    icon: Camera,
    title: "Equip the location",
    description:
      "Arrange installation, maintenance, or rental of security equipment for homes, apartments, offices, buildings, factories, and vehicles.",
  },
];

const specialistSupport: {
  icon: LucideIcon;
  title: string;
  items: string[];
}[] = [
  {
    icon: Route,
    title: "Movement and route support",
    items: [
      "Route and area reconnaissance",
      "Mobile escort by land, waterway, and air",
      "Personnel, material, and equipment mobilization",
    ],
  },
  {
    icon: Flame,
    title: "Operational readiness",
    items: [
      "Fire-alarm and firefighting-system training",
      "Security appreciation and threat assessment",
      "Cash-in-transit security",
    ],
  },
  {
    icon: Handshake,
    title: "Coordination and project support",
    items: [
      "Liaison with government and law-enforcement agencies",
      "Mobilization support and temporary facilities for foreign firms",
      "Verified skilled and unskilled manpower",
      "Security procedures for expatriates",
    ],
  },
];

const selectionSteps = [
  {
    title: "Recruitment",
    text: "The profile describes recruitment through national media.",
  },
  {
    title: "Screening",
    text: "Candidates are vetted through the company process, including police verification.",
  },
  {
    title: "Professional training",
    text: "Training is conducted by experienced professionals from the ex-Defence services.",
  },
  {
    title: "Post induction",
    text: "After training, personnel receive on-the-job induction for the assigned post; responsibility follows a satisfactory report.",
  },
];

export function SecurityServiceDetails({
  service,
}: SecurityServiceDetailsProps) {
  return (
    <>
      <ServiceProfileHero
        service={service}
        variant="security"
        eyebrow="Security & consultancy"
        promise="Security support that starts with understanding the site."
      />

      <section className="section security-profile__overview">
        <div className="site-container">
          <ScrollReveal className="security-profile__overview-inner">
            <div className="security-profile__overview-heading">
              <p className="eyebrow">A considered security plan</p>
              <h2>Assess the exposure. Plan the response. Prepare the people.</h2>
            </div>
            <p>
              Green Heaven Service’s profile describes security and consultancy
              for national and expatriate clients, from a single site survey to
              personnel and coordinated security responsibilities. The scope
              can be discussed around the location, people, and operation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="security-capabilities-title"
        className="section security-profile__capabilities"
      >
        <div className="site-container">
          <ScrollReveal className="section-heading security-profile__heading">
            <p className="eyebrow">Core capabilities</p>
            <h2 id="security-capabilities-title">
              One coordinated view of people, place, and procedure.
            </h2>
            <p className="section-heading__description">
              These capabilities are drawn from the company profile. The
              specific services and responsibilities are confirmed for each
              engagement.
            </p>
          </ScrollReveal>
          <ScrollReveal className="security-profile__capability-grid" stagger>
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <article className="security-capability gh-reveal-item" key={title}>
                <span className="security-capability__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" size={23} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="security-specialist-title"
        className="section security-profile__specialist"
      >
        <div className="site-container">
          <ScrollReveal className="security-profile__specialist-heading">
            <p className="eyebrow">Beyond the post</p>
            <h2 id="security-specialist-title">
              Specialist support for complex operations.
            </h2>
            <p>
              The profile also lists additional capabilities for movement,
              project mobilization, and coordination.
            </p>
          </ScrollReveal>
          <ScrollReveal className="security-profile__specialist-grid" stagger>
            {specialistSupport.map(({ icon: Icon, title, items }) => (
              <article className="security-specialist-card gh-reveal-item" key={title}>
                <Icon aria-hidden="true" size={25} strokeWidth={1.5} />
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="security-selection-title"
        className="section security-profile__selection"
      >
        <div className="site-container security-profile__selection-layout">
          <ScrollReveal className="security-profile__selection-copy">
            <p className="eyebrow">Recruitment, training & selection</p>
            <h2 id="security-selection-title">
              Prepared before taking responsibility at a post.
            </h2>
            <p>
              The documented selection path combines candidate screening,
              professional training, and induction at the assigned location.
            </p>
          </ScrollReveal>
          <ScrollReveal className="security-profile__timeline" stagger>
            {selectionSteps.map((step, index) => (
              <article className="security-timeline-step gh-reveal-item" key={step.title}>
                <span className="security-timeline-step__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="security-profile__closing">
        <div className="site-container">
          <ScrollReveal className="security-profile__closing-inner">
            <ShieldCheck aria-hidden="true" size={30} strokeWidth={1.4} />
            <div>
              <p className="eyebrow">Discuss your requirements</p>
              <h2>Start with the location, the risks, and the outcome you need.</h2>
            </div>
            <div className="security-profile__closing-icons" aria-hidden="true">
              <Banknote size={22} />
              <Plane size={22} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
