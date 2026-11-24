import type { Project } from "@/content/projects/types";

export const fabtynaStores: Project = {
  slug: "fabtyna-stores",
  name: "Fabtyna Stores",
  category: "Full-stack Monorepo · Retail & Inventory Management",
  summary:
    "A comprehensive retail management application featuring a TypeScript REST API, Prisma ORM, and PostgreSQL for multi-channel sales, expense tracking, and stock ledger management.",
 status: { label: "Live", href: "https://fabtyna.com" },
  role: "Full-stack Developer and Creator, engineering the monorepo architecture, API services, and client-side UI workflows.",
  stack: [
    {
      area: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "React Query", "Zustand"],
    },
    {
      area: "Backend/Data",
      items: ["Node.js", "TypeScript", "Prisma ORM", "PostgreSQL"],
    },
  ],
  sections: [
    {
      heading: "Problem",
      paragraphs: [
        "Local retail operations frequently battle fragmented stock tracking, manual ledger reconciliation errors, and a lack of real-time visibility across multi-channel sales and operational expenses.",
        "The objective was to build a robust, scalable monorepo retail management platform tailored for Nigerian business environments, ensuring transactional data integrity and automated stock-to-ledger updates.",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "As the sole creator and developer, I designed and implemented the entire monorepo architecture, spanning the TypeScript REST API, database schemas, and responsive administrative dashboards.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "Architected a scalable monorepo structure separating the backend API services and web frontend for clean code modularity and independent deployments.",
        "Integrated Prisma ORM with PostgreSQL to enforce strict type-safe database queries, transactional integrity for stock operations, and structured ledger management.",
        "Implemented robust state and data-fetching patterns using React Query and Zustand to maintain lightning-fast UI responsiveness during high-frequency inventory and sales updates.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Successfully deployed a production-ready retail platform handling comprehensive stock operations, expense management, and detailed financial ledgers.",
        "Eliminated manual bookkeeping bottlenecks, giving store administrators instant visibility over stock levels and daily sales performance.",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "Implement advanced offline-first synchronization using local IndexedDB caching and service workers to guarantee uninterrupted operations during sudden network drops.",
        "Introduce automated multi-branch reporting views out-of-the-box to further streamline scaling across multiple store locations.",
      ],
    },
  ],
};