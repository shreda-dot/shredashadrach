import Link from "next/link";
import Image from "next/image";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/" aria-label="Shreda home">
            <Image
              className="brand-mark"
              src="/images/shreda-mark.webp"
              alt=""
              width={44}
              height={42}
            />
            <span>Shreda</span>
          </Link>
          <p>
            Founder and full-stack developer.
            <br />
            Building Schooldra and software for Nigerian retail.
          </p>
        </div>
        <nav className="footer-column" aria-label="Footer navigation">
          <h2>Navigate</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-column">
          <h2>Connect</h2>
          {profile.socialProfiles.map((social) =>
            social.url !== null ? (
              <a href={social.url} key={social.name} target="_blank" rel="noreferrer">
                {social.name}
              </a>
            ) : (
              <span className="footer-placeholder" key={social.name}>
                {social.name} · {social.todo}
              </span>
            ),
          )}
        </div>
        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href={`mailto:${profile.contactEmail}`}>{profile.contactEmail}</a>
          <p>{profile.location}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shreda</p>
        <Link href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
      </div>
    </footer>
  );
}
