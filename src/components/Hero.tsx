import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import Link from "next/link";

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
      className="flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Gauresh G Pai
              </h1>
              <span className="text-xl font-semibold text-black dark:text-white md:text-3xl">
                Full-Stack Developer · Community Builder
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-4 max-w-4xl text-base font-semibold text-black dark:text-white sm:text-base md:text-xl">
                I craft scalable, user-friendly web applications with clean architecture and strong performance.
                My toolkit includes <span className="text-accent font-semibold">JavaScript</span>, <span className="text-accent font-semibold">TypeScript</span>, <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Next.js</span>, <span className="text-accent font-semibold">TailwindCSS</span> and more.
                Collaborative by nature, I thrive on delivering impactful solutions that make a difference.
              </div>
              <div className="mt-6 flex cursor-pointer items-center gap-4">
                <Link
                  href="/Gauresh_G_Pai_Full_Stack.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={true}
                  className="rounded-md bg-accent cursor-pointer px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Download Resume
                </Link>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
