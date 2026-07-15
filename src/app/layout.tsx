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
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      {
        url: "/favicon-32x32.png?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png?v=2",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      {
        url: "/apple-touch-icon.png?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
    const root = document.documentElement;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const navigationEntry = performance.getEntriesByType('navigation')[0];
    const navigationType = navigationEntry && navigationEntry.type;
    let sameOriginReferrer = false;

    try {
      sameOriginReferrer = Boolean(document.referrer) &&
        new URL(document.referrer).origin === location.origin;
    } catch (_) {}

    const routeVisit = navigationType === 'back_forward' ||
      (navigationType === 'navigate' && sameOriginReferrer);

    if (reducedMotion) {
      root.classList.add('app-ready');
    } else {
      root.classList.add('loader-active');
      if (routeVisit) root.classList.add('route-loading');
      root.dataset.loaderStarted = String(performance.now());
    }

    let released = false;
    const releaseLoader = () => {
      if (released || !root.dataset.loaderStarted) return;
      released = true;
      root.classList.remove('loader-active', 'route-loading');
      root.classList.add('app-ready');
      delete root.dataset.loaderStarted;
      window.dispatchEvent(new Event('nihal-loader-complete'));
    };

    window.setTimeout(
      releaseLoader,
      reducedMotion ? 0 : (routeVisit ? 600 : 1150),
    );
    window.setTimeout(releaseLoader, routeVisit ? 1300 : 1600);

    try {
      const stored = localStorage.getItem('nihal-theme');
      const theme = stored === 'light' || stored === 'dark'
        ? stored
        : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      root.dataset.theme = theme;
    } catch (_) {
      root.dataset.theme = 'light';
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
          <style>{`
            .site-loader { display: none !important; }
            .site-header, main, .site-footer { opacity: 1 !important; visibility: visible !important; transform: none !important; }
          `}</style>
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
