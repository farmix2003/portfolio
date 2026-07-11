import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Send, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { useLanguage } from "#/lib/i18n";
import Reveal from "#/components/site/Reveal";

const socialLinks = [
  {
    Icon: Mail,
    label: "Email",
    value: "tugonovfarrukh7@gmail.com",
    href: "mailto:tugonovfarrukh7@gmail.com",
    accent: "from-primary to-secondary",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/farrukh-tugonov2003",
    href: "https://linkedin.com/in/farrukh-tugonov2003",
    accent: "from-sky-400 to-primary",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/farmix2003",
    href: "https://github.com/farmix2003",
    accent: "from-zinc-200 to-primary",
  },
  {
    Icon: Send,
    label: "Telegram",
    value: "t.me/farrukhtugonov",
    href: "https://t.me/farrukhtugonov",
    accent: "from-cyan-300 to-secondary",
  },
] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Farrukh Tugonov" },
      { name: "description", content: "Social links and direct contact channels for Farrukh Tugonov." },
      { property: "og:title", content: "Contact - Farrukh Tugonov" },
      { property: "og:description", content: "Connect with Farrukh through email, LinkedIn, GitHub, or Telegram." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { text } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={text.contactPage.eyebrow} title={<>{text.contactPage.title} <span className="text-gradient">{text.contactPage.gradient}</span>.</>}>
        {text.contactPage.intro}
      </PageHeader>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {socialLinks.map(({ Icon, label, value, href, accent }, i) => (
            <Reveal key={label} delay={i * 80}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group relative flex min-h-44 overflow-hidden rounded-2xl glass p-6 hover-lift"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative flex w-full items-start gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-background shadow-[0_0_40px_-12px_var(--primary)]`}>
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
                      <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                    <p className="mt-5 break-words font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                      {value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {text.contactPage.cards[label]}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260}>
          <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{text.contactPage.location}</p>
                <p className="text-sm text-muted-foreground">{text.contactPage.locationValue}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/15 text-secondary">
                <Clock size={18} />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{text.contactPage.response}</p>
                <p className="text-sm text-muted-foreground">{text.contactPage.responseValue}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
