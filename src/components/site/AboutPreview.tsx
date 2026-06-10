import Reveal from "./Reveal";

const tags = ["Typed end-to-end", "Performance budgets", "Design systems", "DX-obsessed", "Edge runtimes", "Observability"];

const AboutPreview = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// 01 — About</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Software with <span className="text-gradient">taste</span>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a full stack engineer who treats software like a product, not a ticket queue.
              For the last six years I've shipped platforms that quietly handle scale —
              typed React frontends, resilient Go and Java services, Postgres and MySQL that don't melt.
            </p>
            <p>
              I care about the things users never see: a deploy that takes 38 seconds, an error
              budget that's actually honored, a design system you can extend without fear.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default AboutPreview
