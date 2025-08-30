import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-5 sm:px-14 md:mt-20 md:px-20 lg:mt-20 lg:flex-col text-left">
      <div className="mt-10 w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-4xl font-bold text-accent sm:text-7xl md:text-4xl lg:text-4xl xl:text-5xl">
              Hello, <br className="md:hidden"/> I&apos;m Gauresh G Pai
            </h1>
          </FadeUp>

          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I&apos;m a Full Stack Developer skilled in JavaScript frameworks for building scalable web apps, automation tools, and event platforms. Proficient in the MERN stack and the Next.js ecosystem, I have a proven track record of delivering impactful solutions in dynamic teams. My project experience includes a CPRM prototype, a CLI tool, and a faculty appraisal system.
              <br /><br />
              I&apos;m passionate about applying my problem-solving skills, technical expertise, and agile experience to create meaningful digital experiences. As a former Project Manager at Kreekarvat Technologies, I have experience in leading teams and delivering projects on schedule.
              <br /><br />
              Currently, I&apos;m a Student Developer Champion at UiPath, where I promote automation and engagement initiatives within the academic community. I am also a Core Team Member at DevNation, where I contribute to community web development projects and organize workshops.
              <br /><br />
              I&apos;m always eager to learn and grow, and I thrive in collaborative environments. If you&apos;re interested in collaborating on impactful tech initiatives or learning more about my work, feel free to connect or explore my <Link href="/projects" className="underline text-blue-600">projects</Link>.
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
