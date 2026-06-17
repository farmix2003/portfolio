import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, certifications } from "@/lib/portfolio-data";
import { Search, BadgeCheck } from "lucide-react";
import Reveal from "#/components/site/Reveal";

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
       {title:"About - Farrukh Tugonov"},
            {name: "description", content: "Career journey, strengths, education and personal interests of full stack engineer Farrukh Tugonov"},
            { property: "og:title", content: "About — Farrukh Tugonov" },
      { property: "og:description", content: "The story, strengths and stack behind farrukh.dev." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

function ProjectsPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = !tag || p.tags.includes(tag);
      const text = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
      const matchesQ = !q || text.includes(q.toLowerCase());
      return matchesTag && matchesQ;
    });
  }, [q, tag]);

  return (
    <>
      <PageHeader eyebrow="Selected work" title={<>Projects worth <span className="text-gradient">opening</span>.</>}>
        A sample of products I've designed, engineered, and shipped — from realtime analytics to payments infrastructure.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary/50" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setTag(null)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${tag === null ? "border-primary/60 bg-primary/15 text-foreground" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>All</button>
              {allTags.map((t) => (
                <button key={t} onClick={() => setTag(t)} className={`rounded-full border px-3 py-1 font-mono text-[11px] transition-colors ${tag === t ? "border-primary/60 bg-primary/15 text-foreground" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>{t}</button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">No projects match — try a different filter.</p>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Certifications</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Verified credentials.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <a href={c.verify} className="block glass rounded-2xl p-5 hover-lift">
                <BadgeCheck className="text-primary" size={20} />
                <h3 className="mt-3 text-sm font-semibold">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">Issued {c.date}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
