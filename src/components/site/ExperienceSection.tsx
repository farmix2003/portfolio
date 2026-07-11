import { experience } from "@/lib/portfolio-data";
import { useLanguage } from "#/lib/i18n";
import Reveal from "./Reveal";

const experienceUz: Record<string, { role: string; period: string; points: string[] }> = {
  "EPAM Systems": {
    role: "Java Developer Lab Intern",
    period: "Hozir",
    points: [
      "Strukturali internship dasturi orqali Java va Spring Boot asoslarini o'rganyapman.",
      "Oddiy e-commerce ilovasi uchun RESTful API kabi amaliy loyihalar quryapman.",
      "Git, unit testing va asosiy DevOps amaliyotlari bo'yicha tajriba orttiryapman.",
    ],
  },
  "BIGIT": {
    role: "Junior Frontend Developer",
    period: "2025 — 2025",
    points: [
      "Moliyaviy platforma (MyXvest) uchun responsive UI komponentlarni ishlab chiqdim va qo'llab-quvvatladim.",
      "Mobile va desktop ko'rinishlarda UI/UX muammolarini tuzatdim.",
      "React frontendni backend API bilan bog'lab, data flow va state managementni yaxshiladim.",
    ],
  },
  "ITransition": {
    role: "Software Development Trainee",
    period: "2024 — 2025",
    points: [
      "JavaScript, React va zamonaviy web development bo'yicha intensiv treningni yakunladim.",
      "React frontend va Node.js / Java backend yordamida full-stack amaliy loyihalar qurdim.",
      "REST API, autentifikatsiya va database integratsiyasi asoslarini amalda o'rgandim.",
    ],
  },
  "Personal Projects / Freelance Practice": {
    role: "Full Stack Developer (Learning Phase)",
    period: "2023 — 2024",
    points: [
      "React, Java va Spring Boot yordamida bir nechta kichik full-stack ilovalar yaratdim.",
      "REST API, autentifikatsiya tizimlari va CRUD ilovalar qurishni mashq qildim.",
      "Problem solving, clean code va system design asoslarini rivojlantirishga e'tibor qaratdim.",
    ],
  },
};

export function ExperienceSection() {
  const { language, text } = useLanguage();

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.experience.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {text.experience.title} <span className="text-gradient">{text.experience.gradient}</span>.
        </h2>
      </Reveal>
      <div className="relative mt-14 pl-6 md:pl-12">
        <div className="absolute left-1.5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/30 to-transparent md:left-3" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              {(() => {
                const translated = language === "uz" ? experienceUz[e.company] : null;
                const role = translated?.role ?? e.role;
                const period = translated?.period ?? e.period;
                const points = translated?.points ?? e.points;

                return (
              <div className="relative">
                <span className="absolute -left-5.5 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)] md:-left-[34px]" />
                <div className="glass rounded-2xl p-6 hover-lift">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{e.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
                );
              })()}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
