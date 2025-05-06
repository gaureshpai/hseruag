import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-5 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-20 lg:flex-col lg:text-left">
      <div className="mt-10 w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-4xl font-bold text-accent sm:text-7xl md:text-4xl lg:text-4xl xl:text-5xl">
              Hello, I&apos;m Gauresh G Pai
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I'm Gauresh G Pai, a passionate and driven full-stack developer, project manager, and community contributor currently pursuing my Bachelor's in Computer Science Engineering at AJIET, Mangaluru. With a strong foundation in web development and a hands-on approach to solving real-world problems, I bring both technical expertise and leadership to every project I undertake.<br /><br />

              As a Project Manager at Kree Karvat Technology and a UiPath Student Champion, I lead teams to deliver impactful digital solutions. My active involvement as a core member of DevNation and GDSC AJIET reflects my commitment to building a strong tech community through workshops, mentoring, and collaborative development.<br /><br />

              My experience spans frontend and backend development, automation tools, UI/UX design, and team leadership. I take pride in delivering high-quality work while continuously learning and growing alongside peers and mentors.<br /><br />

              If you're looking to collaborate on a meaningful tech initiative or want to know more about my work, feel free to reach out or explore my <Link href={"/projects"} className="underline text-blue-600">projects</Link>.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
