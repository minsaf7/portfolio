import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function HeroSection() {
  return (
    <section id="home" className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"hi, i'm Mohamed Minsaf"}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Senior Software Engineer. I love building scalable frontend and
            full-stack applications. Specialized in React, TypeScript, and
            Node.js.
          </p>
        </div>
        <Avatar className="h-16 w-16 shrink-0 md:h-20 md:w-20">
          <AvatarImage src="/avatar.png" alt="Mohamed Minsaf" />
          <AvatarFallback className="bg-muted text-muted-foreground text-lg font-semibold">
            MM
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Code block style intro */}
      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        {/* Terminal header */}
        <div className="flex items-center gap-2 bg-[hsl(var(--code-header))] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 text-lg text-muted-foreground font-mono">
            minsaf.ts
          </span>
        </div>

        {/* Code body */}
        <div className="bg-[hsl(var(--code-bg))] px-4 py-4 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
          <div>
            <span className="text-[hsl(var(--code-keyword))]">const</span>{" "}
            <span className="text-foreground">minsaf</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-muted-foreground">{"{"}</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">name</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-[hsl(var(--code-string))]">
              {'"Mohamed Minsaf"'}
            </span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">role</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-[hsl(var(--code-string))]">
              {'"Senior Software Engineer"'}
            </span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">experience</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-[hsl(var(--code-string))]">
              {'"4+ years"'}
            </span>
            <span className="text-muted-foreground">,</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">stack</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-muted-foreground">[</span>
            <span className="text-[hsl(var(--code-string))]">
              {'"React"'}
            </span>
            <span className="text-muted-foreground">,</span>{" "}
            <span className="text-[hsl(var(--code-string))]">
              {'"TypeScript"'}
            </span>
            <span className="text-muted-foreground">,</span>{" "}
            <span className="text-[hsl(var(--code-string))]">
              {'"Node.js"'}
            </span>
            <span className="text-muted-foreground">],</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">domains</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-muted-foreground">[</span>
            <span className="text-[hsl(var(--code-string))]">
              {'"Fintech"'}
            </span>
            <span className="text-muted-foreground">,</span>{" "}
            <span className="text-[hsl(var(--code-string))]">{'"ERP"'}</span>
            <span className="text-muted-foreground">],</span>
          </div>
          <div className="ml-4">
            <span className="text-foreground">certified</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-[hsl(var(--code-keyword))]">true</span>
            <span className="text-muted-foreground">,</span>{" "}
            <span className="text-[hsl(var(--code-comment))]">
              {"// Meta Frontend Developer"}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">{"}"}</span>
            <span className="text-muted-foreground">;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
