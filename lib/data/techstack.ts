export const techStack = [
  { name: "React", icon: "/react-icon.png" },
  { name: "Next.js", icon: "/next-icon.png" },
  { name: "Node.js", icon: "/node-icon.png" },
  { name: "TypeScript", icon: "/typescript-icon.png" },
  { name: "JavaScript", icon: "/javascript-icon.png" },
  { name: "Python", icon: "/python-icon.png" },
  { name: "Ruby on Rails", icon: "/rails-icon.png" },
  { name: "PostgreSQL", icon: "/postgresql-icon.png" },
  { name: "Tailwind CSS", icon: "/tailwind-icon.png" },
  { name: "Git", icon: "/git-icon.png" },
  { name: "GitHub", icon: "/github-icon.png" },
  { name: "Docker", icon: "/docker-icon.png" },
];

function calculateYearsOfExperience(): string {
  const startDate = new Date('2021-08-30');
  const currentDate = new Date();
  
  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
  return Math.floor(diffInYears).toString();
}

import type { Project } from "./projects";
import type { Certificate } from "./certificates";

export function getStats(projects: Project[], certificates: Certificate[]): Stat[] {
  return [
    {
      label: "TOTAL PROJECTS",
      value: String(projects.length),
      description: "Software solutions crafted",
    },
    {
      label: "CERTIFICATES",
      value: String(certificates.length),
      description: "Professional skills validated",
    },
    {
      label: "YEARS OF EXPERIENCE",
      value: calculateYearsOfExperience(),
      description: "Continuous learning journey",
    },
  ];
}

export type TechStack = typeof techStack[0];
export type Stat = {
  label: string;
  value: string;
  description: string;
};
