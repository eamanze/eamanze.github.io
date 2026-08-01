import { useState } from "react";
import { FileText, Github, Network } from "lucide-react";
import { PROJECTS, PROJECT_FILTERS } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = PROJECTS.filter((project) => filter === "All" || project.categories.includes(filter));

  return (
    <Section id="projects" ariaLabel="Projects" className="bg-surface/40">
      <SectionHeading
        eyebrow="Projects"
        title="Platform, reliability and security engineering in practice"
        description="Selected work spanning AIOps, AWS cloud engineering, infrastructure as code, Kubernetes delivery and operational process design."
      />

      <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-all",
              filter === item
                ? "border-primary/50 bg-primary/15 text-foreground"
                : "border-border bg-surface-2/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
            )}
          >
            {item}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal
            as="article"
            key={project.number}
            delay={index * 60}
            className="glass-card flex flex-col overflow-hidden transition-transform hover:-translate-y-1.5"
          >
            <div className="relative h-28 border-b border-border" style={{ background: "var(--gradient-panel)" }}>
              <span
                aria-hidden
                className="absolute inset-0 grid-backdrop opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-between px-6">
                <span className="font-display text-5xl font-bold text-foreground/15">{project.number}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-cyan">{project.category}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <p className="mt-4 rounded-xl border border-cyan/25 bg-cyan/5 p-3 text-sm leading-relaxed">
                <span className="font-medium text-cyan">Outcome: </span>
                <span className="text-muted-foreground">{project.outcome}</span>
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 pt-1">
                <a
                  href="https://github.com/eamanze"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/40"
                >
                  <Github className="size-3.5" aria-hidden />
                  GitHub
                </a>
                <a
                  href="https://github.com/eamanze"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/40"
                >
                  <FileText className="size-3.5" aria-hidden />
                  Case Study
                </a>
                {project.hasDiagram ? (
                  <a
                    href="https://github.com/eamanze"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/40"
                  >
                    <Network className="size-3.5" aria-hidden />
                    Architecture Diagram
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}