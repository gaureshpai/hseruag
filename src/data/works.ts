export interface Project {
  title: string;
  description: string;
  liveUrl: string | null;
  role: string;
  tags: string[];
  owner: string;
  collaborators?: string[];
  screenshot: string;
  company?: string;
}

const projects: Project[] = [
  {
    title: "Aakar 2025",
    description:
      "Promotional site for Aakar 2025 Techno-Cultural Fest. Integrated event listings, dynamic schedules, and registration forms with creative branding.",
    role: "Frontend Developer",
    liveUrl: "https://aakar2025.in/",
    tags: ["Event", "College", "Festival", "Tech Fest"],
    owner: "Aakar 2025",
    company: "Kreekarvat Technologies",
    collaborators: ["Jnanesh"],
    screenshot: "/works/aakar.png",
  },
  {
    title: "Marketing Tool",
    description:
      "Campaign manager for SMS, email, and WhatsApp marketing with real-time analytics. Built to help small businesses track performance and ROI.",
    role: "Volunteer Tool Developer",
    liveUrl: null,
    tags: ["Marketing", "Campaigns", "Analytics", "Automation", "Node.js"],
    owner: "Billmaxo Solutions",
    company: "Billmaxo Solutions",
    collaborators: ["Jnanesh"],
    screenshot: "/works/placeholder.svg",
  },
  {
    title: "AJIMS Employee Management Portal",
    description:
      "An internal web portal developed for AJ Institute of Medical Sciences to manage employee data efficiently. Features include department-wise access, attendance tracking, role-based permissions, and intuitive UI for HR and administrative tasks.",
    role: "Full Stack Developer",
    liveUrl: "https://ajims.vercel.app",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Employee Management",
      "Medical",
      "Internal Tool",
    ],
    owner: "Dr. Sreeraj Sundaran",
    collaborators: [
      "Jnanesh",
      "Vikram",
      "Jyothi",
      "Nidhi Jadav",
      "Himanshu Hegde",
      "Milan C I",
    ],
    company: "AJIMS",
    screenshot: "/works/emp.png",
  },
  {
    title: "Ullas Ice Cream",
    description:
      "Brand showcase website for Ullas Ice Cream featuring their product range, store locations, and visual branding. Focused on modern UI and product categorization.",
    role: "Full Stack Developer",
    liveUrl: "https://www.ullasicecreams.com/",
    tags: ["FMCG", "Food", "Branding", "Products"],
    owner: "Ullas",
    company: "Kreekarvat Technologies",
    collaborators: ["Nidhi D"],
    screenshot: "/works/ullas.png",
  },
  {
    title: "Exactitude Medical Foundation",
    description:
      "A precision healthcare platform highlighting epigenetic research and personalized medicine. Designed a fully responsive and scalable frontend architecture with dynamic content control, enabling administrators to manage achievements, advisory members, and contact forms through a secure panel.",
    liveUrl: "https://exactitudemedfoundation.org",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Epigenetics",
      "Healthcare",
      "Static Site",
    ],
    role: "Full Stack Developer",
    owner: "Dr. Ragavendra R Baliga",
    company: "Kreekarvat Technologies",
    screenshot: "/works/exactitudemedfoundation.png",
  },
  {
    title: "Damaru productions Website",
    description:
      "A sleek portfolio website for Damaru Productions, showcasing their video production services and past projects. Emphasized visual storytelling with a modern design aesthetic.",
    role: "Frontend Developer",
    liveUrl: "https://damaruproductions.com/",
    tags: ["Portfolio", "Video Production", "Creative", "Visual"],
    owner: "Damaru Productions",
    company: "Kreekarvat Technologies",
    screenshot: "/works/damaru.png",
  },
  {
    title: "ExamsMitra",
    description:
      "Multi-purpose educational platform offering academic resources, exam schedules, and student services. Built responsive pages and components for optimized mobile experience.",
    role: "Frontend Developer",
    liveUrl: "https://www.examsmitra.com/",
    tags: ["Education", "Resources", "Students", "Responsive"],
    owner: "ExamsMitra",
    company: "Kreekarvat Technologies",
    collaborators: ["Jnanesh", "Harshitha", "Dhanya", "Yashas"],
    screenshot: "/works/examsmitra.png",
  },
  {
    title: "WhatsApp Integration Tool",
    description:
      "Tool to send digital receipts, order updates, and offers through WhatsApp Business API to improve customer engagement.",
    role: "Volunteer Tool Developer",
    liveUrl: null,
    tags: ["WhatsApp", "Business Messaging", "Customer Engagement"],
    owner: "Billmaxo Solutions",
    company: "Billmaxo Solutions",
    collaborators: ["Jnanesh"],
    screenshot: "/works/placeholder.svg",
  },
  {
    title: "RK Baliga Legacy Website",
    description:
      "A digital tribute website honoring R.K. Baliga, the visionary behind India's first electronics city. Features timeline, biography, and legacy impact sections.",
    role: "Full-Stack Developer",
    liveUrl: "https://rkbaligalegacy.vercel.app",
    tags: ["Legacy", "Tribute", "Biography", "Static Site"],
    owner: "Dr. Ragavendra R Baliga",
    company: "Kreekarvat Technologies",
    screenshot: "/works/rkbaligalegecy.png",
  },
  {
    title: "SVS Temple PU College",
    description:
      "Official  website for SVS Temple PU College. Developed a clean and informative layout to present academic offerings, staff information, and admission details. Prioritized performance and responsive design.",
    role: "Frontend Developer",
    liveUrl: "https://svstpu.edu.in",
    tags: ["HTML", "CSS", "Responsive", "Education"],
    owner: "SVS Temple PU College",
    collaborators: ["Jnanesh", "Nidhi D"],
    company: "Kreekarvat Technologies",
    screenshot: "/works/svstpu.png",
  },
  {
    title: "Swiggy Integration Tool",
    description:
      "Utility to synchronize restaurant orders from Swiggy with Billmaxo POS for real-time billing, eliminating manual entries and reducing delays.",
    role: "Volunteer Tool Developer",
    liveUrl: null,
    tags: ["Swiggy", "POS", "Automation", "Order Management"],
    owner: "Billmaxo Solutions",
    company: "Billmaxo Solutions",
    collaborators: ["Jnanesh"],
    screenshot: "/works/placeholder.svg",
  },
  {
    title: "Gajalakshmi Cranes",
    description:
      "Developed a fast, mobile-optimized website for a Karnataka-based crane rental service provider. Built to highlight services, fleet info, and a strong SEO structure for local business visibility.",
    role: "Full Stack Developer",
    liveUrl: "https://gajalakshmicranes.com",
    tags: ["Business", "SEO", "Web Development", "Services"],
    owner: "M. Ragavendra Prabhu",
    company: "Kreekarvat Technologies",
    screenshot: "/works/gajalakshmicranes.png",
  },
  {
    title: "SVS Temple English Medium School",
    description:
      "Official  website for SVS Temple English Medium School. Developed a clean and informative layout to present academic offerings, staff information, and admission details. Prioritized performance and responsive design.",
    role: "Frontend Developer",
    liveUrl: "https://svstpu.edu.in",
    tags: ["HTML", "CSS", "Responsive", "Static Site", "Education"],
    owner: "SVS Temple English Medium School",
    collaborators: ["Jnanesh", "Nidhi D", "Himanshu Hegde", "Milan C I"],
    company: "Kreekarvat Technologies",
    screenshot: "/works/svstems.png",
  },
  {
    title: "Venjix",
    description:
      "A creative portfolio site for a video editing and design studio. Showcases multimedia projects with optimized performance and animation-driven UI.",
    role: "Full Stack Developer",
    liveUrl: "https://venjix.kreekarvat.in/",
    tags: ["Portfolio", "Creative", "Studio", "Media"],
    owner: "Vivek Pai",
    collaborators: ["Vivek Pai"],
    company: "Kreekarvat Technologies",
    screenshot: "/works/venjix.jpg",
  },
  {
    title: "Zomato Integration Tool",
    description:
      "Automated order fetching and synchronization tool for restaurants using Zomato, integrated directly with billing systems.",
    role: "Volunteer Tool Developer",
    liveUrl: null,
    tags: ["Zomato", "POS Integration", "Automation"],
    owner: "Billmaxo Solutions",
    company: "Billmaxo Solutions",
    collaborators: ["Jnanesh"],
    screenshot: "/works/placeholder.svg",
  },
  {
    title: "Kreekarvat Portfolio",
    description:
      "Personal brand site for Kreekarvat showcasing creative works in UI/UX design, photography, and motion graphics. Built for performance and storytelling.",
    role: "Frontend Developer",
    liveUrl: "https://www.kreekarvat.in/",
    tags: ["Portfolio", "Design", "Creative", "Visual"],
    owner: "Kreekarvat",
    screenshot: "/works/kreekarvat.png",
  },
  {
    title: "Mangalore Taxi Services",
    description:
      "An interactive platform designed to showcase taxi services and tour packages in and around Mangalore, India.",
    role: "Frontend Developer",
    liveUrl: "https://www.mangaloretaxiservices.in/",
    tags: ["Taxi Services", "Travel", "UI/UX", "nodemailer"],
    owner: "Mangalore Taxi Services",
    company: "Kreekarvat Technologies",
    screenshot: "/works/mangaloretaxi.png",
  },
  {
    title: "A3 Digital School",
    description:
      "Comprehensive school management dashboard including attendance tracking, staff management, and online notices. Developed secure admin interface and role-based access.",
    role: "Full Stack Developer",
    liveUrl: "https://www.school.a3digitalmall.com/",
    tags: ["School", "Admin", "Management", "Education", "Dashboard"],
    owner: "A3 Digital Mall",
    company: "Klientship Pvt Ltd",
    screenshot: "/works/a3.png",
  },
];

export default projects;
