export interface Project {
  title: string;
  description: string;
  liveUrl: string | null;
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
    title: "Create Next Quick",
    description:
      "A CLI tool to quickly set up a Next.js project with Tailwind CSS and TypeScript.",
    liveUrl: "https://gaureshpai.github.io/create-next-quick",
    githubUrl: "https://github.com/gaureshpai/create-next-quick",
    role: "Developer",
    tags: ["Node.js", "Next.js", "Tailwind CSS", "TypeScript", "npm", "CLI"],
    collaborators: [],
    screenshot: "/projects/create-next-quick.png",
  },
  {
    title: "reclaimspace",
    description:
      "A CLI tool to reclaim disk space by finding and removing unnecessary development folders and files.",
    githubUrl: "https://github.com/gaureshpai/reclaimspace",
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
    title: "Utility Hub",
    description: "A collection of useful web utilities built with MERN stack.",
    liveUrl: "https://dkutils.vercel.app",
    githubUrl: "https://github.com/gaureshpai/UtilityHub",
    role: "Full Stack Developer",
    tags: [
      "MERN",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
      "Vite",
      "Node.js",
      "Express.js",
      "React.js",
      "Supabase",
    ],
    collaborators: [],
    screenshot: "/projects/dkutils.png",
  },
  {
    title: "SignFlix",
    description:
      "An accessible video streaming platform with integrated sign language interpretation for the deaf and hard-of-hearing community.",
    liveUrl: "https://signflix.vercel.app/",
    role: "Full Stack Developer",
    tags: [
      "nextjs",
      "prisma-orm",
      "tailwind CSS",
      "typescript",
      "azure",
      "ffmpeg",
      "video streaming",
      "accessibility",
    ],
    collaborators: ["Jnanesh", "Himanshu Hegde", "Milan C I"],
    screenshot: "/projects/signflix.jpg",
  },
  {
    title: "CPRM-Prototype",
    description:
      "A prototype for a Construction Project Resource Management system.",
    liveUrl: "https://cprm-prototype.vercel.app/",
    githubUrl: "https://github.com/gaureshpai/CPRM-Prototype",
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
    liveUrl: "https://aakar2025.in/",
    githubUrl: "https://github.com/gaureshpai/aakar2025",
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
