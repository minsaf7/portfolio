"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";

const links = [
  { label: "github", href: "https://github.com/minsaf7" },
  { label: "linkedin", href: "https://www.linkedin.com/in/mohamed-minsaaf/" },
  { label: "email", href: "mailto:minsafmohamed7@gmail.com" },
];

const stack = ["React", "TypeScript", "Node.js"];

export function HeroSection() {
  const [typed, setTyped] = useState(0);
  const done = typed >= COMMAND.length;

  // type the command one character at a time
  useEffect(() => {
    if (done) return;
    const id = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? 500 : 90);
    return () => clearTimeout(id);
  }, [typed, done]);

  // CSS fade-ins that start while "whoami" is typing, so the hero never sits empty.
  // Pure CSS so the text always ends fully visible.
  const show = (delayMs: number) => ({
    className: "fade-up",
    style: { "--delay": `${250 + delayMs}ms` } as React.CSSProperties,
  });

  return (
    <section id="home" className="pb-12 pt-20 md:pt-28">
      <p className="font-mono text-sm text-muted-foreground" aria-hidden>
        <span className="text-highlight">$ </span>
        {COMMAND.slice(0, typed)}
        {!done && <span className="caret" />}
      </p>

      <div {...show(0)}>
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          Mohamed Minsaf
          {done && <span className="caret ml-1" aria-hidden />}
        </h1>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Senior Software Engineer · 4+ yrs
        </p>
      </div>

      <p style={show(150).style} className="fade-up mt-8 leading-relaxed">
        I build scalable frontend and full-stack applications for{" "}
        <span className="text-highlight">fintech</span> and{" "}
        <span className="text-highlight">ERP</span> — with a soft spot for
        server-driven UIs and dynamic form systems.
      </p>

      <div
        style={show(300).style}
        className="fade-up mt-6 overflow-x-auto rounded-lg border border-border bg-card/60 px-4 py-3 font-mono text-[13px] leading-6 backdrop-blur-sm"
      >
        <span className="text-highlight">const</span> stack ={" "}
        <span className="text-muted-foreground">[</span>
        {stack.map((s, i) => (
          <span key={s}>
            <span className="text-[#3d6f8f] dark:text-brand-blue">&quot;{s}&quot;</span>
            {i < stack.length - 1 && <span className="text-muted-foreground">, </span>}
          </span>
        ))}
        <span className="text-muted-foreground">];</span>
      </div>

      <ul style={show(450).style} className="fade-up mt-8 flex gap-5 font-mono text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="inline-block text-highlight transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>{" "}
              <span className="link-underline">{l.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
