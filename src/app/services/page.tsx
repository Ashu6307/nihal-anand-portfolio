import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { createMetadata, pages } from "@/data/seo";
import { services } from "@/data/services";

export const metadata: Metadata = createMetadata(pages.services);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hiring services"
        title="Recruitment support built around the requirement."
        description="Recruitment and hiring support across IT, Non-IT, bulk hiring, staffing, and talent advisory needs."
      />

      <section className="section services-page">
        <div className="container">
          <div className="services-page__intro">
            <SectionHeading
              eyebrow="Service portfolio"
              title="From focused searches to multi-role coordination."
              description="Each engagement begins with role clarity and adapts to the hiring context, location, and level of coordination required."
            />
            <p className="services-page__note">
              Scope and suitability are discussed against the actual hiring
              requirement. No outcome or selection is guaranteed.
            </p>
          </div>
          <div className="services-grid services-grid--full">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-principles">
        <div className="container service-principles__grid">
          <div className="service-principles__title reveal">
            <span className="eyebrow">Working approach</span>
            <h2>Clear inputs. Relevant search. Consistent coordination.</h2>
          </div>
          <div className="service-principles__items">
            <article className="reveal">
              <span className="service-principles__marker" aria-hidden="true" />
              <h3>Requirement-led</h3>
              <p>Search activity begins only after the role and hiring context are understood.</p>
            </article>
            <article className="reveal">
              <span className="service-principles__marker" aria-hidden="true" />
              <h3>Communication-aware</h3>
              <p>Candidates and hiring stakeholders benefit from timely, realistic updates.</p>
            </article>
            <article className="reveal">
              <span className="service-principles__marker" aria-hidden="true" />
              <h3>Business-minded</h3>
              <p>Recruitment choices are considered against the practical needs of the business.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section service-contact">
        <div className="container service-contact__inner section-grid reveal">
          <div>
            <span className="eyebrow">Have a requirement in mind?</span>
            <h2>Start with the role, location, and hiring priority.</h2>
          </div>
          <ButtonLink href="/contact">Discuss hiring requirement</ButtonLink>
        </div>
      </section>
    </>
  );
}
