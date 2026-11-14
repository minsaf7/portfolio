import { Section } from "@/components/site/Section";
import { education } from "@/lib/data";


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
