import type { Project } from "@/content/projects/types";

export const inventory: Project = {
  slug: "inventory",
  name: "Retail inventory and admin tool",
  category: "Business tooling · Nigerian retail",
  summary:
    "A built inventory and admin system for Nigerian retail. It is not a live product.",
  status: { label: "Built" },
  role: "[TODO: confirm the role and ownership details you want published.]",
  stack: [
    {
      area: "Frontend",
      items: ["Next.js", "Tailwind CSS", "Zustand"],
    },
    {
      area: "Backend/Data",
      items: ["Node.js"],
    },
  ],
  sections: [
    {
      heading: "Problem",
      paragraphs: [
        "A built inventory and admin system for Nigerian retail.",
        "[TODO: describe the specific retail workflow this system supports.]",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "[TODO: confirm your role and ownership of this project.]",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "[TODO: describe the project decisions you want to highlight.]",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "[TODO: add verified results, if available. Do not imply that this tool is live.]",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "[TODO: add what you would do differently on this project.]",
      ],
    },
  ],
};
