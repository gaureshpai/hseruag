import { ExternalLink } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { SITE_URL } from "@/constants/site";
import type { Project } from "@/data/works";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generateImageCollectionSchema,
  generateItemListSchema,
  generateSEOConfig,
  type ImageCollectionSchemaResult,
  injectJSONLD,
} from "@/utils/seo";

type WorksPageProps = {
  projects: Project[];
  imageGallerySchema: ImageCollectionSchemaResult;
};

const WorksPage = ({ projects, imageGallerySchema }: WorksPageProps) => {
  const seoConfig = generateSEOConfig({
    title: "Professional Work",
    description:
      "Browse Gauresh G Pai's professional work portfolio featuring 9+ client projects and professional engagements. Real-world web applications built with React, Next.js, TypeScript, and Tailwind CSS for various companies and clients.",
    canonical: `${SITE_URL}/works`,
    openGraph: {
      title: "Professional Work Portfolio - Gauresh G Pai",
      description:
        "Professional client projects and engagements showcasing real-world applications of React, Next.js, and modern frontend technologies.",
      type: "website",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "Gauresh G Pai Professional Work, Client Projects, Professional Portfolio, Freelance Projects, Contract Work, Commercial Projects, Professional Engagements, Company Projects, Real-world Applications, Enterprise Solutions, Business Websites",
      },
    ],
  });

  const collectionSchema = generateCollectionPageSchema({
    name: "Professional Work by Gauresh G Pai",
    description:
      "A collection of professional client projects and engagements demonstrating real-world expertise in web development.",
    url: `${SITE_URL}/works`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Professional Work", url: `${SITE_URL}/works` },
  ]);
  const workListSchema = generateItemListSchema({
    name: "Professional Work by Gauresh G Pai",
    url: `${SITE_URL}/works`,
    description: "List of client and professional projects by Gauresh G Pai.",
    items: projects.map((project) => ({
      name: project.title,
      url: project.liveUrl || `${SITE_URL}/works`,
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
          workListSchema,
        ])}
      </Head>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
          Professional Work
        </h1>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">
            These projects were developed as part of professional engagements
            with different companies.
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
          {projects.map((project: Project, index: number) => (
            <div
              key={`project-${index}-${project.title}`}
              className="relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 dark:bg-zinc-800 dark:text-white"
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  width={1920}
                  height={1080}
                  src={project.screenshot}
                  alt={`${project.title} screenshot`}
                  className="aspect-video rounded-lg object-cover transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 4}
                />
              </div>
              <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
              <p className="test-justify mb-3">{project.description}</p>
              <div className="mb-2 flex items-center gap-1 text-xs">
                <span className="font-medium">Tags:</span>
                <span>
                  {project.tags.length > 0 ? project.tags.join(", ") : "None"}
                </span>
              </div>
              {project.owner &&
                project.owner.toLowerCase() !== "gaureshpai" && (
                  <div className="mb-2 flex items-center gap-1 text-xs">
                    <span className="font-medium">Owner:</span>
                    <span className="capitalize">{project.owner}</span>
                  </div>
                )}
              {project.collaborators &&
                project.collaborators.filter(
                  (c) => c.toLowerCase() !== "gaureshpai",
                ).length > 0 && (
                  <div className="mb-2 flex items-center gap-1 text-xs">
                    <span className="font-medium">Collaborators:</span>
                    <span className="capitalize">
                      {project.collaborators
                        .filter((c) => c.toLowerCase() !== "gaureshpai")
                        .join(", ")}
                    </span>
                  </div>
                )}
              <div className="mb-2 flex items-center gap-1 text-xs">
                <span className="font-medium">Company:</span>
                <span>{project.company || "None"}</span>
              </div>
              <div className="mb-4 flex items-center gap-1 text-xs">
                <span className="font-medium">Role:</span>
                <span>{project.role || "Developer"}</span>
              </div>
              <div className="flex justify-end">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs underline md:text-sm"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;

/**
 * Prepares props for the Works page by loading project data and constructing an image gallery schema for the /works gallery.
 *
 * @returns An object with `props` containing `projects` (the list of project entries) and `imageGallerySchema` (a structured image collection schema for the works page)
 */
export async function getStaticProps() {
  const { default: projects } = await import("@/data/works");
  const { getPublicImagesByPage } = await import("@/server/public-images");
  const imagesByPage = getPublicImagesByPage();
  const imageGallerySchema = generateImageCollectionSchema({
    name: "Professional Work Image Gallery",
    url: `${SITE_URL}/works`,
    description:
      "Screenshot gallery for professional and client work delivered by Gauresh G Pai.",
    images: imagesByPage["/works"].map((image) => ({
      url: image.url,
      title: image.title,
      caption: image.caption,
    })),
  });
  return {
    props: {
      projects,
      imageGallerySchema,
    },
  };
}
