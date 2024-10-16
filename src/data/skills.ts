import {
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiNetlify,
  SiWordpress,
  SiShopify,
  SiCloudflare,
} from "react-icons/si";

import { SiPostman } from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss3,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Python",
        icon: SiPython,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },
  {
    sectionName: "Version Control and Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "WordPress",
        icon: SiWordpress,
      },
      {
        name: "Shopify",
        icon: SiShopify,
      },
      {
        name: "Cloudflare",
        icon: SiCloudflare,
      },
    ],
  },
];
