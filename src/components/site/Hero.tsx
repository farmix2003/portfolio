import { useEffect, useState } from "react";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";
import { TransitionLink } from "@/components/site/PageTransition";
import { useLanguage } from "#/lib/i18n";

const roles = ["Full Stack Engineer", "Frontend Developer", "Backend Developer"];

function useTyped(words: string[], speed = 70, hold = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), hold);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((x) => x + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, deleting ? 35 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, hold]);

  return text;
}

const Hero = () => {
  const typed = useTyped(roles);
  const { text } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[600px]">
        <div className="mx-auto h-full max-w-3xl bg-gradient-to-b from-primary/30 via-secondary/10 to-transparent opacity-60 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground glass">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {text.hero.available}
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            <span className="block text-foreground">{text.hero.titleTop}</span>
            <span className="block text-gradient animate-gradient">{text.hero.titleGradient}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {text.hero.introName} <span className="text-foreground">{text.hero.name}</span>{" "}
            <span className="font-medium text-primary">
              {typed}
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 bg-primary animate-blink" />
            </span>
            <br />
            {text.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TransitionLink to="/projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-background shadow-[0_0_40px_-8px_var(--primary)] transition-all hover:scale-[1.03] hover:shadow-[0_0_55px_-4px_var(--primary)]">
              {text.hero.viewProjects}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </TransitionLink>
            <TransitionLink to="/contact" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-white/[0.06]">
              <Mail size={16} /> {text.hero.contactMe}
            </TransitionLink>
            <a href="https://github.com/farmix2003" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm text-muted-foreground hover:text-foreground">
              <Github size={16} /> github
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/5 pt-6">
            {text.hero.stats.map(([n, l]) => (
              <div key={l}>
                <dt className="text-2xl font-semibold text-foreground">{n}</dt>
                <dd className="text-xs text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-72 md:w-80">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--secondary),var(--primary))] opacity-80 blur-[2px]" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-[10px] grid place-items-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-surface-2 to-background">
              <div className="text-center">
                <Sparkles className="mx-auto text-primary" size={28} />
                <div className="mt-2 font-display text-3xl font-semibold tracking-tight">FD</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">engineer · developer</div>
              </div>
            </div>
            {[
              { t: "TS", c: "top-2 -left-4", d: "0s" },
              { t: "React", c: "-top-2 right-2", d: "1.2s" },
              { t: "JS", c: "bottom-6 -left-8", d: "0.6s" },
              { t: "PostgreSQL", c: "-bottom-2 right-6", d: "1.8s" },
              { t: "Java", c: "top-1/2 -right-10", d: "2.2s" },
            ].map((x) => (
              <span key={x.t} className={`absolute ${x.c} animate-float rounded-lg border border-white/10 bg-surface-1/80 px-2.5 py-1 text-xs glass`} style={{ animationDelay: x.d }}>
                {x.t}
              </span>
            ))}
          </div>

          <div className="relative mx-auto mt-8 max-w-md overflow-hidden rounded-2xl glass-strong">
            <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">shipping.ts</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
              {`// shipping.ts
export async function deploy() {
  const build = await bundle({ mode: "prod" });
  const env   = await provision("edge");
  return env.publish(build);
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
