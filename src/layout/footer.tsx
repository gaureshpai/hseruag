import Link from "next/link";
import { SiGithub, SiLeetcode, SiLinkedin, SiNpm, SiX } from "react-icons/si";
import ButtonContainer from "@/components/ButtonContainer";
import ContactButton from "@/components/contact-form/contact-button";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <Link
          href={`mailto:paigauresh@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
        >
          <span>paigauresh@gmail.com</span>
        </Link>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <ButtonContainer />
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">
          © {new Date().getFullYear()} Gauresh G Pai
        </span>
        <div className="flex gap-8">
          <Link
            href="https://github.com/gaureshpai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Github profile"
          >
            <SiGithub className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/gaureshpai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Linkedin profile"
          >
            <SiLinkedin className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href="https://x.com/hseruag"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Twitter profile"
          >
            <SiX className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href="https://leetcode.com/u/gaureshpai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Leetcode profile"
          >
            <SiLeetcode className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href="https://www.npmjs.com/~gaureshpai"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to NPM profile"
          >
            <SiNpm className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
