import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const HELP = [
  "available commands:",
  "  help       - show this help",
  "  about      - who is farrukh?",
  "  projects   - featured work",
  "  skills     - tech stack",
  "  contact    - get in touch",
  "  clear      - clear the terminal",
];

const RESPONSES: Record<string, string[]> = {
  help: HELP,
  about: [
    "Farrukh Tugonov - Full Stack Developer",
    "Building modern web applications with React, Java, and Spring Boot.",
    "Passionate about clean architecture, scalable backend systems, and great user experiences.",
    "Currently learning: system design, Docker, and advanced Spring ecosystem.",
  ],
  projects: [
    "-> EatEase            - full-stack food ordering platform",
    "-> MERN Blog Platform - blogging system built during ITransition training",
    "-> IMDb Clone         - movie discovery app",
    "-> E-Commerce Store   - frontend store with cart and filtering",
    "type 'open projects' or visit /projects",
  ],
  skills: [
    "frontend  : React - TypeScript - JavaScript - HTML - CSS - Tailwind",
    "backend   : Java - Spring Boot - Golang",
    "database  : MySQL - PostgreSQL",
    "tools     : Git - Docker - IntelliJ IDEA - VS Code",
  ],
  contact: [
    "email     : tugonovfarrukh7@gmail.com",
    "github    : github.com/farmix2003",
    "linkedin  : linkedin.com/in/farrukh-tugonov2003",
    "telegram  : t.me/farrukhtugonov",
  ],
};

type Line = { kind: "in" | "out"; text: string };

const Terminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "farrukh@portfolio:~$ welcome - type 'help' to begin." },
  ]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [lines]);

  const submit = (cmd: string) => {
    const normalized = cmd.trim().toLowerCase();

    if (normalized === "clear") {
      setLines([]);
      setValue("");
      return;
    }

    setLines((current) => {
      const next: Line[] = [...current, { kind: "in", text: cmd }];

      if (!normalized) {
        return next;
      }

      if (normalized in RESPONSES) {
        next.push(...RESPONSES[normalized].map((text) => ({ kind: "out" as const, text })));
      } else if (normalized === "open projects") {
        next.push({ kind: "out", text: "Open the Projects page from the navigation above." });
      } else {
        next.push({ kind: "out", text: `command not found: ${cmd} - try 'help'` });
      }

      return next.slice(-80);
    });
    setValue("");
  };

  return (
    <section id="terminal" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 05 - Terminal</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Prefer a <span className="text-gradient">command line</span>?
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Explore this portfolio the way I'd explore yours. Try <span className="font-mono text-primary">help</span>, <span className="font-mono text-primary">about</span>, or <span className="font-mono text-primary">projects</span>.
        </p>
      </Reveal>
      <Reveal>
        <div
          className="mt-10 overflow-hidden rounded-2xl glass-strong"
          onPointerDown={(event) => {
            if (event.target instanceof HTMLElement && event.target.tagName !== "INPUT") {
              inputRef.current?.focus();
            }
          }}
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">farrukh@portfolio - zsh</span>
          </div>
          <div ref={boxRef} className="h-72 overflow-y-auto p-4 font-mono text-sm">
            {lines.map((line, i) => (
              <div key={`${line.kind}-${i}-${line.text}`} className={line.kind === "in" ? "text-foreground" : "text-muted-foreground"}>
                {line.kind === "in" ? (
                  <>
                    <span className="text-primary">{">"}</span> <span className="text-secondary">~</span> {line.text}
                  </>
                ) : (
                  <span>{line.text}</span>
                )}
              </div>
            ))}
            <form
              onSubmit={(event) => {
                event.preventDefault();
                submit(value);
              }}
              className="mt-1 flex items-center gap-2"
            >
              <span className="text-primary">{">"}</span>
              <span className="text-secondary">~</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="type a command..."
                className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground/40"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Terminal;
