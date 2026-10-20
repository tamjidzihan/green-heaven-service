export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization?: string;
  initials: string;
}

/**
 * Client feedback and service evaluations representing commercial facility partners,
 * residential estate management, and corporate offices served by Green Heaven Service.
 */
export const row1Testimonials: Testimonial[] = [
  {
    id: "fb-1",
    author: "Tanvir Ahmed",
    role: "Facility Director",
    organization: "Commercial Plaza, Dhaka",
    initials: "TA",
    quote:
      "The deployment of uniformed security personnel was disciplined and well-organized from day one. Their supervisor conducts regular on-site spot checks, which gives our tenants immense peace of mind.",
  },
  {
    id: "fb-2",
    author: "Nasreen Sultana",
    role: "Operations Manager",
    organization: "Corporate Headquarters, Gulshan",
    initials: "NS",
    quote:
      "Green Heaven Service manages our daily office housekeeping and sanitation. Their cleaning staff is punctual, courteous, and strictly follows the seven-day training guidelines promised.",
  },
  {
    id: "fb-3",
    author: "Kazi Mahmudur Rahman",
    role: "Estate Secretary",
    organization: "Residential Complex, Lalmatia",
    initials: "KR",
    quote:
      "Pest control in a multi-story residential building requires systematic scheduling and safe chemicals. Green Heaven delivered thorough treatment with minimal disruption to residents.",
  },
  {
    id: "fb-4",
    author: "Farhana Chowdhury",
    role: "Administrative Lead",
    organization: "Tech & Logistics Hub, Uttara",
    initials: "FC",
    quote:
      "Whenever a security guard needed a scheduled replacement, standby personnel were provided immediately without any gap in coverage. Their operational reliability is commendable.",
  },
];

export const row2Testimonials: Testimonial[] = [
  {
    id: "fb-5",
    author: "Syed Imran Hossain",
    role: "Supply Chain & Site Manager",
    organization: "Warehouse Depot, Gazipur",
    initials: "SH",
    quote:
      "Securing heavy inventory and monitoring vehicle access demands vigilance. The night shift security team maintains complete gate logs and coordinates seamlessly with our dispatch crew.",
  },
  {
    id: "fb-6",
    author: "Rehana Akter",
    role: "Branch Coordinator",
    organization: "Financial Institution, Motijheel",
    initials: "RA",
    quote:
      "Deep cleaning and hygiene checks are conducted every weekend with verified checklists. The standard of floor maintenance and reception presentation has consistently improved.",
  },
  {
    id: "fb-7",
    author: "Dr. Asifuzzaman",
    role: "Clinic Administrator",
    organization: "Specialized Healthcare Center, Dhanmondi",
    initials: "AZ",
    quote:
      "In healthcare environments, sanitation and perimeter security cannot be compromised. Green Heaven Service understands strict hygiene protocols and handles their duties professionally.",
  },
  {
    id: "fb-8",
    author: "Mahfuzul Haque",
    role: "Property Manager",
    organization: "Commercial Tower, Banani",
    initials: "MH",
    quote:
      "Prompt communication and transparent billing. Whenever we requested additional manpower for seasonal facility overhauls, their management team responded within hours.",
  },
];
