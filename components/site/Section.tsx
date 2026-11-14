import { Reveal } from "./Reveal";

/** Section headed by a shell-style command, e.g. "$ cat about.md". */
export function Section({
  id,
  command,
  children,
}: {
  id: string;
  command: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12 md:py-14">
      <Reveal>
        <h2 className="mb-6 font-mono text-sm text-muted-foreground">
          <span className="select-none text-highlight">$ </span>
          {command}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
