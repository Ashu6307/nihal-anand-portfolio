import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import type { SeoPage } from "@/types/content";

export const keywords = [
  "Nihal Anand",
  "Founder & Recruitment Consultant",
  "Recruitment Consultant in Noida",
  "IT Recruitment",
  "Non-IT Recruitment",
  "Talent Advisory",
  "PAN India Recruitment",
  "NextEdge Talent",
  "Hiring Consultant",
  "Permanent Staffing",
  "Bulk Hiring",
];

export const pages = {
  home: {
    title: site.title,
    description: site.description,
    path: "/",
  },
  about: {
    title: "About Nihal Anand | Recruitment Consultant",
    description:
      "Learn about Nihal Anand's professional focus across recruitment consultancy, IT and Non-IT hiring, staffing, sourcing, and talent advisory.",
    path: "/about",
  },
  services: {
    title: "Hiring Services | Nihal Anand",
    description:
      "Explore recruitment and hiring support across IT, Non-IT, bulk hiring, permanent staffing, sourcing, coordination, and talent advisory.",
    path: "/services",
  },
  experience: {
    title: "Business Journey | Nihal Anand",
    description:
      "Explore Nihal Anand's founder journey, recruitment and business partnerships, entrepreneurial background, and education.",
    path: "/experience",
  },
  contact: {
    title: "Contact Nihal Anand | Hiring Collaboration",
    description:
      "Connect with Nihal Anand for hiring collaboration, recruitment consulting, business partnership, and professional networking.",
    path: "/contact",
  },
} satisfies Record<string, SeoPage>;

export function createMetadata(page: SeoPage): Metadata {
  const canonical = new URL(page.path, site.url).toString();
  const socialImage = new URL("/images/nihal-anand-og.png", site.url).toString();

  return {
    title: page.title,
    description: page.description,
    keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: canonical,
      siteName: profile.name,
      title: page.title,
      description: page.description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Nihal Anand, Founder and Recruitment Consultant",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialImage],
    },
  };
}
