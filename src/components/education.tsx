import { GraduationCap } from "lucide-react";
import { APPROACH } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";

export function Education() {
  return (
    <Section id="education" ariaLabel="Education and professional approach">
      <SectionHeading eyebrow="Education" title="Academic foundation" />
      <Reveal className="glass-card mx-auto mt-10 flex max-w-2xl items-start gap-4 p-7">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-cyan">
          <GraduationCap className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-lg font-semibold">Higher National Diploma in Computer Science</h3>
          <p className="mt-1 text-sm text-muted-foreground">The Polytechnic, Ibadan, Oyo State</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-cyan">2013–2018</p>
        </div>
      </Reveal>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Professional approach"
          title="Engineering Beyond Deployment"
          description="How secure delivery, reliable operations, controlled change and Agile improvement work together in practice."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {APPROACH.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 80} className="glass-card p-7 transition-transform hover:-translate-y-1">
              <span className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-cyan">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}