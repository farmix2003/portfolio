import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, certifications } from "@/lib/portfolio-data";
import { BadgeCheck } from "lucide-react";
import { useLanguage } from "#/lib/i18n";
import Reveal from "#/components/site/Reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Farrukh Tugonov" },
      { name: "description", content: "Selected projects by full stack engineer Farrukh Tugonov." },
      { property: "og:title", content: "Projects - Farrukh Tugonov" },
      { property: "og:description", content: "Selected full-stack, frontend, and backend projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { text } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={text.projectsPage.eyebrow} title={<>{text.projectsPage.title} <span className="text-gradient">{text.projectsPage.gradient}</span>.</>}>
        {text.projectsPage.intro}
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <Reveal>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {text.projectsPage.body}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.projectsPage.certificationsEyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{text.projectsPage.certificationsTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <a href={c.verify} className="block glass rounded-2xl p-5 hover-lift">
                <BadgeCheck className="text-primary" size={20} />
                <h3 className="mt-3 text-sm font-semibold">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.org}</p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">{text.projectsPage.issued} {c.date}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
