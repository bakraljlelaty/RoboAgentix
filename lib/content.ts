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
  domain: "roboagentix.ai",
  tagline: "Enterprise AI & software engineering",
  description:
    "RoboAgentix designs, builds, and operates agentic systems and mission-critical software for governments, healthcare, financial institutions, and large enterprises.",
  email: "contact@roboagentix.ai",
  phone: "+974 4000 0000",
  hq: "Doha, Qatar",
  locations: ["Doha", "Riyadh", "Dubai", "London"],
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
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
    slug: "enterprise-software",
    icon: "platform",
    name: "Enterprise Software",
    tagline: "Mission-critical platforms, engineered to last.",
    summary:
      "Core systems your organization runs on — built for scale, security, and a decade of change. We architect platforms that hold up under regulatory scrutiny and real-world load.",
    capabilities: [
      "Domain-driven platform architecture",
      "High-availability, event-driven systems",
      "Identity, access, and audit by design",
      "Data platforms and integration fabric",
      "Cloud, hybrid, and sovereign deployment",
    ],
    deliverables: [
      "Reference architecture",
      "Production platform",
      "Runbooks & SRE handover",
    ],
  },
  {
    slug: "web-mobile-applications",
    icon: "app",
    name: "Web & Mobile Applications",
    tagline: "Flagship products across web, iOS, and Android.",
    summary:
      "Customer- and employee-facing applications with the craft of a consumer product and the rigor of enterprise software — accessible, fast, and measurable.",
    capabilities: [
      "Product design & design systems",
      "React, Next.js, and native mobile",
      "Offline-first and real-time experiences",
      "Accessibility to WCAG 2.2 AA",
      "Performance budgets and Core Web Vitals",
    ],
    deliverables: ["Design system", "Web & mobile apps", "Analytics & QA suite"],
  },
  {
    slug: "ai-powered-solutions",
    icon: "ai",
    name: "AI-Powered Solutions",
    tagline: "Production AI: retrieval, reasoning, and decisioning.",
    summary:
      "We move AI from demo to dependable. Retrieval-grounded systems, evaluation harnesses, and guardrails that make model behavior auditable and safe for regulated work.",
    capabilities: [
      "Retrieval-augmented generation (RAG)",
      "Evaluation, grounding, and guardrails",
      "Model selection & private deployment",
      "Human-in-the-loop review workflows",
      "Observability for model behavior",
    ],
    deliverables: ["Eval harness", "Grounded AI service", "Governance pack"],
  },
  {
    slug: "agentic-automation",
    icon: "agent",
    name: "Agentic Automation",
    tagline: "Autonomous agents that execute work end to end.",
    summary:
      "Our Agent Core platform orchestrates fleets of specialized agents that plan, act across your systems, and escalate to people when judgment is required — with a full audit trail.",
    capabilities: [
      "Multi-agent orchestration",
      "Tool, API, and system integration",
      "Policy, approval, and escalation gates",
      "Deterministic logging & replay",
      "Continuous evaluation in production",
    ],
    deliverables: [
      "Agent fleet & orchestration",
      "Control plane",
      "Audit & oversight console",
    ],
  },
  {
    slug: "business-process-automation",
    icon: "process",
    name: "Intelligent Process Automation",
    tagline: "Re-engineer operations with AI in the loop.",
    summary:
      "We map the work, remove the friction, and automate the repeatable — combining document intelligence, decisioning, and orchestration to compress cycle times across the enterprise.",
    capabilities: [
      "Process discovery & re-engineering",
      "Document intelligence & extraction",
      "Straight-through processing",
      "Exception handling with oversight",
      "Operational dashboards & SLAs",
    ],
    deliverables: [
      "Process blueprint",
      "Automation suite",
      "Ops command center",
    ],
  },
  {
    slug: "digital-transformation",
    icon: "transform",
    name: "Digital Transformation",
    tagline: "Modernize legacy estates into adaptive platforms.",
    summary:
      "A pragmatic path from legacy to modern — strangler-pattern migrations, cloud foundations, and capability uplift that de-risks change while delivering value in quarters, not years.",
    capabilities: [
      "Legacy assessment & roadmap",
      "Incremental, strangler-pattern migration",
      "Cloud landing zones & FinOps",
      "Data migration & integrity",
      "Org enablement & operating model",
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
    blurb: "Citizen services, sovereign cloud, and accountable automation.",
  },
  {
    name: "Healthcare & Life Sciences",
    blurb: "Clinical workflows, claims, and patient-safe AI systems.",
  },
  {
    name: "Financial Services",
    blurb: "Risk, compliance, and intelligent document processing.",
  },
  {
    name: "Energy & Utilities",
    blurb: "Predictive operations and asset-intensive platforms.",
  },
  {
    name: "Telecom",
    blurb: "Network operations, service assurance, and self-service.",
  },
  {
    name: "Enterprise & Holdings",
    blurb: "Shared platforms and automation across diversified groups.",
  },
];

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: 99.99, suffix: "%", label: "Platform uptime SLA" },
  { value: 40, suffix: "+", label: "Enterprise deployments" },
  { value: 6, suffix: "M+", label: "Citizens & users served" },
  { value: 12, prefix: "<", suffix: " wk", label: "Avg. time to value" },
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

export const certifications = [
  "ISO/IEC 27001",
  "SOC 2 Type II",
  "GDPR-aligned",
  "HIPAA-aligned",
  "Sovereign cloud ready",
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

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "RoboAgentix delivered automation our auditors could actually sign off on. The work that took our teams weeks now clears in hours — and every decision is explainable.",
    name: "Programme Director",
    role: "National Health System",
  },
  {
    quote:
      "They engineer like a product company and operate like a bank. That combination is rare, and it is exactly what mission-critical work demands.",
    name: "Chief Technology Officer",
    role: "Tier-1 Financial Institution",
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
