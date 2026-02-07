import React from "react";

interface TerminalHeaderProps {
  title: string;
  className?: string;
}

export function TerminalHeader({ title, className }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-2 bg-[hsl(var(--code-header))] px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <span className="ml-2 text-xs text-muted-foreground font-mono">
        {title}
      </span>
    </div>
  );
}
