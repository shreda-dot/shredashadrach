import type { ProjectStatus } from "@/content/projects/types";

export function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  if (status.label === "Built") {
    return <span className="project-status project-status-built">Built</span>;
  }

  return (
    <a
      className="project-status project-status-live"
      href={status.href}
      target="_blank"
      rel="noreferrer"
      aria-label="Live project, open external site"
    >
      Live <span aria-hidden="true">↗</span>
    </a>
  );
}
