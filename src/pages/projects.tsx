import Head from "next/head";
import { NextSeo } from "next-seo";
import ProjectCard from "@/components/projects/project-page";
import { SITE_URL } from "@/constants/site";
import type { Project } from "@/data/projectsgit";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateImageCollectionSchema,
  generateItemListSchema,
  generateSEOConfig,
  type ImageCollectionSchemaResult,
  injectJSONLD,
} from "@/utils/seo";

type ProjectsPageProps = {
  projects: Project[];
  imageGallerySchema: ImageCollectionSchemaResult;
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  imageGallerySchema,
}) => {
  const seoConfig = generateSEOConfig({
    title: "Projects",
    description:
      "Explore innovative web development projects by Gauresh G Pai. Discover full-stack applications, responsive websites, and interactive UIs built with React, Next.js, TypeScript, and Tailwind CSS. View live demos and source code.",
    canonical: `${SITE_URL}/projects`,
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
    url: `${SITE_URL}/projects`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
  ]);
  const projectListSchema = generateItemListSchema({
    name: "Projects by Gauresh G Pai",
    url: `${SITE_URL}/projects`,
    description:
      "Index of software engineering and web development projects by Gauresh G Pai.",
    items: projects.map((project) => ({
      name: project.title,
      url: project.liveUrl || project.link || `${SITE_URL}/projects`,
      description: project.description,
      image: project.screenshot
        ? `${SITE_URL}${project.screenshot}`
        : undefined,
    })),
  });

  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo {...seoConfig} />
      <Head>
        {injectJSONLD([
          collectionSchema,
          breadcrumbSchema,
          imageGallerySchema,
          projectListSchema,
        ])}
      </Head>
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

/**
 * Fetches project data and constructs an image-collection JSON-LD schema for the projects page.
 *
 * @returns An object with `props` containing:
 * - `projects`: the array of project entries loaded from the project's data module.
 * - `imageGallerySchema`: a JSON-LD object representing the projects image gallery (name, url, description, and images).
 */
export async function getStaticProps() {
  const { PROJECTS } = await import("@/data/projectsgit");
  const { getPublicImagesByPage } = await import("@/server/public-images");
  const imagesByPage = getPublicImagesByPage();
  const imageGallerySchema = generateImageCollectionSchema({
    name: "Projects Image Gallery",
    url: `${SITE_URL}/projects`,
    description:
      "Screenshot gallery for software engineering and web development projects by Gauresh G Pai.",
    images: imagesByPage["/projects"].map((image) => ({
      url: image.url,
      title: image.title,
      caption: image.caption,
    })),
  });
  return {
    props: {
      projects: PROJECTS,
      imageGallerySchema,
    },
  };
}
