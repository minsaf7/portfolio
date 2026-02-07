


import { GraduationCap } from "lucide-react"

const education = [
  {
    school: "Coventry University, UK",
    degree: "BSc (Hons) Computing — First Class",
    period: "2019 – 2021",
  },
  {
    school: "NIBM, Sri Lanka",
    degree: "Higher National Diploma in Computer Based Information System",
    period: "2017 – 2019",
  },
  {
    school: "NIBM, Sri Lanka",
    degree: "Diploma in Computer Based Information System",
    period: "2016 – 2017",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-14 md:py-20">
      {/* Section comment */}
      <div className="mb-8 text-lg font-mono text-black/60 dark:text-[hsl(var(--code-string))] font-bold">
        {"// education.background"}
      </div>

      {/* <h2 className="mb-10 text-lg font-semibold tracking-tight text-black dark:text-white">
        Education
      </h2> */}

      <div className="relative space-y-1">
        {/* Timeline spine */}
        <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-border/60" />

        {education.map((edu, i) => (
          <div key={i} className="relative flex gap-6 py-6">
            {/* Timeline dot */}
            <div className="relative z-10 mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-background">
              <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-[hsl(var(--code-string))]" />
            </div>

            {/* Content */}
            <div className="flex flex-1 items-start justify-between gap-6">
              <div>
                <h3 className="text-sm font-medium text-black dark:text-white">
                  {edu.school}
                </h3>

                <p className="mt-1 font-mono text-xs text-black/70 dark:text-white/70">
                  {edu.degree}
                </p>
              </div>

              <span className="shrink-0 font-mono text-xs text-black/60 dark:text-white/60">
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
