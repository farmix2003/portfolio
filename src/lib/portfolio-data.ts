export const profile = {
  name: "Farrukh Tugonov",
  role: "Full Stack Software Engineer",
  location: "Remote · Worldwide",
  headline: "Engineering polished products at the intersection of UX and systems.",
  blurb:
    "I design and ship end-to-end web platforms — typed React frontends, resilient Node and Java services, Postgres that doesn't melt under load.",
  email: "tugonovfarrukh7@gmail.com",
};

export const skills = {
  Frontend: [
    { name: "React", level: 96 },
    { name: "Next.js", level: 30 },
    { name: "TypeScript", level: 95 },
    { name: "JavaScript", level: 96 },
    { name: "TailwindCSS", level: 94 },
  ],
  Backend: [
    { name: "Java", level: 88 },
    { name: "Spring Boot", level: 86 },
    { name: "Golang", level: 40 },
    {name: "C++", level: 35}
  ],
  Database: [
    { name: "PostgreSQL", level: 90 },
    { name: "MySQL", level: 84 },
    { name: "MongoDB", level: 30 },
  ],
  Tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 30 },
    { name: "Linux", level: 20 },
  ],
} as const;

export const experience = [
    {
        company: "EPAM Systems",
        role: "Java Developer Lab Intern",
        period: "Present",
        points: [
          "Learning Java and Spring Boot fundamentals through a structured internship program.",
          "Building several practice projects, including a RESTful API for a simple e-commerce application.",
          "Gaining experience with version control (Git), unit testing, and basic DevOps practices.",
        ],
    },
    {
    company: "BIGIT",
    role: "Junior Frontend Developer",
    period: "2025 — 2025",
    points: [
      "Developed and maintained responsive UI components for a financial platform (MyXvest).",
      "Fixed UI/UX issues and improved overall user experience across mobile and desktop views.",
      "Integrated React frontend with backend APIs to ensure smooth data flow and state management.",
    ],
  },
  {
    company: "ITransition",
    role: "Software Development Trainee",
    period: "2024 — 2025",
    points: [
      "Completed intensive training in JavaScript, React, and modern web development practices.",
      "Built full-stack practice projects using React (frontend) and Node.js / Java (backend).",
      "Worked with REST APIs, authentication flows, and database integration fundamentals.",
    ],
  },
  {
    company: "Personal Projects / Freelance Practice",
    role: "Full Stack Developer (Learning Phase)",
    period: "2023 — 2024",
    points: [
      "Built multiple small full-stack applications using React, Java, and Spring Boot.",
      "Practiced building REST APIs, authentication systems, and CRUD-based applications.",
      "Focused on improving problem-solving, clean code, and system design fundamentals.",
    ],
  },
];

export const projects = [
  {
    title: "EatEase",
    description:
      "Full-stack food ordering platform developed as a diploma project with role-based access, menu management, and order processing.",
    tags: ["Spring Boot", "React", "TypeScript", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    highlights: [
      "Role-based authentication (Admin/User)",
      "Order management system",
      "REST API integration between frontend and backend",
    ],
    accent: "from-primary to-secondary",
  },
  {
    title: "Blog Platform (MERN Stack)",
    description:
      "Full-stack blog application built during ITransition training with user authentication, post creation, and content management features.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://example.com",
    highlights: [
      "JWT authentication system",
      "CRUD blog posts system",
      "Responsive modern UI",
    ],
    accent: "from-secondary to-primary",
  },
  {
    title: "Personal Blog System (Training Project)",
    description:
      "A training project focused on building a structured blogging system with full-stack architecture and REST API design.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com",
    demo: "https://example.com",
    highlights: [
      "REST API design",
      "User authentication flow",
      "Content management system",
    ],
    accent: "from-primary to-secondary",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built using TanStack Start with animated UI and component-based architecture.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com",
    demo: "https://example.com",
    highlights: [
      "Modern UI/UX design",
      "Dark mode support",
      "Component-driven architecture",
    ],
    accent: "from-secondary to-primary",
  },
];

export const certifications = [
  {
    name: "JavaScript Software Development Certificate",
    org: "ITransition",
    date: "2025",
    verify: "#",
  },
  {
    name: "REST API Fundamentals",
    org: "LinkedIn Learning",
    date: "2025",
    verify: "#",
  },
  {
    name: "Java Persistence API (JPA) Fundamentals",
    org: "LinkedIn Learning",
    date: "2025",
    verify: "#",
  },
];

export const articles = [
  {
    title: "Building EatEase: My Diploma Full-Stack Project",
    excerpt:
      "How I built a food ordering system using Spring Boot, React, TypeScript, and MySQL.",
    category: "Full Stack",
    minutes: 7,
    date: "2026",
    featured: true,
  },
  {
    title: "What I learned building a MERN blog system",
    excerpt:
      "Lessons from building a full-stack blog platform during my ITransition training.",
    category: "Full Stack",
    minutes: 6,
    date: "2026",
    featured: true,
  },
  {
    title: "Understanding REST APIs in real projects",
    excerpt:
      "How frontend and backend communicate using REST in Spring Boot and Node.js apps.",
    category: "Backend",
    minutes: 5,
    date: "2026",
  },
  {
    title: "My experience learning Java Persistence (JPA)",
    excerpt:
      "How ORM simplified database interaction in Java backend development.",
    category: "Backend",
    minutes: 5,
    date: "2026",
  },
  {
    title: "From training to real projects: my developer journey",
    excerpt:
      "How ITransition training helped me transition into full-stack development.",
    category: "Career",
    minutes: 4,
    date: "2026",
  },
];

