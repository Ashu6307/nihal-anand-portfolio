import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
  title: "Page Not Found | Nihal Anand",
  description: "The requested portfolio page could not be found.",
};

export default function NotFound() {
  return (
    <section className="not-found section-grid">
      <div className="container not-found__inner">
        <span className="not-found__code" aria-hidden="true">404</span>
        <span className="eyebrow">Page not found</span>
        <h1>This path does not lead to a portfolio page.</h1>
        <p>
          Return to the home page or explore Nihal Anand&apos;s professional profile
          from the main navigation.
        </p>
        <Link className="button button--primary" href="/">
          <span>Return home</span>
          <Icon name="arrow" size={18} />
        </Link>
      </div>
    </section>
  );
}
