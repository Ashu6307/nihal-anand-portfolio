export type IconName =
  | "arrow"
  | "briefcase"
  | "building"
  | "check"
  | "compass"
  | "layers"
  | "linkedin"
  | "location"
  | "people"
  | "search"
  | "spark"
  | "target";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  tags: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface JourneyItem {
  title: string;
  organization: string;
  summary: string;
  focusAreas: string[];
  category: "Founder" | "Business partnership" | "Entrepreneurship";
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
}

export interface SeoPage {
  title: string;
  description: string;
  path: string;
}
