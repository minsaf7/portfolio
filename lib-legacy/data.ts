import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "DirectFN, Sri Lanka",
    description:
      "Led the development of an advanced version of a Web Content Management System tailored for the fintech domain. Responsibilities included designing server-driven UI components with React and TypeScript, backend development with Node.js and MongoDB, and deploying the application using Docker.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec - Present",
    responsibilities: [
      "Leading the development and scalability of a web content management system (CMS) tailored for financial institutions, built on a server-driven UI architecture similar to a no-code website builder.",
      "Enhancing deployment processes by implementing multi-stage Docker builds, significantly reducing build size and improving efficiency.",
      "Collaborating with cross-functional teams, including UI/UX designers and department heads, to align product features with business requirements while ensuring UI/UX compliance.",
      "Contributing to project planning and architectural decisions alongside technical leads, improving system design and performance.",
      "Contributed to the development of a React Native mobile app for real-time market data streaming, charts, and analytics, leveraging the same server-driven UI concept used by the web CMS. Focused on bug fixes and QA-reported issues to ensure app stability.",
    ],
  },
  {
    title: "Software Engineer",
    location: "DirectFN, Sri Lanka",
    description:
      "Led the development of an advanced version of a Web Content Management System tailored for the fintech domain. Responsibilities included designing server-driven UI components with React and TypeScript, backend development with Node.js and MongoDB, and deploying the application using Docker.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec - Present",
    responsibilities: [
      "Researching and applying the latest and best technologies to enhance the system's performance and user experience.",
      "Developing financial widgets to provide robust and efficient solutions for our clients.",
      "Developed core features for the web CMS, working closely with UI/UX teams and department heads to ensure the product met usability and business requirements.",
    ],
  },

  {
    title: "Associate Software Engineer",
    location: "Bluelotus 360, Sri Lanka",
    description:
      "Contributed to the development and enhancement of a POS and Order Management System. Responsibilities included building frontend components with React and TypeScript, managing state with Redux, and integrating with .NET backend services.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Nov - 2022 Nov",
    responsibilities: [
      "Utilised React JS and JavaScript to build intuitive and user-friendly interfaces for the Order Management system, ensuring seamless user experience.",
      "Worked closely with cross-functional teams, including product managers, designers, and QA engineers, to deliver high-quality ERP solutions.",
      "Integrated cloud services to enable reliable and scalable order management processes, tailored specifically for the needs of UK and Sri Lankan clients.",
    ],
  },

  {
    title: "Intern Software Engineer",
    location: "Bluelotus 360, Sri Lanka",
    description:
      "Worked on the development of a POS and Order Management System, focusing on implementing key features and integrating with backend services. Gained hands-on experience with React, TypeScript, Redux, and .NET during this internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Jul - 2021 Nov",
    responsibilities: [
      "Utilised React JS and JavaScript to build intuitive and user-friendly interfaces for the Order Management system, ensuring seamless user experience.",
      "Worked closely with cross-functional teams, including product managers, designers, and QA engineers, to deliver high-quality ERP solutions.",
      "Integrated cloud services to enable reliable and scalable order management processes, tailored specifically for the needs of UK and Sri Lankan clients.",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "CMS",
    description:
      "A Web Content Management System specifically designed for the fintech domain. I was the full-stack developer responsible for implementing a server-driven UI. The system allows users to build and manage websites with features like custom content management, dynamic page creation, and real-time data handling.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "BLPOS",
    description:
      "A comprehensive POS and Order Management System tailored for retail operations. I was the frontend developer, focusing on integrating seamless order processing, inventory management, and real-time data synchronization. The system leverages modern frontend technologies with robust backend support.",
    tags: ["React", "TypeScript", "Redux", ".NET"],
    imageUrl: corpcommentImg,
  },
  {
    title: "CovidAlert",
    description:
      "An iOS application designed to detect and alert users about potential COVID-19 patients in their vicinity. The app utilizes the Exposure API and geo-fetching to track and notify users of possible exposures, helping to mitigate the spread of the virus.",
    tags: ["iOS", "Swift", "Exposure API", "Geo-Fetching"],
    imageUrl: corpcommentImg,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Material UI",
  "Bootatrap",
] as const;

// Sample usage within your component
export const educationData = [
  {
    id: 1,
    title: "BSc Hons in Computing",
    date: "2019 - 2021",
    desc: "Graduated with First-Class Honors, specializing in computing principles such as software development, database management, and system analysis. Completed significant research projects, including the design and implementation of a web-based management system.",
    premises: "Coventry University, UK",
  },
  {
    id: 2,
    title: "Higher National Diploma in Computer-Based Information System",
    date: "2017 - 2018",
    desc: "Achieved a GPA of 3.5 while studying a range of modules focused on information systems, programming, and software engineering. Led a capstone project that implemented a real-time inventory management system for a local business.",
    premises: "NIBM, Sri Lanka",
  },
  {
    id: 3,
    title: "Diploma in Computer System Design",
    date: "2016 - 2017",
    desc: "Completed with a GPA of 3.5, focusing on foundational computing subjects such as algorithms, data structures, and basic system design. Developed practical projects using Java and SQL for small-scale applications.",
    premises: "NIBM, Sri Lanka",
  },
  // {
  //   id: 4,
  //   title: "GCE A/L",
  //   date: "2013 - 2016",
  //   desc: "Passed with 2 Bs and a C in Accounting, Business Studies, and Economics.",
  //   premises: "Royal College Colombo, Sri Lanka",
  // },
];

// export const projectDetails = {
//   "dfn-cms": {
//     projectId: "dfn-cms",
//     projectName: "DFN CMS",
//     introduction: {
//       briefOverview:
//         "DFN CMS is a no-code/low-code web content management system (WCMS) specifically developed for financial institutions. It enables businesses to create and manage financial websites effortlessly using a drag-and-drop interface, along with specialized financial widgets to display real-time financial data. The platform ensures high performance, security, and scalability using a microservices architecture.",
//       purpose: [
//         "Provides an intuitive drag-and-drop interface for creating financial websites without coding knowledge.",
//         "Integrates financial widgets to display market data, analytics, and other financial content.",
//         "Enables static site generation to enhance website performance and security.",
//         "Uses a microservices-based approach to ensure scalability and maintainability.",
//       ],
//     },
//     techStack: {
//       frontend: ["React.js", "TypeScript"],
//       backend: ["Node.js", "Molecular.js"],
//       database: "MongoDB",
//       interServiceCommunication: "Redis",
//       deploymentTools: ["Docker", "Nginx"],
//     },
//     features: {
//       coreFeatures: [
//         "No-Code Website Builder with Drag-and-Drop Interface",
//         "Support for Various Financial Widgets",
//         "Headless CMS for Structured Content Management",
//         "Static Site Generation for High Performance",
//         "Multi-Tenant Architecture for Different Financial Institutions",
//         "Role-Based Authentication for Secure Access",
//       ],
//       performanceOptimizations: [
//         "Caching using Redis to Reduce API Latency",
//         "Static Site Publishing to Minimize Server Load",
//         "Load Balancing with Nginx to Handle High Traffic",
//       ],
//       securityFeatures: [
//         "Role-Based Access Control (RBAC) to Manage User Permissions",
//         "JWT-Based Authentication for Secure API Access",
//         "API Rate Limiting and CORS Policies for Enhanced Security",
//       ],
//     },
//     architecture: {
//       cmsMicroservices: {
//         authService:
//           "Handles authentication and authorization for CMS users, ensuring secure access to the admin panel.",
//         webRouterService:
//           "Acts as an API gateway, routing requests between different microservices within the CMS.",
//         sitePublisherService:
//           "Responsible for generating static websites from the CMS data and deploying them for end users.",
//         headlessCMSService:
//           "Manages content storage and retrieval, providing structured data for dynamic website rendering.",
//       },
//       publishedWebsiteMicroservices: {
//         authService:
//           "Manages authentication for website users, enabling secure login and access control.",
//         webRouterService:
//           "Routes API requests from the published websites to the appropriate backend services.",
//         dynamicContentService:
//           "Handles dynamic content updates for financial widgets and real-time market data.",
//         siteManagerService:
//           "Oversees the lifecycle of published websites, ensuring updates and modifications are deployed efficiently.",
//         redisCommunication:
//           "Facilitates inter-service communication and caching to improve performance.",
//       },
//     },
//     frontendImplementation: {
//       uiLibraries: ["React.js", "TypeScript", "Tailwind CSS"],
//       stateManagement: "Zustand / Context API",
//       apiIntegration: "Axios for Fetching Data from Backend Services",
//     },
//     backendImplementation: {
//       apiArchitecture:
//         "Express.js-based API routes managed by the Web Router Service",
//       database: "MongoDB using Mongoose for Schema Management",
//       caching: "Redis for Storing Frequently Accessed Data to Reduce Latency",
//     },
//     deployment: {
//       strategy: "Docker-based Deployment for CMS and Microservices",
//       loadBalancing: "Nginx Configured for Traffic Distribution",
//       ciCd: "Automated CI/CD Pipeline Using GitHub Actions or Jenkins",
//       logging: "Centralized Logging with Winston",
//       monitoring: "Real-Time Monitoring via Prometheus & Grafana",
//     },
//     challenges: [
//       {
//         issue: "Scaling the CMS for multiple tenants",
//         solution:
//           "Implemented a multi-tenant database structure using MongoDB, where each financial institution has its own isolated data set.",
//       },
//       {
//         issue: "Ensuring fast response times for published sites",
//         solution:
//           "Adopted Redis caching and pre-generated static site publishing to serve pages instantly.",
//       },
//       {
//         issue: "Handling high-traffic API requests efficiently",
//         solution:
//           "Integrated Nginx load balancing and API rate limiting to prevent server overload.",
//       },
//     ],
//     repository: {
//       repoLink: "https://github.com/your-repo",
//       setupInstructions: [
//         "Clone the repository: git clone https://github.com/your-repo.git",
//         "Navigate to the project directory: cd dfn-cms",
//         "Install dependencies: npm install",
//         "Start the services using Docker: docker-compose up -d",
//       ],
//     },
//     futureImprovements: [
//       "Integrate AI-powered content recommendations to enhance user engagement.",
//       "Implement multi-language support to expand accessibility.",
//       "Optimize the performance of financial widgets for real-time updates with minimal latency.",
//     ],
//     keyLearnings: [
//       "Developed a scalable microservices-based architecture using Node.js and Molecular.js.",
//       "Mastered advanced state management techniques in React with TypeScript.",
//       "Optimized website performance with Redis caching and static site generation.",
//       "Deployed enterprise-level applications using Docker and Nginx for scalability.",
//     ],
//   },
// };

export const projectDetails = [
  {
    projectId:"dfn-cms",
    projectName: {
      title:
        "DFN CMS – A No-Code/Low-Code Website Builder for Financial Institutions",
      value:
        "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets. The platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs.",
    },

    technologiesUsed: {
      title: "Technologies Used",
      value: {
        frontend: "React.js with TypeScript",
        backend: "Node.js with Moleculer.js",
        database: "MongoDB",
        caching: "Redis",
        deployment: "Docker & Nginx",
      },
    },

    architecture: {
      title: "Architecture",
      value: {
        cms: {
          title: "CMS",
          description:
            "The CMS provides an interface where users build and manage websites, configure pages, and add financial widgets.",
          services: [
            "Auth Service – Handles authentication and user roles for CMS users.",
            "Web Router Service – Manages API routing for CMS operations.",
            "Site Publisher Service – Converts CMS configurations into static websites.",
            "Headless CMS Service – Manages and delivers structured content for websites.",
          ],
        },
        publishedWebsites: {
          title: "Published Websites",
          description:
            "Once published, the websites run independently with their own services, ensuring high availability and performance.",
          services: [
            "Auth Service – Manages user authentication for website visitors.",
            "Web Router Service – Routes API requests for the live website.",
            "Dynamic Content Service – Serves real-time financial data.",
            "Site Manager Service – Manages website settings and metadata.",
          ],
        },
      },
    },

    serverDrivenUI: {
      title: "Server-Driven UI",
      value:
        "DFN CMS follows a server-driven UI architecture where website structure is determined by backend configurations, ensuring seamless updates without redeployment.",
    },

    financialWidgets: {
      title: "Financial Widgets",
      value: [
        "Real-time stock market data display",
        "Financial news ticker",
        "Loan & mortgage calculators",
        "Interactive charts & graphs",
      ],
    },

    deploymentStrategy: {
      title: "Deployment Strategy",
      value: {
        containerization: "Docker is used for easy deployment.",
        loadBalancing: "Nginx is used for serving content efficiently.",
        caching:
          "Redis is utilized for inter-service communication and caching.",
      },
    },

    scalabilityFeatures: {
      title: "Scalability Features",
      value: [
        "Microservices allow horizontal scaling.",
        "Caching reduces database load.",
        "Stateless services for easy scaling.",
      ],
    },

    securityAndPerformance: {
      title: "Security & Performance",
      value: {
        security: [
          "Authentication & Authorization using JWT/OAuth.",
          "Secure API communication with HTTPS.",
          "Role-based access control for CMS users.",
        ],
        performance: [
          "Caching with Redis for faster data retrieval.",
          "Lazy loading and optimized rendering in the frontend.",
          "CDN integration for static assets.",
        ],
      },
    },

    benefits: {
      title: "Benefits",
      value: {
        forFinancialInstitutions: [
          "Faster Website Deployment – Build and launch sites quickly.",
          "Financial-Specific Features – Pre-built financial widgets.",
          "Dynamic Content Management – Update content in real-time.",
        ],
        forDevelopers: [
          "Reusable Widget Architecture – Standardized components.",
          "Microservices-Based Scalability – Independent services.",
          "Cloud & On-Premise Deployment – Flexible with Docker.",
        ],
      },
    },

    challengesAndSolutions: {
      title: "Challenges & Solutions",
      value: [
        {
          challenge: "Ensuring seamless multi-service communication",
          solution: "Used Redis for inter-service communication.",
        },
        {
          challenge: "Maintaining high performance for published websites",
          solution: "Implemented server-driven UI for dynamic rendering.",
        },
        {
          challenge: "Standardizing widget development across projects",
          solution: "Followed a structured widget architecture.",
        },
        {
          challenge: "Managing authentication across different environments",
          solution: "Separated auth services for CMS and published websites.",
        },
      ],
    },

    futureEnhancements: {
      title: "Future Enhancements",
      value: [
        "AI-Powered Content Suggestions – Auto-generate content recommendations.",
        "More Financial Widgets – Expand the widget library.",
        "Multi-Tenant Support – Manage multiple institutions under a single instance.",
      ],
    },
  },
];
