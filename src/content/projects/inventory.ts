import type { Project } from "@/content/projects/types";

export const inventory: Project = {
  slug: "inventory",
  name: "Retail inventory and admin tool",
  category: "Business tooling · Nigerian retail",
  summary:
    "An inventory and administration system built for Nigerian retail operations to streamline stock tracking and sales logging.",
  status: { label: "Built" },
  role: "Full-stack Developer and Creator, owning the complete architecture, UI, and backend logic.",
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
        "Many local retail businesses struggle with fragmented stock keeping, manual ledger tracking, and inventory reconciliation issues. This leads to stockouts, discrepancies, and slow administrative workflows.",
        "The goal was to build a streamlined inventory and admin system tailored for Nigerian retail environments that cuts down manual overhead and gives store owners real-time visibility over their stock.",
      ],
    },
    {
      heading: "Role",
      paragraphs: [
        "As the sole creator and developer, I engineered both the client-side interface and the backend data flows from scratch, focusing heavily on practical utility for everyday business owners.",
      ],
    },
    {
      heading: "Decisions",
      paragraphs: [
        "I used Next.js and Tailwind CSS to build a responsive, lightning-fast administrative dashboard that functions well even under variable network conditions.",
        "Implemented Zustand for robust local client-state management, keeping stock updates and cart/inventory actions instantaneous.",
        "Designed the Node.js backend logic to handle reliable stock adjustments, item categorization, and administrative logging securely.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Successfully developed a fully functional internal business tool capable of managing product variants, tracking stock levels, and generating clear administrative logs.",
        "Created a reliable template for localized retail automation that eliminates traditional paperwork bottlenecks.",
      ],
    },
    {
      heading: "What I’d do differently",
      paragraphs: [
        "I would build in offline-first capabilities using local storage sync mechanisms or PWA service workers, ensuring the tool remains completely usable during local internet service drops or power interruptions.",
        "I would also integrate a structured relational database schema from day one to handle multi-branch inventory tracking seamlessly.",
      ],
    },
  ],
};