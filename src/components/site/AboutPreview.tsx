import { useLanguage } from "#/lib/i18n";
import Reveal from "./Reveal";

const tags = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Golang",
  "REST APIs",
  "MySQL",
  "Docker",
  "Continuous Learning",
];

const AboutPreview = () => {
  const { text } = useLanguage();

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.aboutPreview.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            {text.aboutPreview.title} <span className="text-gradient">{text.aboutPreview.gradient}</span>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {text.aboutPreview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutPreview;
