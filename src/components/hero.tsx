import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, Terminal } from "lucide-react";
import portrait from "@/assets/emeka-portrait.jpg";
import { HERO_HIGHLIGHTS, HERO_STATUS_CARDS, PROFILE } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 lg:pt-36 lg:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-reveal">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan sm:text-sm">{PROFILE.tagline}</p>
          <h1 className="mt-5 text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
            Building <span className="text-gradient">Secure, Reliable</span> and Scalable Cloud Platforms
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I’m Emeka Edward Amanze, a DevOps, DevSecOps, SRE and Cloud Engineer specialising in secure AWS
            infrastructure, infrastructure automation, CI/CD, Kubernetes, observability, incident management and
            production reliability.
          </p>
          <p className="mt-4 max-w-xl border-l-2 border-cyan/50 pl-4 text-base leading-relaxed text-foreground/90">
            I design cloud platforms that are secure, scalable, observable and easy for engineering teams to operate.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]"
            >
              View My Projects
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan/50"
            >
              <Mail className="size-4" aria-hidden />
              Contact Me
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-1.5 px-2 py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-cyan hover:underline"
            >
              <Download className="size-3.5" aria-hidden />
              Download Résumé
            </a>
          </div>

          <ul className="mt-9 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {HERO_HIGHLIGHTS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Icon className="size-4 shrink-0 text-cyan" aria-hidden />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface-2/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <Linkedin className="size-4" aria-hidden />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface-2/60 text-muted-foreground transition-colors hover:border-primary/50 hover:text-cyan"
            >
              <Github className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -m-8 rounded-full border border-primary/20 motion-safe:animate-orbit"
            style={{ borderStyle: "dashed" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-6 -m-2 rounded-full border border-cyan/15"
          />
          <div className="relative glass-card glow-ring overflow-hidden p-2">
            <img
              src={portrait}
              alt="Portrait of Emeka Edward Amanze, DevOps, DevSecOps, SRE and Cloud Engineer"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <div className="pointer-events-none absolute inset-x-2 bottom-2 rounded-xl border border-border bg-background/80 px-3 py-2 backdrop-blur-md">
              <p className="flex items-center gap-2 font-mono text-[11px] leading-snug text-muted-foreground">
                <span className="size-2 shrink-0 rounded-full bg-chart-4 motion-safe:animate-pulse-dot" aria-hidden />
                Available for Cloud, DevOps, SRE and DevSecOps opportunities
              </p>
            </div>
          </div>

          <div
            className="glass-card glow-soft absolute -left-4 top-10 hidden w-40 gap-2 p-3 motion-safe:animate-float sm:grid"
            aria-hidden
          >
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <Terminal className="size-3 text-cyan" /> pipeline
            </p>
            {HERO_STATUS_CARDS.slice(0, 2).map((card) => (
              <p key={card.label} className="text-[11px] text-muted-foreground">
                {card.label}: <span className="font-medium text-foreground">{card.value}</span>
              </p>
            ))}
          </div>
          <div
            className="glass-card glow-soft absolute -right-4 bottom-16 hidden w-40 gap-2 p-3 motion-safe:animate-float sm:grid"
            style={{ animationDelay: "1.4s" }}
            aria-hidden
          >
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="size-3 text-cyan" /> platform
            </p>
            {HERO_STATUS_CARDS.slice(2).map((card) => (
              <p key={card.label} className="text-[11px] text-muted-foreground">
                {card.label}: <span className="font-medium text-foreground">{card.value}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}