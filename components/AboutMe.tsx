import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6 h-screen flex flex-col items-center justify-center text-white">
      {/* Animated Header */}
      {/* <motion.h2
        className="text-4xl font-bold mb-6"
        style={{ color: "#66fcf1" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2> */}

      {/* Animated Description */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl text-center mb-8"
        style={{ color: "white" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        
      >
        I am a passionate software engineer with over 2.5 years of experience
        specializing in JavaScript, React.js, Node.js, and Docker. My journey in
        the ERP and fintech sectors has honed my skills in developing innovative
        solutions to enhance user experiences and streamline operations. I
        thrive in dynamic environments where I can contribute to impactful
        projects and continuously grow my expertise.
      </motion.p>

      {/* Animated Contact Texts */}
      <div className="flex flex-col items-center space-y-4 mt-8">
        <motion.a
          href="mailto:your.email@gmail.com"
          className="text-lg md:text-xl font-semibold hover:text-soft transition-colors duration-300 ease-in-out"
          aria-label="Email"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.1, color: "#45a29e" }}
          whileTap={{ scale: 0.95 }}
        >
          📧 Email Me
        </motion.a>
        <motion.a
          href="https://www.instagram.com/yourusername"
          className="text-lg md:text-xl font-semibold hover:text-soft transition-colors duration-300 ease-in-out"
          aria-label="Instagram"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.1, color: "#e4405f" }}
          whileTap={{ scale: 0.95 }}
        >
          📸 Instagram
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/yourprofile"
          className="text-lg md:text-xl font-semibold hover:text-soft transition-colors duration-300 ease-in-out"
          aria-label="LinkedIn"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.1, color: "#0077b5" }}
          whileTap={{ scale: 0.95 }}
        >
          💼 LinkedIn
        </motion.a>
      </div>
    </div>
  );
};

export default AboutMe;
