import type { Project } from "@/content/projects/types";

export const schooldra: Project = {
  slug: "schooldra",
  name: "Schooldra",
  category: "Founder · Education · PWA",
  summary:
    "A JAMB/UTME exam-prep Progressive Web App for Nigerian secondary-school students aged 16–19.",
  status: { label: "Live", href: "https://schooldra.com" },
  role: "Founder. I build the frontend and backend.",
  stack: [
    {
      area: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "Tailwind CSS v4",
        "Zustand",
        "Framer Motion",
      ],
    },
    {
      area: "Backend/Data",
      items: [
        "Supabase",
        "PostgreSQL",
        "Row-level security",
        "Realtime",
        "pg_cron",
      ],
    },
    {
      area: "Integrations",
      items: ["Flutterwave", "Resend (SMTP email)", "Gemini", "KaTeX"],
    },
    {
      area: "Delivery",
      items: ["PWA", "Vercel", "Playwright prerendering for SEO"],
    },
  ],
  sections: [
    {
      heading: "Problem",
      paragraphs: [
        "Schooldra is an exam-prep PWA for Nigerian secondary-school students aged 16–19 preparing for JAMB/UTME.",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "I’m the founder and build both the frontend and backend.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "The product is delivered as a Progressive Web App. Playwright prerendering supports SEO, while Supabase provides PostgreSQL with row-level security, Realtime and pg_cron.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "[TODO: add verified Schooldra results. Do not include estimated user counts, pass rates, traffic or revenue.]",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "[TODO: add one specific decision you would revisit and what you learned.]",
      ],
    },
  ],
};
