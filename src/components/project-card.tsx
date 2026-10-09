import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <span className="project-kicker">{project.category}</span>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <span className="text-link">
        Read the case study <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
