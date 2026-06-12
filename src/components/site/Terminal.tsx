import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const HELP =[
   "available commands:",
  "  help       — show this help",
  "  about      — who is farrukh?",
  "  projects   — featured work",
  "  skills     — tech stack",
  "  contact    — get in touch",
  "  clear      — clear the terminal",
]

const RESPONSES: Record<string, string[]> = {
help: HELP,

about: [
"Farrukh Tugonov · Full Stack Developer",
"Building modern web applications with React, Java, and Spring Boot.",
"Passionate about clean architecture, scalable backend systems, and great user experiences.",
"Currently learning: system design, Docker, and advanced Spring ecosystem.",
],

projects: [
"→ EatEase            · full-stack food ordering platform",
"→ MERN Blog Platform · blogging system built during ITransition training",
"→ Portfolio Website  · modern developer portfolio",
"→ Spring CRUD API    · backend system with authentication",
"type 'open projects' or visit /projects",
],

skills: [
"frontend  : React · TypeScript · JavaScript · HTML · CSS · Tailwind",
"backend   : Java · Spring Boot · Golang",
"database  : MySQL · PostgreSQL",
"tools     : Git · Docker · IntelliJ IDEA · VS Code",
],

contact: [
"email     : [tugonovfarrukh7@gmail.com.com](mailto:tugonovfarrukh7@gmail.com",
"github    : github.com/farmix2003",
"linkedin  : linkedin.com/in/farrukh-tugonov2003",
"telegram  : t.me/@farrukhtugonov",
],
};

type Line = {kind :"in" | "out"; text:string }

const Terminal = () => {

    const [lines, setLines] = useState<Line[]>([
        {kind: "out", text:"farrukh@portfolio:~$ welcome - type 'help' to begin."},
    ])
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null)
    const boxRef = useRef<HTMLDivElement | null>(null)

    useEffect(() =>{
     boxRef.current?.scrollTo({top: boxRef.current.scrollHeight, behavior: "smooth"})
    }, [lines])

    const submit = (cmd: string) =>{
        const c = cmd.trim().toLocaleLowerCase()
        const next: Line[] = [...lines, {kind:"in", text:cmd}]
        if(c === "clear") {setLines([]); setValue(""); return}
        if(c === "") {}
        else if(c in RESPONSES){
            next.push(...RESPONSES[c].map(t => ({kind:"out" as const, text: t})))
        }else{
            next.push({kind:"out", text:`command not found: ${cmd} - try 'help'`})
        }
        setLines(next)
        setValue("")
    }

  return (
    <section id="terminal" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 05 — Terminal</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Prefer a <span className="text-gradient">command line</span>?
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Explore this portfolio the way I'd explore yours. Try <span className="font-mono text-primary">help</span>, <span className="font-mono text-primary">about</span>, or <span className="font-mono text-primary">projects</span>.
        </p>
      </Reveal>
      <Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl glass-strong" onClick={() => inputRef.current?.focus()}>
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">farrukh@portfolio — zsh</span>
          </div>
          <div ref={boxRef} className="h-72 overflow-y-auto p-4 font-mono text-sm">
            {lines.map((l, i) => (
              <div key={i} className={l.kind === "in" ? "text-foreground" : "text-muted-foreground"}>
                {l.kind === "in" ? (
                  <><span className="text-primary">➜</span> <span className="text-secondary">~</span> {l.text}</>
                ) : (
                  <span>{l.text}</span>
                )}
              </div>
            ))}
            <form onSubmit={(e) => { e.preventDefault(); submit(value); }} className="mt-1 flex items-center gap-2">
              <span className="text-primary">➜</span>
              <span className="text-secondary">~</span>
              <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} placeholder="type a command…" className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground/40" autoComplete="off" spellCheck={false} />
              <span className="inline-block h-4 w-0.5 bg-primary animate-blink" />
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Terminal
