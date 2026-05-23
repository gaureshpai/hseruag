import Link from "next/link";

/**
 * Renders the centered hero section introducing Gauresh G Pai, including a heading,
 * multi-paragraph bio with external links, and a "Download Resume" action.
 *
 * The component outputs responsive markup styled with Tailwind CSS and includes
 * links that open in a new tab with `rel="noopener noreferrer"`.
 *
 * @returns The JSX element for the About hero section
 */
export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-5 text-left sm:px-14 md:mt-20 md:px-20 lg:mt-20 lg:flex-col">
      <div className="mt-10 w-full">
        <h1 className="text-4xl font-bold text-accent sm:text-7xl md:text-4xl lg:text-4xl xl:text-5xl">
          Hello, <br className="md:hidden" /> I&apos;m Gauresh G Pai
        </h1>

        <p className="mt-8 space-y-6 text-base font-medium leading-relaxed text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
          <span>
            I’m a Software Engineer working at{" "}
            <Link
              href="https://trybrink.com"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brink AI Labs
            </Link>{" "}
            and an active community contributor at{" "}
            <Link
              href="https://dk24.org"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DK24
            </Link>
            , where I help connect tech communities and drive innovation.
          </span>
          <br />
          <br />
          <span>
            I’m a former{" "}
            <Link
              href="https://www.linkedin.com/posts/uipath-community_automation-futureofwork-uipathcommunity-activity-7309891806182227968-ssKi/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              UiPath Student Developer Champion (2025–26)
            </Link>{" "}
            and previously contributed to{" "}
            <Link
              href="https://github.com/Ajiet-DevNation"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevNation
            </Link>
            .
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
            </Link>
            , interned at{" "}
            <Link
              href="https://ajims.edu.in/Webpages/Index.aspx"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AJIMS
            </Link>
            , and led a{" "}
            <Link
              href="https://www.linkedin.com/posts/gaureshpai_udal2025-dcfellow-innovation-ugcPost-7402369144433635328-Tkr-/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              UDAL DC Fellowship 2025
            </Link>{" "}
            team.
          </span>
          <br />
          <br />
          <span>
            I was part of the winning teams at the{" "}
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7401507922889150466/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AINNOVATION 2025 Hackathon
            </Link>{" "}
            organized by Microsoft and Kyndryl, and the{" "}
            <Link
              href="https://www.linkedin.com/feed/update/urn:li:activity:7376945596563116032/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardano Hackathon Asia 2025 – IBW Edition
            </Link>
            .
          </span>
          <br />
          <br />
          <span>
            I’ve also contributed to the open source{" "}
            <Link
              href="https://github.com/Universal-Commerce-Protocol/ucp/commits/main/?author=gaureshpai"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universal Commerce Protocol (UCP)
            </Link>{" "}
            repository.
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
            href="/Gauresh_G_Pai.pdf"
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
