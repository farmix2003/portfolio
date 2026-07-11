import { Code2, Database, Server, Wrench } from "lucide-react";
import { skills } from "#/lib/portfolio-data";
import { useLanguage } from "#/lib/i18n";
import Reveal from "./Reveal";

const ICONS = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
} as const;

const SkillSection = () => {
  const { text } = useLanguage();

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.skills.eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {text.skills.title} <span className="text-gradient">{text.skills.gradient}</span>.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(skills) as Array<keyof typeof skills>).map((cat, idx) => {
          const Icon = ICONS[cat];
          return (
            <Reveal key={cat} delay={idx * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 hover-lift">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-10" />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-lg font-semibold">{text.skills.categories[cat]}</h3>
                <ul className="mt-4 space-y-3">
                  {skills[cat].map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="font-mono text-muted-foreground">{skill.level}</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${skill.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default SkillSection;
