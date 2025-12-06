import { NextSeo } from "next-seo";
import Head from "next/head";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";
import {
  generateSEOConfig,
  generatePersonSchema,
  generateBreadcrumbSchema,
  injectJSONLD,
} from "@/utils/seo";

type AboutPageProps = {
  education: ExperienceShowcaseListItemProps[];
  experience: ExperienceShowcaseListItemProps[];
  extra: ExperienceShowcaseListItemProps[];
  achievements: ExperienceShowcaseListItemProps[];
};

export default function About({
  education,
  experience,
  extra,
  achievements,
}: AboutPageProps) {
  const seoConfig = generateSEOConfig({
    title: "About Gauresh G Pai | Frontend Developer Journey & Experience",
    description:
      "Learn about Gauresh G Pai, a passionate Frontend Developer and Engineering Student with 2+ years of experience. Discover my journey, skills in React, Next.js, TypeScript, professional experience, education, and achievements in web development.",
    canonical: "https://gauresh.is-a.dev/about",
    openGraph: {
      title: "About Gauresh G Pai - Frontend Developer & Engineering Student",
      description:
        "Frontend Developer specializing in React & Next.js. Explore my professional journey, technical skills, education, and accomplishments.",
      type: "profile",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "About Gauresh G Pai, Frontend Developer Biography, React Developer Experience, Engineering Student, Web Developer Journey, Professional Experience, Technical Skills, Education, Achievements, Career Path, Software Engineer India",
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
    url: "https://gauresh.is-a.dev/about",
    jobTitle: "Frontend Developer",
    description:
      "Passionate Frontend Developer and Engineering Student with expertise in building scalable web applications using React, Next.js, and TypeScript.",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://gauresh.is-a.dev" },
    { name: "About", url: "https://gauresh.is-a.dev/about" },
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
      \
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
