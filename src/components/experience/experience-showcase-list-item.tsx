import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { type RefObject, useRef } from "react";

export interface ExperienceListIconProps {
  iconRef: RefObject<HTMLElement>;
}

/**
 * Renders the list-item circular icon whose outer stroke animates based on the target element's vertical scroll progress.
 *
 * @param props.iconRef - Ref to the element used as the scroll target that drives the animated stroke.
 * @returns A JSX figure containing an SVG with a static outer ring, a scroll-driven animated stroke, and a filled center circle.
 */
function ShowCaseLiIcon(props: ExperienceListIconProps) {
  const { scrollYProgress } = useScroll({
    target: props.iconRef,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-zinc-900">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="27"
          r="20"
          className="fill-none stroke-accent stroke-1"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="50"
          cy="27"
          r="20"
          className="fill-zinc-100 stroke-[5px] dark:fill-zinc-900 dark:stroke-zinc-100"
        />
        <circle cx="50" cy="27" r="10" className="fill-accent stroke-1" />
      </svg>
    </figure>
  );
}

export interface ExperienceShowcaseListItemProps {
  title: string;
  organisation: {
    name: string;
    href?: string;
  };
  date: string;
  location: string;
  marks?: string;
  description?: string;
}

/**
 * Render a timeline-style list item for an experience entry with a scroll-driven animated icon.
 *
 * @param props - Data for the list item.
 *   - `organisation.href`, when provided, is rendered as an external link opening in a new tab with `rel="nofollow"`;
 *     otherwise the organisation name is rendered as plain underlined text.
 *   - `description`, if present, is split on newlines and each line is rendered as a prefixed bullet (`-`) on its own line.
 *   - A DOM ref is attached to the root `<li>` and passed to the animated icon so the icon's stroke animates with the element's scroll progress.
 * @returns The rendered `<li>` element containing the animated icon, title with organisation handle, date/location/marks metadata, and optional multiline description.
 */
export default function ExperienceShowcaseListItem(
  props: ExperienceShowcaseListItemProps,
) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto mb-14 flex w-[70%] max-w-full flex-col gap-1"
    >
      <ShowCaseLiIcon iconRef={ref} />
      <h3 className="text-base font-bold text-foreground sm:text-xl md:text-2xl">
        {props.title}{" "}
        {props.organisation.href ? (
          <Link
            href={props.organisation.href}
            className="cursor-pointer text-accent underline"
            target="_blank"
            rel="nofollow"
          >
            @{props.organisation.name}
          </Link>
        ) : (
          <a className="text-accent underline">@{props.organisation.name}</a>
        )}
      </h3>
      <span className="text-sm font-medium text-foreground xs:text-base">
        {props.date} | {props.location} {props.marks && `| ${props.marks}`}
      </span>
      <p className="text-sm font-medium text-muted-foreground xs:text-base">
        {props.description
          ? props.description.split("\n").map((line, index) => (
              <span key={index}>
                - {line}
                <br />
              </span>
            ))
          : null}
      </p>
    </li>
  );
}
