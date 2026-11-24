export const profile = {
  name: "Shreda",
  alternateName: "Peter Shadrach Ezinwa",
  location: "Lagos, Nigeria",
  education: {
    field: "Biochemistry",
    school: "Nnamdi Azikiwe University",
    honours: "Second Class Honours",
  },
  role: "Solo founder and full-stack engineer",
  schooldraUrl: "https://schooldra.com",
  homeHeadline: "I build JAMB/UTME exam prep and retail management systems.",
  shortBio:
    "Creator of Schooldra (JAMB/UTME prep for Nigerian students aged 16–19) and Fabtyna Stores (inventory, sales, and admin software for retail businesses).",
  capabilities: [
    {
      title: "Frontend",
      description:
        "React and Next.js with TypeScript, Tailwind CSS, Zustand, Framer Motion, and Material UI.",
    },
    {
      title: "Backend & Databases",
      description:
        "Node.js, Express, Prisma ORM, PostgreSQL (Neon / Supabase) with row-level security, Realtime, and pg_cron.",
    },
    {
      title: "PWA & Integrations",
      description:
        "Flutterwave payments, Resend transactional emails, Gemini AI integration, and KaTeX math rendering.",
    },
    {
      title: "Retail & Business Tooling",
      description:
        "Multi-channel inventory, ledger accounting, Lagos date-synchronized analytics, and draft persistence engines.",
    },
  ],
  about: [
    "I’m Shreda (Peter Ezinwa), a solo founder and full-stack engineer based in Lagos. My transition into software development began during my training at NAFDAC, where I helped build internal software and quality control tools.",
    "Today, I build Schooldra—a Progressive Web App helping Nigerian secondary school students prepare for JAMB/UTME exams—and Fabtyna Stores, a full-stack retail inventory and business management system.",
    "My focus is on direct, pragmatic engineering: designing resilient user interfaces, robust database architectures, and reliable offline/draft state systems that solve real business problems.",
  ],
  contactEmail: "ezinwa.ugochukw@gmail.com",
  phone: "+234 701 187 2350",
  socialProfiles: [
    {
      name: "GitHub",
      url: "https://github.com/shreda-dot",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/shreda_shadrach",
    },
    {
      name: "X",
      url: "https://x.com/sha_dra_ch",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shreda-peter-626294358",
    },
  ],
} as const;

export type SocialProfile = (typeof profile.socialProfiles)[number];