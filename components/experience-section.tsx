"use client"

import { Calendar, Briefcase, Award } from "lucide-react"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Financial Tech Company",
    period: "2021 - Present",
    description:
      "Lead developer for DFN CMS and DFN Fincon projects. Architected and implemented microservices-based solutions for financial institutions.",
    achievements: [
      "Reduced deployment time by 70% through CI/CD pipeline optimization",
      "Implemented server-driven UI architecture for dynamic content delivery",
      "Led a team of 5 developers to deliver projects on time and within budget",
    ],
    icon: Briefcase,
  },
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2018 - 2021",
    description:
      "Developed and maintained web applications for enterprise clients. Implemented responsive designs and RESTful APIs.",
    achievements: [
      "Built scalable backend services using Node.js and MongoDB",
      "Improved application performance by 40% through code optimization",
      "Implemented automated testing that increased code coverage to 85%",
    ],
    icon: Briefcase,
  },
  {
    title: "Frontend Developer",
    company: "Web Innovations",
    period: "2016 - 2018",
    description:
      "Created responsive user interfaces for various web applications. Collaborated with designers to implement pixel-perfect designs.",
    achievements: [
      "Developed reusable component library that reduced development time by 30%",
      "Implemented responsive designs that improved mobile user engagement by 25%",
      "Optimized frontend performance resulting in 50% faster load times",
    ],
    icon: Briefcase,
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <experience.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </div>
                  </div>

                  <div className="text-lg font-medium text-primary mb-3">{experience.company}</div>

                  <p className="text-muted-foreground mb-4">{experience.description}</p>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
