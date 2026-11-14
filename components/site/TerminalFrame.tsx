/**
 * Draws the page as a terminal window: a title bar with window controls,
 * and (on larger screens) a rounded window edge with the "desktop" around it.
 * Purely decorative: it never blocks clicks.
 */
export function TerminalFrame({ title = "~" }: { title?: string }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 sm:inset-3">
      {/* window edge; the huge spread shadow paints the desktop outside it */}
      <div className="absolute inset-0 shadow-[0_0_0_100vmax_hsl(var(--desktop))] ring-1 ring-border sm:rounded-xl" />

      {/* title bar */}
      <div className="absolute inset-x-0 top-0 flex h-10 items-center border-b border-border bg-[hsl(var(--terminal-header))] px-4 sm:rounded-t-xl">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-brand-red" />
          <span className="h-3 w-3 rounded-full bg-[#e9b949]" />
          <span className="h-3 w-3 rounded-full bg-brand-blue" />
        </div>
        <p className="absolute inset-x-0 text-center font-mono text-xs text-muted-foreground">
          minsaf@portfolio: {title} — zsh
        </p>
      </div>
    </div>
  );
}
