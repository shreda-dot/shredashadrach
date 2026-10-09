import Link from "next/link";
import type { Project } from "@/content/projects/types";
import { ProjectStack } from "@/components/project-stack";
import { ProjectStatusBadge } from "@/components/project-status";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-kicker">{project.category}</span>
        <ProjectStatusBadge status={project.status} />
      </div>
      <h3>
        <Link href={`/projects/${project.slug}`}>{project.name}</Link>
      </h3>
      <p>{project.summary}</p>
      <ProjectStack stack={project.stack} className="project-card-stack" />
      <Link className="text-link" href={`/projects/${project.slug}`}>
        Read the case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
