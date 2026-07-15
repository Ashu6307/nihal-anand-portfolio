import type { ProcessStep } from "@/types/content";

export const site = {
  url: "https://nihal-anand-portfolio.pages.dev",
  title: "Nihal Anand | Founder & Recruitment Consultant",
  description:
    "Professional portfolio of Nihal Anand, a founder and recruitment consultant focused on IT and Non-IT hiring, talent advisory, staffing, and PAN India recruitment.",
  focusAreas: [
    "IT Recruitment",
    "Non-IT Recruitment",
    "Bulk Hiring",
    "Permanent Staffing",
    "PAN India Hiring",
  ],
  professionalFocus: [
    "Recruitment Consultancy",
    "Talent Advisory",
    "IT Hiring",
    "Non-IT Hiring",
    "Bulk Hiring",
    "Permanent Staffing",
    "Candidate Sourcing",
    "Interview Coordination",
    "Business Hiring Support",
  ],
  strengths: [
    "Client Communication",
    "Requirement Understanding",
    "Candidate Sourcing",
    "Screening Coordination",
    "Hiring Follow-up",
    "Business Development",
    "Recruitment Operations",
    "Talent Advisory",
  ],
  values: [
    {
      title: "Clarity first",
      description:
        "Clear requirements and realistic communication create a stronger starting point for every hiring conversation.",
    },
    {
      title: "Responsive coordination",
      description:
        "Timely follow-ups help candidates and hiring teams stay aligned through a multi-step process.",
    },
    {
      title: "Confidential by default",
      description:
        "Professional information is handled with discretion and shared only where the hiring process calls for it.",
    },
    {
      title: "Relationship-led",
      description:
        "Long-term professional collaboration is built through consistency, accountability, and practical support.",
    },
  ],
} as const;

export const hiringProcess: ProcessStep[] = [
  {
    title: "Requirement understanding",
    description: "Clarify the role, business context, location, and hiring priorities.",
  },
  {
    title: "Hiring criteria",
    description: "Shape practical expectations around experience, capability, and fit.",
  },
  {
    title: "Candidate sourcing",
    description: "Build relevant talent pipelines across appropriate sourcing channels.",
  },
  {
    title: "Profile screening",
    description: "Review candidate relevance before profiles move into discussion.",
  },
  {
    title: "Interview coordination",
    description: "Keep scheduling, communication, and follow-ups moving clearly.",
  },
  {
    title: "Closure support",
    description: "Assist with final coordination and communication around next steps.",
  },
];
