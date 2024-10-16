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
      sort: 'updated',
      type: 'public',
      direction: 'desc',
      per_page: 50,
    });

    const projects: ProjectCardProps[] = await Promise.all(
      response.data
        .filter(repo => repo.owner.type === 'User') // Filter out organization-owned repositories
        .map(async repo => {
          const collaboratorsResponse = await octokit.repos.listCollaborators({
            owner: repo.owner.login,
            repo: repo.name,
          });

          const collaborators = collaboratorsResponse.data
            .filter(collaborator => collaborator.login !== repo.owner.login) // Exclude the owner
            .map(collaborator => collaborator.login); // Extract collaborator usernames

          // Construct the live URL (example: GitHub Pages)
          const liveUrl = repo.homepage;

          return {
            title: repo.name,
            description: repo.description || "No description available.",
            link: repo.html_url,
            liveUrl, // Add live URL here
            tags: repo.topics || [],
            owner: repo.owner.login, // Add owner information
            collaborators: [repo.owner.login, ...collaborators], // Include the main user and collaborators
          };
        })
    );

    return { props: { projects } };
  } catch (error) {
    console.error("Error fetching projects:", error);
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
          description: "Discover a collection of innovative web projects developed by Gauresh G Pai, showcasing skills in React, Next.js, and frontend development.",
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
              "Gauresh G Pai projects, React Developer projects, web applications, frontend development, Next.js, Tailwind CSS, portfolio, innovative web solutions",
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