export const projects = [
  {
    title: "DFN CMS",
    slug: "dfn-cms",
    description: "A no-code/low-code Web Content Management System for financial institutions",
    overview:
      "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets. The platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "Docker", "Nginx", "Microservices"],
    services: [
      {
        name: "Auth Service",
        description: "Handles authentication and user roles for CMS users",
      },
      {
        name: "Web Router Service",
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
    ],
    demoUrl: "https://example.com/dfn-cms",
    githubUrl: "https://github.com/example/dfn-cms",
  },
  {
    title: "DFN Fincon",
    slug: "dfn-fincon",
    description: "A React Native application for real-time stock market data and analytics",
    overview:
      "DFN Fincon is a React Native application that provides real-time stock market data and analytics using a server-driven UI architecture. The app delivers financial information and market insights to users through an intuitive mobile interface.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "TypeScript", "React Hookstate", "RESTful APIs", "Server-driven UI"],
    services: [
      {
        name: "Auth Service",
        description: "Manages user authentication for app users",
      },
      {
        name: "Data Service",
        description: "Provides real-time financial data and analytics",
      },
      {
        name: "UI Configuration Service",
        description: "Manages server-driven UI components and layouts",
      },
    ],
    demoUrl: "https://example.com/dfn-fincon",
    githubUrl: "https://github.com/example/dfn-fincon",
  },
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    description: "A modern, responsive portfolio website built with Next.js and React",
    overview:
      "A fully responsive, animated portfolio website showcasing projects and skills. Built with Next.js, React, TypeScript, and Framer Motion for smooth animations and transitions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/example/portfolio",
  },
]
