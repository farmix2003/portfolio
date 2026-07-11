import { useEffect, useState } from "react";
import { TransitionLink } from "@/components/site/PageTransition";
import { useLanguage } from "#/lib/i18n";

const nav = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
  { to: "/blog", key: "blog" },
  { to: "/contact", key: "contact" },
] as const;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, text } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong" : "glass"}`}>
          <TransitionLink to="/" className="group flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br from-primary to-secondary text-xs font-bold text-background animate-pulse-glow">
              FD
            </span>
            <span className="font-display text-sm font-semibold tracking-tight">farmix<span className="text-primary">.dev</span></span>
          </TransitionLink>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <TransitionLink
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-foreground bg-white/5" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="rounded-lg px-3 py-1.5 text-sm transition-colors hover:bg-white/5"
              >
                {text.nav[n.key]}
              </TransitionLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageButtons language={language} setLanguage={setLanguage} />
            <TransitionLink
              to="/contact"
              className="hidden rounded-lg bg-linear-to-r from-primary to-secondary px-4 py-1.5 text-sm font-medium text-background shadow-[0_0_30px_-5px_var(--primary)] transition-transform hover:scale-[1.03] md:inline-block"
            >
              {text.nav.hireMe}
            </TransitionLink>
            <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="rounded-lg border border-white/10 p-2 md:hidden">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
            {nav.map((n) => (
              <TransitionLink key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                {text.nav[n.key]}
              </TransitionLink>
            ))}
            <LanguageButtons language={language} setLanguage={setLanguage} mobile />
          </div>
        )}
      </div>
    </header>
  );
};

function LanguageButtons({
  language,
  mobile = false,
  setLanguage,
}: {
  language: "en" | "uz";
  mobile?: boolean;
  setLanguage: (language: "en" | "uz") => void;
}) {
  return (
    <div className={`${mobile ? "mt-1 grid grid-cols-2 border-t border-white/10 pt-2" : "hidden md:flex"} gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-0.5`}>
      {(["en", "uz"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
            language === code ? "bg-primary text-background" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Header;
