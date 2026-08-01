import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";

export function Services() {
  return (
    <Section id="services" ariaLabel="Services">
      <SectionHeading
        eyebrow="Services"
        title="Engagements built around secure delivery and reliable operations"
        description="Consulting, engineering and enablement for teams modernising cloud platforms and software delivery."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, description, items, tech, icon: Icon }, index) => (
          <Reveal
            as="article"
            key={title}
            delay={index * 70}
            className="glass-card flex flex-col p-6 transition-transform hover:-translate-y-1"
          >
            <span className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-cyan">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-cyan" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2 pt-1">
              {tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="glass-card glow-ring mt-10 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
        <p className="text-base font-medium">
          Need help improving your cloud platform or software delivery process? Let’s discuss your requirements.
        </p>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--glow-primary)] sm:ml-auto"
        >
          Start a conversation
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </Reveal>
    </Section>
  );
}