import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EDUCATION } from "@/data/education";
import { EXPERIENCE } from "@/data/experience";

export default function About() {
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
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
    </>
  );
}
