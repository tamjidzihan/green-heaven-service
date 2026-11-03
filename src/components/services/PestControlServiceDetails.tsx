import {
  Bug,
  Building2,
  FlaskConical,
  LocateFixed,
  Rat,
  ShieldCheck,
  SprayCan,
  Trees,
} from "lucide-react";
import { ScrollReveal } from "../common/ScrollReveal";
import { ServiceProfileHero } from "./ServiceProfileHero";
import type { Service } from "../../data/services";

type PestControlServiceDetailsProps = {
  service: Service;
};

const pestMethods = [
  {
    icon: Bug,
    title: "Cockroaches",
    setting: "Homes, kitchens, restaurants, and sensitive premises",
    method:
      "The profile describes treating baseboards and areas beneath or behind appliances. For settings such as restaurants and hospitals, it describes professional bait where contact pesticides are to be avoided.",
  },
  {
    icon: Rat,
    title: "Rodents",
    setting: "Sites where rodent activity is identified",
    method:
      "Glue boards and traps are listed as common control methods. The profile also names tracking tiles and kill traps among its equipment.",
  },
  {
    icon: Building2,
    title: "Termites",
    setting: "Pre-construction and existing structures",
    method:
      "Both pre- and post-construction termite control are listed. The profile describes pre-construction treatment as more effective and notes that the method depends on the stage of the building.",
  },
  {
    icon: Trees,
    title: "Mosquitoes and flies",
    setting: "Adult mosquitoes, larvae, and flies",
    method:
      "Spray and fogging machines are among the equipment named in the company’s product and equipment list. The service team should confirm the suitable approach for the site.",
  },
  {
    icon: SprayCan,
    title: "Ants and other insects",
    setting: "Other insect activity identified during assessment",
    method:
      "The profile lists ant control and spray equipment. The pest and affected area are identified first so the proposed approach can be discussed.",
  },
  {
    icon: ShieldCheck,
    title: "Other site-specific concerns",
    setting: "Additional pests reported by the customer",
    method:
      "The supplied material also lists snake handling equipment, including long forceps and a net. Confirm the request and current availability with the company.",
  },
];

const productNotes = [
  {
    pest: "Adult mosquitoes and larvae",
    equipment: "Spray machine",
    product: "Primiphos methyl",
    holder: "Syngenta (Bangladesh) Ltd.",
  },
  {
    pest: "Adult mosquitoes",
    equipment: "Fogging machine",
    product: "Lambada Cyhalothrin",
    holder: "Syngenta (Bangladesh) Ltd.",
  },
  {
    pest: "Flies",
    equipment: "Fogging machine",
    product: "ETOC & Sumithrin (d-Phenothin)",
    holder: "Novertis (Bangladesh) Ltd.",
  },
  {
    pest: "Cockroaches",
    equipment: "Gel",
    product: "Hydromethyinon",
    holder: "Safeway Pest Control",
  },
  {
    pest: "Rats",
    equipment: "Glue board, trap, kill trap, tracking tiles",
    product: "Bromadiolone",
    holder: "Novertise (Bangladesh) Ltd.",
  },
  {
    pest: "Snakes",
    equipment: "Long forceps and net",
    product: "Not specified in the profile",
    holder: "Not specified in the profile",
  },
  {
    pest: "Ants",
    equipment: "Spray machine",
    product: "Not specified in the profile",
    holder: "Not specified in the profile",
  },
];

export function PestControlServiceDetails({
  service,
}: PestControlServiceDetailsProps) {
  return (
    <>
      <ServiceProfileHero
        service={service}
        variant="pest"
        eyebrow="Pest control"
        promise="The pest and the premises both shape the plan."
      />

      <section className="section pest-profile__intro">
        <div className="site-container pest-profile__intro-layout">
          <ScrollReveal className="pest-profile__intro-copy">
            <p className="eyebrow">Start with identification</p>
            <h2>First understand the pest. Then choose a suitable approach.</h2>
            <p>
              The company profile describes identifying whether there is a
              pest problem, determining the pest, and selecting a method for
              the setting. The site, affected area, and any sensitive use are
              all part of the conversation.
            </p>
          </ScrollReveal>
          <ScrollReveal className="pest-profile__assessment">
            <LocateFixed aria-hidden="true" size={26} />
            <div>
              <span>Assessment-led</span>
              <p>
                Methods can differ between a home, a food-service area, a
                hospital, and a construction site.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="pest-methods-title"
        className="section pest-profile__methods"
      >
        <div className="site-container">
          <ScrollReveal className="section-heading pest-profile__heading">
            <p className="eyebrow">Pests and methods in the profile</p>
            <h2 id="pest-methods-title">
              Different problems call for different considerations.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="pest-profile__method-list" stagger>
            {pestMethods.map(({ icon: Icon, title, setting, method }, index) => (
              <article className="pest-method gh-reveal-item" key={title}>
                <div className="pest-method__marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" size={23} strokeWidth={1.6} />
                </div>
                <div className="pest-method__body">
                  <div className="pest-method__title">
                    <h3>{title}</h3>
                    <span>{setting}</span>
                  </div>
                  <p>{method}</p>
                </div>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section
        aria-labelledby="pest-products-title"
        className="section pest-profile__products"
      >
        <div className="site-container">
          <ScrollReveal className="pest-profile__products-heading">
            <div>
              <p className="eyebrow">Equipment & products named in the profile</p>
              <h2 id="pest-products-title">
                A reference list from the supplied service material.
              </h2>
            </div>
            <FlaskConical aria-hidden="true" size={35} strokeWidth={1.3} />
          </ScrollReveal>
          <div
            aria-label="Pest control products and equipment listed in the profile"
            className="pest-profile__table-wrap"
            role="region"
            tabIndex={0}
          >
            <ScrollReveal>
              <table className="pest-products-table">
                <thead>
                  <tr>
                    <th scope="col">Pest listed</th>
                    <th scope="col">Equipment</th>
                    <th scope="col">Product name as printed</th>
                    <th scope="col">Registration holder listed</th>
                  </tr>
                </thead>
                <tbody>
                  {productNotes.map((note) => (
                    <tr key={note.pest}>
                      <th scope="row">{note.pest}</th>
                      <td>{note.equipment}</td>
                      <td>{note.product}</td>
                      <td>{note.holder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollReveal>
          </div>
          <ScrollReveal className="pest-profile__product-note">
            <ShieldCheck aria-hidden="true" size={20} />
            <p>
              This list transcribes the supplied company profile; it is not
              application guidance. Confirm the product, suitability,
              precautions, and current availability with the service team for
              the specific site before treatment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pest-profile__strengths">
        <div className="site-container">
          <ScrollReveal className="pest-profile__strengths-inner">
            <div>
              <p className="eyebrow">Service strengths in the profile</p>
              <h2>Trained people, supervision, and considered methods.</h2>
            </div>
            <ul>
              <li>Quality training and constant supervision</li>
              <li>Modern technology and methodology</li>
              <li>Round-the-clock customer response</li>
              <li>
                The profile states that it avoids non-eco-friendly tools and
                chemicals
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
