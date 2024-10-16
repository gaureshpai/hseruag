import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Gauresh G Pai
              </h1>
              <span className="text-xl font-semibold text-black dark:text-white md:text-3xl">
                Engineering Student
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-4 max-w-4xl text-base font-semibold text-black dark:text-white sm:text-base md:text-xl">
                I am a passionate engineering student specializing in developing
                high-performance, user-centric web applications.<br/> Proficient in{" "}
                <span className="font-semibold text-accent">ReactJS</span>,{" "}
                <span className="font-semibold text-accent">NextJS</span>, with deep expertise in{" "}
                <span className="font-semibold text-accent">JavaScript</span>,{" "}
                <span className="font-semibold text-accent">HTML5</span>, and{" "}
                <span className="font-semibold text-accent">CSS3</span>.<br/> I focus on creating efficient, scalable, and intuitive interfaces that deliver seamless user experiences.
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
