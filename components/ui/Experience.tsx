"use client";

import { useState } from "react";
import { Section } from "@/components/site/Section";
import { experiences } from "@/lib/data";


export function ExperienceSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="experience" command="git log --career">
      <ul className="space-y-1">
        {experiences.map((exp, i) => {
          const isOpen = open === i;
          return (
            <li key={exp.role}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group -mx-3 flex w-[calc(100%+1.5rem)] items-baseline justify-between gap-4 rounded-lg px-3 py-3 text-left transition-colors hover:bg-accent/60"
              >
                <span>
                  <span className="font-medium">{exp.role}</span>
                  <span className="block text-sm text-muted-foreground">
                    {exp.company} · {exp.mode}
                  </span>
                </span>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {exp.period}
                </span>
              </button>

              <div className="collapse" data-open={isOpen} aria-hidden={!isOpen}>
                <div>
                  <ul className="space-y-2 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="select-none text-highlight">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
