import { experience } from "@/lib/portfolio-data";
import Reveal from "./Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 03 — Journey</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Starting years of building things that <span className="text-gradient">scale</span>.
        </h2>
      </Reveal>
      <div className="relative mt-14 pl-6 md:pl-12">
        <div className="absolute left-1.5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/30 to-transparent md:left-3" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              <div className="relative">
                <span className="absolute -left-5.5 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)] md:-left-[34px]" />
                <div className="glass rounded-2xl p-6 hover-lift">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
