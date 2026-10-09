import type { Project } from "@/content/projects/types";

export const apprelab: Project = {
  slug: "apprelab",
  name: "Apprelab",
  category: "Frontend · Learning platform",
  summary:
    "An integrated learning platform connecting micro-courses, mentorship and real-world business projects.",
  status: { label: "Live", href: "https://www.apprelab.com/" },
  role: "Frontend developer on the Apprelab Academy side project.",
  stack: [
    {
      area: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Zustand", "MUI", "Motion"],
    },
  ],
  sections: [
    {
      heading: "Problem",
      paragraphs: [
        "Apprelab is an integrated digital ecosystem and learning platform designed to connect learning with earning through micro-courses, industry mentorship and real-world business projects.",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "I was the frontend developer on this side project. I developed the Apprelab Academy web platform and Learning Management System interface screens.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "I built responsive interfaces and reusable UI components for student dashboards, course navigation and interactive learning states.",
        "The certification interface maps student records to unique digital signatures to render achievements.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "[TODO: add verified Apprelab results. Do not include unverified outcomes or metrics.]",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "[TODO: add what you would change if you worked on the project again.]",
      ],
    },
  ],
};
