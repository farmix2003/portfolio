import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";

export function ContactCTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// Let's connect</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Have an idea or opportunity?<br />
              <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              I'm a Full Stack Developer focused on React, Java, and Spring Boot.
I enjoy building clean, user-friendly applications and continuously improving my craft.
           Feel free to reach out if you'd like to collaborate. 
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-medium text-background shadow-[0_0_40px_-8px_var(--primary)] transition-all hover:scale-[1.03]">
                Reach me<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="mailto:tugonovfarrukh7@gmail.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium transition-all hover:border-primary/50">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
