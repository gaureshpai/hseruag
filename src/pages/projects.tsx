import ProjectCard from "@/components/projects/project-page";
import { NextSeo } from "next-seo";
import type { Project } from "@/data/projectsgit";

type ProjectsPageProps = {
  projects: Project[];
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <NextSeo
        title="Projects | Gauresh G Pai"
        description="Explore the innovative projects by Gauresh G Pai, a React Developer. Discover web applications built using modern technologies like Next.js, Tailwind CSS, and more."
        openGraph={{
          title: "Explore Projects by Gauresh G Pai",
          description:
            "Discover a collection of innovative web projects developed by Gauresh G Pai, showcasing skills in React, Next.js, and frontend development.",
          url: "https://gauresh.is-a.dev/projects",
          siteName: "Gauresh G Pai",
          type: "website",
          images: [
            {
              url: "https://gauresh.is-a.dev/logo.png",
              width: 1200,
              height: 630,
              alt: "Projects by Gauresh G Pai - React Developer",
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
              "Gauresh G Pai projects, React Developer projects, web applications, frontend development, Next.js, Tailwind CSS, portfolio, innovative web solutions",
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
