import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { MobileNavigation } from "@/components/mobile-navigation";
import { PrimaryNavigation } from "@/components/primary-navigation";

export function SiteHeader({ themeControl }: { themeControl: ReactNode }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Shreda home">
        <BrandLogo preload />
      </Link>
      <PrimaryNavigation />
      <div className="header-actions">
        {themeControl}
        <Link className="header-contact" href="/contact">
          Let&apos;s talk <span aria-hidden="true">→</span>
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}
