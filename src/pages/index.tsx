import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Portfolio | Gauresh"
        description="Explore the professional portfolio of Gauresh G Pai, a skilled Engineering Student with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        openGraph={{
          title: "Portfolio | Gauresh",
          description:
            "Dive into the world of web development with Gauresh G Pai. Discover a Engineering Student with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          siteName: 'Gauresh | Portfolio',
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Nextjs Developer, Engineering Student, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
          },
        ]}
      />
      <Hero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
