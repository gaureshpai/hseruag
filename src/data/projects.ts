import { GITHUB_URL } from "@/constants/site";

export interface Project {
  title: string;
  description: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  role: string;
  tags: string[];
  owner?: string;
  collaborators: string[];
  screenshot?: string;
  company?: string;
}

export const PROJECT_SHOWCASE: Project[] = [
  {
    title: "docmetry",
    description:
      "A standalone CLI and Python package for extracting PDFs into a stable artifact contract and measuring document intelligence systems.",
    githubUrl: `${GITHUB_URL}/docmetry`,
    role: "Developer",
    tags: [
      "python",
      "cli",
      "pdf",
      "ocr",
      "document-intelligence",
      "evaluation",
    ],
    collaborators: [],
    screenshot: "/works/placeholder.svg",
  },
  {
    title: "reclaimspace",
    description:
      "A CLI tool to reclaim disk space by finding and removing unnecessary development folders and files.",
    githubUrl: `${GITHUB_URL}/reclaimspace`,
    liveUrl: "https://gaureshpai.github.io/reclaimspace",
    tags: [
      "cli",
      "nodejs",
      "npm",
      "babel",
      "jest",
      "npm-package",
      "dev",
      "npkill",
    ],
    collaborators: [],
    role: "Developer",
    screenshot: "/projects/reclaimspace.png",
  },
  {
    title: "CPRM-Prototype",
    description:
      "A prototype for a Construction Project Resource Management system.",
    liveUrl: "https://cprm-prototype.vercel.app/",
    githubUrl: `${GITHUB_URL}/CPRM-Prototype`,
    role: "Full Stack Developer",
    tags: [
      "Nextjs",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Git",
      "TypeScript",
    ],
    collaborators: [],
    screenshot: "/projects/cprm.png",
  },
  {
    title: "pulseui-base",
    description:
      "Ultra-lightweight React component library with design tokens, multi-brand theming, and TypeScript support. Zero heavy dependencies - perfect for production apps.",
    githubUrl: "https://github.com/gaureshpai/pulseui-base",
    liveUrl: "https://npmjs.com/package/pulseui-base",
    role: "Developer",
    tags: [
      "component-library",
      "design-tokens",
      "react",
      "typescript",
      "npm-package",
      "open-source",
    ],
    collaborators: ["Vignesh Kamath"],
    screenshot: "/projects/pulseui.png",
  },
  {
    title: "Aakar 2025",
    description:
      "Promotional site for Aakar 2025 Techno-Cultural Fest. Integrated event listings, dynamic schedules, and registration forms with creative branding.",
    role: "Frontend Developer",
    liveUrl: null,
    githubUrl: `${GITHUB_URL}/aakar2025`,
    tags: [
      "Event",
      "College",
      "Festival",
      "Tech Fest",
      "Nextjs",
      "Tailwind CSS",
      "JavaScript",
      "Frontend",
    ],
    owner: "Aakar 2025",
    company: "Kreekarvat Technologies",
    collaborators: ["Jnanesh"],
    screenshot: "/works/aakar.png",
  },
];
