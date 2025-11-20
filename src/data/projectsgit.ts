export interface Project {
  title: string;
  description: string;
  liveUrl: string | null;
  link: string;
  role?: string;
  tags: string[];
  owner?: string;
  collaborators?: string[];
  screenshot?: string;
  company?: string;
}

export const PROJECTS: Project[] = [
  {
    "title": "SignFlix",
    "description": "An accessible video streaming platform with integrated sign language interpretation for the deaf and hard-of-hearing community.",
    "link": "https://github.com/gaureshpai/SignFlix",
    "liveUrl": "",
    "tags": ["idea", "incomplete", "innovation", "major-project", "nextjs", "prisma-orm", "tailwind CSS", "typescript", "git"],
    "collaborators": [
      "Jnanesh",
      "Himanshu Hegde",
      "Milan C I"
    ],
    "screenshot": "/projects/signflix.jpg"
  },
  {
    "title": "create-next-quick",
    "description": "create-next-quick is a CLI tool that lets you instantly create a new Next.js project with your choice of options.",
    "link": "https://github.com/gaureshpai/create-next-quick",
    "liveUrl": "https://www.npmjs.com/package/create-next-quick",
    "tags": [
      "frontend",
      "js",
      "nextjs",
      "npm-package",
      "scaffolding",
      "starter"
    ],
    "screenshot": "/projects/create-next-quick.png"
  },
  {
    "title": "cprm-prototype",
    "description": "The Centralized Patient & Resource Management System (CPRM) is a comprehensive hospital management solution prototype developed for Wenlock Hospital as part of the UDAL Fellowship challenge",
    "link": "https://github.com/gaureshpai/cprm-prototype",
    "liveUrl": "https://cprm-prototype.vercel.app",
    "tags": [
      "challenge",
      "fellowship",
      "neondb",
      "nextjs",
      "postgresql",
      "prismaorm",
      "react",
      "shadcn-ui",
      "tailwindcss",
      "typescript",
      "udal"
    ],
    "screenshot": "/projects/cprm.png"
  },
  {
    "title": "reclaimspace",
    "description": "A CLI tool to reclaim disk space by finding and removing unnecessary development folders and files.",
    "link": "https://github.com/gaureshpai/reclaimspace",
    "liveUrl": "https://www.npmjs.com/package/reclaimspace",
    "tags": [
      "cli",
      "nodejs",
      "npm",
      "babel",
      "jest",
      "npm-package",
      "dev",
      "npkill"
    ],
    "screenshot": "/projects/reclaimspace.png"
  },
  {
    "title": "Utility Hub",
    "description": "Utility Hub is a web-based utility platform offering multiple everyday tools in one place. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled using TailwindCSS, the app provides efficient solutions from file converters to text utilities, all accessible from a centralized dashboard.",
    "link": "https://github.com/gaureshpai/UtilityHub",
    "liveUrl": "https://dkutils.vercel.app/",
    "tags": [
      "css",
      "expressjs",
      "html",
      "javascript",
      "mern",
      "mongodb",
      "nodejs",
      "reactjs",
      "tailwindcss",
      "utility",
      "supabase",
      "vercel",
      "webapp",
      "webdevelopment"
    ],
    "screenshot": "/projects/dkutils.png"
  },
  {
    "title": "Easpataal",
    "description": "A full-stack web/mobile application designed to eliminate long waiting times and enhance efficiency in hospital environments, specifically addressing the challenges of overcrowded queues common in many Indian hospitals.",
    "link": "https://github.com/gaureshpai/easpataal",
    "liveUrl": "https://easpataal.vercel.app/",
    "tags": [
      "react",
      "nextjs",
      "postgreSQL",
      "tailwindcss",
      "supabase",
      "vercel",
      "webapp",
      "webdevelopment"
    ],
    "collaborators": [
      "jnanesh",
      "Himanshu Hegde"
    ],
    "screenshot": "/projects/easpataal.png"
  },
  {
    "title": "Learnio",
    "description": "A web-based personalized learning platform for kids.",
    "link": "https://github.com/gaureshpai/Learnio",
    "liveUrl": "",
    "tags": [
      "Python",
      "Flask",
      "SQL",
      "TailwindCSS",
      "HTML",
      "CSS",
      "JavaScript",
      "OpenAI",
      "ChatGPT"
    ],
    "collaborators": [
      "Anusha Prabhu"
    ],
    "screenshot": "/projects/learnio.png"
  },
  {
    "title": "pulseui-base",
    "description": "Ultra-lightweight React component library with design tokens, multi-brand theming, and TypeScript support. Zero heavy dependencies - perfect for production apps.",
    "link": "https://github.com/gaureshpai/pulseui-base",
    "liveUrl": "https://npmjs.com/package/pulseui-base",
    "tags": [
      "component-library",
      "design-tokens",
      "react",
      "react-component-library",
      "reactjs",
      "typescript",
      "npm",
      "npm-package",
      "npm-packages",
      "open-source",
      "react-package",
      "figma",
      "token-sync"
    ],
    "collaborators": [
      "Vignesh Kamath"
    ],
    "screenshot": "/projects/pulseui.png"
  },
  {
    "title": "HallGrid",
    "description": "Welcome to the Enigma's Seminar Hall Booking System! This project aims to provide an efficient and streamlined way for Students and lecturers of  AJIET to book seminar halls for various events. Built using Next.js, MongoDB, and Firebase, this system allows easy management of booking requests, hall availability, and event scheduling",
    "link": "https://github.com/gaureshpai/HallGrid",
    "liveUrl": "https://hallgrid.netlify.app/",
    "tags": [
      "collaboration",
      "html-css-javascript",
      "mongodb",
      "next-auth",
      "nextjs",
      "nodemailer",
      "tailwindcss",
      "team-work"
    ],
    "owner": "Enigma",
    "collaborators": [
      "Shreyya18",
      "shirha20",
      "Shikhar-Shetty"
    ],
    "screenshot": "/projects/hallgrid.png"
  },
  {
    "title": "reactnativeepictrailsds",
    "description": "Epic Trails DS is a React Native design system built by the Flourish development team to ensure consistency, scalability, and efficiency in UI/UX development. Using Storybook, this project provides a structured approach to component-based design, making it easier to create and maintain visually cohesive applications.",
    "link": "https://github.com/gaureshpai/reactnativeepictrailsds",
    "liveUrl": "https://www.npmjs.com/package/reactnativeepictrailsds",
    "tags": [
      "expo",
      "flourish",
      "npm",
      "npm-package",
      "npm-packages",
      "open-course-package",
      "open-source",
      "react-native",
      "react-native-package",
      "react-package"
    ],
    "owner": "Flourish",
    "collaborators": [
      "Jnanesh",
      "Himanshu Hegde",
      "Milan C I",
      "Deeksha",
      "Nidhi D"
    ],
    "screenshot": "/projects/reactnativeepictrailsds.png"
  },
  {
    "title": "Hearease",
    "description": "Therapy web application for Tinnitus – designed to provide specialized support and management tools for individuals experiencing Tinnitus symptoms.",
    "link": "https://github.com/gaureshpai/Hearease",
    "liveUrl": "https://hearease.vercel.app",
    "tags": [
      "audio-player",
      "html-css-javascript",
      "nextjs",
      "pwa",
      "tailwindcss",
      "typescript"
    ],
    "owner": "gaureshpai",
    "collaborators": [
      "Dhanya Shetty",
      "Harshitha P"
    ],
    "screenshot": "/projects/hearease.png"
  },
  {
    "title": "DevNation-CMS",
    "description": "This is a community level open-source project that serves as a CMS(Content Management System) for our community DevNation.",
    "link": "https://github.com/gaureshpai/DevNation-CMS",
    "liveUrl": "",
    "tags": [
      "community",
      "composer",
      "devnation",
      "laravel",
      "laravel-framework",
      "nodejs",
      "open-source",
      "php"
    ],
    "owner": "gaureshpai",
    "collaborators": [
      "Darshan Bhandary",
      "Jnanesh",
      "Himanshu Hegde",
      "Milan C I",
      "Dhanya Shetty",
      "Sthuthi",
      "Thrisha",
      "Rishitha",
    ],
    "screenshot": "/projects/cms.png"
  },
  {
    "title": "DevHack",
    "description": "Draft 1 of the official Hackathon website for AJIET, showcasing innovative projects, event details, and participant resources for a successful competition experience.",
    "link": "https://github.com/gaureshpai/DevHack",
    "liveUrl": "https://ajiethackathon.vercel.app/",
    "tags": [
      "daisy-ui",
      "html-css-javascript",
      "material-ui",
      "nextjs14",
      "react-hooks",
      "tailwindcss"
    ],
    "owner": "DevNation",
    "screenshot": "/projects/devhack.png"
  },
  {
    "title": "ggquizopia",
    "description": "Quizopia is a fun Marvel-themed quiz app that tests your knowledge about Marvel characters. Featuring detailed character profiles and engaging questions, it's built with Next.js, HTML, CSS, and JavaScript. Clone the repository, install dependencies, and start the app to challenge your Marvel knowledge.",
    "link": "https://github.com/gaureshpai/ggquizopia",
    "liveUrl": "https://ggquizopia.vercel.app/",
    "tags": [
      "html-css-javascript",
      "javascript",
      "nextjs"
    ],
    "screenshot": "/projects/ggquizopia.png"
  },
  {
    "title": "IdeaSpark",
    "description": "IdeaSpark is your go-to open-source AI prompting tool, designed to ignite your creativity. Discover, create, and share captivating prompts generated by advanced artificial intelligence. Dive into the world of inspiration with IdeaSpark!",
    "link": "https://github.com/gaureshpai/IdeaSpark",
    "liveUrl": "https://ggideaspark.vercel.app/",
    "tags": [
      "html-css-javascript",
      "javascript",
      "mongodb",
      "nextjs",
      "nodejs",
      "tailwindcss"
    ],
    "screenshot": "/projects/ideaspark.png"
  },
  {
    "title": "Interpretations-Management-App",
    "description": "Interpretations Manager: Effortlessly manage interpretations with this Next.js app backed by AppWriter. View, edit, and delete interpretations with ease. Simplify your interpretation management tasks today! 🌟",
    "link": "https://github.com/gaureshpai/Interpretations-Management-App",
    "liveUrl": "https://gginterpretations.vercel.app",
    "tags": [
      "html-css-javascript",
      "mongodb",
      "mongoose",
      "tailwindcss",
      "typescript"
    ],
    "screenshot": "/projects/gginterpretations.png"
  },
  {
    "title": "ggreplicater",
    "description": "GGReplicater is a web application hosted on Vercel, utilizing Replicate AI to generate images based on user prompts. Users input a prompt and receive AI-generated images in response, which they can easily download. The project is open source, built using Next.js, Tailwind CSS, and Replicate AI.",
    "link": "https://github.com/gaureshpai/ggreplicater",
    "liveUrl": "https://ggreplicater.vercel.app",
    "tags": [
      "aiart",
      "generative-ai",
      "html-css-javascript",
      "image-generation",
      "nextjs",
      "opensource",
      "replicate-api",
      "vercel",
      "webdevelopment"
    ],
    "screenshot": "/projects/ggreplicator.png"
  },
  {
    "title": "two-cars",
    "description": "A fast-paced by Jnanesh , reflex-testing game where players control two cars simultaneously, avoiding obstacles and collecting points. Built using HTML, CSS, and JavaScript, this game is lightweight, responsive, and perfect for casual gameplay.",
    "link": "https://github.com/gaureshpai/two-cars",
    "liveUrl": "https://Jnanesh-two-cars.netlify.app/",
    "tags": [
      "css",
      "html",
      "js",
      "open-source"
    ],
    "owner": "Jnanesh",
    "collaborators": [
      "Jnanesh"
    ],
    "screenshot": "/projects/car.png"
  },
  {
    "title": "react-epic-trails-ds",
    "description": "Epic Trails DS is a React design system built by the Flourish development team to ensure consistency, scalability, and efficiency in UI/UX development. Leveraging Storybook, this project provides a structured, component-based approach to designing reusable UI elements, making it easier to build and maintain visually cohesive and accessible web app.",
    "link": "https://github.com/gaureshpai/react-epic-trails-ds",
    "liveUrl": "https://react-epic-trails-ds.vercel.app",
    "tags": [
      "design-system",
      "epic-trails",
      "nextjs",
      "npm",
      "open-source",
      "react",
      "react-library",
      "storybook"
    ],
    "owner": "Himanshu Hegde",
    "collaborators": [
      "Himanshu Hegde",
      "Jnanesh",
      "Milan C I"
    ],
    "screenshot": "/projects/epic.png"
  },
  {
    "title": "MLA-list-finder",
    "description": "MLA List Finder is a web application that allows users to search and view information about Members of the Legislative Assembly (MLAs) based on location.",
    "link": "https://github.com/gaureshpai/MLA-list-finder",
    "liveUrl": "https://mla-list-finder.vercel.app/",
    "tags": [
      "html-css-javascript",
      "js",
      "nodejs",
      "open-source",
      "react",
      "react-vite"
    ],
    "owner": "Keerthan",
    "collaborators": [
      "Keerthan"
    ],
    "screenshot": "/projects/mla.png"
  },
  {
    "title": "MovieLand",
    "description": "A sleek and modern movie browsing platform powered by the IMDb API. Explore your favorite movies, search by title, and enjoy a seamless movie experience!",
    "link": "https://github.com/gaureshpai/MovieLand",
    "liveUrl": "",
    "tags": [
      "html-css-javascript",
      "react",
      "reactjs"
    ],
    "screenshot": "/projects/movieland.png"
  },
  {
    "title": "Demo-react-native-epic-trails-ds",
    "description": "A demo project showcasing the integration of React Native Epic Trails Design System (reactnativeepictrailsds) with Expo Router, Nativewind, TailwindCSS, and modern React Native components. Built with Expo SDK 52, it demonstrates scalable design practices, navigation, and cross-platform styling for mobile and web.",
    "link": "https://github.com/gaureshpai/Demo-react-native-epic-trails-ds",
    "liveUrl": "https://epictrails-demo.expo.app/",
    "tags": [
      "application",
      "demo",
      "design-system",
      "epic-trails",
      "frontend",
      "prototype",
      "react",
      "react-native",
      "typescript"
    ],
    "owner": "Flourish",
    "collaborators": [
      "Milan C I"
    ],
    "screenshot": "/projects/demo.png"
  },
  {
    "title": "gmaps-demo",
    "description": "Google maps demo created for the broker website pitch under Kreekarvat technologies",
    "link": "https://github.com/gaureshpai/gmaps-demo",
    "liveUrl": "https://gmaps-demo.vercel.app",
    "tags": [
      "demo",
      "gmaps",
      "gmaps-api",
      "mongodb",
      "nextjs",
      "prisma-orm"
    ],
    "owner": "Kreekarvat Technologies",
    "collaborators": [
      "Himanshu Hegde"
    ],
    "screenshot": "/projects/gmaps.png"
  },
  {
    "title": "DocuWave",
    "description": "The DocuWave website is the web application where the user can view, text-to-speech convert, extract info from, ask question to from the pdf ",
    "link": "https://github.com/gaureshpai/DocuWave",
    "liveUrl": "",
    "tags": [
      "nextjs",
      "pdf",
      "pdf-viewer",
      "typescript"
    ],
    "screenshot": "/projects/docuwave.png"
  },
  {
    "title": "old_portfolio",
    "description": "Welcome to my personal portfolio website! This repository showcases my skills, projects, certifications, and contact information. Explore my journey in software development and get in touch to collaborate on exciting projects. Let's connect and build something great together!",
    "link": "https://github.com/gaureshpai/old_portfolio",
    "liveUrl": "",
    "tags": [
      "html-css-javascript",
      "mongodb",
      "nextjs",
      "typescript"
    ],
    "screenshot": "/projects/old_portfolio.png"
  },
  {
    "title": "filetohtmlfileconvertor",
    "description": "HTML Converter: This Java program converts text files into HTML files, adding basic styling and including the filename as a heading.",
    "link": "https://github.com/gaureshpai/filetohtmlfileconvertor",
    "liveUrl": "",
    "tags": [
      "html",
      "java"
    ],
    "screenshot": "/projects/html.png"
  },
  {
    "title": "Java-Swing-Login-Quiz-App",
    "description": "Java Swing Login-Quiz App :  A user-friendly Java Swing-based login application with password visibility control and \"Forgot Password?\" recovery. Features secure authentication, clean styling, and an intuitive interface.",
    "link": "https://github.com/gaureshpai/Java-Swing-Login-Quiz-App",
    "liveUrl": "",
    "tags": [
      "java"
    ],
    "owner": "Lisha Dsouza",
    "collaborators": [
      "Lisha Dsouza"
    ],
    "screenshot": "/projects/login.png"
  },
  {
    "title": "Java-Swing-Registration-Quiz-App",
    "description": "Java Swing Registration & Quiz App: An intuitive Java Swing application for user registration, login, and a fun quiz experience. Seamlessly register, login securely, and test your knowledge with an interactive quiz. Save user credentials and quiz results for easy access.",
    "link": "https://github.com/gaureshpai/Java-Swing-Registration-Quiz-App",
    "liveUrl": "",
    "tags": [
      "java",
      "java-swing",
      "java-swing-application",
      "quiz-game"
    ],
    "owner": "Lisha Dsouza",
    "collaborators": [
      "Lisha Dsouza"
    ],
    "screenshot": "/projects/quiz.png"
  }
]