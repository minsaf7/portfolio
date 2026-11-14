import { Section } from "@/components/site/Section";

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
  {
    school: "Royal College Colombo, Sri Lanka",
    degree: "Advance Level",
    period: "2014 – 2016",
  },
];

export function EducationSection() {
  return (
    <Section id="education" command="cat education.txt">
      <ul className="space-y-4">
        {education.map((edu) => (
          <li key={edu.degree} className="flex items-baseline justify-between gap-4">
            <span>
              <span className="font-medium">{edu.degree}</span>
              <span className="block text-sm text-muted-foreground">{edu.school}</span>
            </span>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {edu.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
