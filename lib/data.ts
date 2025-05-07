export interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  period: string
  image: string
  mediaType:string;
  technologies: string[]
  features?: string[]
  architecture?: string[]
  services?: {
    name: string
    description: string
  }[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: "dfn-cms",
    title: "DFN CMS",
    description: "A no-code/low-code Web Content Management System for financial institutions",
    fullDescription:
      "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets.\n\nThe platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs. It is developed using React.js, TypeScript, Node.js, MolecularJS, MongoDB, Redis, and Docker. The system uses a microservice architecture for scalability and maintainability.",
    period: "2021 - 2023",
    image: "/cms.png",
    mediaType:'image',
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MolecularJS",
      "MongoDB",
      "Redis",
      "Docker",
      "Microservices",
      "Nginx",
    ],
    features: [
      "No-code/low-code website builder",
      "Pre-built financial widgets",
      "Server-driven UI architecture",
      "Dynamic content rendering",
      "Multi-tenant support",
      "Role-based access control",
      "Real-time preview",
      "Version control",
    ],
    architecture: [
      "Microservice architecture with 8 distinct services",
      "Redis for inter-service communication",
      "Docker for containerization and deployment",
      "Nginx for serving the React application",
    ],
    services: [
      {
        name: "Auth Service (Admin)",
        description: "Handles authentication and user roles for CMS users",
      },
      {
        name: "Web Router Service (Admin)",
        description: "Manages API routing for CMS operations",
      },
      {
        name: "Site Publisher Service",
        description: "Converts CMS configurations into static websites",
      },
      {
        name: "Headless CMS Service",
        description: "Manages and delivers structured content for websites",
      },
      {
        name: "Auth Service (Published)",
        description: "Manages user authentication for website visitors",
      },
      {
        name: "Web Router Service (Published)",
        description: "Routes API requests for the live website",
      },
      {
        name: "Dynamic Content Service",
        description: "Serves real-time financial data",
      },
      {
        name: "Site Manager Service",
        description: "Manages website settings and metadata",
      },
    ],
    link: "https://example.com/dfn-cms",
    github: "https://github.com/example/dfn-cms",
  },
  {
    id: "dfn-fincon",
    title: "DFN Fincon",
    description: "A React Native application for real-time stock market data and analytics",
    fullDescription:
      "DFN Fincon is a React Native application that provides real-time stock market data and analytics using a server-driven UI architecture. The app delivers comprehensive financial information, market trends, and personalized insights to users on mobile devices.\n\nDeveloped using React Native, TypeScript, and React Hookstate for state management, the application offers a seamless user experience with real-time updates and interactive visualizations. The server-driven UI approach allows for dynamic content delivery and feature updates without requiring app store resubmissions.",
    period: "2020 - 2021",
    image: "/DFNONE.mp4",
    mediaType:'video',
    technologies: ["React Native", "TypeScript", "React Hookstate", "Node.js", "GraphQL", "Server-Driven UI"],
    features: [
      "Real-time stock market data",
      "Interactive charts and visualizations",
      "Personalized watchlists",
      "Market news and alerts",
      "Portfolio tracking",
      "Technical analysis tools",
      "Server-driven UI for dynamic content",
    ],
    architecture: [
      "Client-server architecture with React Native frontend",
      "Node.js backend with GraphQL API",
      "Server-driven UI for dynamic content updates",
      "Real-time data streaming",
    ],
    link: "https://example.com/dfn-fincon",
    github: "https://github.com/example/dfn-fincon",
  },
  // {
  //   id: "chat-collect",
  //   title: "Chat Collect",
  //   description: "A Vercel AI SDK store for building chat interfaces that generate leads",
  //   period: "Jan 2024 - Feb 2024",
  //   image: "/placeholder.svg?height=600&width=1200",
  //   technologies: ["Next.js", "TypeScript", "Vercel AI SDK", "Prisma", "Tailwind CSS", "PostgreSQL"],
  //   features: [
  //     "AI-powered chat interfaces",
  //     "Lead generation and collection",
  //     "Customizable chat templates",
  //     "Analytics dashboard",
  //     "Integration with CRM systems",
  //   ],
  //   link: "https://example.com/chat-collect",
  //   github: "https://github.com/example/chat-collect",
  // },
  // {
  //   id: "magic-ui",
  //   title: "Magic UI",
  //   description: "A UI component library with premium components for developers",
  //   period: "June 2023 - Present",
  //   image: "/placeholder.svg?height=600&width=1200",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
  //   features: [
  //     "Extensive component library",
  //     "Customizable themes",
  //     "Responsive design",
  //     "Accessibility compliant",
  //     "Comprehensive documentation",
  //   ],
  //   link: "https://example.com/magic-ui",
  //   github: "https://github.com/example/magic-ui",
  // },
]
