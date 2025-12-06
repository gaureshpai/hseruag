import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import type { Project } from "@/data/projects";
import type { SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

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
  return (
    <>
      <NextSeo
        title="Portfolio | Gauresh"
        description="Explore the professional portfolio of Gauresh G Pai, a skilled Engineering Student with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        openGraph={{
          title: "Portfolio | Gauresh",
          description:
            "Dive into the world of web development with Gauresh G Pai. Discover a Engineering Student with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
          url: "https://gauresh.is-a.dev",
          siteName: "Gauresh | Portfolio",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Gauresh G Pai Portfolio",
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
              "Nextjs Developer, Engineering Student, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Portfolio, UI/UX, React.js, Frontend Development, Web Development, JavaScript Developer, Responsive Design",
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
