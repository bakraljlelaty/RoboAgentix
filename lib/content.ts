/**
 * RoboAgentix — central content model.
 * All marketing copy lives here so pages stay structural.
 */

// Canonical site origin. Defined in its own module (./site) because this file
// declares `const process` (the delivery steps) below, which would shadow the
// Node global.
export { siteUrl } from "./site";

export const site = {
  name: "RoboAgentix",
  legalName: "RoboAgentix For Software Development",
  domain: "roboagentix.ai",
  tagline: "AI & custom software development",
  description:
    "RoboAgentix is an AI technology and custom software development company in Doha, Qatar — building AI agents, intelligent automation, and custom software for organizations across Qatar, the GCC, and internationally.",
  email: "contact@roboagentix.ai",
  phone: "+974 3127 6894",
  whatsapp: "97431276894",
  hq: "Doha, Qatar",
  locations: ["Doha"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type IconKey =
  | "platform"
  | "app"
  | "ai"
  | "agent"
  | "process"
  | "transform"
  | "shield"
  | "node"
  | "flow"
  | "scale";

export interface Service {
  slug: string;
  icon: IconKey;
  name: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: "platform",
    name: "Custom Software Development",
    tagline: "Bespoke platforms and products, engineered to last.",
    summary:
      "Custom software built around how your organization actually works — from internal platforms to customer-facing products. Architected for security, scale, and change, and delivered to production.",
    capabilities: [
      "Product & platform architecture",
      "Secure, maintainable codebases",
      "Domain-driven design",
      "Automated testing & CI/CD",
      "Documentation & clean handover",
    ],
    deliverables: [
      "Technical architecture",
      "Production application",
      "Source & documentation",
    ],
  },
  {
    slug: "ai-agents",
    icon: "agent",
    name: "AI Agents & Multi-Agent Systems",
    tagline: "Autonomous agents that execute work end to end.",
    summary:
      "We design and build AI agents that plan, act across your systems, and escalate to people when judgment is required — grounded in your data and policies, with a full audit trail.",
    capabilities: [
      "Single- & multi-agent orchestration",
      "Tool, API & system integration",
      "Grounding, guardrails & evaluation",
      "Approval & escalation gates",
      "Logging, replay & oversight",
    ],
    deliverables: [
      "Agent design & build",
      "Orchestration layer",
      "Oversight console",
    ],
  },
  {
    slug: "intelligent-automation-rpa",
    icon: "process",
    name: "Intelligent Automation & RPA",
    tagline: "Automate the repeatable — with intelligence in the loop.",
    summary:
      "We map the work, remove the friction, and automate it — combining RPA, document intelligence, and decisioning to compress cycle times while keeping people in control of exceptions.",
    capabilities: [
      "Process discovery & re-engineering",
      "RPA & workflow automation",
      "Document intelligence & extraction",
      "Straight-through processing",
      "Exception handling with oversight",
    ],
    deliverables: [
      "Process blueprint",
      "Automation suite",
      "Operational dashboards",
    ],
  },
  {
    slug: "mobile-applications",
    icon: "app",
    name: "Mobile Applications",
    tagline: "Native-quality apps for iOS and Android.",
    summary:
      "Customer- and employee-facing mobile apps with the craft of a consumer product — fast, accessible, and built to integrate cleanly with your systems.",
    capabilities: [
      "iOS, Android & cross-platform",
      "Product & UX design",
      "Offline-first & real-time",
      "Secure API integration",
      "App store delivery",
    ],
    deliverables: ["App design", "Published apps", "Release pipeline"],
  },
  {
    slug: "enterprise-web-applications",
    icon: "node",
    name: "Enterprise Web Applications",
    tagline: "Web platforms built for real operational load.",
    summary:
      "Web applications and portals engineered for scale, security, and accessibility — from customer portals to internal operations platforms.",
    capabilities: [
      "React & Next.js front-ends",
      "Scalable back-end services",
      "Role-based access & audit",
      "Accessibility to WCAG 2.2 AA",
      "Performance & Core Web Vitals",
    ],
    deliverables: ["Design system", "Web platform", "Analytics & QA"],
  },
  {
    slug: "ai-ml-solutions",
    icon: "ai",
    name: "AI & Machine-Learning Solutions",
    tagline: "Production AI: retrieval, reasoning, and decisioning.",
    summary:
      "We move AI from demo to dependable — retrieval-grounded systems, evaluation harnesses, and guardrails that make model behavior auditable and safe for real work.",
    capabilities: [
      "Retrieval-augmented generation (RAG)",
      "Evaluation, grounding & guardrails",
      "Model selection & private deployment",
      "Human-in-the-loop workflows",
      "Model observability",
    ],
    deliverables: ["Eval harness", "Grounded AI service", "Governance pack"],
  },
  {
    slug: "system-api-integrations",
    icon: "flow",
    name: "System & API Integrations",
    tagline: "Connect the systems your business runs on.",
    summary:
      "We integrate applications, data, and third-party services into a reliable fabric — so information flows cleanly across your estate.",
    capabilities: [
      "API design & development",
      "Third-party & SaaS integration",
      "Event-driven & real-time data",
      "Legacy system connectivity",
      "Monitoring & reliability",
    ],
    deliverables: [
      "Integration architecture",
      "APIs & connectors",
      "Monitoring & docs",
    ],
  },
  {
    slug: "cloud-solutions",
    icon: "scale",
    name: "Cloud Solutions",
    tagline: "Cloud foundations built for scale and control.",
    summary:
      "Cloud architecture, migration, and operations — on Azure, AWS, and beyond — with cost, security, and data residency under control.",
    capabilities: [
      "Cloud architecture & landing zones",
      "Migration & modernization",
      "Infrastructure as code",
      "Security & cost management (FinOps)",
      "Observability & SRE",
    ],
    deliverables: ["Cloud architecture", "Migration & setup", "Runbooks & handover"],
  },
  {
    slug: "digital-transformation",
    icon: "transform",
    name: "Digital-Transformation Consulting",
    tagline: "A pragmatic path from legacy to modern.",
    summary:
      "Strategy and delivery that de-risks change — assessing your estate, prioritizing the opportunities, and modernizing in increments that deliver value in quarters, not years.",
    capabilities: [
      "Assessment & roadmap",
      "Incremental modernization",
      "Operating-model & enablement",
      "Data migration & integrity",
      "Change management",
    ],
    deliverables: ["Transformation roadmap", "Modern platform", "Enablement program"],
  },
];

export interface Industry {
  name: string;
  blurb: string;
}

export const industries: Industry[] = [
  {
    name: "Government & Public Sector",
    blurb: "Citizen services, digital platforms, and accountable automation.",
  },
  {
    name: "Enterprises",
    blurb: "Shared platforms, integrations, and automation across large organizations.",
  },
  {
    name: "Healthcare",
    blurb: "Clinical and administrative workflows with patient-safe systems.",
  },
  {
    name: "Financial Services",
    blurb: "Risk, compliance, and intelligent document processing.",
  },
  {
    name: "Construction",
    blurb: "Project controls, field operations, and back-office automation.",
  },
  {
    name: "Retail",
    blurb: "Commerce platforms, operations, and customer experience.",
  },
  {
    name: "Startups",
    blurb: "From MVP to scale — product engineering and applied AI.",
  },
];

export const valueProps: { title: string; desc: string }[] = [
  {
    title: "Grounded & governed",
    desc: "AI that's policy-bound, auditable, and explainable by design.",
  },
  {
    title: "Security by default",
    desc: "Least-privilege access, audit trails, and data residency you control.",
  },
  {
    title: "Engineering rigor",
    desc: "Tested, reviewed, and built to enterprise standards — end to end.",
  },
  {
    title: "Built to depend on",
    desc: "Engineered for regulated and mission-critical environments.",
  },
];

/** Technologies and areas of expertise — not partnerships. */
export const technologies = [
  "React",
  "Python",
  "OpenAI",
  "UiPath",
  "Microsoft Azure",
  "SAP",
  "API & cloud integrations",
];

export interface Step {
  k: string;
  title: string;
  desc: string;
}

export const process: Step[] = [
  {
    k: "01",
    title: "Discover",
    desc: "We map your systems, constraints, and the outcomes that matter — then size the opportunity with evidence, not assumptions.",
  },
  {
    k: "02",
    title: "Architect",
    desc: "A reference architecture and delivery plan that engineers for security, scale, and the regulatory reality of your sector.",
  },
  {
    k: "03",
    title: "Build & integrate",
    desc: "Senior teams ship in short cycles, integrating with your estate and proving value in production, not slideware.",
  },
  {
    k: "04",
    title: "Operate & scale",
    desc: "We run what we build with SRE discipline and continuous evaluation, then transfer capability to your teams.",
  },
];

export interface Value {
  title: string;
  desc: string;
}

export const values: Value[] = [
  {
    title: "Security is the default",
    desc: "Least-privilege access, full audit trails, and data residency you control — engineered in from the first commit.",
  },
  {
    title: "Engineering rigor",
    desc: "Senior teams, tested code, and architectures that survive contact with scale, audits, and the next decade.",
  },
  {
    title: "Outcomes over output",
    desc: "We measure success in cycle time, risk reduced, and value delivered — not the size of the deck.",
  },
  {
    title: "Accountable autonomy",
    desc: "Every agent action is logged, replayable, and governed. Automation you can explain to a regulator.",
  },
];

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  services: string[];
  year: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "national-health-claims-automation",
    client: "National Health System",
    sector: "Healthcare",
    title: "Agentic claims & prior-authorization automation",
    summary:
      "An agent fleet that reads, validates, and adjudicates claims with clinicians in the loop — cutting turnaround from weeks to hours.",
    challenge:
      "A national payer processed millions of claims a year through manual review, with weeks-long backlogs, inconsistent decisions, and rising appeals. Every automation attempt had stalled on auditability and clinical safety.",
    approach: [
      "Deployed Agent Core to orchestrate intake, extraction, eligibility, and adjudication agents.",
      "Grounded every decision in policy with retrieval and citations, and routed edge cases to clinicians.",
      "Built a full replay and audit console so every automated decision is explainable.",
    ],
    results: [
      { value: "78%", label: "Faster turnaround" },
      { value: "92%", label: "Straight-through processing" },
      { value: "−61%", label: "Appeal rate" },
    ],
    services: ["Agentic Automation", "AI-Powered Solutions", "Intelligent Process Automation"],
    year: "2025",
  },
  {
    slug: "tier-one-bank-trade-finance",
    client: "Tier-1 Bank",
    sector: "Financial Services",
    title: "Intelligent document processing for trade finance",
    summary:
      "Document intelligence and decisioning that compresses trade-finance review while strengthening compliance controls.",
    challenge:
      "Trade-finance operations depended on manual review of thousands of unstructured documents per day, creating cost, delay, and compliance exposure across multiple jurisdictions.",
    approach: [
      "Built a document-intelligence pipeline for extraction, classification, and discrepancy detection.",
      "Added policy-grounded decisioning with mandatory human sign-off on high-risk cases.",
      "Integrated with core banking and sanctions screening for end-to-end straight-through processing.",
    ],
    results: [
      { value: "5×", label: "Throughput per analyst" },
      { value: "−40%", label: "Processing cost" },
      { value: "100%", label: "Decisions audited" },
    ],
    services: ["Intelligent Process Automation", "AI-Powered Solutions", "Enterprise Software"],
    year: "2025",
  },
  {
    slug: "government-citizen-services",
    client: "Government Ministry",
    sector: "Government",
    title: "A unified citizen digital-services platform",
    summary:
      "A sovereign, accessible platform that brought dozens of public services into one trusted experience for millions of citizens.",
    challenge:
      "Citizens navigated dozens of disconnected portals with inconsistent identity, accessibility gaps, and no shared data foundation — eroding trust and overloading call centers.",
    approach: [
      "Delivered a unified platform with a shared design system and national identity integration.",
      "Re-engineered top services for accessibility to WCAG 2.2 AA in Arabic and English.",
      "Stood up a sovereign cloud landing zone with full data residency and audit.",
    ],
    results: [
      { value: "4M+", label: "Citizens served" },
      { value: "120+", label: "Services unified" },
      { value: "−45%", label: "Call-center volume" },
    ],
    services: ["Digital Transformation", "Web & Mobile Applications", "Enterprise Software"],
    year: "2024",
  },
];

/** The capabilities that make up the Agent Core platform. */
export const agentCoreCapabilities = [
  {
    title: "Orchestration",
    desc: "A control plane that coordinates fleets of specialized agents across your systems.",
  },
  {
    title: "Grounding",
    desc: "Every action is grounded in your policies and data, with citations and evaluation.",
  },
  {
    title: "Governance",
    desc: "Approval gates, least-privilege access, and human escalation built into the flow.",
  },
  {
    title: "Observability",
    desc: "Deterministic logging and replay — see, audit, and explain every decision.",
  },
];
