import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/portrait";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Shreda — Founder & Full-stack Developer",
  description:
    "I build Schooldra, a JAMB and UTME exam-prep PWA for Nigerian secondary-school students, and practical tools for Nigerian retail.",
  openGraph: {
    title: "Shreda — Founder & Full-stack Developer",
    description:
      "Building Schooldra for Nigerian secondary-school students and tools for Nigerian retail.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreda — Founder & Full-stack Developer",
    description:
      "Building Schooldra for Nigerian secondary-school students and tools for Nigerian retail.",
  },
};

export default function Home() {
  const schooldra = projects.find((project) => project.slug === "schooldra");

  return (
    <div className="page-wrap">
      <section className="hero fade-in" aria-labelledby="hero-title">
        <Portrait className="hero-portrait" preload />
        <div className="hero-copy">
          <p className="eyebrow">{profile.location} · Founder and developer</p>
          <h1 id="hero-title">{profile.homeHeadline}</h1>
          <p className="hero-intro">
            I&apos;m {profile.name}, founder of Schooldra. I build its frontend
            and backend: a JAMB and UTME exam-prep PWA for Nigerian secondary
            school students.
          </p>
          <div className="button-row">
            <a
              className="button button-primary"
              href={profile.schooldraUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Schooldra
              <span aria-hidden="true">↗</span>
            </a>
            {schooldra ? (
              <Link
                className="button button-secondary"
                href={`/projects/${schooldra.slug}`}
              >
                Read the case study
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-block fade-in" aria-labelledby="capabilities">
        <div className="section-heading">
          <p className="eyebrow">What I work on</p>
          <h2 id="capabilities">From product interface to working system.</h2>
        </div>
        <div className="capability-grid">
          {profile.capabilities.map((capability, index) => (
            <article className="capability" key={capability.title}>
              <span className="capability-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block fade-in" aria-labelledby="selected-work">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="selected-work">Products and tools I&apos;ve worked on.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="contact-cta fade-in" aria-labelledby="contact-title">
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-title">Have a thoughtful question about the work?</h2>
        <p>
          I&apos;m focused on building products. If you want to talk about
          Schooldra or the tools I&apos;m making, send a note.
        </p>
        <Link className="button button-primary" href="/contact">
          Contact me <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
