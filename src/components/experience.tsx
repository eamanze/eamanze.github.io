import { useState } from "react";
import { Building2, ChevronDown, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";

function ExperienceItem({ job }: { job: (typeof EXPERIENCE)[number] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? job.achievements : job.achievements.slice(0, 5);

  return (
    <li className="relative pl-10">
      <span aria-hidden className="absolute left-[9px] top-3 size-3 rounded-full border-2 border-primary bg-background" />
      <div className="glass-card p-6 transition-transform hover:-translate-y-1">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan">{job.period}</p>
        <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
        <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Building2 className="size-3.5" aria-hidden />
            {job.company}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden />
            {job.location}
          </span>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/90">{job.summary}</p>

        <ul className="mt-4 space-y-2.5">
          {visible.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
              {item}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
        >
          {expanded ? "View Less" : `View More (${job.achievements.length - visible.length})`}
          <ChevronDown className={`size-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden />
        </button>

        <ul className="mt-5 flex flex-wrap gap-2">
          {job.tech.map((tech) => (
            <li key={tech} className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Work experience" className="bg-surface/40">
      <SectionHeading
        eyebrow="Experience"
        title="Work history across cloud platforms and engineering enablement"
      />
      <ol className="relative mt-14 space-y-8 before:absolute before:left-3.5 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
        {EXPERIENCE.map((job, index) => (
          <Reveal as="li" key={job.company} delay={index * 90} className="list-none">
            <ol className="list-none">
              <ExperienceItem job={job} />
            </ol>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}