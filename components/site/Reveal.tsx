import { cn } from "@/lib/utils";

/**
 * Fades content in as it scrolls into view, using CSS scroll-driven
 * animations. Browsers without support simply show the content.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  /** kept for compatibility; scroll-driven reveals don't need a delay */
  delay?: number;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
