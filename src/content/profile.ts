export const profile = {
  name: "Shreda",
  alternateName: "Shadrach",
  location: "Lagos, Nigeria",
  role: "Solo founder and full-stack developer",
  schooldraUrl: "https://schooldra.com",
  homeHeadline: "I build JAMB/UTME exam prep for Nigerian students.",
  shortBio:
    "I build Schooldra, a JAMB/UTME exam-prep PWA for Nigerian students aged 16–19, and software for Nigerian retail.",
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
        "PWA delivery, Flutterwave, Resend, Gemini and KaTeX for Schooldra.",
    },
    {
      title: "Business tooling",
      description:
        "An inventory and admin tool for Nigerian retail, built with Next.js, Tailwind CSS, Zustand and Node.js.",
    },
  ],
  about: [
    "I’m Shreda, also known as Shadrach: a Lagos-based solo founder and full-stack developer. I graduated from Nnamdi Azikiwe University with a degree in Biochemistry and Second Class Honours.",
    "My interest in technology began during my industrial training at NAFDAC, where I assisted with building some of the organisation’s software. That experience led me toward software development.",
    "Today, I’m building Schooldra, a JAMB/UTME exam-prep Progressive Web App for Nigerian secondary school students. I work across the frontend and backend and stay close to the product decisions behind what ships.",
    "I also build business management tools, including inventory and administration systems for Nigerian retail. My approach is direct: understand the need, build a useful solution, and improve it with feedback.",
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