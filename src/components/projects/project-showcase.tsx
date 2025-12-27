import Link from "next/link";
import { ArrowTopRight } from "@/components/icons";
import ProjectCard from "@/components/projects/project-card";
import type { Project } from "@/data/projects";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-2 px-6 sm:mt-12 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-2xl font-bold text-transparent xs:text-4xl sm:text-4xl md:text-6xl">
            Featured Projects:
          </h2>
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="group relative flex flex-shrink-0 items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
            >
              <div className="relative max-w-max">
                <span className="text-accent">More Projects</span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
              </div>
              <div className="h-8 w-8">
                <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-2">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={`project-${index}-${project.title}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
