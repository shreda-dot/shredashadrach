import type { Project } from "@/content/projects/types";

export const schooldra: Project = {
  slug: "schooldra",
  name: "Schooldra",
  category: "Founder · Education · PWA",
  summary:
    "A JAMB/UTME exam-prep Progressive Web App for Nigerian secondary-school students aged 16–19.",
  status: { label: "Live", href: "https://schooldra.com" },
  role: "Founder and Lead Developer, architecting both the frontend and backend infrastructure.",
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
        "Nigerian students preparing for the JAMB/UTME examinations often lack access to affordable, realistic computer-based test (CBT) practice environments with robust explanations and performance tracking.",
        "Schooldra was built as a dedicated Progressive Web App (PWA) to bridge this gap, offering students a fast, reliable, and curriculum-aligned exam simulation platform accessible across low-end and mobile devices.",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "As founder and full-stack engineer, I drove product strategy, UX design, and complete technical implementation—building out the interactive test engines, secure payment flows, and database schemas from scratch.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "Delivered the product as a Progressive Web App (PWA) to ensure low-friction installation, offline-resilient caching, and smooth mobile performance typical of native apps.",
        "Leveraged Supabase and PostgreSQL to manage secure user profiles, question banks, and session states protected by strict Row-Level Security (RLS), with `pg_cron` handling automated background tasks.",
        "Integrated Playwright prerendering to solve client-side rendering SEO hurdles, ensuring key landing pages rank effectively for students searching for exam prep resources.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Successfully launched and deployed Schooldra to production via Vercel, providing an optimized exam-prep platform featuring real-time practice testing, automated grading, and seamless payment processing via Flutterwave.",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "I would implement a more robust client-side state persistence layer earlier in development to ensure students who experience sudden network drops or battery loss mid-exam don't lose their active test progress.",
      ],
    },
  ],
};