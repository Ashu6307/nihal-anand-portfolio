import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, journey } from "@/data/experience";
import { createMetadata, pages } from "@/data/seo";

export const metadata: Metadata = createMetadata(pages.experience);

const founderRoles = journey.filter((item) => item.category === "Founder");
const partnershipRoles = journey.filter(
  (item) => item.category === "Business partnership",
);
const entrepreneurialRoles = journey.filter(
  (item) => item.category === "Entrepreneurship",
);

function JourneyCard({ item }: { item: (typeof journey)[number] }) {
  return (
    <article className="journey-card reveal">
      <div className="journey-card__marker">
        <span aria-hidden="true" />
      </div>
      <div className="journey-card__content">
        <span className="journey-card__category">{item.category}</span>
        <h3>{item.title}</h3>
        <strong>{item.organization}</strong>
        <p>{item.summary}</p>
        <ul className="tag-list" aria-label={`${item.organization} focus areas`}>
          {item.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Business journey"
        title="A professional path shaped by building, partnering, and recruiting."
        description="Founder experience, recruitment and business partnerships, entrepreneurial operations, and a technical education."
      />

      <section className="section journey-section">
        <div className="container journey-layout">
          <div className="journey-layout__heading">
            <SectionHeading
              eyebrow="Founder journey"
              title="Building a recruitment-led professional identity."
              description="A founder role that brings together hiring support, professional networking, and business collaboration."
            />
          </div>
          <div className="journey-list">
            {founderRoles.map((item) => (
              <JourneyCard key={item.organization} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface journey-section">
        <div className="container journey-layout">
          <div className="journey-layout__heading">
            <SectionHeading
              eyebrow="Recruitment & business partnerships"
              title="Collaboration across connected professional networks."
              description="Business partnership roles are presented without unverified dates or confidential client details."
            />
          </div>
          <div className="journey-list">
            {partnershipRoles.map((item) => (
              <JourneyCard key={item.organization} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container journey-layout">
          <div className="journey-layout__heading">
            <SectionHeading
              eyebrow="Entrepreneurial background"
              title="Hands-on business experience beyond recruitment."
            />
          </div>
          <div className="journey-list">
            {entrepreneurialRoles.map((item) => (
              <JourneyCard key={item.organization} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section education-section">
        <div className="container education-card section-grid reveal">
          <div>
            <span className="eyebrow">Education</span>
            <h2>Technical foundations.</h2>
          </div>
          <div className="education-card__details">
            <span>{education.period}</span>
            <h3>{education.institution}</h3>
            <p>{education.qualification}</p>
          </div>
        </div>
      </section>
    </>
  );
}
