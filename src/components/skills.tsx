import { useState } from "react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(SKILL_GROUPS[0]!.name);
  const group = SKILL_GROUPS.find((item) => item.name === active) ?? SKILL_GROUPS[0]!;
  const ActiveIcon = group.icon;

  return (
    <Section id="skills" ariaLabel="Skills and expertise">
      <SectionHeading
        eyebrow="Skills and expertise"
        title="A command centre of cloud, delivery and reliability capability"
        description="Filter by discipline to see the tools and practices used day to day across platform engineering and operations."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[16rem_1fr]">
        <Reveal>
          <div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {SKILL_GROUPS.map(({ name, icon: Icon }) => (
              <button
                key={name}
                role="tab"
                type="button"
                aria-selected={active === name}
                onClick={() => setActive(name)}
                className={cn(
                  "flex shrink-0 items-center gap-2.5 rounded-xl border px-4 py-2.5 text-left text-sm transition-all",
                  active === name
                    ? "border-primary/50 bg-primary/12 text-foreground shadow-[var(--glow-soft)]"
                    : "border-border bg-surface-2/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
                )}
              >
                <Icon className="size-4 shrink-0 text-cyan" aria-hidden />
                <span className="whitespace-nowrap lg:whitespace-normal">{name}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80} className="glass-card p-7">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-cyan">
              <ActiveIcon className="size-5" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold">{group.name}</h3>
            <span className="ml-auto font-mono text-xs text-muted-foreground">{group.skills.length} skills</span>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {group.skills.map((skill, index) => (
              <li
                key={skill}
                style={{ animationDelay: `${index * 30}ms` }}
                className="rounded-full border border-border bg-surface-2/60 px-3.5 py-1.5 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50 hover:text-foreground motion-safe:animate-reveal"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}