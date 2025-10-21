import { AnimatePresence } from "framer-motion";

import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";
import FadeRight from "@/animation/fade-right";
import { useScreenBreakpoint } from "@/hooks/useScreenBreakpoint";
import { useDebounceValue } from "@/hooks/useDebounceValue";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  const isMobile = useScreenBreakpoint(640);
  const isMobileDebonced = useDebounceValue(isMobile, 600);
  return (
    <section className="overflow-hidden px-6 pt-32 pb-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-2xl font-bold text-transparent xs:text-4xl sm:text-4xl md:text-6xl">
          Skills
        </h2>
        {skills.map((section) => (
          <AnimatePresence key={section.sectionName}>
            <div className="mt-4">
              <span className="text-xs font-semibold text-foreground sm:text-sm">
                {section.sectionName}
              </span>
              <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
                {section.skills.map((pill, index) => (
                  <FadeRight
                    key={`lang-${index}`}
                    duration={0.4}
                    delay={0.1 + index * 0.1}
                    whileInView={!isMobileDebonced}
                    className="-z-20"
                  >
                    <SkillPill {...pill} />
                  </FadeRight>
                ))}
              </div>
            </div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}
