import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: "Projects",
  description:
    "Selected work by Shreda: Schooldra, business tooling for Nigerian retail, and Apprelab.",
  openGraph: {
    title: "Projects by Shreda",
    description:
      "Schooldra, business tooling for Nigerian retail, and a frontend side project.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Shreda",
    description:
      "Schooldra, business tooling for Nigerian retail, and a frontend side project.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="page-wrap">
      <div className="page-intro-wrap">
        <p className="eyebrow">Selected work</p>
        <h1 className="page-title">Projects built around real work.</h1>
        <p className="page-intro">
          Products I&apos;m building and projects I&apos;ve contributed to.
        </p>
      </div>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
      />
      <section className="project-grid fade-in" aria-label="Project list">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
