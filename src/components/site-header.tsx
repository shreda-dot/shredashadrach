import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { MobileNavigation } from "@/components/mobile-navigation";
import { PrimaryNavigation } from "@/components/primary-navigation";

export function SiteHeader({ themeControl }: { themeControl: ReactNode }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Shreda home">
        <Image
          className="brand-mark"
          src="/icon.svg"
          alt=""
          width={48}
          height={46}
          preload
        />
        <span>Shreda</span>
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
