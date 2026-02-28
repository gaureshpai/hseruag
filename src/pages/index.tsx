import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";
import Hero from "@/components/Hero";
import type { SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import type { Project } from "@/data/projects";
import {
  generatePersonSchema,
  generateSEOConfig,
  generateWebsiteSchema,
  injectJSONLD,
} from "@/utils/seo";

const SkillsShowcase = dynamic(
  () => import("@/components/skills/skills-showcase"),
  { ssr: true },
);
const ProjectShowcase = dynamic(
  () => import("@/components/projects/project-showcase"),
  { ssr: true },
);
const ExperienceShowcaseList = dynamic(
  () => import("@/components/experience/experience-showcase-list"),
  { ssr: true },
);

type HomePageProps = {
  projects: Project[];
  skills: SkillsShowcaseProps["skills"];
  education: ExperienceShowcaseListItemProps[];
  experience: ExperienceShowcaseListItemProps[];
  achievements: ExperienceShowcaseListItemProps[];
};

export default function Home({
  projects,
  skills,
  education,
  experience,
  achievements,
}: HomePageProps) {
  const seoConfig = generateSEOConfig({
    description:
      "Explore the professional portfolio of Gauresh G Pai, a skilled Software Engineer with 2 years of hands-on experience. Discover innovative projects, expertise in React, Next.js, TypeScript, and modern web technologies.",
    canonical: "https://gauresh.is-a.dev",
    openGraph: {
      title: "Gauresh G Pai - Software Engineer Portfolio",
      description:
        "Software Engineer specializing in React, Next.js & TypeScript. 9+ client projects delivered with scalable, user-friendly web applications.",
      type: "profile",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "Gauresh G Pai, Software Engineer, React Developer, Next.js Developer, TypeScript, JavaScript, Web Developer, Engineering Student, UI/UX, Tailwind CSS, Full Stack Developer, Portfolio, Web Development, Software Engineer, India Developer",
      },
      {
        property: "profile:first_name",
        content: "Gauresh",
      },
      {
        property: "profile:last_name",
        content: "G Pai",
      },
      {
        property: "profile:username",
        content: "hseruag",
      },
      {
        name: "geo.region",
        content: "IN",
      },
      {
        name: "geo.placename",
        content: "India",
      },
      {
        name: "language",
        content: "English",
      },
    ],
  });

  const personSchema = generatePersonSchema({
    name: "Gauresh G Pai",
    url: "https://gauresh.is-a.dev",
    jobTitle: "Software Engineer",
    description:
      "Skilled Software Engineer specializing in React, Next.js, and TypeScript with 2 years of experience delivering scalable web applications.",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "TailwindCSS",
      "Frontend Development",
      "Web Development",
      "UI/UX Design",
      "Responsive Design",
      "Performance Optimization",
    ],
  });

  const websiteSchema = generateWebsiteSchema({
    name: "Gauresh G Pai - Portfolio",
    url: "https://gauresh.is-a.dev",
    description:
      "Professional portfolio showcasing frontend development projects, skills, and experience in modern web technologies.",
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <Head>{injectJSONLD([personSchema, websiteSchema])}</Head>
      <Hero />
      <SkillsShowcase skills={skills} />
      <ProjectShowcase projects={projects} />
      <ExperienceShowcaseList title="Experience" details={experience} />
      <ExperienceShowcaseList title="Education" details={education} />
      <ExperienceShowcaseList title="Achievements" details={achievements} />
    </>
  );
}

export async function getStaticProps() {
  const { PROJECT_SHOWCASE } = await import("@/data/projects");
  const { SKILLS_DATA } = await import("@/data/skills");
  const { EDUCATION } = await import("@/data/education");
  const { EXPERIENCE } = await import("@/data/experience");
  const { ACHIEVEMENTS } = await import("@/data/achievements");

  const skills = SKILLS_DATA.map((section) => ({
    ...section,
    skills: section.skills.map((skill) => ({
      name: skill.name,
      icon: skill.icon,
    })),
  }));

  return {
    props: {
      projects: PROJECT_SHOWCASE,
      skills,
      education: EDUCATION,
      experience: EXPERIENCE,
      achievements: ACHIEVEMENTS,
    },
  };
}
