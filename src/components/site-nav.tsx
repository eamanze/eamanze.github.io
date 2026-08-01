import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Theme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function SiteNav({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${PROFILE.name} — home`}>
          <span className="grid size-9 place-items-center rounded-xl border border-primary/40 bg-primary/10 font-display text-sm font-bold text-cyan">
            {PROFILE.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">
            Emeka<span className="text-cyan">.</span>Amanze
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2/70 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle theme={theme} toggle={toggle} />
          <a
            href={PROFILE.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/12 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-primary/20 hover:shadow-[var(--glow-primary)] sm:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            Download Résumé
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={PROFILE.resume}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/12 px-4 py-2.5 text-sm font-medium"
              >
                <Download className="size-4" aria-hidden />
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}