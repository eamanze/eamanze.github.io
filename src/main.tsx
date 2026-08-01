import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/use-theme";

import "./styles.css";

function App() {
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
      <Toaster />
    </div>
  );
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element was not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
