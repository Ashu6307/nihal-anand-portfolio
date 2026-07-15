import Link from "next/link";
import { DesktopNavigation } from "@/components/desktop-navigation";
import { Brand } from "@/components/ui/brand";
import { MobileNavigation } from "@/components/mobile-navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <DesktopNavigation />
        <div className="site-header__actions">
          <ThemeToggle />
          <Link className="header-cta" href="/contact">
            Let&apos;s connect
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
