import { Github, Linkedin, Mail, Send, ArrowUp } from "lucide-react";
import { TransitionLink } from "@/components/site/PageTransition";
import { useLanguage } from "#/lib/i18n";

export function Footer() {
  const { text } = useLanguage();

  return (
    <footer className="relative z-10 mt-32 border-t border-white/5 bg-surface-1/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-xs font-bold text-background">FD</span>
            <span className="font-display font-semibold">farrukh<span className="text-primary">.dev</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            {text.contactCta.body}
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/farmix2003", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/farrukh-tugonov2003", label: "LinkedIn" },
              { Icon: Send, href: "https://t.me/farrukhtugonov", label: "Telegram" },
              { Icon: Mail, href: "mailto:tugonovfarrukh7@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.02] text-muted-foreground transition-all hover:border-primary/50 hover:text-primary">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Navigate</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><TransitionLink to="/about" className="hover:text-foreground">{text.nav.about}</TransitionLink></li>
            <li><TransitionLink to="/projects" className="hover:text-foreground">{text.nav.projects}</TransitionLink></li>
            <li><TransitionLink to="/blog" className="hover:text-foreground">{text.nav.blog}</TransitionLink></li>
            <li><TransitionLink to="/contact" className="hover:text-foreground">{text.nav.contact}</TransitionLink></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Elsewhere</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="#">Resume / CV</a></li>
            <li><a className="hover:text-foreground" href="#">Uses</a></li>
            <li><a className="hover:text-foreground" href="#">RSS</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Farrukh Tugonov. Built with React, TanStack & Tailwind.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1.5 hover:border-primary/40 hover:text-foreground">
            <ArrowUp size={12} /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
