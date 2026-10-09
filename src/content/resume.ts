export type ResumeEntry = {
  title: string;
  organization: string;
  dates: string;
  context?: string;
  bullets: readonly string[];
};

export const resume = {
  name: "Ezinwa Peter",
  portfolioName: "Shreda",
  headline: "Software Engineer",
  location: "Apapa, Lagos, Nigeria",
  phone: "+234 701 187 2350",
  email: "ezinwa.ugochukw@gmail.com",
  summary:
    "Software Engineer and Biochemistry graduate with experience building web applications, developing frontend interfaces and Node.js APIs, and providing IT support. Founder of Schooldra, a JAMB and UTME exam-prep platform for Nigerian students.",
  experience: [
    {
      title: "Founder",
      organization: "Schooldra",
      dates: "April 2026 – Present",
      bullets: [
        "Built a REST API and Node.js/Express backend for UTME quiz evaluation, user management, and core platform features.",
        "Designed data models and processing flows for practice questions, candidate test histories, and analytics.",
        "Implemented server-side authentication, authorization middleware, and input validation.",
        "Managed asynchronous processing, error handling, and cloud deployments.",
      ],
    },
    {
      title: "IT Officer",
      organization: "Adam and Eve Stores",
      dates: "May 2026 – July 2026",
      context: "Contract",
      bullets: [
        "Provided first-line, remote, and on-site support for hardware, software, and network issues.",
        "Monitored server and network operation, backups, and disk use; performed preventive maintenance.",
        "Configured and maintained hardware and software, and kept the IT asset inventory up to date.",
        "Monitored antivirus and anti-spam systems and prepared technical guides and troubleshooting notes for staff.",
      ],
    },
    {
      title: "Junior Software Engineer",
      organization: "Dx-Innovation Apprelab",
      dates: "December 2025 – Present",
      context: "Remote",
      bullets: [
        "Developed the Apprelab Academy web platform from the ground up as a learning management system.",
        "Designed more than 50 high-fidelity Figma screens for student dashboards and certificate verification.",
        "Built responsive frontend interfaces with React, TypeScript, and MUI.",
        "Implemented certificate data mapping to display student achievements from unique digital signatures.",
      ],
    },
  ] satisfies readonly ResumeEntry[],
  education: [
    {
      qualification: "Bachelor of Science (B.Sc.), Biochemistry",
      institution: "Nnamdi Azikiwe University, Awka",
      dates: "2019 – 2024",
      detail: "GPA: 3.26/5.0",
    },
  ],
  certifications: [
    "14G Internship Penetrating Tester Certificate",
    "National Youth Service Corps (NYSC) Certificate",
    "Degree Certificate, Nnamdi Azikiwe University, Awka, Anambra State",
  ],
  skills: [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "Sass", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "MUI"],
    },
    {
      category: "Backend and data",
      items: ["Node.js", "Express", "PostgreSQL", "MySQL"],
    },
    {
      category: "Other tools",
      items: ["Figma", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint"],
    },
  ],
  strengths: [
    "Project management",
    "Teamwork",
    "Time management",
    "Leadership",
    "Communication",
    "Critical thinking",
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Igbo", proficiency: "Fluent" },
  ],
} as const;
