import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
        }}
        className="flex min-h-[calc(100vh-100px)] items-center justify-center px-6 py-20 sm:px-14 md:px-20"
      >
        <div className="w-full">
          <div className="mx-auto max-w-7xl">
            <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
              Gauresh G Pai
            </h1>
            <span className="text-xl font-semibold text-black dark:text-white md:text-3xl">
              Frontend Developer · 9+ Client Projects Delivered
            </span>
            <div className="mt-4 max-w-4xl text-base font-semibold text-black dark:text-white sm:text-base md:text-xl">
              I craft scalable, user-friendly web applications with clean
              architecture and strong performance. My toolkit includes{" "}
              <span className="font-semibold text-accent">TypeScript</span>,{" "}
              <span className="font-semibold text-accent">React</span>,{" "}
              <span className="font-semibold text-accent">Next.js</span>,{" "}
              <span className="font-semibold text-accent">TailwindCSS</span> and
              more. Collaborative by nature, I thrive on delivering impactful
              solutions that make a difference.
            </div>
            <div className="mt-6 flex cursor-pointer items-center gap-4">
              <Link
                href="/Gauresh_G_Pai_SWE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={true}
                className="cursor-pointer rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
