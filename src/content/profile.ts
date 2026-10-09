export const profile = {
  name: "Shreda",
  alternateName: "Shadrach",
  location: "Lagos, Nigeria",
  role: "Solo founder and full-stack developer",
  schooldraUrl: "https://schooldra.com",
  homeHeadline:
    "I build exam-prep products for Nigerian students and software for local businesses.",
  shortBio:
    "I build Schooldra, a JAMB and UTME exam-prep PWA for Nigerian secondary-school students, and practical tools for Nigerian retail.",
  capabilities: [
    {
      title: "Frontend",
      description:
        "I build clear, usable product interfaces, including the student-facing side of Schooldra.",
    },
    {
      title: "Backend",
      description:
        "I handle both frontend and backend development for Schooldra.",
    },
    {
      title: "PWA / offline-first",
      description:
        "Schooldra is a PWA for students using phones and limited data. [TODO: confirm its current offline behavior before describing it as offline-first.]",
    },
    {
      title: "Business tooling",
      description:
        "I build inventory and admin tools for Nigerian retail businesses.",
    },
  ],
  about: [
    "I’m Shreda (also known as Shadrach), a solo founder and full-stack developer based in Lagos, Nigeria.",
    "I build Schooldra, a JAMB and UTME exam-prep Progressive Web App for Nigerian secondary school students aged 16–19. I work on both its frontend and backend, with low-data phones in mind.",
    "I also build business management tools for Nigerian retail, including inventory and admin systems. [TODO: add a short, personal detail about why you started building these products.]",
  ],
  contactEmail: "ezinwaugochukw@gmail.com",
  phone: "+234 701 187 2350",
  socialProfiles: [
    {
      name: "GitHub",
      url: null,
      todo: "[TODO: add GitHub profile URL]",
    },
    {
      name: "LinkedIn",
      url: null,
      todo: "[TODO: add LinkedIn profile URL]",
    },
    {
      name: "X",
      url: null,
      todo: "[TODO: add X profile URL]",
    },
  ],
} as const;

export type SocialProfile = (typeof profile.socialProfiles)[number];
