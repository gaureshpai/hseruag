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
              I bring ideas to life through innovative coding. 
              Whether developing websites or crafting digital products, 
              I am dedicated to creating user-friendly and visually appealing 
              solutions that prioritize the user experience at every step.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
                Explore my latest{" "}
                <Link href="/projects" className="underline underline-offset-4">
                  <span className="text-accent">projects</span>
                </Link>{" "}
                that highlight my proficiency in React, Next.js, JavaScript, TypeScript, and modern web development practices.
              </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
