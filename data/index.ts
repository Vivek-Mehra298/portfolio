import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    category: "Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Redux", "React Query", "Tailwind CSS", "Ant Design", "HTML5/CSS3"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "Microservices"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "Mongoose", "Firebase Firestore", "Firebase Realtime DB"],
  },
  {
    category: "Tools",
    icon: Settings,
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "VS Code"],
  },
];

export const EXPERIENCE = [
  {
    role: "Backend Developer Intern",
    company: "SkyStar Software",
    location: "Remote",
    duration: "May 2025 – Jun 2025",
    points: [
      "Developed and maintained RESTful APIs using Node.js and Express.js.",
      "Implemented CRUD with MongoDB — data models, validation, error management.",
      "Collaborated with frontend team on API contracts for seamless integration.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Collaborative Code Editor",
    tags: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Socket.io", "Docker", "JWT"],
    description: "Multi-user code editor with real-time sync using Operational Transformation. Features Monaco Editor, sandboxed Docker execution, WebSocket presence awareness.",
    highlights: [
      "Led 3-member team through planning, delegation, sprint coordination",
      "Conflict-free concurrent edits via OT algorithm",
    ],
    github: "https://github.com/Vivek-Mehra298/code-collaborative-editot",
    live: "https://code-collaborative-editot-rosy.vercel.app/",
  },
  {
    title: "CRM Web Application",
    tags: ["React", "TypeScript", "Firebase", "React Query", "Ant Design", "Vercel"],
    description: "Production-deployed CRM for end-to-end lead management across a 4-stage pipeline. Real-time Firestore sync with React Query optimistic updates.",
    highlights: [
      "TypeScript strict-mode end-to-end",
      "Real-time KPI propagation across concurrent sessions",
    ],
    github: "https://github.com/Vivek-Mehra298/crm-web",
    live: "https://crm-web-ashy.vercel.app/",
  },
  {
    title: "ProScript — AI Writing Tool",
    tags: ["Next.js","TypeScript", "Express.js", "MongoDB Atlas"],
    description: "AI-powered writing assistant tool. Built with Next.js frontend and Express backend connected to MongoDB Atlas.",
    highlights: [],
    github: "https://github.com/Vivek-Mehra298/Pro-Script",
    live: "https://pro-script.vercel.app/",
  },
  {
    title: "Ecole Globale School Website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    description: "Full multi-page institutional website for a girls boarding school in Dehradun. Includes dynamic routing for 8+ pages: Home, About, Admission, Academic, Student Life, Pastoral Care, Career, Latest Updates, Contact.",
    highlights: [
      "SEO-optimized metadata per page",
      "Fully responsive with Next.js Image optimization",
      "Blog-style latest updates section with dynamic routing",
    ],
    github: "https://github.com/Vivek-Mehra298/school-web",
    live: "https://school-web-livid-rho.vercel.app/",
  },
];

export const EDUCATION = {
  college: "Jabalpur Engineering College",
  degree: "B.Tech in Information Technology",
  expected: "Expected July 2026",
  relevant: "DSA, DBMS, OS, Computer Networks, OOP",
  cgpa: "6.2 / 10", // Placeholder
};

export const ACTIVITIES = [
  {
    title: "Minor Project Lead",
    organization: "JEC",
    duration: "2025–Present",
    description: "Led 4-member team, presented to 100+ students & professors.",
  },
  {
    title: "Chess Player",
    organization: "Chess.com / Lichess",
    duration: "Ongoing",
    description: "1200 Chess.com / 1500 Lichess, participates in online tournaments.",
  },
];

export const CONTACT = {
  email: "vivekdehariya298@gmail.com",
  phone: "+91 7489549709",
  location: "Chhindwara, M.P.",
  github: "https://github.com/Vivek-Mehra298",
  linkedin: "https://linkedin.com/in/vivek-dehariya", // Placeholder, assuming based on name
};
