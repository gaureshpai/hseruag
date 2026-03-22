import type { ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";
import { NPM_URL } from "@/constants/site";

export const ACHIEVEMENTS: ExperienceShowcaseListItemProps[] = [
  {
    title: "Hackathon Excellence",
    organisation: {
      name: "Cardano & Microsoft",
      // href: "https://www.linkedin.com/in/gaureshpai/",
    },
    date: "2025",
    location: "International",
    description:
      "Secured 2nd Runner-up at Cardano Hackathon Asia 2025 - IBW Edition in the Privacy Dapps Track.\nSecured 2nd Runner-up at Annovation2025 Hackathon by Kyndryl and Microsoft among 1,081 teams.",
  },
  {
    title: "Leadership Roles",
    organisation: {
      name: "UiPath & Kreekarvat",
      // href: "https://www.linkedin.com/in/gaureshpai/",
    },
    date: "2025 - 2026",
    location: "Hybrid",
    description:
      "Served as Student Developer Champion at UiPath (2025-26).\nProject Manager at Kreekarvat Technologies.\nTechnical Lead, Web Lead & Core Committee Akaar 2025.\nProject Lead Developer at UDAL DC Fellowship 2025.",
  },
  {
    title: "Competitions & Community",
    organisation: {
      name: "Yukti & GDSC",
      // href: "https://www.linkedin.com/in/gaureshpai/",
    },
    date: "2025",
    location: "AJIET",
    description:
      "Winner of Code Debugging (2025) at Yukti 2025.\nCore team member of DevNation, GDSC AJIET and DK24 - A tech community connecting college communities.",
  },
  {
    title: "Open Source Contributions",
    organisation: {
      name: "GitHub & NPM",
      href: `${NPM_URL}`,
    },
    date: `2024 - ${new Date().getFullYear()}`,
    location: "AJIET",
    description:
      "reclaimspace: A CLI tool to reclaim disk space by finding and removing regeneratable development folders.\nCreate-next-quick: A CLI tool to quickly create Next.js projects with various templates and configurations.\nUCP: Contributed to the documentation for the Universal Commerce Protocol (UCP) - #99.",
  },
];
