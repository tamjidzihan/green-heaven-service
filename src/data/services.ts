import type { LucideIcon } from "lucide-react";
import {
  Bug,
  Building2,
  Flower2,
  Handshake,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Tractor,
  Users,
} from "lucide-react";

export type Service = {
  slug: string;
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
    slug: "security-services",
    title: "Security Services",
    shortDescription:
      "Security personnel and support shaped around site needs and risk.",
    intro:
      "Green Heaven Service lists security personnel, consultancy, risk assessment, planning, training, verification, escort, cash-in-transit, and equipment support among its security services.",
    heroImage: "/assets/security-hero.jpg",
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
      "Site needs and risks can inform security planning.",
    ],
  },
  {
    slug: "cleaning-housekeeping",
    title: "Cleaning & Housekeeping",
    shortDescription:
      "Cleaning and housekeeping services for a range of property types.",
    intro:
      "Cleaning and housekeeping services are listed for corporate, industrial, commercial, and residential settings, with staffing and specialist cleaning options.",
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
    slug: "pest-control",
    title: "Pest Control",
    shortDescription:
      "Pest-control services for common insects and rodents.",
    intro:
      "Green Heaven Service lists pest-control options for common insect and rodent concerns, including termite control before and after construction.",
    heroImage: "/assets/facility-hero.jpg",
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
      "Specific treatment methods and products should be confirmed for each site.",
    ],
  },
  {
    slug: "manpower-outsourcing",
    title: "Manpower Outsourcing",
    shortDescription: "Manpower outsourcing is a listed business activity.",
    intro:
      "Manpower outsourcing is one of Green Heaven Service's listed business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/facility-hero.jpg",
    icon: Users,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "gardening-landscaping",
    title: "Gardening & Landscaping",
    shortDescription: "Gardening and landscaping are listed business activities.",
    intro:
      "Gardening and landscaping are listed among Green Heaven Service's business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/landscaping-hero.jpg",
    icon: Flower2,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "event-management",
    title: "Event Management",
    shortDescription: "Event management is a listed business activity.",
    intro:
      "Event management is listed among Green Heaven Service's business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/facility-hero.jpg",
    icon: Handshake,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "contracting-supply",
    title: "Contracting & Supply",
    shortDescription: "Contracting and supply are listed business activities.",
    intro:
      "Contracting and supply are listed among Green Heaven Service's business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/facility-hero.jpg",
    icon: PackageCheck,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "trading-import-export",
    title: "Trading & Import-Export",
    shortDescription: "Trading and import-export are listed activities.",
    intro:
      "Trading and import-export are listed among Green Heaven Service's business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/facility-hero.jpg",
    icon: Building2,
    category: "additional",
    offerings: [],
    approach: [],
  },
  {
    slug: "dairy-farm",
    title: "Dairy Farm",
    shortDescription: "Dairy farming is a listed business activity.",
    intro:
      "Dairy farm is listed among Green Heaven Service's business activities. Contact the company to discuss your requirements and confirm current scope.",
    heroImage: "/assets/dairy-hero.jpg",
    icon: Tractor,
    category: "additional",
    offerings: [],
    approach: [],
  },
];
