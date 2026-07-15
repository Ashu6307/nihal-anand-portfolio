import type { Metadata } from "next";
import { Icon } from "@/components/ui/icon";
import { PageHero } from "@/components/ui/page-hero";
import { profile } from "@/data/profile";
import { createMetadata, pages } from "@/data/seo";

export const metadata: Metadata = createMetadata(pages.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s begin with a clear conversation."
        description="For hiring collaboration, recruitment consulting, business partnership, and professional networking, choose a direct professional channel."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-intro reveal">
            <span className="eyebrow">Open to connect</span>
            <h2>Professional conversations, direct channels.</h2>
            <p>
              No form, no inbox maze. Choose the channel that best matches your
              reason for getting in touch.
            </p>
            <div className="contact-location">
              <Icon name="location" size={21} />
              <span>
                <small>Location</small>
                {profile.location}
              </span>
            </div>
          </div>

          <div className="contact-options">
            <a
              className="contact-option reveal"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Nihal Anand on LinkedIn — opens in a new tab"
            >
              <span className="contact-option__icon">
                <Icon name="linkedin" size={25} />
              </span>
              <span className="contact-option__content">
                <small>Primary channel</small>
                <strong>Connect on LinkedIn</strong>
                <p>For hiring, partnership, and professional networking conversations.</p>
              </span>
              <Icon name="arrow" size={22} />
            </a>

            <a
              className="contact-option reveal"
              href={profile.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit NextEdge Talent official website — opens in a new tab"
            >
              <span className="contact-option__icon contact-option__icon--gold">
                <Icon name="building" size={25} />
              </span>
              <span className="contact-option__content">
                <small>Official business platform</small>
                <strong>Visit NextEdge Talent</strong>
                <p>For recruitment-related discovery through the official website.</p>
              </span>
              <Icon name="arrow" size={22} />
            </a>

            <a
              className="contact-option reveal"
              href={profile.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nihal Anand's WhatsApp Channel — opens in a new tab"
            >
              <span className="contact-option__icon contact-option__icon--channel">
                <Icon name="people" size={25} />
              </span>
              <span className="contact-option__content">
                <small>Professional updates</small>
                <strong>Follow WhatsApp Channel</strong>
                <p>Follow recruitment, hiring, and professional updates through the official channel.</p>
              </span>
              <Icon name="arrow" size={22} />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-note-section">
        <div className="container contact-note reveal">
          <span>Before you connect</span>
          <p>
            Sharing the role, hiring location, experience range, and priority
            timeline can help make the first conversation more useful.
          </p>
        </div>
      </section>
    </>
  );
}
