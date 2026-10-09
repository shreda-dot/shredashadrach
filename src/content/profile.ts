export const profile = {
  name: "Shreda",
  alternateName: "Shadrach",
  location: "Lagos, Nigeria",
  education: {
    field: "Biochemistry",
    school: "Nnamdi Azikiwe University",
    honours: "Second Class Honours",
  },
  role: "Solo founder and full-stack developer",
  schooldraUrl: "https://schooldra.com",
  homeHeadline: "I build JAMB/UTME exam prep for Nigerian students.",
  shortBio:
    "Schooldra is the Progressive Web App behind it, built for students aged 16–19. I also make inventory and admin software for retail businesses.",
  capabilities: [
    {
      title: "Frontend",
      description:
        "React and Next.js with TypeScript, Tailwind CSS, Zustand, Framer Motion and MUI.",
    },
    {
      title: "Backend",
      description:
        "Node.js and Supabase, with PostgreSQL row-level security, Realtime and pg_cron.",
    },
    {
      title: "PWA and integrations",
      description:
        "Flutterwave payments, Resend email, Gemini and KaTeX math rendering in Schooldra.",
    },
    {
      title: "Business tooling",
      description:
        "An inventory and admin system for Nigerian retail, built on the stack above.",
    },
  ],
  about: [
    "I’m Shreda, also known as Shadrach, a solo founder and full-stack developer. My interest in technology began during my industrial training at NAFDAC, where I assisted with building some of the organisation’s software. That experience led me toward software development.",
    "Today, I’m building Schooldra, a JAMB/UTME exam-prep Progressive Web App for Nigerian secondary school students. I work across the frontend and backend and stay close to the product decisions behind what ships.",
    "Alongside it, I make business management tools, including inventory and administration systems for retailers. My approach is direct: understand the need, build a useful solution, and improve it with feedback.",
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