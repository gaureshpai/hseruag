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
    title: "docmetry",
    description:
      "A standalone CLI and Python package for extracting PDFs into a stable artifact contract and measuring document intelligence systems.",
    githubUrl: `${GITHUB_URL}/docmetry`,
    role: "Developer",
    tags: [
      "Python",
      "CLI",
      "PDF",
      "OCR",
      "document-intelligence",
      "evaluation",
    ],
    screenshot: "/works/placeholder.svg",
    collaborators: [],
  },
  // {
  //   title: "GP Cloud Preview",
  //   description:
  //     "A self-hosted pull-request preview control plane that builds, health-checks, and publishes exact Git commit deployments.",
  //   githubUrl: `${GITHUB_URL}/gp-cloud-preview`,
  //   role: "Developer",
  //   tags: ["Python", "Docker", "Caddy", "GitHub", "deployment", "security"],
  //   screenshot: "/works/placeholder.svg",
  //   collaborators: [],
  // },
  // {
  //   title: "Utility Hub",
  //   description: "A collection of useful web utilities built with MERN stack.",
  //   liveUrl: "https://dkutils.vercel.app",
  //   githubUrl: `${GITHUB_URL}/UtilityHub`,
  //   role: "Full Stack Developer",
  //   tags: [
  //     "MERN",
  //     "Tailwind CSS",
  //     "JavaScript",
  //     "MongoDB",
  //     "Vite",
  //     "Node.js",
  //     "Express.js",
  //     "React.js",
  //     "Supabase",
  //   ],
  //   collaborators: [],
  //   screenshot: "/projects/dkutils.png",
  // },
  // {
  //   title: "SignFlix",
  //   description:
  //     "An accessible video streaming platform with integrated sign language interpretation for the deaf and hard-of-hearing community.",
  //   // liveUrl: "https://signflix.vercel.app/",
  //   role: "Full Stack Developer",
  //   tags: [
  //     "nextjs",
  //     "prisma-orm",
  //     "tailwind CSS",
  //     "typescript",
  //     "azure",
  //     "ffmpeg",
  //     "video streaming",
  //     "accessibility",
  //   ],
  //   collaborators: ["Jnanesh", "Himanshu Hegde", "Milan C I"],
  //   screenshot: "/projects/signflix.jpg",
  // },
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
  // {
  //   title: "pulseui-base",
  //   description:
  //     "Ultra-lightweight React component library with design tokens, multi-brand theming, and TypeScript support. Zero heavy dependencies - perfect for production apps.",
  //   githubUrl: "https://github.com/gaureshpai/pulseui-base",
  //   liveUrl: "https://npmjs.com/package/pulseui-base",
  //   role: "Developer",
  //   tags: [
  //     "component-library",
  //     "design-tokens",
  //     "react",
  //     "react-component-library",
  //     "reactjs",
  //     "typescript",
  //     "npm",
  //     "npm-package",
  //     "npm-packages",
  //     "open-source",
  //     "react-package",
  //     "figma",
  //     "token-sync",
  //   ],
  //   collaborators: ["Vignesh Kamath"],
  //   screenshot: "/projects/pulseui.png",
  // },
];
