import Link from "next/link";
import { Section } from "@/components/site/Section";

export function AboutSection() {
  return (
    <Section id="about" command="cat about.md">
      <div className="space-y-4 leading-relaxed">
        <p>
          Senior Software Engineer with 4+ years of experience designing and
          building scalable frontend and full-stack applications across fintech
          and ERP domains.
        </p>
        <p>
          Specialized in React, TypeScript, and Node.js, with strong expertise
          in server-driven UI architectures for regulatory, trading, and
          enterprise financial platforms.
        </p>
        <p>
          Proven contributor to frontend architecture, dynamic form systems, and
          modular WCMS platforms. Experienced in mentoring junior engineers and
          delivering high-performance systems.
        </p>
        <p className="text-muted-foreground">
          <Link
            href="https://coursera.org/share/8b26f78d33433ca9ffae5808aec24b3d"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline transition-colors hover:text-foreground"
          >
            Certified Frontend Developer (Meta – Coursera) ↗
          </Link>
        </p>
      </div>
    </Section>
  );
}
