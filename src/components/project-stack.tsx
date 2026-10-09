import type { Project } from "@/content/projects/types";

export function ProjectStack({
  stack,
  className = "",
}: {
  stack: Project["stack"];
  className?: string;
}) {
  return (
    <div className={`project-stack ${className}`.trim()}>
      {stack.map((group) => (
        <div className="stack-group" key={group.area}>
          <h3>{group.area}</h3>
          <ul className="stack-tags">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
