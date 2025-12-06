import Image from "next/image";
import { Project } from "@/data/projects";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      key={`project-${index}-${project.title}`}
      className="relative flex flex-col overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 dark:bg-zinc-800 dark:text-white"
    >
      <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          width={1920}
          height={1080}
          src={project.screenshot || "placeholder.svg"}
          alt={`${project.title} screenshot`}
          className="aspect-auto rounded-lg object-contain transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 4}
        />
      </div>
      <div className="flex-grow">
        <h2 className="mb-2 text-xl font-bold">{project.title}</h2>
        <p className="test-justify mb-3">{project.description}</p>
        <div className="mb-2 flex flex-wrap items-center gap-1 text-xs">
          <span className="font-medium">Tags:</span>
          {project.tags.length > 0 ? (
            project.tags.map((tag) => (
              <span key={tag} className="text-xs">
                {tag}
                {tag !== project.tags[project.tags.length - 1] && ","}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </div>
        {project.owner && project.owner.toLowerCase() !== "gaureshpai" && (
          <div className="mb-2 flex items-center gap-1 text-xs">
            <span className="font-medium">Owner:</span>
            <span className="capitalize">{project.owner}</span>
          </div>
        )}
        {project.collaborators &&
          project.collaborators.filter((c) => c.toLowerCase() !== "gaureshpai")
            .length > 0 && (
            <div className="mb-2 flex items-center gap-1 text-xs">
              <span className="font-medium">Collaborators:</span>
              <span className="capitalize">
                {project.collaborators
                  .filter((c) => c.toLowerCase() !== "gaureshpai")
                  .join(", ")}
              </span>
            </div>
          )}
        {project.company && (
          <div className="mb-2 flex items-center gap-1 text-xs">
            <span className="font-medium">Company:</span>
            <span>{project.company || "None"}</span>
          </div>
        )}
        {project.role && (
          <div className="mb-4 flex items-center gap-1 text-xs">
            <span className="font-medium">Role:</span>
            <span>{project.role || "Developer"}</span>
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center justify-end gap-6">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <SiGithub className="h-5 w-5" /> View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <FiExternalLink className="h-5 w-5" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
