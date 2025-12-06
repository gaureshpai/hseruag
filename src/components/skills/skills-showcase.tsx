import SkillPill, {
  type SkillPillProps,
} from "@/components/skills/skills-pill";

export interface SkillsShowcaseProps {
  skills: {
    sectionName: string;
    skills: SkillPillProps[];
  }[];
}

export default function SkillsShowcase({ skills }: SkillsShowcaseProps) {
  return (
    <section className="overflow-hidden px-6 pb-16 pt-32 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="md:mb-30 mb-16 w-full bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-2xl font-bold text-transparent xs:text-4xl sm:text-4xl md:text-6xl">
          Skills
        </h2>
        {skills.map((section) => (
          <div key={section.sectionName} className="mt-4">
            <span className="text-xs font-semibold text-foreground sm:text-sm">
              {section.sectionName}
            </span>
            <div className="mt-2 flex flex-wrap gap-4 text-xl text-accent-foreground">
              {section.skills.map((pill, index) => (
                <SkillPill key={`lang-${index}`} {...pill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
