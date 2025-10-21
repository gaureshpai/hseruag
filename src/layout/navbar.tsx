import Link from "next/link";

import ThemeSwitch from "@/components/utility/theme-switch";
import AnimatedLogo from "@/animation/animated-logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 mt-2 px-6 py-8 sm:mt-8 sm:px-14 md:px-20">
      <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
        <Link
          href="/"
          className="drop-shadow-teralight flex items-center justify-center"
          aria-label="Return to home page"
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <AnimatedLogo />
          </div>
        </Link>
        <nav className="flex items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50">
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
