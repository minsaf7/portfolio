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
