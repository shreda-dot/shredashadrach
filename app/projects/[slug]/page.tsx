import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { ProjectStack } from "@/components/project-stack";
import { ProjectStatusBadge } from "@/components/project-status";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
} from "@/components/structured-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project page could not be found.",
      alternates: { canonical: `/projects/${slug}` },
      robots: { index: false, follow: true },
    };
  }

  const title = `${project.name} case study`;

  return {
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    title,
    description: project.summary,
    openGraph: {
      title: `${title} | Shreda`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Shreda`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
          { name: project.name, href: `/projects/${project.slug}` },
        ]}
      />
      <ArticleJsonLd
        headline={`${project.name} case study`}
        description={project.summary}
        articleSection={project.category}
        url={`/projects/${project.slug}`}
      />
      <div className="page-intro-wrap">
        <p className="eyebrow">{project.category}</p>
        <h1 className="page-title">{project.name}</h1>
        <p className="page-intro">{project.summary}</p>
        <div className="case-status-row">
          <ProjectStatusBadge status={project.status} />
          {project.status.label === "Live" ? (
            <a
              className="text-link"
              href={project.status.href}
              target="_blank"
              rel="noreferrer"
            >
              Visit {project.name} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </div>

      <section className="case-stack-section" aria-labelledby="case-stack-heading">
        <h2 id="case-stack-heading">Stack</h2>
        <ProjectStack stack={project.stack} className="case-stack" />
      </section>

      <div className="fade-in">
        {project.sections.map((section) => (
          <section className="content-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
      <p>
        <Link className="text-link" href="/projects">
          <span aria-hidden="true">←</span> All projects
        </Link>
      </p>
    </article>
  );
}
