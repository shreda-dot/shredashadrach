import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Shreda · Lagos, Nigeria</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </footer>
  );
}
