export type StackArea = "Frontend" | "Backend/Data" | "Integrations" | "Delivery";

export type StackGroup = {
  area: StackArea;
  items: readonly string[];
};

export type ProjectSection = {
  heading:
    | "Problem"
    | "Role"
    | "Decisions"
    | "Results"
    | "What I’d do differently";
  paragraphs: readonly string[];
};

export type ProjectStatus =
  | { label: "Live"; href: string }
  | { label: "Built"; href?: never };

export type Project = {
  slug: "schooldra" | "inventory" | "apprelab";
  name: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  role: string;
  stack: readonly StackGroup[];
  sections: readonly ProjectSection[];
};
