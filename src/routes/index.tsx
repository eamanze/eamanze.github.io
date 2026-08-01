import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Highlights } from "@/components/highlights";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { useTheme } from "@/hooks/use-theme";

const TITLE = "Emeka Edward Amanze | DevOps, DevSecOps, SRE and AWS Cloud Engineer";
const DESCRIPTION =
  "Portfolio of Emeka Edward Amanze, a DevOps, DevSecOps, SRE and AWS Cloud Engineer specialising in secure cloud infrastructure, CI/CD, Kubernetes, observability, incident management and platform reliability.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.emekaamanze.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Emeka Edward Amanze",
          jobTitle: "DevOps, DevSecOps, SRE and Cloud Engineer",
          description: DESCRIPTION,
          address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          email: "mailto:amanzeedward@yahoo.com",
          telephone: "+2348060077553",
          url: "https://www.emekaamanze.com/",
          sameAs: [
            "https://www.linkedin.com/in/emeka-amanze-31116214a",
            "https://github.com/eamanze",
          ],
          knowsAbout: [
            "AWS",
            "Terraform",
            "Kubernetes",
            "CI/CD",
            "DevSecOps",
            "Site Reliability Engineering",
            "Observability",
            "Incident Management",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <SiteNav theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
      <SiteFooter theme={theme} toggle={toggle} />
    </div>
  );
}
