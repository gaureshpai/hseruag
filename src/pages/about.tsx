import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EDUCATION } from "@/data/education";

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Gauresh"
        description="Learn more about Gauresh G Pai, a dedicated Engineering Student with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        openGraph={{
          title: "Learn About Gauresh G Pai - Engineering Student",
          description: "Dive into the story of Gauresh G Pai, a Engineering Student. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          siteName: 'Gauresh G Pai',
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Engineering Student portfolio, Engineering Student, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
