export type ProjectSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type Project = {
  slug: "schooldra" | "inventory" | "apprelab";
  name: string;
  category: string;
  summary: string;
  externalUrl?: string;
  role: string;
  stack: string;
  sections: readonly ProjectSection[];
};

export const projects: readonly Project[] = [
  {
    slug: "schooldra",
    name: "Schooldra",
    category: "Founder · Education · PWA",
    summary:
      "JAMB and UTME exam preparation for Nigerian secondary-school students aged 16–19.",
    externalUrl: "https://schooldra.com",
    role: "Solo founder. I handle the frontend and backend.",
    stack: "[TODO: confirm and list the production stack.]",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Schooldra is an exam-prep product for Nigerian secondary-school students preparing for JAMB and UTME. It is intended for students aged 16–19, many of whom use phones with limited data.",
          "[TODO: describe the specific student problem you set out to solve, using your own words.]",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I’m the solo founder and work across both the frontend and backend of Schooldra.",
          "[TODO: add when you started, the work you personally own, and any collaborators if relevant.]",
        ],
      },
      {
        heading: "Decisions",
        paragraphs: [
          "I’m building Schooldra as a Progressive Web App, with low-data phones as an important constraint.",
          "[TODO: explain the product, technical, and offline-use decisions you made and why.]",
        ],
      },
      {
        heading: "Stack",
        paragraphs: [
          "[TODO: list only the technologies currently used in Schooldra, grouped by frontend, backend, data, and deployment if useful.]",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "[TODO: add verified product outcomes. Do not publish estimates or unverified counts.]",
        ],
      },
      {
        heading: "What I’d do differently",
        paragraphs: [
          "[TODO: describe one concrete decision you would revisit and what you learned.]",
        ],
      },
    ],
  },
  {
    slug: "inventory",
    name: "Inventory and business tooling",
    category: "Business software · Nigerian retail",
    summary:
      "Inventory and admin systems for Nigerian retail businesses.",
    role: "[TODO: confirm your role, ownership, and the specific systems you can discuss.]",
    stack: "[TODO: list the verified stack for this work.]",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "I build inventory and admin tooling for Nigerian retail.",
          "[TODO: describe the specific retail workflow or problem this project addresses.]",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "[TODO: explain what you personally designed, built, and supported.]",
        ],
      },
      {
        heading: "Decisions",
        paragraphs: [
          "[TODO: describe the important product and technical decisions, and the context behind them.]",
        ],
      },
      {
        heading: "Stack",
        paragraphs: [
          "[TODO: list the actual tools and technologies used. Omit anything you cannot verify.]",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "[TODO: add outcomes you can support with evidence; do not add invented figures.]",
        ],
      },
      {
        heading: "What I’d do differently",
        paragraphs: [
          "[TODO: add one specific lesson or decision you would change.]",
        ],
      },
    ],
  },
  {
    slug: "apprelab",
    name: "Apprelab",
    category: "Side project · Frontend",
    summary: "A frontend side project I worked on.",
    role: "Frontend developer on a side project.",
    stack: "[TODO: confirm the frontend stack.]",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "[TODO: explain what Apprelab does and who it was for.]",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I was the frontend developer on this side project.",
          "[TODO: describe the frontend work you personally completed.]",
        ],
      },
      {
        heading: "Decisions",
        paragraphs: [
          "[TODO: describe the interface or implementation decisions you made.]",
        ],
      },
      {
        heading: "Stack",
        paragraphs: ["[TODO: confirm the technologies used on Apprelab.]"],
      },
      {
        heading: "Results",
        paragraphs: ["[TODO: add verified results, if any.]"],
      },
      {
        heading: "What I’d do differently",
        paragraphs: [
          "[TODO: add what you would change if you worked on the project again.]",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
