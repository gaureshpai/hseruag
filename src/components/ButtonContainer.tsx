import Link from "next/link";
import { ArrowTopRight } from "./icons";

const ButtonContainer = () => {
  return (
    <div className="mx-auto flex flex-wrap justify-center gap-2 md:max-w-7xl">
      <Link
        href="/about"
        className="group relative flex min-w-[15rem] items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
      >
        <div className="relative max-w-max">
          <span className="text-accent">More About me</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
        </div>
        <div className="h-8 w-8">
          <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
        </div>
      </Link>
      <Link
        href="/projects"
        className="group relative flex min-w-[15rem] items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
      >
        <div className="relative max-w-max">
          <span className="text-accent">View all Projects</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
        </div>
        <div className="h-8 w-8">
          <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
        </div>
      </Link>
      <Link
        href="/certificates"
        className="group relative flex min-w-[15rem] items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
      >
        <div className="relative max-w-max">
          <span className="text-accent">View all certificates</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
        </div>
        <div className="h-8 w-8">
          <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
        </div>
      </Link>
      <Link
        href="/works"
        className="group relative flex min-w-[15rem] items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
      >
        <div className="relative max-w-max">
          <span className="text-accent">View all Works</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
        </div>
        <div className="h-8 w-8">
          <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
        </div>
      </Link>
      <Link
        href="https://www.google.com/search?q=Gauresh+G+Pai"
        className="group relative flex min-w-[15rem] items-center justify-center gap-2 text-base font-semibold sm:text-lg md:text-xl"
        target="_blank"
      >
        <div className="relative max-w-max">
          <span className="text-accent">Google me</span>
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full"></span>
        </div>
        <div className="h-8 w-8">
          <ArrowTopRight className="rotate-45 text-accent transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.1]" />
        </div>
      </Link>
    </div>
  );
};

export default ButtonContainer;
