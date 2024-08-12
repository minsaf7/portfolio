import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMui } from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Docker", icon: FaDocker },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Material UI", icon: SiMui },
];

const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center">
    {technologies.map((tech) => {
      const IconComponent = tech.icon;
      return (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center justify-center m-4 p-4 w-24 h-24 rounded-lg shadow-md"
          style={{
            backgroundColor: '#1f2833',
            border: '2px solid transparent',
            borderImage: 'linear-gradient(135deg, transparent, transparent) 1',
          }}
          whileHover={{
            borderImage: 'linear-gradient(135deg, #66fcf1, #66fcf1) 1',
          }}
          transition={{ duration: 0.5 }}
        >
          <IconComponent size={40} className="mb-2 text-blue-600"  style={{
            color:'#66fcf1'
          }}/>
          <span className="text-center text-sm font-semibold text-white">
            {tech.name}
          </span>
        </motion.div>
      );
    })}
  </div>
  );
};

export default TechIcons;
