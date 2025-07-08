import React from 'react';
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/icons";
import { FiExternalLink } from "react-icons/fi";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  liveUrl?: string | null;
  tags: string[];
  owner: string;
  collaborators: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <motion.div
      initial={{ y: 80 }}
      whileInView={{ y: 0 }}
      transition={{
        type: "spring",
        duration: 0.4,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <div className="p-3 text-foreground sm:p-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">{props.title}</span>
        </div>
        <div className="mt-3">
          <p className="text-xs md:text-sm">{props.description}</p>
        </div>
        {props.owner !== 'gaureshpai' && (
          <div className="mt-3 text-xs text-muted-foreground">
            Owner: {props.owner}
          </div>
        )}
        {props.collaborators.filter(collab => collab !== props.owner).length > 0 && (
          <div className="mt-3 text-xs text-muted-foreground">
            <span>
              Collaborator(s): {props.collaborators.filter(collab => collab !== props.owner).join(', ')}
            </span>
          </div>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {props.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-accent/10 px-2 py-1 text-xs text-accent">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end gap-6">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs underline md:text-sm"
          >
            <GithubIcon className="h-5 w-5" /> View on GitHub
          </a>
          {props.liveUrl && (
            <a
              href={props.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs underline md:text-sm"
            >
              <FiExternalLink className="h-5 w-5" /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;