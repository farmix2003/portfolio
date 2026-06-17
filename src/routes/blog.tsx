import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { articles } from "@/lib/portfolio-data";
import { Search, Clock, ChevronDown, ChevronUp } from "lucide-react";
import Reveal from "#/components/site/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Farrukh Tugonov" },
      { name: "description", content: "Essays on systems, frontend craft, performance, and the taste gap in AI-generated UI." },
      { property: "og:title", content: "Blog — Farrukh Tugonov" },
      { property: "og:description", content: "Engineering notes on systems, frontend, performance and design." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = Array.from(new Set(articles.map((a) => a.category)));

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const featured = articles.filter((a) => a.featured);
  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const mc = !cat || a.category === cat;
      const mq = !q || `${a.title} ${a.excerpt} ${a.content}`.toLowerCase().includes(q.toLowerCase());
      return mc && mq;
    });
  }, [q, cat]);
  const toggleArticle = (cardId: string) => {
    setExpandedCard((current) => (current === cardId ? null : cardId));
  };

  return (
    <>
      <PageHeader eyebrow="Writing" title={<>Notes from the <span className="text-gradient">build</span>.</>}>
        Short essays on systems, frontend craft, performance and the taste gap in AI-generated UI.
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">Featured</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {featured.map((a, i) => {
            const cardId = `featured-${a.title}`;

            return (
            <Reveal key={a.title} delay={i * 80}>
              <ArticleCard
                article={a}
                expanded={expandedCard === cardId}
                featured
                onToggle={() => toggleArticle(cardId)}
              />
            </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary/50" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setCat(null)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${cat === null ? "border-primary/60 bg-primary/15 text-foreground" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>All</button>
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${cat === c ? "border-primary/60 bg-primary/15 text-foreground" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>{c}</button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => {
            const cardId = `article-${a.title}`;

            return (
            <Reveal key={a.title} delay={i * 60}>
              <ArticleCard
                article={a}
                expanded={expandedCard === cardId}
                onToggle={() => toggleArticle(cardId)}
              />
            </Reveal>
            );
          })}
        </div>
      </section>

    </>
  );
}

type Article = (typeof articles)[number];

function ArticleCard({
  article,
  expanded,
  featured = false,
  onToggle,
}: {
  article: Article;
  expanded: boolean;
  featured?: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl glass hover-lift ${
        featured ? "min-h-[21rem] p-7" : "min-h-[20rem] p-6"
      }`}
    >
      {featured && <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />}
      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className={`rounded-full px-2.5 py-0.5 ${featured ? "bg-primary/15 text-primary" : "bg-white/[0.05] text-muted-foreground"}`}>
            {article.category}
          </span>
          <span className="shrink-0 font-mono text-muted-foreground">{article.date}</span>
        </div>
        <h3 className={`mt-4 font-display font-semibold transition-colors group-hover:text-primary ${featured ? "text-2xl tracking-tight" : "text-lg"}`}>
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
        <div className="mt-4 flex-1 overflow-hidden">
          <p className={`text-sm leading-6 text-muted-foreground transition-all duration-300 ${expanded ? "max-h-96" : "line-clamp-3 max-h-[4.5rem]"}`}>
            {article.content}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {article.minutes} min{featured ? " read" : ""}
          </span>
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-3 py-1 text-primary transition-colors hover:border-primary/60 hover:bg-primary/10"
            aria-expanded={expanded}
          >
            {expanded ? "Show less" : "More"}
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>
    </article>
  );
}
