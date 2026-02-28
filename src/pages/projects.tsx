import Head from "next/head";
import { NextSeo } from "next-seo";
import ProjectCard from "@/components/projects/project-page";
import type { Project } from "@/data/projectsgit";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateSEOConfig,
  injectJSONLD,
} from "@/utils/seo";

type ProjectsPageProps = {
  projects: Project[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  const seoConfig = generateSEOConfig({
    title: "Projects",
    description:
      "Explore innovative web development projects by Gauresh G Pai. Discover full-stack applications, responsive websites, and interactive UIs built with React, Next.js, TypeScript, and Tailwind CSS. View live demos and source code.",
    canonical: "https://gauresh.is-a.dev/projects",
    openGraph: {
      title: "Projects Portfolio - Gauresh G Pai",
      description:
        "Collection of web applications showcasing expertise in React, Next.js, TypeScript, and modern frontend technologies.",
      type: "website",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "Gauresh G Pai Projects, React Projects, Next.js Applications, TypeScript Projects, Web Development Portfolio, Frontend Projects, Full Stack Projects, Open Source Projects, GitHub Projects, Live Demos, Web Applications",
      },
      {
        name: "og:type",
        content: "website",
      },
    ],
  });

  const collectionSchema = generateCollectionPageSchema({
    name: "Projects by Gauresh G Pai",
    description:
      "A collection of web development projects showcasing skills in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://gauresh.is-a.dev/projects",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://gauresh.is-a.dev" },
    { name: "Projects", url: "https://gauresh.is-a.dev/projects" },
  ]);

  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo {...seoConfig} />
      <Head>{injectJSONLD([collectionSchema, breadcrumbSchema])}</Head>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
          Projects
        </h1>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">
            Here are some of my recent projects
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}-${project.title}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const { PROJECTS } = await import("@/data/projectsgit");
  return {
    props: {
      projects: PROJECTS,
    },
  };
}
