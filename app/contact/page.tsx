import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";
import { getWhatsAppHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shreda about Schooldra, product work, or business tooling.",
  openGraph: {
    title: "Contact Shreda",
    description:
      "Get in touch with Shreda, founder of Schooldra and full-stack developer in Lagos.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Shreda",
    description:
      "Get in touch with Shreda, founder of Schooldra and full-stack developer in Lagos.",
  },
};

export default function ContactPage() {
  const whatsAppHref = getWhatsAppHref();

  return (
    <div className="page-wrap">
      <div className="page-intro-wrap">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Send me a note.</h1>
        <p className="page-intro">
          For Schooldra, the products I&apos;m building, or a direct question.
        </p>
      </div>
      <section className="content-section contact-form-section" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading">Get in touch</h2>
        <p>
          Send a message through the contact form. If delivery fails, you&apos;ll
          see an error and can try again or email me directly.
        </p>
        <ContactForm />
      </section>
      <section className="content-section contact-links-section" aria-labelledby="contact-options">
        <h2 id="contact-options">Or find me here</h2>
        <p>
          Email{" "}
          <a className="contact-email-link" href={`mailto:${profile.contactEmail}`}>
            {profile.contactEmail}
          </a>
        </p>
        {whatsAppHref ? (
          <p>
            <a
              className="contact-email-link"
              href={whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message me on WhatsApp, opens in a new tab"
            >
              Message me on WhatsApp
            </a>
          </p>
        ) : null}
        <ul className="social-links" aria-label="Social profiles">
          {profile.socialProfiles.map((social) =>
            social.url !== null ? (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${social.name} profile`}
                  title={social.name}
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ) : null,
          )}
        </ul>
      </section>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "GitHub") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.12-3.21-1.12-.43-1.1-1.06-1.4-1.06-1.4-.87-.6.07-.59.07-.59.96.07 1.46.98 1.46.98.85 1.45 2.23 1.03 2.77.79.09-.62.33-1.03.61-1.27-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.98-2.57-.1-.24-.43-1.22.09-2.54 0 0 .8-.26 2.62.98a9.1 9.1 0 0 1 4.77 0c1.82-1.24 2.61-.98 2.61-.98.52 1.32.19 2.3.1 2.54.61.67.98 1.53.98 2.57 0 3.67-2.23 4.47-4.36 4.71.34.3.65.87.65 1.76v2.54c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" />
      </svg>
    );
  }

  if (name === "X") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 3h4.7l11.3 18h-4.7L4 3Zm0 18 6.4-7.7m3.2-3.8L20 3" />
      </svg>
    );
  }

  return null;
}
