import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

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
  return (
    <>
      <NextSeo
        title="About | Gauresh"
        description="Learn more about Gauresh G Pai, a dedicated Engineering Student with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        openGraph={{
          title: "Learn About Gauresh G Pai - Engineering Student",
          description:
            "Dive into the story of Gauresh G Pai, a passionate Engineering Student. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          url: "https://gauresh.is-a.dev/about",
          siteName: "Gauresh G Pai",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "About Gauresh G Pai - Portfolio",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@hseruag",
          site: "@hseruag",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "Engineering Student portfolio, Engineering Student, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
          {
            name: "author",
            content: "Gauresh G Pai",
          },
          {
            name: "robots",
            content: "index, follow",
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
          },
        ]}
      />
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
