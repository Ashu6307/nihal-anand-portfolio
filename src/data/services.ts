import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    title: "IT Recruitment",
    description:
      "Support for technology and digital hiring requirements through role understanding, candidate sourcing, and screening coordination.",
    icon: "layers",
    tags: ["Technology roles", "Digital teams", "Screening support"],
  },
  {
    title: "Non-IT Recruitment",
    description:
      "Hiring support for business, operations, sales, manufacturing, support, and other Non-IT roles.",
    icon: "briefcase",
    tags: ["Business roles", "Operations", "Cross-functional hiring"],
  },
  {
    title: "Bulk Hiring",
    description:
      "Structured hiring coordination for multiple openings, candidate pipelines, and follow-up management.",
    icon: "people",
    tags: ["Multiple openings", "Pipeline planning", "Coordination"],
  },
  {
    title: "Permanent Staffing",
    description:
      "Recruitment support for long-term, full-time hiring needs with attention to role fit and process continuity.",
    icon: "building",
    tags: ["Full-time roles", "Long-term hiring", "Process support"],
  },
  {
    title: "White-Collar Hiring",
    description:
      "Support for professional, office-based, management, and business roles across functional teams.",
    icon: "target",
    tags: ["Professional roles", "Management", "Business functions"],
  },
  {
    title: "Blue-Collar Hiring",
    description:
      "Hiring coordination support for operational and workforce roles where the requirement and location call for it.",
    icon: "people",
    tags: ["Workforce roles", "Operations", "Location-led hiring"],
  },
  {
    title: "Mid & Senior Level Hiring",
    description:
      "Sourcing and coordination support for experienced professionals and leadership-linked roles.",
    icon: "compass",
    tags: ["Experienced talent", "Leadership-linked", "Focused search"],
  },
  {
    title: "PAN India Recruitment",
    description:
      "Hiring support across locations through remote coordination and clear recruitment communication.",
    icon: "location",
    tags: ["Multi-location", "Remote coordination", "India-wide"],
  },
  {
    title: "Candidate Sourcing",
    description:
      "Candidate search shaped by role criteria, job portals, LinkedIn, referrals, and relevant market mapping.",
    icon: "search",
    tags: ["Role criteria", "Market search", "Talent pipelines"],
  },
  {
    title: "Interview Coordination",
    description:
      "Scheduling, communication, follow-ups, and practical support through the hiring process.",
    icon: "check",
    tags: ["Scheduling", "Follow-ups", "Candidate communication"],
  },
  {
    title: "Talent Advisory",
    description:
      "Guidance around hiring requirements, role clarity, candidate expectations, and recruitment flow.",
    icon: "spark",
    tags: ["Requirement clarity", "Hiring guidance", "Process alignment"],
  },
];

export const servicePreviewTitles = [
  "IT Recruitment",
  "Non-IT Recruitment",
  "Bulk Hiring",
  "Permanent Staffing",
  "Talent Advisory",
] as const;
