import Link from "next/link";
import { Brand } from "@/components/ui/brand";
import { Icon } from "@/components/ui/icon";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta reveal">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>Good hiring starts with a clear requirement.</h2>
          </div>
          <Link className="footer-cta__link" href="/contact">
            Discuss a hiring need
            <Icon name="arrow" size={20} />
          </Link>
        </div>

        <div className="footer-grid">
          <div className="footer-brand reveal">
            <Brand />
            <p>
              Founder-led recruitment consulting for IT, Non-IT, staffing, and
              PAN India hiring conversations.
            </p>
            <span className="footer-location">
              <Icon name="location" size={17} />
              {profile.location}
            </span>
          </div>

          <div className="footer-column reveal">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-column reveal">
            <h3>Connect</h3>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.officialWebsite} target="_blank" rel="noopener noreferrer">
              NextEdge Talent
            </a>
            <a
              href={profile.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Nihal Anand's WhatsApp Channel — opens in a new tab"
            >
              WhatsApp Channel
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nihal Anand. All rights reserved.</span>
          <span>Recruitment consultancy · Noida, India</span>
        </div>
      </div>
    </footer>
  );
}
