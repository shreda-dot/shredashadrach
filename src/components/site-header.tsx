import Link from "next/link";
import type { ReactNode } from "react";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ themeControl }: { themeControl: ReactNode }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Shreda home">
        Shreda
      </Link>
      <div className="header-actions">
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu" />
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
        {themeControl}
      </div>
    </header>
  );
}
