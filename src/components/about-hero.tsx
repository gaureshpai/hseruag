import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-5 text-left sm:px-14 md:mt-20 md:px-20 lg:mt-20 lg:flex-col">
      <div className="mt-10 w-full">
        <h1 className="text-4xl font-bold text-accent sm:text-7xl md:text-4xl lg:text-4xl xl:text-5xl">
          Hello, <br className="md:hidden" /> I&apos;m Gauresh G Pai
        </h1>

        <p className="mt-8 space-y-6 text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
          <span>
            I’m a Software Engineer passionate about building web‑based
            solutions with TypeScript, React, Next.js, and Tailwind CSS.
            Currently, I’m working at{" "}
            <Link
              href="https://trybrink.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brink AI Labs.
            </Link>
          </span>
          <br />
          <br />
          <span>
            I’m a UiPath Student Developer Champion (2025–26) and a core
            community member at DevNation &{" "}
            <Link
              href="https://dk24.org"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DK24
            </Link>
            , where I help connect tech communities and drive innovation through
            workshops, hackathons, and collaborative projects.
          </span>
          <br />
          <br />
          <span>
            I’ve worked with{" "}
            <Link
              href="https://billmaxo.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Billmaxo Solutions
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.kreekarvat.in"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kreekarvat Technologies
            </Link>{" "}
            , interned at{" "}
            <Link
              href="https://ajims.edu.in/Webpages/Index.aspx"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AJIMS
            </Link>
            , and led a UDAL DC Fellowship 2025 team that built hospital
            automation systems powering 73 screens with real‑time blood bank,
            OT, and pharmacy updates.
          </span>
          <br />
          <br />
          <span>
            I actively contribute to open‑source projects like{" "}
            <Link
              href="https://gaureshpai.github.io/create-next-quick/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              create‑next‑quick
            </Link>
            ,{" "}
            <Link
              href="https://gaureshpai.github.io/reclaimspace/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              reclaimspace
            </Link>{" "}
            and more; check my{" "}
            <a
              href="https://www.npmjs.com/~gaureshpai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              npm profile
            </a>
            .
          </span>
          <br />
          <br />
          <span>
            I love collaborating with like‑minded builders on impactful
            projects. Feel free to explore my{" "}
            <Link
              href="https://gaureshpai.dev/projects"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              projects
            </Link>{" "}
            and{" "}
            <Link
              href="https://gaureshpai.dev/works"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              works
            </Link>
            .
          </span>
        </p>

        <div className="z-100 mt-6 flex cursor-pointer items-center gap-4">
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
  );
}
