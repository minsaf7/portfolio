"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { CornerDownLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { chipLabels, getReply, matchIntent, type Intent } from "./replies";

type Message = { id: number; from: "bot" | "user"; node: ReactNode; card?: boolean };

const typingTime = (m: { card?: boolean }, i: number) => (m.card ? 650 : 550 + i * 120);

function BotAvatar({ size = "sm" }: { size?: "sm" | "lg" }) {
  const cls =
    size === "lg"
      ? "h-20 w-20 text-lg ring-[3px] ring-offset-[3px]"
      : "h-8 w-8 text-[11px] ring-2 ring-offset-1";
  return (
    <Avatar
      className={`${cls} shrink-0 shadow-[0_8px_20px_-8px_rgba(120,0,0,0.6)] ring-highlight ring-offset-background`}
    >
      <AvatarImage src="/avatar.svg" alt="Mohamed Minsaf" className="object-cover" />
      <AvatarFallback className="bg-gradient-to-b from-[#d42230] to-brand-maroon font-semibold text-white">
        MM
      </AvatarFallback>
    </Avatar>
  );
}

function Bubble({ from, children }: { from: "bot" | "user"; children: ReactNode }) {
  return from === "bot" ? (
    <div className="max-w-[85%] rounded-[20px] rounded-bl-md border border-border bg-card px-4 py-2.5 text-[15px] leading-relaxed tracking-tight text-card-foreground shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] sm:max-w-[70%]">
      {children}
    </div>
  ) : (
    <div className="max-w-[85%] rounded-[20px] rounded-br-md bg-gradient-to-b from-[#d42230] to-brand-red px-4 py-2.5 text-[15px] leading-relaxed tracking-tight text-white shadow-[0_8px_20px_-8px_rgba(193,18,31,0.7)] sm:max-w-[70%]">
      {children}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 fade-up" aria-label="Minsaf is typing">
      <BotAvatar />
      <div className="flex gap-1 rounded-[20px] rounded-bl-md border border-border bg-card px-4 py-3.5">
        {[0, 150, 300].map((d) => (
          <span
            key={d}
            className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground"
            style={{ animationDelay: `${d}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ChatPortfolio() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chips, setChips] = useState<Intent[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const nextId = useRef(0);
  const busy = useRef(false); // true while a reply is being "typed"
  const endRef = useRef<HTMLDivElement>(null);

  const respond = useCallback((intent: Intent) => {
    const reply = getReply(intent);
    busy.current = true;
    setChips([]);
    let elapsed = 250;
    reply.messages.forEach((m, i) => {
      timers.current.push(setTimeout(() => setTyping(true), elapsed));
      elapsed += typingTime(m, i);
      timers.current.push(
        setTimeout(() => {
          setTyping(false);
          setMessages((prev) => [...prev, { id: nextId.current++, from: "bot", ...m }]);
        }, elapsed),
      );
      elapsed += 180;
    });
    timers.current.push(
      setTimeout(() => {
        busy.current = false;
        setChips(reply.chips);
      }, elapsed + 100),
    );
  }, []);

  // greet on first load
  useEffect(() => {
    respond("intro");
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, [respond]);

  // keep the latest message in view
  useEffect(() => {
    if (messages.length > 2 || typing) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages, typing]);

  const send = (text: string, intent: Intent) => {
    if (busy.current) return;
    setMessages((prev) => [...prev, { id: nextId.current++, from: "user", node: text }]);
    respond(intent);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy.current) return;
    setInput("");
    send(text, matchIntent(text));
  };

  return (
    <div className="relative min-h-[100dvh]">
      {/* soft panel behind the chat so the terminal session fades out under it */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 left-1/2 -z-[5] w-[min(52rem,100%)] -translate-x-1/2 bg-background/85"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)",
        }}
      />
      <main className="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col px-4 pb-52 pt-20">
        <div className="my-auto flex w-full flex-col">
          <div className="fade-up mb-4 flex items-end gap-3">
            <div className="relative">
              <BotAvatar size="lg" />
              <span className="animate-wave absolute -right-3 -top-2 text-3xl">👋</span>
            </div>
          </div>

          {messages.map((m, i) => {
            const prev = messages[i - 1];
            const next = messages[i + 1];
            const groupStart = !prev || prev.from !== m.from;
            const groupEnd = (!next || next.from !== m.from) && !(m.from === "bot" && typing && !next);
            return (
              <div
                key={m.id}
                className={`fade-up flex items-end gap-2 ${groupStart && i > 0 ? "mt-5" : "mt-1.5"} ${
                  m.from === "user" ? "justify-end" : ""
                }`}
              >
                {m.from === "bot" &&
                  (groupEnd ? <BotAvatar /> : <span className="w-8 shrink-0" aria-hidden />)}
                {m.card ? (
                  <div className="min-w-0 flex-1">{m.node}</div>
                ) : (
                  <Bubble from={m.from}>{m.node}</Bubble>
                )}
              </div>
            );
          })}

          {typing && (
            <div className={messages.at(-1)?.from === "bot" ? "mt-1.5" : "mt-5"}>
              <TypingIndicator />
            </div>
          )}
          <div ref={endRef} />
        </div>
      </main>

      {/* composer */}
      <div className="fixed inset-x-0 bottom-0 z-20 sm:inset-x-3 sm:bottom-3">
        <div className="pointer-events-none absolute inset-0 -top-16 bg-gradient-to-t from-background via-background/90 to-transparent" />
        <div className="relative mx-auto w-full max-w-2xl px-4 pb-4 sm:pb-6">
          <div className="no-scrollbar -mx-4 flex min-h-[52px] gap-2 overflow-x-auto px-4 py-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {chips.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => send(chipLabels[c] ?? c, c)}
                style={{ "--delay": `${i * 70}ms` } as React.CSSProperties}
                className={`fade-up shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium tracking-tight transition-transform hover:-translate-y-0.5 active:scale-95 sm:text-sm ${
                  i === chips.length - 1 && chips.length > 2
                    ? "border border-highlight/60 bg-card/70 text-foreground backdrop-blur"
                    : "bg-gradient-to-b from-[#d42230] to-brand-red text-white shadow-[0_6px_16px_-8px_rgba(193,18,31,0.7)]"
                }`}
              >
                {chipLabels[c]}
              </button>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-1 flex items-center gap-2 rounded-full border border-border bg-card py-2 pl-5 pr-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] transition-shadow focus-within:border-highlight/60 focus-within:shadow-[0_0_0_3px_hsl(var(--highlight)/0.18),0_12px_32px_-12px_rgba(0,0,0,0.5)]"
          >
            <label htmlFor="chat-input" className="sr-only">
              Ask me anything
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything"
              autoComplete="off"
              enterKeyHint="send"
              className="min-w-0 flex-1 bg-transparent text-[15px] tracking-tight outline-none placeholder:text-muted-foreground sm:text-sm"
            />
            <ThemeToggle />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim() || typing}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors enabled:bg-brand-red enabled:text-white disabled:opacity-50"
            >
              <CornerDownLeft className="h-4 w-4" />
            </button>
          </form>

          {/* <p className="mt-3 hidden text-center text-xs text-muted-foreground/60 sm:block">
            © {new Date().getFullYear()} Mohamed Minsaf · built with next.js
          </p> */}
        </div>
      </div>
    </div>
  );
}
