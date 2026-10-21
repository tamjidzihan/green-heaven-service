import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Building2,
  Flower2,
  Globe,
  Handshake,
  HardHat,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Tractor,
  Users,
} from "lucide-react";

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
};

export const services: Service[] = [
  {
    slug: "rafi-real-estate",
    title: "Rafi Real Estate",
    shortDescription:
      "Property consultation, residential and commercial real estate solutions.",
    intro:
      "Rafi Real Estate is an active business concern under Green Heaven Service, providing real estate advisory, property management, and residential and commercial leasing support. Contact us to discuss your property requirements.",
    heroImage: "/assets/rafi-real-estate-hero.jpg",
    icon: Building2,
    category: "additional",
    offerings: [
      "Residential and commercial property consultation",
      "Real estate advisory and asset management",
      "Site evaluation and leasing coordination",
    ],
    approach: [
      "Property requirements are evaluated based on individual and commercial needs.",
      "Professional coordination and verified documentation support.",
    ],
  },
  {
    slug: "green-heaven-security-service",
    aliases: ["security-services"],
    title: "Green Heaven Security Service",
    shortDescription:
      "Security personnel, consultancy, and risk-managed protection shaped around site needs.",
    intro:
      "Green Heaven Security Service lists security personnel, consultancy, risk assessment, planning, training, verification, escort, cash-in-transit, and equipment support among its security services.",
    heroImage: "/assets/green-heaven-security-service-hero.jpg",
    icon: ShieldCheck,
    category: "primary",
    offerings: [
      "Security personnel",
      "Security consultancy and risk assessments",
      "Security planning and training",
      "Employee and background verification",
      "Mobile escort services",
      "Cash-in-transit security",
      "Security equipment installation, maintenance, and rental",
    ],
    approach: [
      "Security recruitment includes background checks and police verification.",
      "Security staff receive induction and training.",
      "Site needs and risks inform security planning.",
    ],
  },
  {
    slug: "green-heaven-pest-control-service",
    aliases: ["pest-control"],
    title: "Green Heaven Pest Control Service",
    shortDescription:
      "Pest-control solutions for common insects, rodents, and pre/post construction termites.",
    intro:
      "Green Heaven Pest Control Service lists pest-control options for common insect and rodent concerns, including termite control before and after construction.",
    heroImage: "/assets/green-heaven-pest-control-service-hero.jpg",
    icon: Bug,
    category: "primary",
    offerings: [
      "Cockroach control",
      "Rodent control",
      "Pre- and post-construction termite control",
      "Mosquito and fly control",
      "Ant and other insect control",
    ],
    approach: [
      "Site evaluations and risk assessment support planning.",
      "Health and safety training is part of the stated operating approach.",
      "Specific treatment methods and products are confirmed for each site.",
    ],
  },
  {
    slug: "green-heaven-cleaning-service",
    aliases: ["cleaning-housekeeping"],
    title: "Green Heaven Cleaning Service",
    shortDescription:
      "Cleaning and housekeeping services for corporate, industrial, and residential properties.",
    intro:
      "Green Heaven Cleaning Service provides cleaning and housekeeping services for corporate, industrial, commercial, and residential settings, with staffing and specialist deep-cleaning options.",
    heroImage: "/assets/cleaning-hero.jpg",
    icon: Sparkles,
    category: "primary",
    offerings: [
      "Corporate, industrial, commercial, and residential cleaning",
      "Janitorial staffing",
      "Glass and carpet cleaning",
      "Sofa and chair shampooing",
      "Floor scrubbing and polishing",
      "Water-tank cleaning",
      "Pressure washing and deep cleaning",
    ],
    approach: [
      "Cleaning staff receive a stated seven-day training period.",
      "Work schedules and attendance are managed.",
      "Project coordinators, quality checks, standby staff, and worker replacement are supported operational practices.",
    ],
  },
  {
    slug: "green-heaven-events-management-service",
    aliases: ["event-management"],
    title: "Green Heaven Events Management Service",
    shortDescription:
      "Event planning, coordination, and logistical management for corporate and private functions.",
    intro:
      "Green Heaven Events Management Service is listed among Green Heaven Service's business activities. Contact our team to discuss your event planning, staffing, and coordination requirements.",
    heroImage: "/assets/green-heaven-events-management-service-hero.jpg",
    icon: Handshake,
    category: "additional",
    offerings: [
      "Corporate event planning and coordination",
      "Event security and crowd management",
      "Logistical setup and venue coordination",
    ],
    approach: [
      "Tailored planning based on event scale and guest requirements.",
      "Experienced event supervisors and on-ground support staff.",
    ],
  },
  {
    slug: "rs-trading-corporation",
    aliases: ["contracting-supply"],
    title: "R.S Trading Corporation",
    shortDescription:
      "Commercial trading, supply solutions, and enterprise procurement.",
    intro:
      "R.S Trading Corporation operates as a commercial trading and supply activity under Green Heaven Service. Contact us to discuss procurement, trading partnerships, and corporate supplies.",
    heroImage: "/assets/r-s-trading-corporation-hero.jpg",
    icon: PackageCheck,
    category: "additional",
    offerings: [
      "Commercial trading and distribution",
      "Corporate supply and procurement",
      "Bulk institutional supplies",
    ],
    approach: [
      "Verified vendor networks ensuring dependable quality.",
      "Timely order delivery and commercial supply fulfillment.",
    ],
  },
  {
    slug: "green-heaven-dairy-farm-1",
    aliases: ["dairy-farm"],
    title: "Green Heaven Dairy Farm-1",
    shortDescription:
      "Dairy farm operations, livestock care, and fresh dairy supply activities.",
    intro:
      "Green Heaven Dairy Farm-1 is listed among Green Heaven Service's business activities. Contact the company to discuss current dairy production, supply partnerships, and scope.",
    heroImage: "/assets/green-heaven-dairy-farm-1-hero.jpg",
    icon: Tractor,
    category: "additional",
    offerings: [
      "Dairy production and milk supply",
      "Livestock welfare and herd management",
      "Agricultural farm operations",
    ],
    approach: [
      "Commitment to hygienic farm practices and animal health.",
      "Quality dairy sourcing and fresh delivery management.",
    ],
  },
  {
    slug: "green-heaven-land-keeping",
    aliases: ["gardening-landscaping"],
    title: "Green Heaven Land Keeping",
    shortDescription:
      "Landscaping, grounds maintenance, and property care for green spaces.",
    intro:
      "Green Heaven Land Keeping handles landscaping, grounds maintenance, and outdoor estate care. Contact the company to discuss site evaluations and groundskeeping schedules.",
    heroImage: "/assets/landscaping-hero.jpg",
    icon: Flower2,
    category: "additional",
    offerings: [
      "Gardening and landscape development",
      "Groundskeeping and lawn maintenance",
      "Tree trimming and horticultural care",
    ],
    approach: [
      "Site-specific horticulture and soil assessment.",
      "Scheduled seasonal upkeep and grounds preservation.",
    ],
  },
  {
    slug: "green-heaven-outsourcing",
    aliases: ["manpower-outsourcing"],
    title: "Green Heaven Outsourcing",
    shortDescription:
      "Manpower outsourcing, workforce deployment, and staffing solutions.",
    intro:
      "Green Heaven Outsourcing provides manpower outsourcing and workforce deployment across commercial and facility operations. Contact us to discuss staffing requirements.",
    heroImage: "/assets/green-heaven-outsourcing-hero.jpg",
    icon: Users,
    category: "additional",
    offerings: [
      "Skilled and semi-skilled staffing",
      "Corporate and facility workforce deployment",
      "Temporary and contractual manpower solutions",
    ],
    approach: [
      "Candidate screening and identity verification.",
      "Workplace induction and ongoing deployment oversight.",
    ],
  },
  {
    slug: "green-heaven-export-import",
    aliases: ["trading-import-export"],
    title: "Green Heaven Export & Import",
    shortDescription:
      "Cross-border trade, export-import operations, and logistical coordination.",
    intro:
      "Green Heaven Export & Import manages international trading, freight coordination, and global sourcing activities. Contact our trade desk to discuss requirements.",
    heroImage: "/assets/green-heaven-export-import-hero.jpg",
    icon: Globe,
    category: "additional",
    offerings: [
      "Export and import facilitation",
      "International trade logistics",
      "Global sourcing and documentation",
    ],
    approach: [
      "Adherence to statutory trade guidelines and import-export regulations.",
      "Reliable freight and international supply chain coordination.",
    ],
  },
  {
    slug: "first-class-contractor",
    title: "First Class Contractor",
    shortDescription:
      "Govt. and corporate civil contracting, infrastructure, and engineering works.",
    intro:
      "First Class Contractor operates across contracting, project execution, and supply works under Green Heaven Service. Contact our engineering and contracting division to discuss tenders and project specifications.",
    heroImage: "/assets/first-class-contractor-hero.jpg",
    icon: HardHat,
    category: "additional",
    offerings: [
      "Civil contracting and infrastructure works",
      "Government tender and corporate project execution",
      "Site engineering and project management",
    ],
    approach: [
      "Compliance with structural and contractual standards.",
      "Experienced project engineers and rigorous quality supervision.",
    ],
  },
];
