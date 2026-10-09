import type { Project } from "@/content/projects/types";

export const apprelab: Project = {
  slug: "apprelab",
  name: "Apprelab",
  category: "Frontend · Learning platform",
  summary:
    "An integrated learning platform connecting micro-courses, mentorship and real-world business projects.",
  status: { label: "Live", href: "https://www.apprelab.com/" },
  role: "Frontend Software Engineer focusing on core platform UI architecture.",
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
        "As a Frontend Software Engineer, I was a key contributor to the engineering team responsible for building the Apprelab Academy web platform and its internal Learning Management System (LMS). My focus was on architecting scalable UI components and ensuring a seamless student experience.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "I built responsive interfaces and reusable UI components for student dashboards, course navigation, and interactive learning states using TypeScript and Material UI.",
        "I implemented global state management with Zustand to handle complex user flows and data synchronization across disparate parts of the application.",
        "The certification interface maps student records to unique digital signatures to render achievements.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Successfully shipped the initial version of the Apprelab Academy student-facing dashboard, enabling hundreds of beta users to access micro-courses and track skill progression.",
        "Improved application performance and development velocity by establishing a library of standardized, accessible UI components.",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "Given my current focus on backend architecture and system performance, I would re-evaluate the data-fetching strategy. I would implement server-side rendering (SSR) using Next.js to improve Time to First Byte (TTFB) and initial load performance, rather than relying solely on client-side fetching.",
        "I would also integrate comprehensive end-to-end testing (e.g., using Playwright) from the outset to ensure greater stability as new features were added.",
      ],
    },
  ],
};