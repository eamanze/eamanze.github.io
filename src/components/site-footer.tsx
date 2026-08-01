import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Theme } from "@/hooks/use-theme";

export function SiteFooter({ theme, toggle }: { theme: Theme; toggle: () => void }) {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold">{PROFILE.name}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-cyan">{PROFILE.tagline}</p>
            <p className="mt-1 text-sm text-muted-foreground">{PROFILE.location}</p>
          </div>
          <div className="flex items-center gap-2 sm:ml-auto">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <Github className="size-4" aria-hidden />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label={`Email ${PROFILE.name}`}
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <Mail className="size-4" aria-hidden />
            </a>
            <ThemeToggle theme={theme} toggle={toggle} />
            <a
              href="#home"
              aria-label="Back to top"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <ArrowUp className="size-4" aria-hidden />
            </a>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}