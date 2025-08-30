import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiVercel,
  SiPostgresql,
  SiPostman,
  SiC,
  SiCplusplus,
  SiUipath,
  SiStorybook,
  SiPrisma,
  SiGithub,
  SiShadcnui,
  SiMui,
  SiSupabase,
  SiNetlify,
  SiNpm
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { FaRunning, FaBullseye, FaChalkboardTeacher, FaUsers, FaLightbulb } from "react-icons/fa";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "ShadCN UI", icon: SiShadcnui },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    sectionName: "Database Tools / ORMs",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase },
      { name: "Prisma", icon: SiPrisma },
    ],
  },
  {
    sectionName: "Version Control and Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Postman", icon: SiPostman },
      { name: "UiPath", icon: SiUipath },
      { name: "npm", icon: SiNpm },
    ],
  },
  {
    sectionName: "Soft Skills",
    skills: [
      { name: "Consistency", icon: FaRunning },
      { name: "Determination", icon: FaBullseye },
      { name: "Leadership", icon: FaChalkboardTeacher },
      { name: "Teamwork", icon: FaUsers },
      { name: "Problem-Solving", icon: FaLightbulb },
    ],
  },
];