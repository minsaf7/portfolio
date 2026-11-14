"use client";

import { useEffect, useRef } from "react";

const GAP = 26; // px between dots
const RADIUS = 1.1; // dot radius
const MOUSE_RADIUS = 160; // px of cursor influence

/*
 * CSS mask that cuts the dots out behind the text column (max-w-2xl = 672px,
 * plus a little breathing room) and fades them back in towards the edges.
 * On narrow screens the clear zone covers the whole width, so text never
 * sits on top of the effect.
 */
const COLUMN_MASK =
  "linear-gradient(to right, #000 0, #000 calc(50% - 480px), transparent calc(50% - 370px), transparent calc(50% + 370px), #000 calc(50% + 480px), #000 100%)";

function readColor(name: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return `hsl(${v})`;
}

/**
 * Fixed, full-screen canvas of faint dots. A slow diagonal wave brightens
 * rows of dots, and dots near the cursor light up in the accent colour.
 */
export function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };
    let ink = readColor("--foreground");
    let accent = readColor("--highlight");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;

      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          // travelling wave
          const wave = (Math.sin((x + y) * 0.012 - time * 0.9) + 1) / 2;
          const alpha = 0.05 + wave * 0.08;
          const r = RADIUS;

          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const p = 1 - dist / MOUSE_RADIUS;
            ctx.globalAlpha = 0.12 + p * 0.6;
            ctx.fillStyle = accent;
            ctx.beginPath();
            ctx.arc(x, y, r + p * 1.2, 0, Math.PI * 2);
            ctx.fill();
            continue;
          }

          ctx.globalAlpha = alpha;
          ctx.fillStyle = ink;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (reduceMotion) draw(0);
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    // re-read colours when the theme class on <html> changes
    const themeObserver = new MutationObserver(() => {
      ink = readColor("--foreground");
      accent = readColor("--highlight");
      if (reduceMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // pause when the tab is hidden
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduceMotion) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ maskImage: COLUMN_MASK, WebkitMaskImage: COLUMN_MASK }}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
