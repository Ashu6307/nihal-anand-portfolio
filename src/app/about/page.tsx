import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { PageHero } from "@/components/ui/page-hero";
import { ProfilePicture } from "@/components/ui/profile-picture";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { createMetadata, pages } from "@/data/seo";
import { site } from "@/data/site";

export const metadata: Metadata = createMetadata(pages.about);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional profile"
        title="Recruitment expertise with an entrepreneurial mindset."
        description="A founder and recruitment consultant working across IT and Non-IT hiring, staffing support, candidate sourcing, and talent advisory from Noida, India."
      />

      <section className="section about-profile">
        <div className="container about-profile__grid">
          <div className="about-portrait reveal">
            <ProfilePicture
              className="profile-picture--about"
              sizes="(max-width: 560px) calc(100vw - 36px), (max-width: 920px) 480px, 36vw"
            />
            <span className="about-portrait__caption">Founder · Consultant</span>
          </div>
          <div className="about-profile__copy reveal">
            <span className="eyebrow">About Nihal</span>
            <h2>A business-focused approach to recruitment support.</h2>
            <p className="large-copy">
              Nihal Anand works at the intersection of recruitment consultancy,
              talent advisory, and founder-led business collaboration.
            </p>
            <p>
              His professional focus covers IT and Non-IT hiring, candidate
              sourcing, staffing requirements, interview coordination, and the
              practical follow-up needed to keep hiring conversations moving.
            </p>
            <div className="about-profile__location">
              <Icon name="location" size={19} />
              <span>
                <small>Based in</small>
                {profile.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Professional focus"
            title="A connected view of hiring, people, and business needs."
          />
          <ul className="capability-list">
            {site.professionalFocus.map((item) => (
              <li key={item} className="reveal">
                <span className="capability-list__marker" aria-hidden="true" />
                {item}
                <Icon name="arrow" size={18} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section strengths-section">
        <div className="container strengths-grid">
          <div>
            <SectionHeading
              eyebrow="Professional strengths"
              title="Built around communication and consistent follow-through."
              description="Hiring is a sequence of decisions and conversations. These capabilities help keep both aligned."
            />
          </div>
          <div className="strengths-cloud">
            {site.strengths.map((strength) => (
              <span key={strength} className="reveal">
                <Icon name="check" size={17} />
                {strength}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section nextedge-section">
        <div className="container nextedge-card section-grid reveal">
          <div className="nextedge-card__mark">NE</div>
          <div className="nextedge-card__copy">
            <span className="eyebrow">The NextEdge connection</span>
            <h2>A professional portfolio, connected to the official business platform.</h2>
            <p>
              NextEdge Talent is linked here as the official business and platform
              website for hiring and recruitment-related discovery. This personal
              portfolio introduces Nihal&apos;s professional perspective; it does not
              replace the official platform.
            </p>
          </div>
          <ButtonLink
            href={profile.officialWebsite}
            external
            variant="secondary"
            ariaLabel="Visit NextEdge Talent official website — opens in a new tab"
          >
            Visit official website
          </ButtonLink>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="Work style"
            title="Principles for better professional collaboration."
          />
          <div className="values-grid">
            {site.values.map((value) => (
              <article key={value.title} className="value-card reveal">
                <span className="value-card__marker" aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
