export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  period: string;
  image: string;
  mediaType: string;
  technologies: string[];
  features?: string[];
  architecture?: string[];
  services?: {
    name: string;
    description: string;
  }[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "dfn-cms",
    title: "DFN CMS",
    description:
      "A no-code/low-code Web Content Management System for financial institutions",
    fullDescription:
      "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets.\n\nThe platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs. It is developed using React.js, TypeScript, Node.js, MolecularJS, MongoDB, Redis, and Docker. The system uses a microservice architecture for scalability and maintainability.",
    period: "DirectFN",
    image: "/cms.png",
    mediaType: "image",
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
    description:
      "A React Native application for real-time stock market data and analytics",
    fullDescription:
      "DFN Fincon is a React Native application that provides real-time stock market data and analytics using a server-driven UI architecture. The app delivers comprehensive financial information, market trends, and personalized insights to users on mobile devices.\n\nDeveloped using React Native, TypeScript, and React Hookstate for state management, the application offers a seamless user experience with real-time updates and interactive visualizations. The server-driven UI approach allows for dynamic content delivery and feature updates without requiring app store resubmissions.",
    period: "DirectFN",
    image: "/DFNONE.mp4",
    mediaType: "video",
    technologies: [
      "React Native",
      "TypeScript",
      "React Hookstate",
      "Node.js",
      "GraphQL",
      "Server-Driven UI",
    ],
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
      // "Node.js backend with GraphQL API",
      "Server-driven UI for dynamic content updates",
      "Real-time data streaming",
    ],
    link: "https://example.com/dfn-fincon",
    github: "https://github.com/example/dfn-fincon",
  },
  {
    id: "blpos",
    title: "BLPOS",
    description:
      "A unified cloud POS system with integrated online delivery and ERP sync",
    fullDescription:
      "Cloud Point of Sale is a powerful, cloud-based POS system developed using React.js and .NET API. It acts not only as a synchronization layer between in-store POS terminals and online delivery partners like Uber Eats, Deliveroo, and others, but also functions as a fully operational POS terminal itself.\n\nThe system enables real-time order and inventory syncing with ERP systems and provides businesses with a centralized interface to manage sales, menu items, deliveries, and store operations across multiple channels. The goal is to streamline operations and reduce friction between online and offline sales touchpoints.",
    period: "DirectFN",
    image: "/placeholder-image.jpg",
    mediaType: "image",
    technologies: [
      "React",
      ".NET",
      "SQL Server",
      "REST API",
      "Material UI",
      "Redux",
    ],
    features: [
      "Fully functional POS terminal interface",
      "Real-time syncing with ERP and all POS systems",
      "Integrated with Uber Eats, Deliveroo, and other platforms",
      "Order and inventory management",
      "Multi-store support",
      "Dashboard for reporting and analytics",
      "Secure role-based access",
    ],
    architecture: [
      ".NET backend for API and data processing",
      "React.js frontend with responsive UI",
      "Centralized data sync between ERP and multiple POS terminals",
      "Third-party API integration for delivery partners",
    ],

    link: "https://example.com/cloud-pos",
    github: "https://github.com/example/cloud-pos",
  },
];
