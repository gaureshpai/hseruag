import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/data/works";

type WorksPageProps = {
  projects: Project[];
};

const WorksPage = ({ projects }: WorksPageProps) => {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo
        title="Works | Gauresh G Pai"
        description="Browse the portfolio of Gauresh G Pai, featuring web development projects built using React, Next.js, and Tailwind CSS. See real-world applications of modern frontend technologies."
        openGraph={{
          title: "Works by Gauresh G Pai",
          description:
            "A curated portfolio showcasing the work of Gauresh G Pai—featuring interactive web apps and frontend solutions using React, Next.js, and Tailwind CSS.",
          url: "https://gauresh.is-a.dev/works",
          siteName: "Gauresh G Pai",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Works by Gauresh G Pai - Portfolio Preview",
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
              "Gauresh G Pai portfolio, Gauresh G Pai works, web development projects, React portfolio, frontend developer, Next.js, Tailwind CSS, JavaScript, personal website, developer showcase",
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
                    <FiExternalLink className="h-5 w-5" />
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

export async function getStaticProps() {
  const { default: projects } = await import("@/data/works");
  return {
    props: {
      projects,
    },
  };
}
