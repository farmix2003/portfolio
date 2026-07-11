import { ArrowRight, Mail } from "lucide-react";
import { TransitionLink } from "@/components/site/PageTransition";
import { useLanguage } from "#/lib/i18n";
import Reveal from "./Reveal";

export function ContactCTA() {
  const { text } = useLanguage();

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {text.contactCta.eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {text.contactCta.title}<br />
              <span className="text-gradient">{text.contactCta.gradient}</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{text.contactCta.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <TransitionLink to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-background shadow-[0_0_40px_-8px_var(--primary)] transition-all hover:scale-[1.03]">
                {text.contactCta.reachMe}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </TransitionLink>
              <a href="mailto:tugonovfarrukh7@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition-all hover:border-primary/50">
                <Mail size={16} /> {text.contactCta.email}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
