export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Cybersoft Content Services, Inc.",
    period: "Jan 2025 – Jul 2025",
    duration: "6 mos",
    location: "Quezon City, National Capital Region, Philippines",
    type: "Hybrid",
    description:
      "Contributed to enterprise-grade automation systems at Cybersoft, including SafeboxIQ (mortgage automation) and the UCC System (legal and financial document processing). Worked on backend and frontend development, debugging, AI integration, and system optimization within Agile teams. Additionally, initiated and developed a Daily Time Record (DTR) System to streamline HR’s intern management process.",
    skills: [
      "Ruby",
      "Ruby on Rails",
      "Active Record",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Python",
      "Apache Airflow",
      "REST APIs",
      "Git",
      "GitLab",
      "Docker",
      "Jira",
      "Agile/Scrum",
    ],
    achievements: [
      "Enhanced SafeboxIQ’s Bank Statement Analysis (BSA) module with reporting, notifications, and dashboard improvements.",
      "Built backend workflows and UI features for the UCC System using Airflow DAGs and Rails, refining AI-powered document processing.",
      "Independently designed and launched the DTR System, a full-stack Next.js app for intern time tracking and HR automation.",
      "Strengthened production-level coding, debugging, and collaboration skills through hybrid teamwork and mentorship.",
    ],
    logo: "/cybersoft-logo.png",
  },
  {
    title: "University Projects",
    company: "FEU Institute of Technology",
    period: "2021 – 2025",
    description:
      "Worked on various academic and personal projects, ranging from full-stack web platforms to mobile apps and desktop applications. These projects gave me the opportunity to practice software engineering fundamentals, explore different tech stacks, and build useful tools with classmates.",
    type: "Hybrid",
    logo: "/feutech-logo.png",
    achievements: [
      "Developed InternHQ, a full-stack internship management system (Next.js, TypeScript, PostgreSQL) with role-based access, time tracking, and reporting features.",
      "Built the CS Expo 2024 Website with a team, a responsive platform to showcase student thesis projects, event schedules, and speakers.",
      "Created ByteZen Careers Website, a simple recruitment platform with job listings, applicant tracking, and admin dashboards (Flask, SQLite).",
      "Explored graphics and visualization with Outer Space Adventure, a 3D OpenGL project rendering animated celestial scenes.",
      "Practiced desktop and mobile development through smaller apps such as an Advanced Weather Recording System (Python + SQLite), Expense Tracker and Bitwise Calculator (Java, Android).",
    ],
  },
];

export type Experience = typeof experience[0];
