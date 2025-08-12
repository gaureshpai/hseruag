import { GetServerSideProps } from 'next';
import { Octokit } from "@octokit/rest";
import ProjectCard, { ProjectCardProps } from "@/components/projects/project-card";
import { NextSeo } from 'next-seo';

interface ProjectsPageProps {
  projects: ProjectCardProps[];
  error?: string;
}

export const getServerSideProps: GetServerSideProps<ProjectsPageProps> = async () => {
  const octokit = new Octokit({ auth: process.env.GH_TOKEN });

  try {
    const response = await octokit.repos.listForAuthenticatedUser({
      sort: 'pushed',
      type: 'public',
      direction: 'desc',
      per_page: 100,
    });

    const projects: ProjectCardProps[] = await Promise.all(
      response.data
        .filter(repo => repo.owner.type === 'User' && !['dump', 'hseruag', 'register', 'gaureshpai', 'clickmedude', 'gdg-workshop', 'Eventopia', 'stvst', 'business-acquisition-platform-prototype', 'V-Tech-Inc', 'ShreepathiPortfolio', 'Nidhi'].includes(repo.name))
        .map(async repo => {
          const collaboratorsResponse = await octokit.repos.listCollaborators({
            owner: repo.owner.login,
            repo: repo.name,
          });

          const collaborators = collaboratorsResponse.data
            .filter(collaborator => collaborator.login !== repo.owner.login)
            .map(collaborator => collaborator.login);

          const liveUrl = repo.homepage;

          return {
            title: repo.name,
            description: repo.description || "No description available.",
            link: repo.html_url,
            liveUrl,
            tags: repo.topics || [],
            owner: repo.owner.login,
            collaborators: [repo.owner.login, ...collaborators],
          };
        })
    );

    return { props: { projects } };
  } catch (error) {
    return { props: { projects: [], error: "Failed to load projects. Please try again later." } };
  }
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, error }) => {
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
        <h1 className="text-2xl font-semibold text-foreground md:text-4xl">Projects</h1>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">Here are some of my recent projects from GitHub</span>
        </div>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;