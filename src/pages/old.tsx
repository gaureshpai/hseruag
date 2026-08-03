import dynamic from "next/dynamic";
import Head from "next/head";
import { NextSeo } from "next-seo";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";
import Hero from "@/components/Hero";
import type { SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SITE_URL } from "@/constants/site";
import type { Project } from "@/data/projects";
import {
  generateImageCollectionSchema,
  generateItemListSchema,
  generatePersonSchema,
  generateSEOConfig,
  generateWebsiteSchema,
  type ImageCollectionSchemaResult,
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
  imageGallerySchema: ImageCollectionSchemaResult;
};

/**
 * Renders the portfolio home page with SEO metadata, structured data, and portfolio sections.
 *
 * @param imageGallerySchema - Structured data describing the site's image gallery.
 * @returns The rendered portfolio home page.
 */
export default function Home({
  projects,
  skills,
  education,
  experience,
  achievements,
  imageGallerySchema,
}: HomePageProps) {
  const seoConfig = generateSEOConfig({
    description:
      "Portfolio of Gauresh G Pai, a Software Engineer at Brink AI Labs building production software, AI-agent workflows, automation tools, and accessible web applications with React, Next.js, and TypeScript.",
    canonical: `${SITE_URL}/old/`,
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
    url: SITE_URL,
    id: `${SITE_URL}/#person`,
    jobTitle: "Software Engineer",
    description:
      "Software Engineer at Brink AI Labs specializing in React, Next.js, TypeScript, automation, and production web applications.",
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
    worksFor: { name: "Brink AI Labs", url: "https://trybrink.com" },
    alumniOf: {
      name: "AJ Institute of Engineering & Technology",
      url: "https://ajiet.edu.in/",
    },
    mainEntityOfPage: `${SITE_URL}/old/`,
  });

  const websiteSchema = generateWebsiteSchema({
    name: "Gauresh G Pai - Portfolio",
    url: SITE_URL,
    id: `${SITE_URL}/#website`,
    description:
      "Professional portfolio showcasing frontend development projects, skills, and experience in modern web technologies.",
    mainEntityOfPage: `${SITE_URL}/old/`,
  });
  const featuredProjectsSchema = generateItemListSchema({
    name: "Featured Projects",
    url: SITE_URL,
    description:
      "Featured software engineering and web development projects by Gauresh G Pai.",
    items: projects.map((project) => ({
      name: project.title,
      url: project.liveUrl || project.githubUrl || `${SITE_URL}/projects`,
      description: project.description,
      image: project.screenshot
        ? `${SITE_URL}${project.screenshot}`
        : undefined,
    })),
  });

  return (
    <>
      <NextSeo {...seoConfig} />
      <Head>
        {injectJSONLD([
          personSchema,
          websiteSchema,
          imageGallerySchema,
          featuredProjectsSchema,
        ])}
      </Head>
      <Hero />
      <SkillsShowcase skills={skills} />
      <ProjectShowcase projects={projects} />
      <ExperienceShowcaseList title="Experience" details={experience} />
      <ExperienceShowcaseList title="Education" details={education} />
      <ExperienceShowcaseList title="Achievements" details={achievements} />
    </>
  );
}

/**
 * Prepares the data required to statically render the Home page.
 *
 * Simplifies skill entries and builds an image gallery schema from public images.
 *
 * @returns An object containing the page props: projects, skills, education, experience, achievements, and the image gallery schema.
 */
export async function getStaticProps() {
  const { PROJECT_SHOWCASE } = await import("@/data/projects");
  const { SKILLS_DATA } = await import("@/data/skills");
  const { EDUCATION } = await import("@/data/education");
  const { EXPERIENCE } = await import("@/data/experience");
  const { ACHIEVEMENTS } = await import("@/data/achievements");
  const { getAllPublicImages } = await import("@/server/public-images");

  const skills = SKILLS_DATA.map((section) => ({
    ...section,
    skills: section.skills.map((skill) => ({
      name: skill.name,
      icon: skill.icon,
    })),
  }));

  const allImages = getAllPublicImages();
  const imageGallerySchema = generateImageCollectionSchema({
    name: "Portfolio Image Library",
    url: SITE_URL,
    description:
      "Complete image library of Gauresh G Pai's portfolio, including projects, professional work, certificates, and brand assets.",
    images: allImages.map((image) => ({
      url: image.url,
      title: image.title,
      caption: image.caption,
    })),
  });

  return {
    props: {
      projects: PROJECT_SHOWCASE,
      skills,
      education: EDUCATION,
      experience: EXPERIENCE,
      achievements: ACHIEVEMENTS,
      imageGallerySchema,
    },
  };
}
