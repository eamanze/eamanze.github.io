import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { toast } from "sonner";
import { PROFILE, SERVICE_OPTIONS } from "@/lib/portfolio-data";
import { Reveal, Section, SectionHeading } from "@/components/section";

type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-input bg-surface-2/50 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    if (get("company_website")) return; // honeypot: silently drop bots

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Please enter a valid email address.";
    if (!get("service")) next.service = "Please select the service you need.";
    if (get("message").length < 20) next.message = "Please provide at least 20 characters of detail.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setSubmitted(true);
    form.reset();
    toast.success("Message sent. Emeka will respond by email shortly.");
  }

  const details = [
    { label: "Name", value: PROFILE.name, icon: User, href: undefined },
    { label: "Location", value: PROFILE.location, icon: MapPin, href: undefined },
    { label: "Email", value: PROFILE.email, icon: Mail, href: `mailto:${PROFILE.email}` },
    { label: "Phone", value: PROFILE.phone, icon: Phone, href: PROFILE.phoneHref },
    { label: "LinkedIn", value: "linkedin.com/in/emeka-amanze", icon: Linkedin, href: PROFILE.linkedin },
    { label: "GitHub", value: "github.com/eamanze", icon: Github, href: PROFILE.github },
  ];

  return (
    <Section id="contact" ariaLabel="Contact" className="bg-surface/40">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build secure, reliable and scalable platforms together"
        description="Available for cloud, DevOps, SRE and DevSecOps engagements, employment opportunities and technical training."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-card p-7">
          <h3 className="text-lg font-semibold">Contact details</h3>
          <ul className="mt-5 space-y-4">
            {details.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-cyan">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="block truncate text-sm font-medium underline-offset-4 transition-colors hover:text-cyan hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="block text-sm font-medium">{value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="glass-card p-7">
          <h3 className="text-lg font-semibold">Send a message</h3>
          <form onSubmit={onSubmit} noValidate className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldClass}
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={fieldClass}
                placeholder="you@company.com"
              />
              {errors.email ? (
                <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium">
                Company or organisation
              </label>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                className={fieldClass}
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-medium">
                Service required
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                className={fieldClass}
              >
                <option value="">Select a service</option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <p id="service-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.service}
                </p>
              ) : null}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={fieldClass}
                placeholder="Tell me about your platform, timeline and goals."
              />
              {errors.message ? (
                <p id="message-error" role="alert" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div aria-hidden className="hidden">
              <label htmlFor="company_website">Leave this field empty</label>
              <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--glow-primary)]"
              >
                <Send className="size-4" aria-hidden />
                Submit
              </button>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {submitted ? "Thank you — your message has been recorded." : "Protected against automated submissions."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}