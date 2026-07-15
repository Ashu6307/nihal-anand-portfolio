import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteLoader } from "@/components/site-loader";
import { MotionObserver } from "@/components/motion-observer";
import { profile } from "@/data/profile";
import { createMetadata, pages } from "@/data/seo";
import { site } from "@/data/site";
import "./globals.css";

const baseMetadata = createMetadata(pages.home);

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s",
  },
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  category: "Recruitment consulting",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: site.url,
    image: new URL("/images/nihal-anand-profile.jpg", site.url).toString(),
    sameAs: [profile.linkedin, profile.officialWebsite, profile.whatsappChannel],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    knowsAbout: [
      "IT recruitment",
      "Non-IT recruitment",
      "Talent advisory",
      "Permanent staffing",
      "Bulk hiring",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url: site.url,
    description: site.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nihal Anand Recruitment Consulting",
    url: site.url,
    image: new URL("/images/nihal-anand-og.png", site.url).toString(),
    founder: {
      "@type": "Person",
      name: profile.name,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Recruitment consultancy",
      "Talent advisory",
      "IT and Non-IT hiring support",
    ],
  },
];

const themeScript = `
  (() => {
    try {
      const stored = localStorage.getItem('nihal-theme');
      const theme = stored === 'light' || stored === 'dark'
        ? stored
        : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = 'light';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <noscript>
          <style>{`.site-loader { display: none !important; }`}</style>
        </noscript>
        <SiteLoader />
        <MotionObserver />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
