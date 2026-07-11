import { projects } from "@/lib/portfolio-data";
import { ArrowRight } from "lucide-react";
import { TransitionLink } from "@/components/site/PageTransition";
import { useLanguage } from "#/lib/i18n";
import Reveal from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const { text } = useLanguage();

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.featuredProjects.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {text.featuredProjects.title} <span className="text-gradient">{text.featuredProjects.gradient}</span>.
            </h2>
          </div>
          <TransitionLink to="/projects" className="inline-flex items-center gap-1 text-sm text-primary transition-all hover:gap-2">
            {text.common.viewAll} <ArrowRight size={14} />
          </TransitionLink>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
