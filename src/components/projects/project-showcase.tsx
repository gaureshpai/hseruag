import { useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowTopRight } from "@/components/icons";
import ProjectShowcaseList, { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

interface ProjectShowcaseProps {
  projects: ProjectShowcaseListItem[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleAnimate = useCallback((index: number) => {
    if (index !== currentImage) {
      setCurrentImage(index);
    }
  }, [currentImage]);

  const projectItems = useMemo(() => {
    return projects.map((proj, index) => {
      const { title } = proj;
      return (
        <ProjectShowcaseList
          key={title}
          activeProject={currentImage}
          toggleList={handleAnimate}
          data={{ ...proj, index }}
        />
      );
    });
  }, [projects, currentImage, handleAnimate]);

  return (
    <section className="overflow-hidden px-6 pt-16 py-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-xl font-semibold text-accent sm:text-3xl">
          Few Featured Projects:
        </h2>
        <div className="hidden flex-col gap-6 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:flex">
          {projectItems}
        </div>
        <div className="flex flex-col gap-4 py-14 sm:gap-8 sm:py-20 md:gap-10 lg:hidden">
          {projects.map(({ title, href, tags }, index) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1"
            >
              <span
                className="flex gap-2 -underline-offset-1 text-3xl font-semibold text-accent underline transition-colors duration-300 sm:text-3xl md:text-3xl lg:hidden">
                {index + 1}.{" "} {title}
              </span>
              <p className="flex max-w-xl flex-wrap gap-2 text-base font-semibold text-black dark:text-accent-foreground  sm:text-lg">
                {tags.join(", ")}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="group relative flex max-w-max items-center gap-4 text-base font-semibold sm:text-lg md:text-xl"
        >
          <div className="relative max-w-max">
            <span className="text-accent">See more projects</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
          </div>
          <div className="h-8 w-8">
            <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
          </div>
        </Link>
      </div>
    </section>
  );
}