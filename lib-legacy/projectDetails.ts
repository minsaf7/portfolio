interface Section<T> {
    title: string;
    description?: string;
    value?: T;
  }
  
  interface Service {
    title: string;
    description: string;
    services?: string[];
  }
  
  interface DeploymentStrategyItem {
    key: string;
    value: string;
  }
  
  interface ChallengeSolution {
    challenge: string;
    solution: string;
  }
  
  interface Benefits {
    forFinancialInstitutions: string[];
    forDevelopers: string[];
  }
  
  interface ProjectData {
    projectId: string;
    projectName: Section<undefined>;
    technologiesUsed: Section<string[]>;
    architecture?: Section<Service[]>;
    serverDrivenUI?: Section<undefined>;
    financialWidgets?: Section<string[]>;
    deploymentStrategy?: Section<DeploymentStrategyItem[]>;
    scalabilityFeatures?: Section<string[]>;
    security?: Section<string[]>;
    performance?: Section<string[]>;
    benefits?: Section<Benefits>;
    challengesAndSolutions?: Section<ChallengeSolution[]>;
    futureEnhancements?: Section<string[]>;
  }
  

 export const projectDerailsData: ProjectData = {
    projectId: "dfn-cms",
    projectName: {
      title: "DFN CMS – A No-Code/Low-Code Website Builder for Financial Institutions",
      description:
        "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets. The platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs.",
    },
    technologiesUsed: {
      title: "Technologies Used",
      value: [
        "React.js",
        "TypeScript",
        "Node JS",
        "Molecular JS",
        "MongoDB",
        "Redis",
        "Docker",
        "Nginx",
      ],
    },
    architecture: {
      title: "Architecture",
      value: [
        {
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
        {
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
      ],
    },
    serverDrivenUI: {
      title: "Server-Driven UI",
      description:
        "DFN CMS follows a server-driven UI architecture where website structure is determined by backend configurations, ensuring seamless updates without redeployment. Instead of pre-defining the website layout in the frontend, the published websites use a server-driven UI architecture.",
    },
    financialWidgets: {
      title: "Financial Widgets",
      description:
        "All widgets in the published websites follow a structured architecture that aligns with company coding standards.",
      value: [
        "Widgets can be easily reused across multiple projects",
        "Each widget can be customized via the CMS interface",
        "Minimal dependencies, efficient rendering strategies.",
      ],
    },
    deploymentStrategy: {
      title: "Deployment Strategy",
      value: [
        { key: "containerization", value: "Docker is used for easy deployment." },
        { key: "loadBalancing", value: "Nginx is used for serving content efficiently." },
        { key: "caching", value: "Redis is utilized for inter-service communication and caching." },
      ],
    },
    scalabilityFeatures: {
      title: "Scalability Features",
      value: [
        "Microservices allow horizontal scaling.",
        "Caching reduces database load.",
        "Stateless services for easy scaling.",
      ],
    },
    security: {
      title: "Security",
      value: [
        "Caching with Redis for faster data retrieval.",
        "Lazy loading and optimized rendering in the frontend.",
        "CDN integration for static assets.",
      ],
    },
    performance: {
      title: "Performance",
      value: [
        "Caching with Redis for faster data retrieval.",
        "Lazy loading and optimized rendering in the frontend.",
        "CDN integration for static assets.",
      ],
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
  };


 export const projectDetailsList:ProjectData[] = [
    {
        projectId: "dfn-cms",
        projectName: {
          title: "DFN CMS – A No-Code/Low-Code Website Builder for Financial Institutions",
          description:
            "DFN CMS is a no-code/low-code Web Content Management System (WCMS) designed specifically for financial institutions. It enables businesses to build, manage, and deploy websites with ease, leveraging a modular approach with pre-built financial widgets. The platform follows a server-driven UI architecture, dynamically rendering published websites based on backend configurations, reducing frontend redeployment needs.",
        },
        technologiesUsed: {
          title: "Technologies Used",
          value: [
            "React.js",
            "TypeScript",
            "Node JS",
            "Molecular JS",
            "MongoDB",
            "Redis",
            "Docker",
            "Nginx",
          ],
        },
        architecture: {
          title: "Architecture",
          value: [
            {
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
            {
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
          ],
        },
        serverDrivenUI: {
          title: "Server-Driven UI",
          description:
            "DFN CMS follows a server-driven UI architecture where website structure is determined by backend configurations, ensuring seamless updates without redeployment. Instead of pre-defining the website layout in the frontend, the published websites use a server-driven UI architecture.",
        },
        financialWidgets: {
          title: "Financial Widgets",
          description:
            "All widgets in the published websites follow a structured architecture that aligns with company coding standards.",
          value: [
            "Widgets can be easily reused across multiple projects",
            "Each widget can be customized via the CMS interface",
            "Minimal dependencies, efficient rendering strategies.",
          ],
        },
        deploymentStrategy: {
          title: "Deployment Strategy",
          value: [
            { key: "containerization", value: "Docker is used for easy deployment." },
            { key: "loadBalancing", value: "Nginx is used for serving content efficiently." },
            { key: "caching", value: "Redis is utilized for inter-service communication and caching." },
          ],
        },
        scalabilityFeatures: {
          title: "Scalability Features",
          value: [
            "Microservices allow horizontal scaling.",
            "Caching reduces database load.",
            "Stateless services for easy scaling.",
          ],
        },
        security: {
          title: "Security",
          value: [
            "Caching with Redis for faster data retrieval.",
            "Lazy loading and optimized rendering in the frontend.",
            "CDN integration for static assets.",
          ],
        },
        performance: {
          title: "Performance",
          value: [
            "Caching with Redis for faster data retrieval.",
            "Lazy loading and optimized rendering in the frontend.",
            "CDN integration for static assets.",
          ],
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
    {
        projectId: "covid-tracker",
        projectName: {
          title: "COVID-19 Exposure Tracker",
          description:
            "A mobile application that helps identify possible COVID-19 patients nearby. Users fill out a symptom survey, and based on the responses, the app calculates the likelihood of infection and alerts nearby users. Developed using Swift and UIKit for iOS devices.",
        },
        technologiesUsed: {
          title: "Technologies Used",
          value: ["Swift", "UIKit", "CoreLocation", "Firebase", "Push Notifications"],
        },
        architecture: {
          title: "Architecture",
          value: [
            {
              title: "User Survey Module",
              description: "Collects user symptoms and calculates the probability of infection.",
            },
            {
              title: "Proximity Alert System",
              description: "Alerts nearby users if a potential COVID-positive individual is detected.",
            },
            {
              title: "Real-Time Database",
              description: "Stores user responses and anonymized location data for risk analysis.",
            },
          ],
        },
      },
      {
        projectId: "stock-market-app",
        projectName: {
          title: "Real-Time Stock Market Screening App",
          description:
            "A React Native application that provides real-time stock market data and analytics using a server-driven UI architecture. Developed using React Native, TypeScript, and React Hookstate for state management.",
        },
        technologiesUsed: {
          title: "Technologies Used",
          value: ["React Native", "TypeScript", "React Hookstate", "GraphQL", "WebSockets"],
        },
        architecture: {
          title: "Architecture",
          value: [
            {
              title: "Server-Driven UI",
              description: "Dynamically renders UI components based on backend configurations, allowing rapid updates without redeployment.",
            },
            {
              title: "Market Data Streaming",
              description: "Fetches and displays live stock market data using WebSockets for low-latency updates.",
            },
            {
              title: "Portfolio Management",
              description: "Enables users to track and analyze their investments in real time.",
            },
          ],
        },
      },
      {
        projectId: "order-management-uk",
        projectName: {
          title: "Online Order Management for Small Businesses in the UK",
          description:
            "An online order management system that integrates with Uber Eats, Deliveroo, and in-house delivery services to help small enterprises manage and track orders efficiently. Built using React, .NET, TypeScript, and React Redux.",
        },
        technologiesUsed: {
          title: "Technologies Used",
          value: ["React", ".NET", "TypeScript", "React Redux", "Uber API", "Deliveroo API"],
        },
        architecture: {
          title: "Architecture",
          value: [
            {
              title: "Order Processing Engine",
              description: "Manages incoming orders and routes them to the appropriate delivery service.",
            },
            {
              title: "Delivery Service Integration",
              description: "Seamlessly integrates with Uber Eats and Deliveroo APIs to handle deliveries.",
            },
            {
              title: "Admin Dashboard",
              description: "Provides small business owners with insights and order tracking features.",
            },
          ],
        },
      },
  ]