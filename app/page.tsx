"use client";
import AboutMe from "@/components/AboutMe";
import { ExperienceCard } from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechIcons from "@/components/ui/Skills";
import { CardSpotlight } from "@/components/ui/Spotlight";

import { useScroll, useSpring } from "framer-motion";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const projects = [
  {
    id: 1,
    title: "CMS",
    premise: "DirectFN Sri Lanka",
    desc: "The web application, developed using React JS and Node JS, enables end users to manage, create, and edit the content of a particular website. All the webpages are created using pre-built widgets and UI components. Additionally, the application allows users to create custom data collections and manage content effectively.",
    location: "DirectFN Sri Lanka",
    img: "https://www.directfn.com/dfn-icons/dfn-logo-blue.png",
    skills: [
      "React JS",
      "Node JS",
      "Javascript",
      "Typescript",
      "MongoDB",
      "Headless CMS",
      "Material UI",
      "Docker",
      "Server Driven UI",
    ],
  },
  {
    id: 1,
    title: "CMS",
    premise: "DirectFN Sri Lanka",
    desc: "The web application, developed using React JS and Node JS, enables end users to manage, create, and edit the content of a particular website. All the webpages are created using pre-built widgets and UI components. Additionally, the application allows users to create custom data collections and manage content effectively.",
    location: "DirectFN Sri Lanka",
    img: "https://www.directfn.com/dfn-icons/dfn-logo-blue.png",
    skills: [
      "React JS",
      "Node JS",
      "Javascript",
      "Typescript",
      "MongoDB",
      "Headless CMS",
      "Material UI",
      "Docker",
      "Server Driven UI",
    ],
  },
];

export default function Home() {
  const HeroSection = () => (
    <div className="h-full flex ustify-cente">
      <span
        className="z-10 mb-2 mt-1 tracking-wide sm:col-span-2"
        style={{
          color: "#8d96a0",
        }}
      >
        I possess more than 2.5 years of experience in software engineering,
        during which time I have refined my expertise in JavaScript, React.js,
        Node.js, and Docker. My professional focus has primarily centered around
        the ERP and fintech sectors, where I have actively contributed to the
        development of innovative solutions aimed at optimizing operations and
        improving user experiences.
      </span>
      <span></span>
    </div>
  );

  const Section: React.FC<{ title: string; children: any; id: string }> = ({
    title,
    children,
    id,
  }) => (
    <div className="p-6 h-screen" id={id}>
      <h2
        className="text-2xl font-semibold mb-4"
        style={{
          color: "#66fcf1",
        }}
      >
        {title}
      </h2>
      <div className="h-[90%]">{children}</div>
    </div>
  );

  const experience = [
    {
      id: 1,
      title: "Software Engineeer",
      date: "Dec 2022 to Present",
      desc: "As a Software Engineer, I am responsible for developing an advanced and more user-friendly version of an existing web content management system, specially catering to the fintech industry",
      skills: ["React JS", "Node JS", "Typescript", "Javascript", "Docker"],
      premise: "DirectFN Sri Lanka",
    },
    {
      id: 2,
      title: "Associate Software Engineeer",
      date: "Nov 2021 to Nov 2022",
      skills: ["React JS", ".NET", "Javascript"],
      desc: "As an Associate Software Engineer at Blue Lotus 360, I played a key role in the development and maintenance of a order management and ERP system designed for clients in the UK and Sri Lanka",
      premise: "BlueLotus 360 Ltd Sri Lanka",
    },
    {
      id: 2,
      title: "Intern Software Engineeer",
      date: "July 2021 to Nov 2021",
      skills: ["React JS", ".NET", "Javascript"],
      premise: "BlueLotus 360 Ltd Sri Lanka",
      desc: "As an Intern Software Engineer at Blue Lotus 360, I played a key role in the development and maintenance of a order management and ERP system designed for clients in the UK and Sri Lanka",
    },
  ];

  const educations = [
    {
      id: 1,
      title: "BSc Hons in Computing",
      date: "2019 - 2021",
      desc: "Successfully completed BSc Hons in Computing with a first class honors",
      premises: "Coventry University, UK",
    },
    {
      id: 2,
      title: "Higher National Diploma in Computer Based information System",
      date: "2017 - 2018",
      desc: "Successfully completed HND with a GPA of 3.5",
      premises: "NIBM, Sri Lanka",
    },
    {
      id: 2,
      title: "Diploma in Computer System Design",
      date: "2016 - 2017",
      desc: "Successfully completed Diploma with a GPA of 3.5",
      premises: "NIBM, Sri Lanka",
    },
    {
      id: 2,
      title: "GCE A/L",
      date: "2013 - 2016",
      desc: "Passed GCE A/L with 2 Bs and a C",
      premises: "Royal College Colombo, Sri Lanka",
    },
  ];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]); // Adjust values as needed
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <Gradientdiv className="flex flex-col md:flex-row h-auto md:h-scree">
      <div className="w-full h-screen md:w-4/10 bg-red">
        <Hero />
        {/* <Navigation /> */}
      </div>
      <motion.div
        // className="w-full md:w-6/10 h-auto md:h-screen overflow-y-auto"
        className="w-full md:w-6/10 h-auto md:h-screen overflow-y-auto"
        // style={{ y: y1 }} // Apply parallax effect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Section title="About Me" id="about">
          <AboutMe />
        </Section>
        <Section title="Experience" id="experience">
          {experience.map((exp) => (
            <ExperienceCard
              title={exp.title}
              desc={exp.desc}
              key={exp.id}
              date={exp.date}
              skills={exp.skills}
              premise={exp.premise}
            />
          ))}
        </Section>
        <Section title="Education" id="education">
          {educations.map((education) => (
            <ExperienceCard
              title={education.title}
              desc={education.desc}
              key={education.id}
              date={education.date}
              premise={education.premises}
            />
          ))}
        </Section>
        <Section title="Projects" id="projects">
          {projects.map((project) => (
            <ExperienceCard
              title={project.title}
              desc={project.desc}
              key={project.id}
              img={project.img}
              premise={project.premise}
              skills={project.skills}
            />
          ))}
        </Section>
        <Section title="Skills" id="skills">
          <TechIcons />
        </Section>
      </motion.div>
    </Gradientdiv>
  );
}

interface GradientdivProps {
  children: ReactNode;
  className: string;
}
const Gradientdiv: React.FC<GradientdivProps> = ({ children, className }) => {
  const GradientPosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const windowWidth = window.innerHeight;

    useEffect(() => {
      const updateMousePosition = (ev: any) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  return (
    <div
      style={{
        backgroundImage: `radial-gradient( circle at ${
          GradientPosition().x
        }px ${GradientPosition().y}px, #1f2833  , #0b0c10 40% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

const theme1 = {
  main: "#0b0c10",
  primary: "#1f2833",
  scrondary: "#c5c6c7",
  neutral: "#66fcf1",
  soft: "#45a29e",
};

const Navigation = () => {
  const sections = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <nav className="flex justify-center space-x-4 mt-4 z-50">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="text-neutral hover:text-soft transition-colors duration-300"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};
