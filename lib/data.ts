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
  gallery?:string[]
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
    image:
      "https://ik.imagekit.io/og71qrt62/assets/DFNONE.mp4?updatedAt=1762323292517",
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
  {
    id: "market-disclosure-platform",
    title: "Market Disclosure Platform",
    description:
      "A disclosure management platform for brokerages with a dynamic form builder and full Arabic localization support",
    fullDescription:
      "Market Disclosure Platform is a web-based solution built for brokerages to manage and publish regulatory market disclosures efficiently. The platform includes a powerful dynamic form builder that allows administrators to create, configure, and deploy disclosure forms without code.\n\nIt supports full localization with Arabic language and RTL layout compatibility, ensuring usability across multilingual regions. The system streamlines the end-to-end disclosure workflow, including form creation, validations, submission tracking, approvals, and export-ready reporting.\n\nI led the frontend team, driving architecture decisions, UI consistency, performance improvements, and collaboration across backend and product teams. The frontend was built using React.js, React Hook Form, Material UI, and Webpack.",
    period: "DirectFN",
    image: "/market-disclosure.png",
    mediaType: "image",
    technologies: [
      "React",
      "JavaScript",
      "React Hook Form",
      "Material UI",
      "Webpack",
      "REST APIs",
      "i18n",
      "RTL Support",
    ],
    features: [
      "Dynamic form builder with reusable components",
      "Fully localized UI with Arabic (RTL) support",
      "Advanced validations and conditional form logic",
      "Multi-step disclosure workflows",
      "Role-based access control (Admin, Reviewer, Publisher)",
      "Disclosure submission tracking and audit history",
      "Exportable disclosure reports (PDF/Excel-ready data)",
      "Config-driven form rendering without frontend redeployment",
    ],
    architecture: [
      "Component-driven UI architecture using React and Material UI",
      "Schema-based dynamic form engine powered by React Hook Form",
      "Webpack-based build system with optimized bundling",
      "Localization system supporting RTL layout and Arabic translations",
    ],
    services: [
      {
        name: "Form Builder Module",
        description:
          "Allows admins to create and configure disclosure forms dynamically using a schema-based UI",
      },
      {
        name: "Disclosure Submission Module",
        description:
          "Handles form submissions, validation rules, and disclosure lifecycle tracking",
      },
      {
        name: "Approval & Publishing Module",
        description:
          "Supports review workflows, approvals, and publishing disclosures to external channels",
      },
      {
        name: "Localization & RTL Module",
        description:
          "Manages multilingual translations, Arabic support, and RTL layout switching",
      },
      {
        name: "Audit & Reporting Module",
        description:
          "Provides audit logs, submission history, and export-ready reporting data",
      },
    ],
    link: "https://example.com/market-disclosure-platform",
    github: "https://github.com/example/market-disclosure-platform",
  },
];
