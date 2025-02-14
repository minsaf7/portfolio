import React from "react";
import { navItems } from "../../data/index";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { educationData, experiencesData, skillsData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const Resume = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center  pt-10 text-txt-primary">
      <div className="w-[80%] h-full  overflow-scroll my-20">
        <div className=" w-full bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 p-5 rounded-xl mb-20">
          {/* name  */}
          <div className=" h-[20vh] text-txt-primary">
            <h1 className="font-mono text-3xl font-bold">Mohamed Minsaf</h1>
            <p className="mt-4  leading-relaxed font-mono text-sm">
              Senior Software Engineer at DirectFN | Proficient in React JS,
              JavaScript, Node JS and Docker | Skilled in Frontend Development
            </p>
          </div>
          {/* about  */}
          {/* <br /> */}
          <div className=" ">
            <p className="mt-4  leading-relaxed font-mono text-sm">
              I possess more than 2.5 years of experience in software
              engineering, during which time I have refined my expertise in
              JavaScript, React.js, Node.js, and Docker. My professional focus
              has primarily centered around the ERP and fintech sectors, where I
              have actively contributed to the development of innovative
              solutions aimed at optimizing operations and improving user
              experiences.
            </p>
          </div>
          {/* work  */}
          <br />
          <div className="">
            <WorkExperience />
          </div>
          {/* education  */}
          <br />
          <div className="">
            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            {educationData.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{edu.title}</h3>
                  <p className=" text-sm">{edu.date}</p>
                </div>
                <p className="">{edu.premises}</p>
                <p className=" mt-2 text-sm">{edu.desc}</p>
              </div>
            ))}
          </div>
          {/* skills  */}
          <br />
          <div className="">
            <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary-x text-white px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* certifications  */}
          <br />
          {/* <div className=""> certifications</div> */}

          <br />
          <div className=" h-[20vh]"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

const WorkExperience = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experiencesData.map((exp, index) => (
        <div key={index} className="mb-6 ">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className=" text-sm">{exp.date}</p>
          </div>
          <p className="">{exp.location}</p>

          <ol className="list-disc list-inside">
            {exp.responsibilities.map((resp, index) => (
              <li key={index} className=" mt-2 text-sm">
                {resp}
              </li>
            ))}
          </ol>
          {/* <p className="text-gray-300 mt-2 text-sm">{exp.description}</p> */}
          {/* {exp.technologies && (
            <p className="text-gray-400 text-sm mt-1">Technologies: {exp.technologies}</p>
          )} */}
        </div>
      ))}
    </div>
  );
};

// export default WorkExperience;
