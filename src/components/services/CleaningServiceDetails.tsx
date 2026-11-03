import {
  ClipboardCheck,
  Clock3,
  ClipboardList,
  SprayCan,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";
import { ScrollReveal } from "../common/ScrollReveal";
import { ServiceProfileHero } from "./ServiceProfileHero";
import type { Service } from "../../data/services";

type CleaningServiceDetailsProps = {
  service: Service;
};

const serviceGroups = [
  {
    number: "01",
    title: "Cleaning & housekeeping",
    description: "Scheduled cleaning for different kinds of premises.",
    items: [
      "Corporate",
      "Industrial",
      "Commercial",
      "Residential",
    ],
  },
  {
    number: "02",
    title: "Janitorial & support roles",
    description: "People and supporting roles listed in the company profile.",
    items: [
      "Tea boy",
      "Messenger",
      "Peon",
      "Gardener",
      "Electrician",
    ],
  },
  {
    number: "03",
    title: "Specialist cleaning",
    description: "Task-based services that can be scoped for the site.",
    items: [
      "Glass cleaning",
      "Carpet, chair, and sofa shampooing and extraction",
      "Floor scrubbing, polishing, and waxing",
      "Water-reservoir tank cleaning",
      "Power washing of surroundings and pavement",
      "Full-premises master cleaning",
    ],
  },
];

const workPlan = [
  {
    icon: ClipboardList,
    title: "Understand the site",
    text: "Analyze the full scope and discuss the customer’s requirements.",
  },
  {
    icon: Clock3,
    title: "Agree the schedule",
    text: "Prepare a work program together, then record the jobs to be completed.",
  },
  {
    icon: UsersRound,
    title: "Brief the team",
    text: "Assign trained workers and brief them on the agreed work schedule.",
  },
  {
    icon: SprayCan,
    title: "Deliver and follow up",
    text: "Keep in contact, collect customer feedback, provide on-the-job training, and check the work.",
  },
];

const trainingDays = [
  {
    day: "Days 01–02",
    title: "Cleaning methods and materials",
    text: "Dusting, mopping, spray cleaning, windows and glass, stairs and lifts, walls and rooftops, furniture and equipment, stain removal, vacuuming, waste handling, and routine or deep toilet cleaning.",
  },
  {
    day: "Day 03",
    title: "Professional conduct and safety",
    text: "Company rules, customer communication, attendance records, scheduling, equipment, health and safety, teamwork, absence management, and conflict handling.",
  },
  {
    day: "Day 04",
    title: "Practical assessment",
    text: "Tests on solutions and equipment, toilet cleaning, glass cleaning, and vacuuming.",
  },
  {
    day: "Days 05–06",
    title: "On-the-job training",
    text: "Practical learning in a working environment.",
  },
  {
    day: "Day 07",
    title: "Project-readiness test",
    text: "Cleaner assessment through deployment at a project.",
  },
];

const qualityChecks = [
  "Entrances and shared spaces",
  "Washrooms",
  "Tools and equipment",
  "Corners and less visible areas",
  "Cleanliness throughout the premises",
];

export function CleaningServiceDetails({
  service,
}: CleaningServiceDetailsProps) {
  return (
    <>
      <ServiceProfileHero
        service={service}
        variant="cleaning"
        eyebrow="Cleaning, housekeeping & janitorial"
        promise="A practical cleaning plan, shaped around your premises."
      />

      <section
        aria-labelledby="cleaning-scope-title"
        className="section cleaning-profile__scope"
      >
        <div className="site-container">
          <ScrollReveal className="section-heading cleaning-profile__heading">
            <p className="eyebrow">A broader cleaning brief</p>
            <h2 id="cleaning-scope-title">
              From daily upkeep to specialist cleaning.
            </h2>
            <p className="section-heading__description">
              The company profile covers routine cleaning, supporting staff,
              and specialist tasks. Agree the exact work and schedule before
              service begins.
            </p>
          </ScrollReveal>
          <ScrollReveal className="cleaning-profile__service-grid" stagger>
            {serviceGroups.map((group) => (
              <article
                className={`cleaning-service-card cleaning-service-card--${group.number}`}
                key={group.title}
              >
                <span className="cleaning-service-card__number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="cleaning-workplan-title"
        className="section cleaning-profile__workplan"
      >
        <div className="site-container">
          <ScrollReveal className="cleaning-profile__workplan-intro">
            <div>
              <p className="eyebrow">How the work is organized</p>
              <h2 id="cleaning-workplan-title">
                A schedule made with the customer, not for them.
              </h2>
            </div>
            <p>
              The profile describes a work register and an adjustable
              schedule. If a scheduled day is missed, the work can be carried
              into the next day or the next master-cleaning visit, as agreed.
            </p>
          </ScrollReveal>
          <ScrollReveal className="cleaning-profile__workplan-grid" stagger>
            {workPlan.map(({ icon: Icon, title, text }, index) => (
              <article className="cleaning-work-step gh-reveal-item" key={title}>
                <span className="cleaning-work-step__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" size={24} strokeWidth={1.5} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="cleaning-training-title"
        className="section cleaning-profile__training"
      >
        <div className="site-container cleaning-profile__training-layout">
          <ScrollReveal className="cleaning-profile__training-aside">
            <p className="eyebrow">Seven-day training outline</p>
            <h2 id="cleaning-training-title">
              Learn the method. Practise the work. Check readiness.
            </h2>
            <p>
              The company profile describes training supervised by an
              experienced trainer, with cleaning techniques, equipment,
              communication, safety, and practical assessment.
            </p>
            <div className="cleaning-profile__training-stamp">
              <span>7</span>
              <span>day<br />outline</span>
            </div>
          </ScrollReveal>
          <ScrollReveal className="cleaning-profile__training-list" stagger>
            {trainingDays.map((day) => (
              <article className="cleaning-training-day gh-reveal-item" key={day.day}>
                <span>{day.day}</span>
                <div>
                  <h3>{day.title}</h3>
                  <p>{day.text}</p>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="cleaning-quality-title"
        className="section cleaning-profile__quality"
      >
        <div className="site-container cleaning-profile__quality-layout">
          <ScrollReveal className="cleaning-profile__quality-copy">
            <p className="eyebrow">People, quality & safety</p>
            <h2 id="cleaning-quality-title">
              Ongoing checks are part of the service.
            </h2>
            <p>
              A project coordinator is described as the customer contact for
              quality checks, replacement handling, and on-the-job training.
              Sites receive at least weekly evaluations, with more frequent
              visits for sites that need them. Quality-control sheets support
              communication between the customer, cleaning team, and
              supervisors.
            </p>
          </ScrollReveal>
          <ScrollReveal className="cleaning-profile__quality-panel">
            <h3>Everyday checks include</h3>
            <ul>
              {qualityChecks.map((item) => (
                <li key={item}>
                  <ClipboardCheck aria-hidden="true" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="cleaning-profile__safety-note">
              <UserRoundCheck aria-hidden="true" size={22} />
              <p>
                The profile calls for risk assessment before work, safety
                materials, and training before staff use equipment. It
                explicitly rules out faulty ladders and untrained use of risky
                equipment.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="cleaning-profile__terms">
        <div className="site-container">
          <ScrollReveal className="cleaning-profile__terms-heading">
            <p className="eyebrow">Planning the arrangement</p>
            <h2>Clear expectations help the service run smoothly.</h2>
          </ScrollReveal>
          <ScrollReveal className="cleaning-profile__terms-grid" stagger>
            <article className="cleaning-term gh-reveal-item">
              <span>01</span>
              <h3>Materials and equipment</h3>
              <p>
                The profile names Johnson Diversey and Klenco cleaning
                chemicals. Equipment and chemical requirements are confirmed
                for the agreed scope; supplied equipment remains Green Heaven
                Service property.
              </p>
            </article>
            <article className="cleaning-term gh-reveal-item">
              <span>02</span>
              <h3>Supplies and billing</h3>
              <p>
                Cleaning materials are described as delivered on the last
                working day of the month, with monthly invoicing according to
                the quotation. Hygiene consumables such as tissue, soap, and
                air freshener are not included in the general quotation unless
                agreed separately.
              </p>
            </article>
            <article className="cleaning-term gh-reveal-item">
              <span>03</span>
              <h3>Staffing and site setup</h3>
              <p>
                The profile describes background-checked staff and standby
                cleaners for replacement when an absence is confirmed. It also
                describes recruitment documentation and compliance with
                applicable labour requirements, including working hours, wages,
                and overtime. For regular cleaning, customers provide suitable
                storage space for the service’s tools and materials; the
                profile also describes customer security checks for staff at
                entry and exit.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
