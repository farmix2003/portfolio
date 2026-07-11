import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { articles } from "@/lib/portfolio-data";
import { Search, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { dictionary, useLanguage } from "#/lib/i18n";
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
  const { language, text } = useLanguage();
  const featured = articles.filter((a) => a.featured);
  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const mc = !cat || a.category === cat;
      const translated = language === "uz" ? articleUz[a.title] : null;
      const mq = !q || `${a.title} ${a.excerpt} ${a.content} ${translated?.title ?? ""} ${translated?.excerpt ?? ""} ${translated?.content ?? ""}`.toLowerCase().includes(q.toLowerCase());
      return mc && mq;
    });
  }, [q, cat, language]);
  const toggleArticle = (cardId: string) => {
    setExpandedCard((current) => (current === cardId ? null : cardId));
  };

  return (
    <>
      <PageHeader eyebrow={text.blogPage.eyebrow} title={<>{text.blogPage.title} <span className="text-gradient">{text.blogPage.gradient}</span>.</>}>
        {text.blogPage.intro}
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">{text.blogPage.featured}</h2>
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
                labels={text.blogPage}
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
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={text.blogPage.search} className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-primary/50" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setCat(null)} className={`rounded-full border px-3 py-1 text-xs transition-colors ${cat === null ? "border-primary/60 bg-primary/15 text-foreground" : "border-white/10 text-muted-foreground hover:border-white/20"}`}>{text.blogPage.all}</button>
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
                labels={text.blogPage}
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
type BlogLabels = (typeof dictionary)["en"]["blogPage"] | (typeof dictionary)["uz"]["blogPage"];

const articleUz: Record<string, Pick<Article, "title" | "excerpt" | "content" | "category">> = {
  "Building EatEase: My Diploma Full-Stack Project": {
    title: "EatEase: diplom full-stack loyiham",
    excerpt: "Spring Boot, React, TypeScript va MySQL yordamida ovqat buyurtma tizimini qanday qurganim.",
    content: "EatEase diplom loyiham bo'lib, real frontendni tartibli backend bilan ulashni mashq qilgan muhim ishlarimdan biri edi. Ilovada foydalanuvchi va administrator rollari, menyu boshqaruvi, buyurtma jarayoni va React bilan Spring Boot orasidagi REST API aloqasi bor. Bu loyiha menga kichik UI qarorlari backend data dizayni, validatsiya va barqaror API javoblariga qanchalik bog'liq ekanini ko'rsatdi.",
    category: "Full Stack",
  },
  "What I learned building a MERN blog system": {
    title: "MERN blog tizimidan o'rganganlarim",
    excerpt: "ITransition treningida full-stack blog platforma yaratishdan olgan saboqlarim.",
    content: "MERN blog tizimi autentifikatsiya, protected route, CRUD va database-backed kontent boshqaruvi qanday birlashishini o'rgatgan trening loyihasi edi. MongoDB, Express, React va Node.js bilan post yaratish, user session boshqarish va asosiy flowlarni responsive qilish ustida ishladim. Portfolio real blog postlar nashr qilmasa ham, bu loyiha schema'dan screen'gacha full-stack feature ownership haqida o'ylashni o'rgatdi.",
    category: "Full Stack",
  },
  "Understanding REST APIs in real projects": {
    title: "Real loyihalarda REST API tushunchasi",
    excerpt: "Frontend va backend Spring Boot hamda Node.js ilovalarida REST orqali qanday muloqot qiladi.",
    content: "REST API menga endpointlarni faqat o'qigandan ko'ra real project flow ichida ishlatganimda aniqroq bo'ldi. Reactdan request yuborish, loading va error holatlarini boshqarish, backend javoblarini validatsiya qilish va Spring Boot yoki Express controller logikasini tartiblashni mashq qildim. API aslida ilova qismlari orasidagi shartnoma ekanini tushundim.",
    category: "Backend",
  },
  "My experience learning Java Persistence (JPA)": {
    title: "Java Persistence (JPA) o'rganish tajribam",
    excerpt: "ORM Java backendda database bilan ishlashni qanday soddalashtirgani.",
    content: "JPA Java ilovalari relational database bilan har bir query'ni qo'lda yozmasdan qanday ishlashini tushunishimga yordam berdi. Entity, relationship, repository va service-layer logic yaratishni, keyin ularni REST endpointlarga ulashni mashq qildim. Eng foydali tomoni ORM qayerda tezlik berishini va qayerda data modeling, join, transaction va query performance haqida ehtiyotkor o'ylash kerakligini ko'rish bo'ldi.",
    category: "Backend",
  },
  "From training to real projects: my developer journey": {
    title: "Treningdan real loyihalargacha: dasturchilik yo'lim",
    excerpt: "ITransition treningi full-stack developmentga o'tishimga qanday yordam berdi.",
    content: "Full-stack developmentga yo'lim trening, internship va amaliy loyihalar orqali shakllandi. ITransition menga JavaScript, React, Node.js, autentifikatsiya va CRUD ilovalar bo'yicha kuchli asos berdi, keyingi ishlar esa bu bilimlarni realroq UI va API muammolarida qo'llashga yordam berdi. Hali ham o'rganyapman, lekin har bir loyiha complete feature yaratish, mavjud kodni o'qish va user experience'ni yaxshilashda ishonchimni oshirdi.",
    category: "Career",
  },
};

function ArticleCard({
  article,
  expanded,
  featured = false,
  labels,
  onToggle,
}: {
  article: Article;
  expanded: boolean;
  featured?: boolean;
  labels: BlogLabels;
  onToggle: () => void;
}) {
  const { language } = useLanguage();
  const translated = language === "uz" ? articleUz[article.title] : null;
  const title = translated?.title ?? article.title;
  const excerpt = translated?.excerpt ?? article.excerpt;
  const content = translated?.content ?? article.content;
  const category = translated?.category ?? article.category;

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
            {category}
          </span>
          <span className="shrink-0 font-mono text-muted-foreground">{article.date}</span>
        </div>
        <h3 className={`mt-4 font-display font-semibold transition-colors group-hover:text-primary ${featured ? "text-2xl tracking-tight" : "text-lg"}`}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
        <div className="mt-4 flex-1 overflow-hidden">
          <p className={`text-sm leading-6 text-muted-foreground transition-all duration-300 ${expanded ? "max-h-96" : "line-clamp-3 max-h-[4.5rem]"}`}>
            {content}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {article.minutes} {featured ? labels.minRead : labels.min}
          </span>
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-3 py-1 text-primary transition-colors hover:border-primary/60 hover:bg-primary/10"
            aria-expanded={expanded}
          >
            {expanded ? labels.less : labels.more}
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>
    </article>
  );
}
