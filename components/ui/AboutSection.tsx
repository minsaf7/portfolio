import Link from "next/link";
import { TerminalHeader } from "./TerminalHeader";

export function AboutSection() {
  return (
    <section id="about" 
    // className="py-8 md:py-12"
    className="mt-8 overflow-hidden rounded-lg border border-border"
    >
      {/* <h2 className="mb-4 text-lg font-semibold tracking-tight text-black dark:text-white">
        About
      </h2> */}

      <TerminalHeader title="About.me" className="mb-4" />
      <div className=" border border-border bg-muted/40 dark:bg-muted/20 p-4 md:p-5">
        <p className="font-mono text-sm leading-relaxed text-black dark:text-white">
          Senior Software Engineer with{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            4+ years
          </span>{" "}
          of experience designing and building scalable frontend and full-stack
          applications across{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            fintech
          </span>{" "}
          and{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            ERP
          </span>{" "}
          domains.
          <br />
          <br />
          Specialized in{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            React
          </span>
          ,{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            TypeScript
          </span>
          , and{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            Node.js
          </span>
          , with strong expertise in server-driven UI architectures for
          regulatory, trading, and enterprise financial platforms.
          <br />
          <br />
          Proven contributor to frontend architecture, dynamic form systems, and
          modular WCMS platforms. Experienced in mentoring junior engineers and
          delivering{" "}
          <span className="text-blue-600 dark:text-[hsl(var(--code-string))]">
            high-performance
          </span>{" "}
          systems. <Link href={'https://coursera.org/share/8b26f78d33433ca9ffae5808aec24b3d'} className="code-error font-mono" data-hint="Go to Cousera">Certified Frontend Developer (Meta – Coursera)</Link><span className="terminal-cursor ml-1">▌</span>
        </p>
      </div>
    </section>
  );
}
