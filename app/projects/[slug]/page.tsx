import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";

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
    };
  }

  const title = `${project.name} case study`;

  return {
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
      <div className="page-intro-wrap">
        <p className="eyebrow">{project.category}</p>
        <h1 className="page-title">{project.name}</h1>
        <p className="page-intro">{project.summary}</p>
        {project.externalUrl ? (
          <p>
            <a
              className="text-link"
              href={project.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit {project.name} <span aria-hidden="true">↗</span>
            </a>
          </p>
        ) : null}
        <dl className="case-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack}</dd>
          </div>
        </dl>
      </div>

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
