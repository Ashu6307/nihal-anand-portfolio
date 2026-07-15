import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { ProfilePicture } from "@/components/ui/profile-picture";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { profile } from "@/data/profile";
import { createMetadata, pages } from "@/data/seo";
import { servicePreviewTitles, services } from "@/data/services";
import { hiringProcess, site } from "@/data/site";

export const metadata: Metadata = createMetadata(pages.home);

const servicePreview = services.filter((service) =>
  servicePreviewTitles.some((title) => title === service.title),
);

export default function HomePage() {
  return (
    <>
      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div className="hero__copy">
            <div className="hero__identity reveal">
              <span className="status-dot" />
              <span>{profile.name}</span>
              <span className="hero__identity-line" />
              <span>{profile.title}</span>
            </div>
            <h1 id="hero-title" className="reveal reveal--delay-1">
              Recruitment consulting for <em>IT, Non-IT,</em> and PAN India
              hiring needs.
            </h1>
            <p className="hero__lead reveal reveal--delay-2">
              A founder-led recruitment profile focused on talent advisory,
              candidate sourcing, bulk hiring support, permanent staffing, and
              hiring coordination for growing businesses.
            </p>
            <div className="hero__actions reveal reveal--delay-3">
              <ButtonLink href="/contact">Discuss hiring requirement</ButtonLink>
              <ButtonLink
                href={profile.officialWebsite}
                external
                variant="secondary"
                ariaLabel="Visit NextEdge Talent official website — opens in a new tab"
              >
                Visit NextEdge Talent
              </ButtonLink>
            </div>
            <div className="hero__meta reveal reveal--delay-3">
              <span>
                <Icon name="location" size={17} />
                {profile.location}
              </span>
              <span>Founder-led · Relationship-focused</span>
            </div>
          </div>

          <aside className="profile-card reveal reveal--delay-2" aria-label="Professional summary">
            <div className="profile-card__topline">
              <span>Professional profile</span>
              <span>Founder · Consultant</span>
            </div>
            <div className="profile-card__portrait">
              <ProfilePicture
                priority
                className="profile-picture--hero"
                sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 768px) 520px, (max-width: 920px) 46vw, (max-width: 1180px) 34vw, 420px"
              />
              <span className="profile-card__availability">
                <i /> Open to collaboration
              </span>
            </div>
            <div className="profile-card__content">
              <p>Hiring focus</p>
              <ul>
                <li>Recruitment consultancy</li>
                <li>Talent advisory</li>
                <li>Business hiring support</li>
              </ul>
            </div>
            <div className="profile-card__footer">
              <span>NOIDA</span>
              <span>INDIA</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="focus-strip" aria-label="Core hiring focus">
        <div className="container focus-strip__inner">
          {site.focusAreas.map((item) => (
            <span key={item}>
              <i aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-intro-row">
            <SectionHeading
              eyebrow="Hiring capabilities"
              title="Practical support across the hiring journey."
              description="From understanding a requirement to keeping interviews moving, every service is built around clear recruitment coordination."
            />
            <ButtonLink href="/services" variant="text">
              Explore all services
            </ButtonLink>
          </div>
          <div className="services-grid services-grid--preview">
            {servicePreview.map((service) => (
              <ServiceCard key={service.title} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface process-section">
        <div className="container">
          <SectionHeading
            eyebrow="A considered process"
            title="Structured enough to stay clear. Flexible enough to stay human."
            description="A clear view of how a hiring requirement can move from first conversation to closure support."
          />
          <ol className="process-grid">
            {hiringProcess.map((step) => (
              <li key={step.title} className="process-step reveal">
                <span className="process-step__marker" aria-hidden="true" />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section credibility-section">
        <div className="container credibility-grid">
          <div className="credibility-visual reveal" aria-hidden="true">
            <span className="credibility-visual__label">Founder perspective</span>
            <strong>People</strong>
            <i />
            <strong>Process</strong>
            <i />
            <strong>Partnership</strong>
            <small>Three parts of a considered hiring conversation.</small>
          </div>
          <div className="credibility-copy reveal">
            <span className="eyebrow">Business credibility</span>
            <h2>Recruitment thinking shaped by a founder&apos;s point of view.</h2>
            <p>
              Nihal Anand&apos;s professional profile connects recruitment consulting,
              business collaboration, and hiring support through NextEdge Talent
              and related business partnerships.
            </p>
            <p>
              The focus is practical: understand the requirement, communicate
              clearly, build suitable talent pipelines, and support the people
              involved through each stage of the process.
            </p>
            <ButtonLink href="/about" variant="text">
              Read the professional profile
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta section-grid reveal">
          <span className="eyebrow">Professional connections</span>
          <h2>Let&apos;s connect around people, hiring, and business.</h2>
          <div className="final-cta__actions">
            <ButtonLink
              href={profile.linkedin}
              external
              ariaLabel="Connect with Nihal Anand on LinkedIn — opens in a new tab"
            >
              Connect on LinkedIn
            </ButtonLink>
            <ButtonLink
              href={profile.officialWebsite}
              external
              variant="secondary"
              ariaLabel="Visit NextEdge Talent official website — opens in a new tab"
            >
              Visit NextEdge Talent
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
