import type { Metadata } from "next";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume for Ezinwa Peter (Shreda), a software engineer and founder based in Lagos, Nigeria.",
  openGraph: {
    title: "Resume — Ezinwa Peter (Shreda)",
    description: resume.summary,
    url: "/resume",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume — Ezinwa Peter (Shreda)",
    description: resume.summary,
  },
};

export default function ResumePage() {
  return (
    <div className="page-wrap">
      <header className="page-intro-wrap resume-summary">
        <p className="eyebrow">{resume.headline} · Resume</p>
        <h1 className="page-title resume-name">
          {resume.name} <span>({resume.portfolioName})</span>
        </h1>
        <ul className="resume-contact" aria-label="Contact details">
          <li>{resume.location}</li>
          <li>
            <a href={`tel:${resume.phone.replaceAll(" ", "")}`}>
              {resume.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${resume.email}`}>{resume.email}</a>
          </li>
        </ul>
        <p className="resume-summary-text">{resume.summary}</p>
        <a
          className="button button-secondary"
          href="/resume.docx"
          download
        >
          Download original CV (DOCX) <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="content-section resume-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        {resume.experience.map((entry) => (
          <article className="resume-entry" key={entry.organization}>
            <div className="resume-entry-heading">
              <div>
                <h3>{entry.title}</h3>
                <p className="resume-organization">{entry.organization}</p>
              </div>
              <p className="resume-dates">
                {entry.dates}
                {entry.context ? ` · ${entry.context}` : ""}
              </p>
            </div>
            <ul>
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="content-section resume-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        {resume.education.map((entry) => (
          <article className="resume-entry" key={entry.institution}>
            <div className="resume-entry-heading">
              <div>
                <h3>{entry.qualification}</h3>
                <p className="resume-organization">{entry.institution}</p>
              </div>
              <p className="resume-dates">{entry.dates}</p>
            </div>
            <p>{entry.detail}</p>
          </article>
        ))}
      </section>

      <section className="content-section resume-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Technical skills</h2>
        <dl className="resume-skills">
          {resume.skills.map((group) => (
            <div key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="content-section resume-section" aria-labelledby="certifications-heading">
        <h2 id="certifications-heading">Certifications</h2>
        <ul>
          {resume.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>

      <section className="content-section resume-section resume-extras">
        <div>
          <h2>Strengths</h2>
          <p>{resume.strengths.join(" · ")}</p>
        </div>
        <div>
          <h2>Languages</h2>
          <p>
            {resume.languages
              .map((language) => `${language.name} (${language.proficiency})`)
              .join(" · ")}
          </p>
        </div>
      </section>
    </div>
  );
}
