import {
  Cloud,
  Code2,
  GitBranch,
  GraduationCap,
  Layers,
  LineChart,
  Lock,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Boxes,
  Activity,
  RefreshCcw,
} from "lucide-react";

export const PROFILE = {
  name: "Emeka Edward Amanze",
  initials: "EA",
  tagline: "DevOps • DevSecOps • SRE • Cloud Engineering",
  location: "Lagos, Nigeria",
  email: "amanzeedward@yahoo.com",
  phone: "+234 806 007 7553",
  phoneHref: "tel:+2348060077553",
  linkedin: "https://www.linkedin.com/in/emeka-amanze-31116214a",
  github: "https://github.com/eamanze",
  resume: "/emeka-edward-amanze-resume.pdf",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_HIGHLIGHTS = [
  { label: "AWS Cloud Engineering", icon: Cloud },
  { label: "Infrastructure as Code", icon: Code2 },
  { label: "CI/CD and GitOps", icon: GitBranch },
  { label: "Kubernetes Platforms", icon: Boxes },
  { label: "Observability and SRE", icon: LineChart },
  { label: "DevSecOps Automation", icon: ShieldCheck },
];

export const HERO_STATUS_CARDS = [
  { label: "Deployment Status", value: "Healthy" },
  { label: "Platform Reliability", value: "99.9%" },
  { label: "Infrastructure", value: "Automated" },
  { label: "Security Controls", value: "Enabled" },
];

export const ABOUT_FOCUS = [
  { label: "Security", icon: Lock, text: "DevSecOps controls embedded in pipelines and infrastructure." },
  { label: "Automation", icon: Workflow, text: "Infrastructure as code, CI/CD and self-service platforms." },
  { label: "Reliability", icon: Activity, text: "Observability, SLOs, error budgets and incident command." },
  { label: "Collaboration", icon: Users, text: "Agile delivery with Scrum, Kanban, Jira and Confluence." },
  { label: "Continuous improvement", icon: RefreshCcw, text: "Blameless reviews feeding a prioritised backlog." },
];

export const PRINCIPLES = [
  {
    title: "Automate Repetitive Work",
    icon: Workflow,
    text: "Manual toil is codified into pipelines, modules and runbooks so teams ship with less friction.",
  },
  {
    title: "Design for Reliability",
    icon: Activity,
    text: "Reliability targets, observability and automated recovery are designed in, not bolted on.",
  },
  {
    title: "Embed Security Early",
    icon: ShieldCheck,
    text: "Scanning, secrets management and policy as code run on every change, not just before release.",
  },
  {
    title: "Improve Through Feedback",
    icon: Sparkles,
    text: "Incident findings and platform gaps become tracked, prioritised delivery work.",
  },
];

export const STATS = [
  { value: 45, suffix: "%", label: "reduction in potential downtime", context: "Proactive anomaly detection and automated remediation" },
  { value: 30, suffix: "%", label: "reduction in incident resolution time", context: "Multi-agent operational workflows" },
  { value: 50, suffix: "%", label: "faster incident detection", context: "Improved observability and alerting coverage" },
  { value: 30, suffix: "%", label: "reduction in mean time to recovery", context: "Runbooks plus automated response paths" },
  { value: 25, suffix: "%", label: "reduction in pre-production vulnerabilities", context: "SAST and DAST integrated into delivery pipelines" },
  { value: 30, suffix: "%", label: "faster deployment cycles", context: "End-to-end CI/CD pipeline design" },
  { value: 95, suffix: "%", label: "student satisfaction", context: "Instructor-led DevOps and cloud training" },
  { value: 40, suffix: "%", label: "improvement in certification pass rates", context: "Curriculum, labs and mentoring programmes" },
  { value: 50, suffix: "%", label: "reduction in onboarding time", context: "Documented platform standards for new engineers" },
];

export const SKILL_GROUPS = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "EC2", "ECS", "EKS", "Lambda", "S3", "RDS", "CloudFront"],
  },
  {
    name: "Infrastructure as Code",
    icon: Code2,
    skills: ["Terraform", "Terragrunt", "CloudFormation", "Ansible", "Packer"],
  },
  {
    name: "CI/CD and Automation",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Argo CD", "Python", "Bash"],
  },
  {
    name: "Containers and Platforms",
    icon: Boxes,
    skills: ["Docker", "Kubernetes", "Helm", "Kustomize", "Nginx", "Linux", "Istio"],
  },
  {
    name: "Observability and SRE",
    icon: LineChart,
    skills: [
      "CloudWatch",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "OpenTelemetry",
      "SLIs",
      "SLOs",
      "Error Budgets",
      "Alerting",
      "Production Readiness",
    ],
  },
  {
    name: "Security and Governance",
    icon: ShieldCheck,
    skills: [
      "AWS IAM",
      "DevSecOps",
      "Secrets Management",
      "SAST",
      "DAST",
      "Software Composition Analysis",
      "Trivy",
      "SonarQube",
      "OWASP ZAP",
      "Policy as Code",
      "Checkov",
      "tfsec",
      "OPA",
    ],
  },
  {
    name: "Incident and Change Management",
    icon: ServerCog,
    skills: [
      "PagerDuty",
      "Jira Service Management",
      "Slack",
      "Confluence",
      "Incident Command",
      "On-call and Escalation",
      "Root Cause Analysis",
      "Blameless Postmortems",
      "Change Risk Assessment",
      "Change Advisory Board",
      "Validation and Rollback Planning",
    ],
  },
  {
    name: "Agile Delivery and Collaboration",
    icon: Users,
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Jira",
      "Confluence",
      "Sprint Planning",
      "Backlog Refinement",
      "Daily Stand-ups",
      "Sprint Reviews",
      "Retrospectives",
      "User Stories",
      "Cross-functional Delivery",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "DevOps/SRE Engineer",
    company: "Cloudhight Consulting Limited",
    location: "Dublin, Ireland",
    period: "September 2020 – Present",
    summary:
      "Design and operate AWS platforms with AIOps-driven detection, secure CI/CD and production reliability practices.",
    achievements: [
      "Architected an AIOps platform using AWS SageMaker, Lambda and CloudWatch to predict and remediate infrastructure anomalies.",
      "Reduced potential downtime by 45% through proactive detection and automated responses using AWS Systems Manager, SNS and Jira.",
      "Engineered CI/CD pipelines using Jenkins and Argo CD.",
      "Integrated SonarQube and OWASP ZAP into delivery pipelines, reducing pre-production vulnerabilities by 25%.",
      "Built multi-agent workflows for monitoring, remediation and notification using event-driven architecture.",
      "Reduced incident resolution time by 30%.",
      "Used Claude Code and GitHub Copilot to improve development speed, reduce boilerplate and promote engineering standards.",
      "Implemented Kubernetes orchestration with Istio and Trivy.",
      "Improved traffic management and security across production clusters.",
      "Designed cost-optimised AWS architectures using Auto Scaling and reserved capacity.",
      "Established monitoring using Prometheus, Grafana and the ELK Stack.",
      "Reduced incident detection time by 50% and mean time to recovery by 30%.",
      "Mentored engineers and coordinated cross-functional teams through Agile ceremonies.",
    ],
    tech: [
      "AWS",
      "Terraform",
      "Jenkins",
      "Argo CD",
      "Kubernetes",
      "Istio",
      "SageMaker",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "Trivy",
      "SonarQube",
    ],
  },
  {
    role: "DevOps Engineer and Instructor",
    company: "MotivaLogic Academy",
    location: "Dublin, Ireland",
    period: "January 2019 – August 2020",
    summary:
      "Built delivery platforms for prototype products while training engineers across two continents on cloud and DevOps practice.",
    achievements: [
      "Designed DevOps architectures for four prototype products.",
      "Established end-to-end CI/CD pipelines that reduced deployment cycles by 30%.",
      "Developed training curricula covering AWS, Terraform, Kubernetes, Docker and Ansible.",
      "Produced more than 15 hours of instructional videos, labs and technical documentation.",
      "Supported more than 40 engineers across two continents.",
      "Delivered instructor-led workshops and practical labs.",
      "Achieved 95% student satisfaction and contributed to a 40% increase in certification pass rates.",
      "Developed Bash and Python automation that reduced environment provisioning from hours to less than 15 minutes.",
      "Integrated Jenkins and Maven into CI pipelines.",
      "Reduced build failures by 25%.",
      "Mentored junior engineers on cloud engineering, Git workflows and infrastructure as code.",
      "Reduced onboarding time for new engineers by 50%.",
    ],
    tech: ["AWS", "Terraform", "Kubernetes", "Docker", "Ansible", "Jenkins", "Maven", "Bash", "Python"],
  },
];

export const SERVICES = [
  {
    title: "DevOps Consulting and Transformation",
    icon: Rocket,
    description:
      "Assess delivery maturity and modernise toolchains so teams ship smaller changes more often, with confidence.",
    items: [
      "DevOps maturity assessments",
      "Transformation roadmaps",
      "CI/CD pipeline design",
      "Jenkins, GitLab CI and Argo CD implementation",
      "Toolchain selection and integration",
      "Legacy workflow modernisation",
      "Cross-functional team enablement",
      "Software delivery optimisation",
    ],
    tech: ["Jenkins", "GitLab CI", "Argo CD", "GitHub Actions"],
  },
  {
    title: "Site Reliability Engineering",
    icon: Activity,
    description:
      "Make reliability measurable with service-level objectives, incident response design and automated recovery.",
    items: [
      "SLI, SLO and error-budget definition",
      "Incident response process design",
      "Production readiness reviews",
      "Post-incident review facilitation",
      "Chaos engineering",
      "Observability implementation",
      "Automated remediation",
      "MTTR reduction",
      "Reliability reporting",
    ],
    tech: ["Prometheus", "Grafana", "OpenTelemetry", "PagerDuty"],
  },
  {
    title: "AWS Cloud Engineering",
    icon: Cloud,
    description:
      "Design secure, scalable AWS foundations with codified environments and disciplined cost management.",
    items: [
      "Secure AWS architecture design",
      "Terraform and CloudFormation implementation",
      "AWS multi-account architecture",
      "AWS Organizations and Control Tower",
      "Serverless architecture",
      "Cloud migration",
      "FinOps and cost optimisation",
      "Resource right-sizing",
      "Scalable and highly available platform design",
    ],
    tech: ["AWS", "Terraform", "CloudFormation", "Control Tower"],
  },
  {
    title: "DevSecOps Engineering",
    icon: ShieldCheck,
    description:
      "Shift security left with automated scanning, secrets hygiene and policy as code across the delivery path.",
    items: [
      "SAST, DAST and SCA integration",
      "Container and infrastructure scanning",
      "Secrets management",
      "Secure credential handling",
      "Policy as Code",
      "Automated compliance validation",
      "Checkov, tfsec, Trivy and SonarQube implementation",
      "Security detection and automated remediation",
    ],
    tech: ["Trivy", "Checkov", "tfsec", "SonarQube", "OPA"],
  },
  {
    title: "Kubernetes and Platform Engineering",
    icon: Boxes,
    description:
      "Build Kubernetes platforms with GitOps delivery, secure workloads and predictable environment promotion.",
    items: [
      "Kubernetes platform implementation",
      "EKS deployment",
      "Helm and Kustomize configuration",
      "GitOps using Argo CD",
      "Secure workload delivery",
      "Service mesh implementation",
      "Environment promotion",
      "Platform standardisation",
    ],
    tech: ["Kubernetes", "EKS", "Helm", "Kustomize", "Argo CD", "Istio"],
  },
  {
    title: "Technical Training and Enablement",
    icon: GraduationCap,
    description:
      "Hands-on training delivered virtually or in person, built around practical labs, real-world scenarios and actionable outcomes.",
    items: [
      "AWS architecture",
      "DevOps on AWS",
      "Kubernetes and Docker",
      "Terraform and infrastructure as code",
      "Jenkins and Argo CD",
      "DevSecOps",
      "SRE and observability",
    ],
    tech: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
  },
];

export const PROJECT_FILTERS = [
  "All",
  "AIOps",
  "Cloud Engineering",
  "DevOps",
  "Infrastructure as Code",
  "Kubernetes",
  "Security",
  "SRE",
  "Operations",
];

export const PROJECTS = [
  {
    number: "01",
    title: "AWS AIOps Anomaly Detection Platform",
    category: "AIOps",
    categories: ["AIOps", "Cloud Engineering", "SRE"],
    description:
      "Terraform- and Jenkins-driven platform that detects CPU and Nginx anomalies, creates operational incidents and safely schedules remediation.",
    outcome: "Reduced manual anomaly detection and created a controlled, auditable remediation path.",
    tech: ["Terraform", "Jenkins", "AWS Lambda", "Amazon SageMaker", "DynamoDB", "SQS", "CloudWatch"],
    hasDiagram: true,
  },
  {
    number: "02",
    title: "Serverless Edge Stack",
    category: "Cloud Engineering and DevOps",
    categories: ["Cloud Engineering", "DevOps", "Infrastructure as Code"],
    description:
      "Production-ready AWS static website platform using edge caching, TLS, DNS automation and continuous delivery.",
    outcome:
      "Improved global performance using CloudFront caching and compression while reducing origin traffic through separate cache policies for HTML and static assets.",
    tech: ["Terraform", "Amazon S3", "CloudFront", "Route 53", "AWS Certificate Manager", "GitHub Actions"],
    hasDiagram: true,
  },
  {
    number: "03",
    title: "Cloud-Native Image Processing Application",
    category: "Cloud Engineering and DevOps",
    categories: ["Cloud Engineering", "DevOps"],
    description: "Event-driven serverless image processing application with secure automated delivery.",
    outcome:
      "Delivered scalable image processing, faster deployments, lower operational overhead and stronger cloud governance.",
    tech: [
      "Terraform",
      "Python",
      "AWS Lambda",
      "Amazon S3",
      "API Gateway",
      "CloudFront",
      "IAM",
      "SQS",
      "CloudWatch",
      "GitHub Actions",
      "GitHub OIDC",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    hasDiagram: true,
  },
  {
    number: "04",
    title: "Multi-Environment IaC Orchestrator",
    category: "Infrastructure as Code",
    categories: ["Infrastructure as Code", "DevOps"],
    description:
      "Tool for managing infrastructure deployments across multiple environments with consistent configuration and policy controls.",
    outcome:
      "Reduced configuration drift, improved environment consistency and streamlined infrastructure deployment.",
    tech: ["Terraform", "Ansible", "Amazon S3", "DynamoDB", "IAM", "Nginx", "Bash"],
    hasDiagram: false,
  },
  {
    number: "05",
    title: "Secure Kubernetes Delivery Platform",
    category: "Platform Engineering",
    categories: ["Kubernetes", "Security", "DevOps"],
    description:
      "Reusable Kubernetes delivery workflow with GitOps, policy validation, container scanning and controlled environment promotion.",
    outcome: "Improved deployment consistency, accelerated rollback and strengthened release governance.",
    tech: ["Kubernetes", "Helm", "Argo CD", "GitHub Actions", "Trivy", "Open Policy Agent"],
    hasDiagram: true,
  },
  {
    number: "06",
    title: "AWS Landing Zone Automation",
    category: "Cloud Security",
    categories: ["Security", "Cloud Engineering", "Infrastructure as Code"],
    description: "Production-focused multi-account AWS landing zone.",
    outcome:
      "Enabled repeatable account onboarding and improved governance across development, testing and production environments.",
    tech: [
      "AWS Organizations",
      "Terraform",
      "IAM",
      "CloudTrail",
      "AWS Config",
      "GuardDuty",
      "Security Hub",
      "Trivy",
      "Checkov",
    ],
    hasDiagram: true,
  },
  {
    number: "07",
    title: "AWS SLO and Error Budget Dashboard",
    category: "SRE",
    categories: ["SRE", "Cloud Engineering"],
    description:
      "Monitoring and reliability platform that tracks service-level objectives, availability metrics and error-budget consumption.",
    outcome:
      "Improved incident detection, created measurable reliability targets and provided clearer service-health visibility.",
    tech: [
      "AWS",
      "Terraform",
      "Docker",
      "Python",
      "Prometheus",
      "Grafana",
      "Blackbox Exporter",
      "Alertmanager",
      "GitHub Actions",
      "Bash",
    ],
    hasDiagram: true,
  },
  {
    number: "08",
    title: "Incident Response and Change Enablement Workflow",
    category: "Operations",
    categories: ["Operations", "SRE"],
    description:
      "Operating model connecting monitoring alerts, on-call escalation, incident communications, service ownership, runbooks, postmortems and production change controls.",
    outcome:
      "Improved incident command, created auditable change decisions, increased accountability and connected postmortem actions to Agile delivery.",
    tech: [
      "PagerDuty",
      "Jira Service Management",
      "Slack",
      "Confluence",
      "CloudWatch",
      "Grafana",
      "Scrum",
      "Kanban",
      "Runbooks",
      "Root Cause Analysis",
      "Change Advisory Board",
      "Change Calendar",
      "Rollback Planning",
    ],
    hasDiagram: false,
  },
];

export const APPROACH = [
  {
    title: "Secure Delivery",
    icon: Lock,
    text: "Security controls should be embedded into pipelines, infrastructure and platform workflows rather than added only at the end.",
  },
  {
    title: "Reliable Operations",
    icon: Activity,
    text: "Platforms should provide measurable reliability through observability, SLOs, error budgets, incident response and automated recovery.",
  },
  {
    title: "Controlled Change",
    icon: Layers,
    text: "Production changes should include peer review, risk assessment, approval trails, validation checks and tested rollback procedures.",
  },
  {
    title: "Agile Improvement",
    icon: RefreshCcw,
    text: "Incident findings, technical debt and platform improvements should feed into a prioritised Agile backlog and be tracked through delivery.",
  },
];

export const SERVICE_OPTIONS = [
  "DevOps Consulting",
  "SRE Consulting",
  "AWS Cloud Engineering",
  "DevSecOps",
  "Kubernetes and Platform Engineering",
  "Technical Training",
  "Employment Opportunity",
  "Other",
];