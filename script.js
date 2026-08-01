/*
  EDIT THIS OBJECT to personalise the entire portfolio.
  The page renders most content automatically from this data.
*/
const portfolio = {
  name: "Emeka Amanze",
  email: "amannzeedward@yahoo.com",
  location: "Lagos, Nigeria · Open to remote opportunities",
  availability: "Available for DevOps, SRE & Cloud Engineering roles",
  headline: "DevOps / DevSecOps / SRE / Cloud Engineer specialising in secure AWS infrastructure, automation, Agile delivery, observability, incident and change management, CI/CD and production reliability.",
  roles: [
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Engineer",
    "Platform Engineer",
    "DevSecOps Engineer"
  ],
  social: [
    { label: "GitHub", icon: "⌘", url: "https://github.com/eamanze" },
    { label: "LinkedIn", icon: "in", url: "https://www.linkedin.com/in/emeka-amanze-31116214a" },
    { label: "Email", icon: "@", url: "mailto:amannzeedward@yahoo.com" }
  ],
  metrics: [
    { value: "30%", label: "Reduction in MTTR" },
    { value: "25%", label: "Reduction in pre-production vulnerabilities" },
    { value: "99.9%", label: "Reliability mindset" },
    { value: "∞", label: "Continuous improvement" }
  ],
  about: [
    "I design and operate cloud platforms that are secure, scalable, observable and easy for engineering teams to use. My work spans infrastructure as code, CI/CD, Kubernetes, incident command, change enablement, cloud cost optimisation and DevSecOps controls.",
    "I bring structure to high-pressure operations: triaging alerts, coordinating responders, maintaining stakeholder communications and driving blameless post-incident reviews. For production changes, I use peer review, documented risk and impact assessments, approval trails, maintenance windows, validation checks and tested rollback plans to make delivery safer without creating unnecessary friction.",
    "I work in Agile, cross-functional teams using Scrum and Kanban practices. I break platform outcomes into deliverable increments, contribute to sprint planning and backlog refinement, surface blockers in daily stand-ups, track work and acceptance criteria in Jira, demonstrate completed outcomes and turn retrospective feedback into measurable improvements."
  ],
  principles: [
    { icon: "⚙", title: "Automate deliberately", text: "Remove toil while keeping systems understandable and recoverable." },
    { icon: "◉", title: "Observe everything", text: "Use metrics, logs, traces and meaningful SLOs to guide decisions." },
    { icon: "⌁", title: "Design for failure", text: "Build graceful degradation, clear incident ownership, tested recovery and safe rollback paths." },
    { icon: "✦", title: "Enable teams", text: "Create paved roads that improve developer speed and confidence." }
  ],
  skills: [
    { icon: "☁", title: "Cloud Platforms", items: ["AWS", "Azure", "EC2", "ECS", "EKS", "Lambda", "S3", "RDS", "CloudFront"] },
    { icon: "◇", title: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Ansible", "Terragrunt", "Packer"] },
    { icon: "↻", title: "CI/CD & Automation", items: ["Jenkins", "GitHub Actions", "GitLab CI", "Argo CD", "Python", "Bash"] },
    { icon: "⬡", title: "Containers & Platforms", items: ["Docker", "Kubernetes", "Helm", "Kustomize", "Nginx", "Linux"] },
    { icon: "◉", title: "Observability & SRE", items: ["CloudWatch", "Prometheus", "Grafana", "ELK", "OpenTelemetry", "SLOs"] },
    { icon: "⌁", title: "Security & Governance", items: ["IAM", "DevSecOps", "Secrets Management", "SAST/DAST", "Trivy", "Policy as Code"] },
    { icon: "⚠", title: "Incident & Change Management", items: ["PagerDuty", "Jira Service Management", "Slack", "Confluence", "Incident Command", "On-call & Escalation", "RCA & Postmortems", "Change Risk Assessment", "CAB", "Rollback Planning"] },
    { icon: "◎", title: "Agile Delivery & Collaboration", items: ["Agile", "Scrum", "Kanban", "Jira", "Confluence", "Sprint Planning", "Backlog Refinement", "Daily Stand-ups", "Sprint Reviews", "Retrospectives", "User Stories", "Cross-functional Delivery"] }
  ],
  certifications: [
    { badge: "AWS", title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "Add issue date", credential: "#", colour: "#ffbd59" },
    { badge: "K8s", title: "Certified Kubernetes Administrator", issuer: "Cloud Native Computing Foundation", date: "Add issue date", credential: "#", colour: "#63e6ff" },
    { badge: "TF", title: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", date: "Add issue date", credential: "#", colour: "#a995ff" }
  ],
  experience: [
    {
      role: "DevOps / DevSecOps / SRE Engineer",
      company: "Cloudhight Consulting Limited",
      date: "Sep 2020 – Present",
      summary: "Architect secure cloud infrastructure, automate software delivery and improve production reliability across AWS environments.",
      achievements: [
        "Built infrastructure-as-code patterns for repeatable cloud environments.",
        "Implemented CI/CD and security controls that moved vulnerability detection earlier in delivery.",
        "Improved observability and incident response through actionable monitoring, PagerDuty escalation paths and automated alert enrichment.",
        "Coordinated incidents through Slack response channels, tracked ownership and follow-up actions in Jira, and documented runbooks, timelines and blameless postmortems in Confluence.",
        "Applied change-management controls including impact and risk assessment, peer and CAB approvals, maintenance-window communication, implementation validation and tested rollback plans.",
        "Delivered infrastructure, automation and reliability improvements iteratively within Agile teams, contributing to sprint planning, backlog refinement, daily stand-ups, reviews and retrospectives.",
        "Partnered with developers, security engineers and stakeholders to define Jira user stories and acceptance criteria, manage dependencies and turn operational feedback into prioritised backlog improvements."
      ]
    },
    {
      role: "DevOps Instructor & Technical Mentor",
      company: "MotivaLogic Academy",
      date: "January 2019 – August 2020",
      summary: "Teach practical DevOps, cloud and SRE engineering through project-based learning and technical mentoring.",
      achievements: [
        "Designed hands-on learning pathways covering AWS, Terraform, CI/CD, Docker, Kubernetes and observability.",
        "Facilitated engineering reviews, project delivery and interview preparation.",
        "Helped learners translate technical knowledge into production-oriented engineering practice."
      ]
    }
  ],
  projects: [
    {
      title: "AWS AIOps Anomaly Detection Platform",
      category: "AIOps",
      description: "Terraform- and Jenkins-driven platform that detects CPU and Nginx anomalies, creates incidents and safely schedules remediation.",
      impact: "Outcome: reduced manual detection and created a controlled, auditable remediation path.",
      stack: ["Terraform", "Jenkins", "AWS Lambda", "SageMaker", "DynamoDB", "SQS", "CloudWatch"],
      github: "https://github.com/eamanze/AIOPs_Platform_New",
      demo: "#"
    },
    {
      title: "Serverless Edge Stack",
      category: "Cloud Engineering / DevOps",
      description: "Production-ready AWS static website platform.",
      impact: "Outcome: accelerate global performance with CloudFront edge caching and compression. Reduce latency and cut origin traffic by using separate caching policies for HTML and static files.",
      stack: ["Terraform", "S3", "CloudFront", "Route 53", "ACM", "GitHub Actions"],
      github: "https://github.com/eamanze/serverless-edge-stack",
      demo: "#"
    },
    {
      title: "Image Processing Application",
      category: "Cloud Engineering / DevOps",
      description: "Complete cloud-native image processing application demonstrating event-driven architecture, serverless automation and secure delivery.",
      impact: "Outcome: secure, automated image processing with scalable event-driven execution, faster deployments, lower operational overhead and stronger cloud governance.",
      stack: ["Terraform", "Python", "AWS Lambda", "Amazon S3", "Amazon API Gateway", "Amazon CloudFront", "AWS IAM", "Amazon SQS", "Amazon CloudWatch", "GitHub Actions", "GitHub OIDC", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/eamanze/Image-processing-app",
      demo: "#"
    },
    {
      title: "Multi-Environment IaC Orchestrator",
      category: "Infrastructure as Code",
      description: "Tool for managing and deploying infrastructure-as-code across multiple environments with consistent policies and configurations.",
      impact: "Outcome: streamlined deployment processes, reduced configuration drift, and improved environment consistency.",
      stack: ["Terraform", "Ansible", "Amazon S3", "Amazon DynamoDB", "AWS IAM",  "Nginx", "Bash Scripting"],
      github: "https://github.com/eamanze/multi-env-Iac-orchestrator",
      demo: "#"
    },
    {
      title: "Secure Kubernetes Delivery Platform",
      category: "Platform",
      description: "Reusable Kubernetes delivery workflow with GitOps deployment, policy checks, image scanning and environment promotion.",
      impact: "Outcome: consistent deployments, faster rollback and stronger release governance.",
      stack: ["Kubernetes", "Helm", "Argo CD", "GitHub Actions", "Trivy", "OPA"],
      github: "#",
      demo: "#"
    },
    {
      title: "AWS Landing Zone Automation",
      category: "Cloud",
      description: "Production-minded AWS multi-account landing zone using Terraform, Organizations, CloudTrail, Config, GuardDuty and Security Hub.",
      impact: "Outcome: repeatable account onboarding and improved governance across environments.",
      stack: ["AWS Organizations", "Terraform", "IAM", "CloudTrail", "Config", "Trivy", "Checkov", "Security Hub"],
      github: "https://github.com/eamanze/aws-landing-zone-automation.git",
      demo: "#"
    },
    {
      title: "AWS SLO Error Budget Dashboard",
      category: "SRE",
      description: "Implementation of an SRE monitoring stack using Docker, Prometheus, Grafana, and Node Exporter to track service-level objectives, reliability metrics, and error budgets.",
      impact: "Outcome: faster incident detection, measurable reliability through SLOs and error budgets, and clearer service health visibility.",
      stack: ["AWS", "Terraform", "Docker", "Python", "Prometheus", "Grafana", "Blackbox Exporter", "Alertmanager", "GitHub Actions", "Bash Scripting"],
      github: "https://github.com/eamanze/aws-slo-error-budget-dashboard.git",
      demo: "#"
    },
    {
      title: "Incident Response & Change Enablement Workflow",
      category: "Operations",
      description: "End-to-end operating model connecting monitoring alerts to PagerDuty on-call escalation, Slack incident coordination, Jira ownership and Confluence runbooks and postmortems. Production changes follow documented risk assessment, approvals, validation and rollback gates, while corrective actions are refined and delivered through an Agile backlog.",
      impact: "Outcome: clearer command and communications during incidents, auditable change decisions, accountable follow-up actions and a continuous-improvement loop from postmortems through sprint planning, delivery and retrospective review.",
      stack: ["PagerDuty", "Jira Service Management", "Slack", "Confluence", "CloudWatch", "Grafana", "Scrum", "Kanban", "Runbooks", "RCA", "CAB", "Change Calendar"],
      github: "#",
      demo: "#"
    }
  ]
};

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

function setProfileContent() {
  $("#profile-name").textContent = portfolio.name;
  $("#footer-name").textContent = portfolio.name;
  $("#hero-summary").textContent = portfolio.headline;
  $("#current-year").textContent = new Date().getFullYear();
  document.title = `${portfolio.name} · DevOps · SRE · Cloud Engineer`;

  $("#social-links").innerHTML = portfolio.social.map(item => `
    <a class="social-link" href="${item.url}" target="_blank" rel="noreferrer" aria-label="${item.label}">
      <span aria-hidden="true">${item.icon}</span>${item.label}
    </a>
  `).join("");

  $("#metrics-grid").innerHTML = portfolio.metrics.map(item => `
    <article class="metric-card">
      <span class="metric-value">${item.value}</span>
      <span class="metric-label">${item.label}</span>
    </article>
  `).join("");

  $("#about-content").innerHTML = portfolio.about.map(paragraph => `<p>${paragraph}</p>`).join("");

  $("#principles-grid").innerHTML = portfolio.principles.map(item => `
    <article class="principle-card">
      <div class="principle-icon" aria-hidden="true">${item.icon}</div>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </article>
  `).join("");

  $("#skills-grid").innerHTML = portfolio.skills.map((group, index) => `
    <article class="skill-card reveal" style="transition-delay:${Math.min(index * 0.07, 0.28)}s">
      <h3><span aria-hidden="true">${group.icon}</span>${group.title}</h3>
      <div class="skill-tags">${group.items.map(skill => `<span class="skill-tag">${skill}</span>`).join("")}</div>
    </article>
  `).join("");

  $("#certification-grid").innerHTML = portfolio.certifications.map((cert, index) => `
    <article class="cert-card reveal" style="--cert-color:${cert.colour};transition-delay:${Math.min(index * 0.08, 0.24)}s">
      <div class="cert-icon">${cert.badge}</div>
      <h3>${cert.title}</h3>
      <p>${cert.issuer}</p>
      <div class="cert-meta">
        <span>${cert.date}</span>
        <a class="cert-link" href="${cert.credential}" target="_blank" rel="noreferrer">Credential ↗</a>
      </div>
    </article>
  `).join("");

  $("#experience-timeline").innerHTML = portfolio.experience.map((job, index) => `
    <article class="timeline-item reveal" style="transition-delay:${Math.min(index * 0.08, 0.24)}s">
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <div class="timeline-top">
          <div>
            <h3>${job.role}</h3>
            <div class="timeline-company">${job.company}</div>
          </div>
          <span class="timeline-date">${job.date}</span>
        </div>
        <p>${job.summary}</p>
        <ul class="timeline-achievements">${job.achievements.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  renderProjects();

  $("#contact-details").innerHTML = `
    <div class="contact-item"><span aria-hidden="true">@</span><a href="mailto:${portfolio.email}">${portfolio.email}</a></div>
    <div class="contact-item"><span aria-hidden="true">⌖</span><span>${portfolio.location}</span></div>
    <div class="contact-item"><span aria-hidden="true">✓</span><span>${portfolio.availability}</span></div>
  `;
}

function renderProjects() {
  const categories = ["All", ...new Set(portfolio.projects.map(project => project.category))];
  $("#project-filters").innerHTML = categories.map((category, index) => `
    <button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-filter="${category}">${category}</button>
  `).join("");

  $("#projects-grid").innerHTML = portfolio.projects.map((project, index) => `
    <article class="project-card reveal" data-category="${project.category}" style="transition-delay:${Math.min(index * 0.07, 0.28)}s">
      <div class="project-top">
        <span class="project-number">PROJECT_${String(index + 1).padStart(2, "0")}</span>
        <span class="project-category">${project.category}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p class="project-impact">${project.impact}</p>
      <div class="project-stack">${project.stack.map(item => `<span>#${item.replaceAll(" ", "-")}</span>`).join("")}</div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noreferrer">Source code ↗</a>
        <a href="${project.demo}" target="_blank" rel="noreferrer">Case study ↗</a>
      </div>
    </article>
  `).join("");

  $$(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      $$(".project-card").forEach(card => {
        card.classList.toggle("hidden", filter !== "All" && card.dataset.category !== filter);
      });
    });
  });
}

function setupNavigation() {
  const header = $("#site-header");
  const toggle = $("#nav-toggle");
  const menu = $("#nav-menu");

  const closeMenu = () => {
    menu.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  $$(".nav-link").forEach(link => link.addEventListener("click", closeMenu));

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
  }, { passive: true });

  const sections = $$('main section[id]');
  const navLinks = $$(".nav-link");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-42% 0px -50% 0px", threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

function setupRevealAnimations() {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(element => revealObserver.observe(element));
}

function setupTypingEffect() {
  const target = $("#typing-text");
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const role = portfolio.roles[roleIndex];
    target.textContent = deleting ? role.slice(0, --charIndex) : role.slice(0, ++charIndex);

    let delay = deleting ? 45 : 80;
    if (!deleting && charIndex === role.length) {
      deleting = true;
      delay = 1400;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % portfolio.roles.length;
      delay = 300;
    }
    window.setTimeout(type, delay);
  }
  type();
}

function setupTheme() {
  const themeButton = $("#theme-toggle");
  const icon = $(".theme-icon", themeButton);
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const useLight = savedTheme ? savedTheme === "light" : prefersLight;

  document.body.classList.toggle("light-theme", useLight);
  icon.textContent = useLight ? "☾" : "☼";

  themeButton.addEventListener("click", () => {
    const light = document.body.classList.toggle("light-theme");
    icon.textContent = light ? "☾" : "☼";
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  });
}

function setupContactForm() {
  $("#contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(form.get("subject"));
    const body = encodeURIComponent(`Hello ${portfolio.name},\n\n${form.get("message")}\n\nFrom: ${form.get("name")}\nEmail: ${form.get("email")}`);
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  });
}

setProfileContent();
setupNavigation();
setupRevealAnimations();
setupTypingEffect();
setupTheme();
setupContactForm();
