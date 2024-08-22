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
    title: "Software Engineer",
    location: "DirectFN, Sri Lanka",
    description:
      "Led the development of an advanced version of an existing Web Content Management System tailored for the fintech domain. Responsibilities included designing server-driven UI components with React and TypeScript, backend development with Node.js and MongoDB, and deploying the application using Docker.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Dec - Present",
  },

  {
    title: "Associate Software Engineer",
    location: "Bluelotus 360, Sri Lanka",
    description:
      "Contributed to the development and enhancement of a POS and Order Management System. Responsibilities included building frontend components with React and TypeScript, managing state with Redux, and integrating with .NET backend services.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Nov - 2022 Nov",
  },

  {
    title: "Intern Software Engineer",
    location: "Bluelotus 360, Sri Lanka",
    description:
      "Worked on the development of a POS and Order Management System, focusing on implementing key features and integrating with backend services. Gained hands-on experience with React, TypeScript, Redux, and .NET during this internship.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 Jul - 2021 Nov",
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
    title: "FinPOS",
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
] as const;

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
    desc: "Successfully completed BSc Hons in Computing with a first class honors",
    premises: "Coventry University, UK",
  },
  {
    id: 2,
    title: "Higher National Diploma in Computer-Based Information System",
    date: "2017 - 2018",
    desc: "Successfully completed HND with a GPA of 3.5",
    premises: "NIBM, Sri Lanka",
  },
  {
    id: 3,
    title: "Diploma in Computer System Design",
    date: "2016 - 2017",
    desc: "Successfully completed Diploma with a GPA of 3.5",
    premises: "NIBM, Sri Lanka",
  },
  {
    id: 4,
    title: "GCE A/L",
    date: "2013 - 2016",
    desc: "Passed GCE A/L with 2 Bs and a C",
    premises: "Royal College Colombo, Sri Lanka",
  },
];