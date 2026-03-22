import Link from "next/link";
import { SiGithub, SiLeetcode, SiLinkedin, SiNpm, SiX } from "react-icons/si";
import ButtonContainer from "@/components/ButtonContainer";
import EmailCTA from "@/components/utility/email-cta";
import {
  GITHUB_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
  NPM_URL,
  X_URL,
} from "@/constants/site";

/**
 * Renders the site footer with a contact call-to-action, action buttons, current-year attribution, and social/profile links.
 *
 * @returns The footer JSX element containing a contact email link, call-to-action buttons, copyright attribution, and external social icons.
 */
export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <EmailCTA />
      </div>
      <ButtonContainer />
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">
          © 2022-{new Date().getFullYear()} Gauresh G Pai
        </span>
        <div className="flex gap-8">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Github profile"
          >
            <SiGithub className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Linkedin profile"
          >
            <SiLinkedin className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Twitter profile"
          >
            <SiX className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href={LEETCODE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6"
            aria-label="link to Leetcode profile"
          >
            <SiLeetcode className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          <Link
            href={NPM_URL}
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
