import { ABOUT_FOCUS, PRINCIPLES } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";

export function About() {
  return (
    <Section id="about" ariaLabel="About Emeka Edward Amanze">
      <SectionHeading
        eyebrow="About"
        title="Cloud and platform engineering with operational discipline"
        description="Emeka Edward Amanze is a DevOps, DevSecOps, SRE and Cloud Engineer specialising in secure AWS infrastructure, automation, Agile delivery, observability, incident and change management, CI/CD and production reliability."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass-card p-7">
          <h3 className="text-lg font-semibold">Professional summary</h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              He designs and operates cloud platforms that are secure, scalable, observable and easy for engineering
              teams to use. His work spans infrastructure as code, Kubernetes, CI/CD, incident command, change
              enablement, cloud cost optimisation and DevSecOps controls.
            </p>
            <h4 className="pt-2 font-display text-base font-semibold text-foreground">How I work</h4>
            <p>
              Emeka brings structure to high-pressure operations by triaging alerts, coordinating responders,
              maintaining stakeholder communications and driving blameless post-incident reviews.
            </p>
            <p>
              For production changes, he applies peer review, documented risk and impact assessments, approval trails,
              maintenance windows, validation checks and tested rollback plans. This makes software delivery safer
              without introducing unnecessary operational friction.
            </p>
            <p>
              He works effectively within Agile, cross-functional teams using Scrum and Kanban. He contributes to sprint
              planning, backlog refinement, daily stand-ups, sprint reviews and retrospectives while tracking work,
              blockers and acceptance criteria through Jira and Confluence.
            </p>
          </div>
        </Reveal>

        <Reveal className="glass-card p-7" delay={90}>
          <h3 className="text-lg font-semibold">What I focus on</h3>
          <ul className="mt-5 space-y-4">
            {ABOUT_FOCUS.map(({ label, text, icon: Icon }) => (
              <li key={label} className="flex gap-3">
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-cyan">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block text-sm text-muted-foreground">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PRINCIPLES.map(({ title, text, icon: Icon }, index) => (
          <Reveal key={title} delay={index * 80} className="glass-card group p-6 transition-transform hover:-translate-y-1">
            <Icon className="size-5 text-cyan" aria-hidden />
            <h3 className="mt-4 font-display text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}