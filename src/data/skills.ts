import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages & Frameworks",
    skills: [
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "React", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Java", icon: "FaJava" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
    ],
  },
  {
    sectionName: "Tools & Databases",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Supabase", icon: "SiSupabase" },
      { name: "Azure", icon: "FaCloud" },
      { name: "UiPath", icon: "SiUipath" },
    ],
  },
  {
    sectionName: "Soft Skills",
    skills: [
      { name: "Consistency", icon: "FaRunning" },
      { name: "Determination", icon: "FaBullseye" },
      { name: "Leadership", icon: "FaChalkboardTeacher" },
      { name: "Teamwork", icon: "FaUsers" },
      { name: "Problem-Solving", icon: "FaLightbulb" },
    ],
  },
];
