import Image from 'next/image';
import { Project } from '@/data/projects';
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div key={`project-${index}-${project.title}`} className="relative dark:text-white overflow-hidden border rounded-xl p-6 shadow-sm dark:bg-zinc-800 transition-all duration-300 bg-white flex flex-col">
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg">
        <Image
          width={1920}
          height={1080}
          src={project.screenshot || "placeholder.svg"}
          alt={`${project.title} screenshot`}
          className="rounded-lg aspect-auto object-contain transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 4}
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="mb-3 test-justify">{project.description}</p>
        <div className="text-xs mb-2 flex flex-wrap items-center gap-1">
          <span className="font-medium">Tags:</span>
          {project.tags.length > 0 ? (
            project.tags.map((tag) => (
              <span key={tag} className="text-xs">
                {tag}{tag !== project.tags[project.tags.length - 1] && ','}
              </span>
            ))
          ) : (
            <span>None</span>
          )}
        </div>
        {project.owner && project.owner.toLowerCase() !== 'gaureshpai' && (
          <div className="text-xs mb-2 flex items-center gap-1">
            <span className="font-medium">Owner:</span>
            <span className="capitalize">{project.owner}</span>
          </div>
        )}
        {project.collaborators && project.collaborators.filter(c => c.toLowerCase() !== 'gaureshpai').length > 0 && (
          <div className="text-xs mb-2 flex items-center gap-1">
            <span className="font-medium">Collaborators:</span>
            <span className="capitalize">{project.collaborators.filter(c => c.toLowerCase() !== 'gaureshpai').join(', ')}</span>
          </div>
        )}
        {project.company && (
          <div className="text-xs mb-2 flex items-center gap-1">
            <span className="font-medium">Company:</span>
            <span>{project.company || 'None'}</span>
          </div>
        )}
        {project.role && (
          <div className="text-xs mb-4 flex items-center gap-1">
            <span className="font-medium">Role:</span>
            <span>{project.role || 'Developer'}</span>
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
