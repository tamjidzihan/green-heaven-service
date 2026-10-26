import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Building2,

  Flower2,
  Globe,
  GraduationCap,
  Handshake,
  HardHat,
  Leaf,
  PackageCheck,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Tractor,
  Users,
} from "lucide-react";

type ServiceHighlight = {
  icon: LucideIcon;
  label: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

type HomepageFeature = {
  order: number;
  eyebrow: string;
  headline: string;
  description: string;
  imageAlt: string;
  highlights: ServiceHighlight[];
};

export type Service = {
  slug: string;
  aliases?: string[];
  title: string;
  shortDescription: string;
  intro: string;
  heroImage: string;
  icon: LucideIcon;
  category: "primary" | "additional";
  offerings: string[];
  approach: string[];
  process?: string[];
  faqs?: ServiceFaq[];
  homepageFeature?: HomepageFeature;
  detailsConfirmed?: boolean;
};

const scopeToConfirm =
  "Listed business activity; detailed current scope is not provided in the available materials.";
const scopeToConfirmIntro =
  "This activity is listed in the available business information, but its current services, operating methods, and availability are not described. Contact Green Heaven Service to confirm its scope.";

export const services: Service[] = [
  {
    slug: "rafi-real-estate",
    title: "Rafi Real Estate",
    shortDescription:
      "Residential development with quality materials, considered planning, and a commitment to safe housing.",
    intro:
      "Rafi Real Estat Ltd. develops residential buildings, including luxurious residential projects. Its profile describes quality materials, earthquake-conscious design, environmentally mindful concepts, and modern housing technology.",
    heroImage: "/assets/rafi-real-estate-hero.jpg",
    icon: Building2,
    category: "additional",
    offerings: [
      "Residential building development",
      "Luxurious residential buildings using quality materials",
      "Innovative building design using modern housing technology",
      "Earthquake-conscious and environmentally mindful building concepts",
    ],
    approach: [
      "Engineers and planning teams work toward completing projects before the agreed apartment handover time.",
      "The company identifies quality, trust, commitment, and dependability as its business ethics.",
    ],
    homepageFeature: {
      order: 1,
      eyebrow: "Residential development",
      headline: "Safe housing is our commitment.",
      description:
        "Rafi Real Estat Ltd. develops residential buildings with quality materials and environmentally mindful concepts. Its engineering and planning teams work toward completing projects before the agreed apartment handover time.",
      imageAlt: "Residential building representing Rafi Real Estat Ltd.'s housing projects",
      highlights: [
        { icon: ShieldCheck, label: "Earthquake-conscious design" },
        { icon: Leaf, label: "Environmentally mindful concepts" },
        { icon: Building2, label: "Quality materials and careful planning" },
      ],
    },
    faqs: [
      {
        question: "What type of projects does Rafi Real Estat Ltd. describe?",
        answer:
          "Its profile describes luxurious residential building development.",
      },
      {
        question: "What design priorities are mentioned in the profile?",
        answer:
          "The profile refers to earthquake-conscious design, environmentally mindful concepts, quality materials, and modern housing technology.",
      },
      {
        question: "Does the company state a project handover commitment?",
        answer:
          "The company says its engineering and planning team works toward completing building projects before the apartment handover time agreed with customers. Discuss specific project timelines directly with the company.",
      },
    ],
    detailsConfirmed: true,
  },
  {
    slug: "green-heaven-security-service",
    aliases: ["security-services"],
    title: "Green Heaven Security Service",
    shortDescription:
      "Security personnel, consultancy, site surveys, training, verification, and escort services.",
    intro:
      "The company profile describes security and consultancy support for offices, factories, sites, and field installations. Work can include site surveys, security planning, personnel, verification, escort, and security equipment services.",
    heroImage: "/assets/green-heaven-security-service-hero.jpg",
    icon: ShieldCheck,
    category: "primary",
    offerings: [
      "Security personnel and security-system responsibility",
      "Security surveys, inspections, checks, and threat assessment",
      "Security planning and on-site training",
      "Employee verification, scanning, and vetting",
      "Route reconnaissance and mobile escort by land, waterway, and air",
      "Fire-alarm and firefighting training",
      "Cash-in-transit security",
      "Security gadget installation, maintenance, and rental",
      "Coordination with government, semi-government, and law-enforcement agencies",
      "Verified skilled and unskilled manpower for foreign firms",
      "Security standing operating procedures for expatriates",
    ],
    approach: [
      "Surveys aim to identify security gaps in a specified office, factory, site, or area and recommend measures.",
      "The profile describes recruitment through national media, screening that includes police verification, training by experienced ex-Defence personnel, and induction at the assigned post.",
      "For full security responsibilities, the profile describes providing personnel and a head-office control headquarters operating round the clock.",
    ],
    process: [
      "Survey, inspect, or reconnoitre the specified site or route.",
      "Assess identified security gaps and discuss suitable measures.",
      "Plan the required security system, personnel, training, or equipment.",
      "Where personnel are assigned, carry out screening, training, and post induction as described in the company profile.",
    ],
    faqs: [
      {
        question: "What types of sites are mentioned in the security profile?",
        answer:
          "The profile refers to offices, factories, sites, field installations, exploration or construction sites, houses, apartments, buildings, and vehicles.",
      },
      {
        question: "How does the profile describe recruitment and training?",
        answer:
          "It describes recruitment through national media, screening including police verification, training by experienced ex-Defence personnel, and on-the-job or induction training at the assigned post.",
      },
      {
        question: "Are escort and cash-in-transit services listed?",
        answer:
          "Yes. The profile lists mobile escort on land, waterways, and air routes, as well as security for handling or transporting cash. Confirm the specific requirements and current availability with the company.",
      },
    ],
    homepageFeature: {
      order: 2,
      eyebrow: "Security & consultancy",
      headline: "Start protection with a clear view of the site.",
      description:
        "Security surveys, threat assessment, planning, trained personnel, escort, and equipment support are among the capabilities described in the company profile.",
      imageAlt: "Security cameras mounted in rows on a wall",
      highlights: [
        { icon: SearchCheck, label: "Site surveys and threat assessment" },
        { icon: GraduationCap, label: "Screening, training, and induction" },
        { icon: Route, label: "Mobile escort and route reconnaissance" },
      ],
    },
    detailsConfirmed: true,
  },
  {
    slug: "green-heaven-pest-control-service",
    aliases: ["pest-control"],
    title: "Green Heaven Pest Control Service",
    shortDescription:
      "Pest-control services for common insects, rodents, and pre- or post-construction termites.",
    intro:
      "The pest-control profile lists insect and rodent control, including cockroach, mosquito, fly, ant, and termite services. It describes assessing the pest and choosing a suitable method for the setting.",
    heroImage: "/assets/green-heaven-pest-control-service-hero.jpg",
    icon: Bug,
    category: "primary",
    offerings: [
      "Cockroach control",
      "Rodent control",
      "Pre-construction termite control",
      "Post-construction termite control",
      "Mosquito, fly, ant, and other insect control",
    ],
    approach: [
      "The profile describes first determining whether a pest problem exists, identifying the pest, and selecting a method suited to the setting.",
      "For sensitive settings such as restaurants and hospitals, the profile describes using bait to avoid contact pesticides.",
      "Glue boards and traps are among the rodent-control methods described. Confirm the suitable method for a specific site with the company.",
    ],
    process: [
      "Discuss the reported pest concern and the area affected.",
      "Identify the pest and consider the setting, including any sensitive areas.",
      "Confirm a suitable control method and the scope of work with the company.",
    ],
    faqs: [
      {
        question: "Which pests are listed in the company profile?",
        answer:
          "Cockroaches, rodents, mosquitoes, flies, ants, other insects, and termites are listed. Termite control is described for both pre- and post-construction settings.",
      },
      {
        question: "How does the profile describe selecting a treatment?",
        answer:
          "It describes identifying the pest and selecting a method suitable for the location. For sensitive settings such as restaurants and hospitals, it mentions bait as an option to avoid contact pesticides.",
      },
      {
        question: "Are treatment methods and products the same for every site?",
        answer:
          "The profile describes different approaches for different pests and settings. Contact the company to discuss the site and confirm the current method and products.",
      },
    ],
    homepageFeature: {
      order: 3,
      eyebrow: "Pest control",
      headline: "Choose a method that fits the pest and the place.",
      description:
        "The company profile covers common insects, rodents, and termites, with the pest and setting informing the control method.",
      imageAlt:
        "Pest-control technician wearing protective equipment and applying a treatment outdoors",
      highlights: [
        { icon: Bug, label: "Insect and rodent control" },
        { icon: Building2, label: "Pre- and post-construction termite control" },
        { icon: ShieldCheck, label: "Methods considered for sensitive settings" },
      ],
    },
    detailsConfirmed: true,
  },
  {
    slug: "green-heaven-cleaning-service",
    aliases: ["cleaning-housekeeping"],
    title: "Green Heaven Cleaning Service",
    shortDescription:
      "Cleaning, housekeeping, janitorial, and specialist cleaning for residential and business settings.",
    intro:
      "The company profile describes cleaning and maintenance for corporate, industrial, commercial, and residential premises. It also lists janitorial staffing and specialist services such as glass, carpet, upholstery, floor, water-reservoir, and pavement cleaning.",
    heroImage: "/assets/cleaning-hero.jpg",
    icon: Sparkles,
    category: "primary",
    offerings: [
      "Corporate, industrial, commercial, and residential cleaning",
      "Janitorial staff, including tea boys, messengers, peons, gardeners, and electricians",
      "Glass cleaning",
      "Carpet, chair, and sofa shampooing and extraction",
      "Floor scrubbing, polishing, and waxing",
      "Water-reservoir tank cleaning",
      "Power washing of surroundings and pavement",
      "Full-premises master cleaning",
    ],
    approach: [
      "The company describes analyzing the work scope, discussing customer requirements, and agreeing on a schedule before work starts.",
      "Workers are briefed on the schedule; the profile describes regular customer communication, feedback collection, on-the-job training, and follow-up.",
      "Cleaning staff receive a stated seven-day training program, followed by on-the-job training and an assessment before project deployment.",
    ],
    process: [
      "Analyze the work scope and discuss the customer's requirements.",
      "Prepare a work schedule and consult with the customer to finalize it.",
      "Brief and assign trained workers to the agreed schedule.",
      "Communicate regularly, collect feedback, and carry out follow-up checks.",
    ],
    faqs: [
      {
        question: "What kinds of premises are included in the cleaning profile?",
        answer:
          "The profile lists corporate, industrial, commercial, and residential cleaning.",
      },
      {
        question: "What is included in the seven-day cleaning training?",
        answer:
          "The profile describes cleaning methods and equipment, health and safety, customer communication, attendance and scheduling, a practical test, on-the-job training on days five and six, and an assessment on day seven.",
      },
      {
        question: "How does the company address an absent cleaner?",
        answer:
          "The profile describes preparing standby cleaners and sending a replacement when a cleaner is absent, subject to confirmation of the current service arrangement.",
      },
      {
        question: "How are cleaning quality and customer feedback handled?",
        answer:
          "The profile describes a project coordinator, regular customer communication, quality checks, and a quality-control sheet at each job site. It says sites are evaluated at least weekly, and some are checked more frequently depending on their needs, size, and complexity.",
      },
    ],
    detailsConfirmed: true,
  },
  {
    slug: "green-heaven-events-management-service",
    aliases: ["event-management"],
    title: "Green Heaven Events Management Service",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/green-heaven-events-management-service-hero.jpg",
    icon: Handshake,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "rs-trading-corporation",
    aliases: ["contracting-supply"],
    title: "R.S Trading Corporation",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/r-s-trading-corporation-hero.jpg",
    icon: PackageCheck,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "green-heaven-dairy-farm-1",
    aliases: ["dairy-farm"],
    title: "Green Heaven Dairy Farm-1",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/green-heaven-dairy-farm-1-hero.jpg",
    icon: Tractor,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "green-heaven-land-keeping",
    aliases: ["gardening-landscaping"],
    title: "Green Heaven Land Keeping",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/landscaping-hero.jpg",
    icon: Flower2,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "green-heaven-outsourcing",
    aliases: ["manpower-outsourcing"],
    title: "Green Heaven Outsourcing",
    shortDescription:
      "Listed for providing verified, skilled and unskilled manpower to foreign firms; confirm current scope with the company.",
    intro:
      "The company profile lists providing qualified, skilled, and unskilled manpower, duly verified in character and quality, to foreign firms. Further details should be confirmed with the company.",
    heroImage: "/assets/green-heaven-outsourcing-hero.jpg",
    icon: Users,
    category: "additional",
    offerings: [
      "Qualified, skilled, and unskilled manpower for foreign firms, as listed in the company profile",
    ],
    approach: [
      "The profile refers to verification of personnel in character and quality. Specific roles, deployment terms, and current availability are not described.",
    ],
    detailsConfirmed: true,
  },
  {
    slug: "green-heaven-export-import",
    aliases: ["trading-import-export"],
    title: "Green Heaven Export & Import",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/green-heaven-export-import-hero.jpg",
    icon: Globe,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "first-class-contractor",
    title: "First Class Contractor",
    shortDescription: scopeToConfirm,
    intro: scopeToConfirmIntro,
    heroImage: "/assets/first-class-contractor-hero.jpg",
    icon: HardHat,
    category: "additional",
    offerings: [],
    approach: [],
  },
];
