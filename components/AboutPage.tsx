"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        <p className="text-lg">
          I am a passionate Full Stack Developer with expertise in building
          complex web and mobile applications. My focus is on creating scalable,
          efficient, and user-friendly solutions that solve real-world problems.
        </p>
        <p className="text-lg">
          With a strong background in both frontend and backend development, I
          specialize in modern JavaScript frameworks like React and React
          Native, as well as server-side technologies including Node.js and
          microservice architectures.
        </p>
        <p className="text-lg">
          My experience includes developing enterprise-level content management
          systems, financial applications, and implementing server-driven UI
          architectures that provide dynamic and responsive user experiences.
        </p>
      </motion.div>
      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        {/* <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg">
            I am a passionate Full Stack Developer with expertise in building complex web and mobile applications. My
            focus is on creating scalable, efficient, and user-friendly solutions that solve real-world problems.
          </p>
          <p className="text-lg">
            With a strong background in both frontend and backend development, I specialize in modern JavaScript
            frameworks like React and React Native, as well as server-side technologies including Node.js and
            microservice architectures.
          </p>
          <p className="text-lg">
            My experience includes developing enterprise-level content management systems, financial applications, and
            implementing server-driven UI architectures that provide dynamic and responsive user experiences.
          </p>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-medium">BSc Hons Computing</div>
                <div className="text-muted-foreground">First Class Honors</div>
              </li>
              <li>
                <div className="font-medium">Diploma in Computing</div>
                <div className="text-muted-foreground">Advanced Computing Studies</div>
              </li>
              <li>
                <div className="font-medium">Frontend Developer Professional Certificate</div>
                <div className="text-muted-foreground">Meta</div>
              </li>
            </ul>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
