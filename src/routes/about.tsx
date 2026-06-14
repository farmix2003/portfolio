import { ExperienceSection } from "#/components/site/ExperienceSection";
import { PageHeader } from "#/components/site/PageHeader"
import Reveal from "#/components/site/Reveal"
import { createFileRoute } from "@tanstack/react-router"
import { Award, Heart, Lightbulb, Rocket } from "lucide-react"


const strengths = [
  {
    Icon: Rocket,
    title: "Frontend Development",
    text: "Building responsive and user-friendly interfaces with React, TypeScript, and modern frontend tools.",
  },
  {
    Icon: Lightbulb,
    title: "Java Backend Development",
    text: "Developing REST APIs and backend services using Java, Spring Boot, and relational databases.",
  },
  {
    Icon: Award,
    title: "Continuous Learning",
    text: "Always exploring new technologies, development practices, and ways to improve my craft.",
  },
  {
    Icon: Heart,
    title: "Problem Solving",
    text: "Enjoy breaking down complex problems into practical and maintainable solutions.",
  },
];
const About = () => {
  return (
    <>
     <PageHeader
  eyebrow="About"
  title={
    <>
      A journey of <span className="text-gradient">learning and building</span>.
    </>
  }
>
  From building my first web pages to developing full-stack applications with
  React and Spring Boot, I've always been fascinated by turning ideas into
  software that people can use.
</PageHeader>
<section className="mx-auto max-w-6xl px-4 py-16">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
  <p>
    I'm a Full Stack Developer with a strong focus on React, TypeScript,
    Java, and Spring Boot. I enjoy building modern web applications that
    combine intuitive user experiences with reliable backend systems.
  </p>

  <p>
    My software engineering journey began during my studies at the European
    University of Lefke, where I discovered a passion for web development.
    What started with building simple interfaces quickly evolved into
    developing complete applications with databases, REST APIs, and
    authentication systems.
  </p>

  <p>
    Through professional experience at BIGIT, training at ITransition, and
    projects such as EatEase and a full-stack MERN blog platform, I've gained
    hands-on experience across the entire development lifecycle. I'm
    constantly learning, exploring new technologies, and looking for
    opportunities to grow as a developer.
  </p>
</div>
        </Reveal>
        <Reveal delay={150}>
            <div className="glass rounded-2xl p-6">
  <h3 className="font-display text-lg font-semibold">Education</h3>

  <ul className="mt-4 space-y-4 text-sm">
    <li>
      <div className="text-foreground">
        Bachelor of Software Engineering
      </div>
      <div className="text-muted-foreground">
        European University of Lefke · 2021 — 2025
      </div>
    </li>
  </ul>

  <h3 className="mt-8 font-display text-lg font-semibold">Interests</h3>

  <div className="mt-3 flex flex-wrap gap-2">
    {[
      "Traveling",
      "Technology",
      "Football",
      "Business",
      "Startups",
      "Software Architecture",
    ].map((t) => (
      <span
        key={t}
        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/80"
      >
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
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Strengths</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <s.Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ExperienceSection />
    </>
  )
}

export const Route = createFileRoute('/about') ({
   head: ()=>{
    {
        meta:[
            {title:"About - Farrukh Tugonov"},
            {name: "description", content: "Career journey, strengths, education and personal interests of full stack engineer Farrukh Tugonov"},
            { property: "og:title", content: "About — Farrukh Tugonov" },
      { property: "og:description", content: "The story, strengths and stack behind farrukh.dev." },
      { property: "og:url", content: "/about" },
        ]
    links: [{ rel: "canonical", href: "/about" }
        ]
    }
   },
   component: About
})
