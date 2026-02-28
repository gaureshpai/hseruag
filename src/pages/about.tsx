import Head from "next/head";
import { NextSeo } from "next-seo";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";
import { SITE_URL } from "@/constants/site";
import {
  generateBreadcrumbSchema,
  generatePersonSchema,
  generateSEOConfig,
  injectJSONLD,
} from "@/utils/seo";

type AboutPageProps = {
  education: ExperienceShowcaseListItemProps[];
  experience: ExperienceShowcaseListItemProps[];
  extra: ExperienceShowcaseListItemProps[];
  achievements: ExperienceShowcaseListItemProps[];
};

/**
 * Renders the About page for Gauresh G Pai including SEO, structured data, and content sections.
 *
 * @param education - List of education items to display in the Education section
 * @param experience - List of professional experience items to display in the Experience section
 * @param extra - List of positions of responsibility to display in the Positions of Responsibility section
 * @param achievements - List of achievement items to display in the Achievements section
 * @returns A React element rendering the About page with SEO/meta tags, injected JSON-LD, the hero, and four experience showcase lists
 */
export default function About({
  education,
  experience,
  extra,
  achievements,
}: AboutPageProps) {
  const seoConfig = generateSEOConfig({
    title: "About",
    description:
      "Learn about Gauresh G Pai, a passionate Software Engineer with 2+ years of experience. Discover my journey, skills in React, Next.js, TypeScript, professional experience, education, and achievements in web development.",
    canonical: `${SITE_URL}/about`,
    openGraph: {
      title: "About Gauresh G Pai - Software Engineer",
      description:
        "Software Engineer specializing in React & Next.js. Explore my professional journey, technical skills, education, and accomplishments.",
      type: "profile",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "About Gauresh G Pai, Software Engineer Biography, React Developer Experience, Engineering Student, Web Developer Journey, Professional Experience, Technical Skills, Education, Achievements, Career Path, Software Engineer India",
      },
      {
        property: "profile:first_name",
        content: "Gauresh",
      },
      {
        property: "profile:last_name",
        content: "G Pai",
      },
    ],
  });

  const personSchema = generatePersonSchema({
    name: "Gauresh G Pai",
    url: `${SITE_URL}/about`,
    jobTitle: "Software Engineer",
    description:
      "Passionate Software Engineer with expertise in building scalable web applications using React, Next.js, and TypeScript.",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <NextSeo {...seoConfig} />
      <Head>{injectJSONLD([personSchema, breadcrumbSchema])}</Head>
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={experience} />
      <ExperienceShowcaseList title="Education" details={education} />
      <ExperienceShowcaseList
        title="Positions of Responsibility"
        details={extra}
      />
      <ExperienceShowcaseList title="Achievements" details={achievements} />
    </>
  );
}

export async function getStaticProps() {
  const { EDUCATION } = await import("@/data/education");
  const { EXPERIENCE } = await import("@/data/experience");
  const { EXTRA } = await import("@/data/extra");
  const { ACHIEVEMENTS } = await import("@/data/achievements");

  return {
    props: {
      education: EDUCATION,
      experience: EXPERIENCE,
      extra: EXTRA,
      achievements: ACHIEVEMENTS,
    },
  };
}
