import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/content/profile";

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
  return (
    <div className="page-wrap">
      <div className="page-intro-wrap">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Send me a note.</h1>
        <p className="page-intro">
          For Schooldra, the products I&apos;m building, or a direct question.
        </p>
      </div>
      <section className="content-section" aria-labelledby="contact-options">
        <h2 id="contact-options">Reach me</h2>
        <ul className="social-list">
          <li>
            <strong>Email:</strong>{" "}
            {profile.contactEmail.startsWith("[TODO") ? (
              profile.contactEmail
            ) : (
              <a href={`mailto:${profile.contactEmail}`}>
                {profile.contactEmail}
              </a>
            )}
          </li>
          {profile.socialProfiles.map((social) => (
            <li key={social.name}>
              <strong>{social.name}:</strong>{" "}
              {social.url ? (
                <a href={social.url} target="_blank" rel="noreferrer">
                  {social.url}
                </a>
              ) : (
                social.todo
              )}
            </li>
          ))}
        </ul>
      </section>
      <section className="content-section" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading">Use the contact form</h2>
        <p>
          The form sends your note to my configured contact service. If it
          isn&apos;t available, you&apos;ll see an error and can try again.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
