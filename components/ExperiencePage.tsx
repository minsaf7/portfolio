"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar, Building, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "DirectFN Sri Lanka",
    location: "Hybrid",
    period: "Sep 2024 - Present",
    description:
      "Leading the development of enterprise-level content management systems and financial applications. Architecting and implementing server-driven UI solutions and microservices.",
    achievements: [
      "Designed and implemented a scalable microservice architecture for the DFN CMS platform",
      "Enhancing deployment processes by implementing multi-stage Docker builds, significantly reducing build size and improving efficiency",
      "Collaborating with cross-functional teams, including UI/UX designers and department heads, to align product features with business requirements while ensuring UI/UX compliance",
      "Contributing to project planning and architectural decisions alongside technical leads, improving system design and performance",
      "Contributed to the development of a React Native mobile app for real-time market data streaming, charts, and analytics leveraging server-driven UI concept",
      "Focused on debugging and resolving QA-reported issues to enhance app stability and performance",
      "Developed the DFN Fincon mobile application for real-time stock market data",
    ],
  },
  {
    title: "Software Engineer",
    company: "DirectFN Sri Lanka",
    location: "Hybrid",
    period: "Dec 2022 - Oct 2024",
    description:
      "Built responsive and interactive user interfaces for content management systems and financial applications.",
    achievements: [
      "Developed core features for the web CMS, working closely with UI/UX teams and department heads to ensure the product met usability and business requirements",
      "Researching and applying the latest and best technologies to enhance the system's performance and user experience",
      "Implemented custom charting components for financial data visualization",
      "Reduced application bundle size by 40% through code optimization",
      "Integrated server-driven UI patterns for dynamic content updates",
      "Developing financial widgets to provide robust and efficient solutions for our clients"
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Blue Lotus 360 Sri Lanka",
    location: "Remote",
    period: "Nov 2021 - Nov 2022",
    description:
      "Developed and maintained client web apps using modern JavaScript frameworks. Collaborated with design teams to implement responsive layouts and interactive features.",
    achievements: [
      "Utilised React JS and JavaScript to build intuitive and user-friendly interfaces for the Order Management system, ensuring seamless user experience",
      "Worked closely with cross-functional teams to deliver high-quality ERP solutions",
      "Contributed to the development and maintenance of ERP and POS solutions, focusing on enhancing functionality and performance",
      
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base">{exp.company}</CardDescription>
                      </div>
                    </div>
                    <div className="bg-secondary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1.5 self-start sm:self-auto">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Building className="h-3.5 w-3.5" />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <p>{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
