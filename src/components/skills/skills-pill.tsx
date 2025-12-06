import { FC, SVGProps } from "react";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

type IconName = keyof typeof SiIcons | keyof typeof FaIcons;

const iconComponents: Record<IconName, FC<SVGProps<SVGSVGElement>>> = {
  ...SiIcons,
  ...FaIcons,
};

export type SkillPillProps = {
  name: string;
  icon: string;
};

export default function SkillPill(props: SkillPillProps) {
  const { name, icon } = props;
  const Icon = iconComponents[icon as IconName];
  return (
    <div className="flex w-max items-center gap-2 overflow-hidden rounded-lg border border-accent/20 bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm dark:bg-zinc-800 dark:text-white sm:text-base md:px-6 md:py-3 md:text-lg">
      {Icon && <Icon className="h-5 w-5 sm:h-8 sm:w-8" />}
      <span className="font-medium">{name}</span>
    </div>
  );
}
