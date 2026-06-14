import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade" />
      <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[420px]">
        <div className="mx-auto h-full max-w-2xl bg-gradient-to-b from-primary/25 via-secondary/10 to-transparent opacity-60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">// {eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        {children ? <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{children}</p> : null}
      </div>
    </section>
  );
}
