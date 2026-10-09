import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/portrait";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { schooldra } from "@/content/projects/schooldra";

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

function stackItems(area: string): readonly string[] {
  return schooldra.stack.find((group) => group.area === area)?.items ?? [];
}

function getHost(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export default function Home() {
  const frontend = stackItems("Frontend");
  const backend = stackItems("Backend/Data");

  const heroStack: string[] = [];
  if (frontend.some((item) => item === "React")) heroStack.push("React");
  if (backend.some((item) => item === "Supabase")) heroStack.push("Supabase");
  if (frontend.some((item) => item.startsWith("Tailwind"))) {
    heroStack.push("Tailwind");
  }

  const schooldraUrl =
    schooldra.status.label === "Live"
      ? schooldra.status.href || profile.schooldraUrl
      : profile.schooldraUrl;
  const schooldraHost = getHost(schooldraUrl);
  const statusLabel = schooldra.status.label.toUpperCase();

  return (
    <div className="page-wrap">
      <section className="hero fade-in" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location} · Founder and developer</p>
          <h1 id="hero-title">{profile.homeHeadline}</h1>
          <p className="hero-intro">
            I&apos;m {profile.name} ({profile.alternateName}), founder of
            Schooldra, a JAMB/UTME exam-prep PWA for Nigerian
            secondary-school students aged 16–19. I build its frontend and
            backend.
          </p>
          <div className="button-row">
            <a
              className="button button-primary"
              href={schooldraUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Schooldra
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              className="button button-secondary"
              href={`/projects/${schooldra.slug}`}
            >
              Read the case study
            </Link>
          </div>
        </div>
        <aside className="hero-visual" aria-label="Shreda, founder of Schooldra">
          <div className="hero-visual-heading">
            <span>01 / LAGOS</span>
            <span className="hero-initial" aria-hidden="true">
              S.
            </span>
          </div>
          <div className="hero-visual-main">
            <Portrait className="hero-portrait" preload />
            <div className="hero-facts">
              <div>
                <span>{statusLabel}</span>
                <a
                  className="hero-fact-link"
                  href={schooldraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {schooldraHost}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>
              {heroStack.length > 0 ? (
                <div>
                  <span>STACK</span>
                  <strong>{heroStack.join(", ")}</strong>
                </div>
              ) : null}
            </div>
          </div>
          <Link
            className="hero-identity"
            href="/about"
            aria-label="Read more about Shreda"
          >
            <span>
              <strong>{profile.name}</strong>
              <small>Founder &amp; full-stack developer</small>
            </span>
            <span aria-hidden="true">↗</span>
          </Link>
        </aside>
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