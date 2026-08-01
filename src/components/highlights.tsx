import { useEffect, useState } from "react";
import { STATS } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";
import { useReveal } from "@/hooks/use-reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-gradient tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function Highlights() {
  return (
    <Section id="highlights" ariaLabel="Professional highlights" className="bg-surface/40">
      <SectionHeading
        eyebrow="Professional highlights"
        title="Measured outcomes from platform and reliability work"
        description="Results delivered across cloud engineering, reliability programmes, secure delivery pipelines and technical enablement."
      />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map((stat, index) => (
          <Reveal as="li" key={stat.label + stat.value} delay={index * 60} className="glass-card p-6">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium">{stat.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.context}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}