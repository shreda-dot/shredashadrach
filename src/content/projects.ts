import { apprelab } from "@/content/projects/apprelab";
import { inventory } from "@/content/projects/inventory";
import { schooldra } from "@/content/projects/schooldra";
import type { Project } from "@/content/projects/types";

export type { Project, ProjectSection, StackArea, StackGroup } from "@/content/projects/types";

export const projects: readonly Project[] = [schooldra, inventory, apprelab];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
