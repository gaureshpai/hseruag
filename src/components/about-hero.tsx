import Link from "next/link";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-5 sm:px-14 md:mt-20 md:px-20 lg:mt-20 lg:flex-col text-left">
      <div className="mt-10 w-full">
        <h1 className="text-4xl font-bold text-accent sm:text-7xl md:text-4xl lg:text-4xl xl:text-5xl">
          Hello, <br className="md:hidden" /> I&apos;m Gauresh G Pai
        </h1>

        <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg leading-relaxed space-y-6">
          <span>
            I am a 2026 Computer Science Engineering graduate passionate about developing innovative web-based solutions. My primary tech stack includes JavaScript, TypeScript, React, Next.js, Tailwind CSS, and more technologies that enable efficient and scalable development.
          </span>
          <br /><br />
          <span>
            I am also a UiPath Student Developer Champion for 2025-26 and a dedicated core community member at DevNation AJIET. Additionally, I actively contribute to <Link href="https://dk24.org" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">DK24</Link>, where I work to connect college tech communities and foster innovation through workshops, hackathons, and collaborative projects.
          </span>
          <br /><br />
          <span>
            My work experience includes roles at <Link href="https://www.kreekarvat.in" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Kreekarvat Technologies</Link> and <Link href="https://billmaxo.com" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">Billmaxo Solutions</Link>, an internship at <Link href="https://ajims.edu.in/Webpages/Index.aspx" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">AJIMS</Link>, and leading a UDAL DC Fellowship 2025 team that built hospital automation systems powering 73 screens with real-time blood bank, OT, and pharmacy updates.
          </span>
          <br /><br />
          <span>
            I actively contribute to open-source projects like <Link href="https://gaureshpai.github.io/create-next-quick/" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">create-next-quick</Link>, <Link href="https://gaureshpai.github.io/reclaimspace/" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">reclaimspace</Link> and more; check my <a href="https://www.npmjs.com/~gaureshpai" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">npm profile</a>.
          </span>
          <br /><br />
          <span>
            Beyond my technical work, I enjoy connecting with like-minded individuals, collaborating on impactful projects, and building solutions that make a difference. Feel free to explore my <Link href="https://gaureshpai.dev/projects" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">projects</Link> and <Link href="https://gaureshpai.dev/works" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">works</Link>.
          </span>
        </p>
        <div className="mt-6 flex cursor-pointer z-100 items-center gap-4">
          <Link
            href="/Gauresh_G_Pai_Frontend.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            className="rounded-md bg-accent cursor-pointer px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
