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
              I’m a former Project Manager and current Core Team Member at <strong>DevNation</strong>, with a passion for delivering high-quality web development projects and empowering the tech community through workshops and collaborative initiatives.
              <br /><br />
              Currently pursuing my Bachelor’s in Computer Science Engineering at <strong>AJIET, Mangaluru</strong>, I focus on building scalable, user-centric solutions with a growing specialization in <strong>Next.js</strong> and full-stack technologies.
              <br /><br />
              As the <strong>Student Campus Director (SCD)</strong> for UiPath at AJIET, I actively lead automation awareness and enablement programs, helping students explore and adopt <strong>Robotic Process Automation (RPA)</strong> tools.
              <br /><br />
              My experience spans full-stack development, project leadership, RPA, UI/UX, and community mentoring. I thrive in environments that promote continuous learning and collaborative growth, always striving to make meaningful contributions to both product and people.
              <br /><br />
              If you're interested in collaborating on impactful tech initiatives or learning more about my work, feel free to connect or explore my <Link href="/projects" className="underline text-blue-600">projects</Link>.
            </p>
            <div className="mt-6 flex cursor-pointer z-100 items-center gap-4">
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
  );
}
