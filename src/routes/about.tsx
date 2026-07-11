import { ExperienceSection } from "#/components/site/ExperienceSection";
import { PageHeader } from "#/components/site/PageHeader";
import Reveal from "#/components/site/Reveal";
import { useLanguage } from "#/lib/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Lightbulb, Rocket } from "lucide-react";

const strengths = [
  {
    Icon: Rocket,
    enTitle: "Frontend Development",
    uzTitle: "Frontend dasturlash",
    enText: "Building responsive and user-friendly interfaces with React, TypeScript, and modern frontend tools.",
    uzText: "React, TypeScript va zamonaviy frontend vositalari bilan responsive va qulay interfeyslar yaratish.",
  },
  {
    Icon: Lightbulb,
    enTitle: "Java Backend Development",
    uzTitle: "Java backend dasturlash",
    enText: "Developing REST APIs and backend services using Java, Spring Boot, and relational databases.",
    uzText: "Java, Spring Boot va relational database yordamida REST API va backend servislar yaratish.",
  },
  {
    Icon: Award,
    enTitle: "Continuous Learning",
    uzTitle: "Doimiy o'rganish",
    enText: "Always exploring new technologies, development practices, and ways to improve my craft.",
    uzText: "Yangi texnologiyalar, amaliyotlar va o'z ustimda ishlash yo'llarini doimiy o'rganish.",
  },
  {
    Icon: Heart,
    enTitle: "Problem Solving",
    uzTitle: "Muammo yechish",
    enText: "Enjoy breaking down complex problems into practical and maintainable solutions.",
    uzText: "Murakkab muammolarni amaliy va qo'llab-quvvatlash oson bo'lgan yechimlarga ajratishni yoqtiraman.",
  },
];

const About = () => {
  const { language, text } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={text.aboutPage.eyebrow}
        title={<>{text.aboutPage.title} <span className="text-gradient">{text.aboutPage.gradient}</span>.</>}
      >
        {text.aboutPage.intro}
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              {text.aboutPage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">{text.aboutPage.education}</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className="text-foreground">{text.aboutPage.degree}</div>
                  <div className="text-muted-foreground">{text.aboutPage.university}</div>
                </li>
              </ul>

              <h3 className="mt-8 font-display text-lg font-semibold">{text.aboutPage.interests}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {text.aboutPage.interestItems.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{text.aboutPage.strengths}</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.enTitle} delay={i * 70}>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <s.Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{language === "en" ? s.enTitle : s.uzTitle}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{language === "en" ? s.enText : s.uzText}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ExperienceSection />
    </>
  );
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Farrukh Tugonov" },
      { name: "description", content: "Career journey, strengths, education and personal interests of full stack engineer Farrukh Tugonov" },
      { property: "og:title", content: "About - Farrukh Tugonov" },
      { property: "og:description", content: "The story, strengths and stack behind farrukh.dev." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
