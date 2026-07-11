import { Github, ExternalLink } from "lucide-react";
import type { projects } from "@/lib/portfolio-data";
import { useLanguage } from "#/lib/i18n";

type P = (typeof projects)[number];

const projectUz: Record<string, { title: string; description: string; highlights: string[] }> = {
  "EatEase": {
    title: "EatEase",
    description: "Diplom loyihasi sifatida yaratilgan full-stack ovqat buyurtma platformasi. Rollarga asoslangan kirish, menyu boshqaruvi va buyurtma jarayonlari mavjud.",
    highlights: ["Admin/User autentifikatsiyasi", "Buyurtma boshqaruvi", "REST API integratsiyasi"],
  },
  "Blog Platform (MERN Stack)": {
    title: "Blog Platformasi (MERN Stack)",
    description: "ITransition treningi davomida yaratilgan full-stack blog ilovasi. Foydalanuvchi autentifikatsiyasi, post yaratish va kontent boshqaruvi mavjud.",
    highlights: ["JWT autentifikatsiya", "CRUD blog tizimi", "Responsive zamonaviy UI"],
  },
  "IMDb Clone": {
    title: "IMDb Clone",
    description: "React va tashqi movie API asosida yaratilgan film qidirish ilovasi. Qidiruv, filterlash va film tafsilotlari mavjud.",
    highlights: ["Film qidirish", "API integratsiya", "Dinamik filterlash"],
  },
  "E-Commerce Store": {
    title: "E-Commerce Store",
    description: "Mahsulot qidirish, kategoriya bo'yicha filterlash va savatcha funksiyalariga ega frontend e-commerce ilovasi.",
    highlights: ["Savatcha", "Mahsulot filterlash", "Qidiruv"],
  },
  "Portfolio Website": {
    title: "Portfolio Website",
    description: "TanStack Start, animatsiyali UI va komponentlarga asoslangan arxitektura yordamida yaratilgan zamonaviy portfolio.",
    highlights: ["Zamonaviy UI/UX", "Dark mode", "Komponent arxitekturasi"],
  },
};

export function ProjectCard({ p }: { p: P }) {
  const { language } = useLanguage();
  const translated = language === "uz" ? projectUz[p.title] : null;
  const title = translated?.title ?? p.title;
  const description = translated?.description ?? p.description;
  const highlights = translated?.highlights ?? p.highlights;
  const hasDemo = "demo" in p && Boolean(p.demo);

  return (
    <article className="group relative overflow-hidden rounded-2xl glass hover-lift">
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1.5">
          {highlights.map((h) => (
            <span key={h} className="rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-[11px] text-white backdrop-blur">{h}</span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">{title}</h3>
          <div className="flex gap-1.5 opacity-60 transition-opacity group-hover:opacity-100">
            <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${title} GitHub`} title="GitHub" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:border-primary/50 hover:text-primary"><Github size={14} /></a>
            {hasDemo && (
              <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${title} review`} title="Review" className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 hover:border-primary/50 hover:text-primary"><ExternalLink size={14} /></a>
            )}
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
