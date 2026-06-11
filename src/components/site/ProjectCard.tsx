import { Github, ExternalLink } from "lucide-react";
import type { projects } from "@/lib/portfolio-data";

type P = (typeof projects)[number];

export function ProjectCard({ p }: { p: P }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl glass hover-lift">
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
          {p.highlights.map((h) => (
            <span key={h} className="rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-[11px] text-white backdrop-blur">{h}</span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">{p.title}</h3>
          <div className="flex gap-1.5 opacity-60 transition-opacity group-hover:opacity-100">
            <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:border-primary/50 hover:text-primary"><Github size={14} /></a>
            <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:border-primary/50 hover:text-primary"><ExternalLink size={14} /></a>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
