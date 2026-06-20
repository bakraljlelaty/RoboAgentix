import Link from "next/link";
import type { CSSProperties } from "react";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/primitives";
import { Button } from "@/components/button";
import { AgentCore } from "@/components/agent-core";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Marquee } from "@/components/marquee";
import { Pipeline } from "@/components/pipeline";
import { CaseCard } from "@/components/case-card";
import { CTA } from "@/components/cta";
import { ArrowRight, ServiceIcon } from "@/components/icons";
import {
  agentCoreCapabilities,
  caseStudies,
  certifications,
  industries,
  metrics,
  process,
  services,
  testimonials,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ----------------------------- Hero ----------------------------- */}
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-16 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-12%] top-[-12%] -z-0 size-[720px] opacity-70"
        >
          <div
            className="aura size-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(58,142,118,0.16), transparent 60%)",
            }}
          />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="rise">
                <Eyebrow>Enterprise AI &amp; software engineering</Eyebrow>
              </div>
              <h1
                className="rise mt-6 text-[length:var(--text-display)] font-semibold leading-[1.02]"
                style={{ "--d": "0.06s" } as CSSProperties}
              >
                Autonomous systems for{" "}
                <span className="text-gradient">mission-critical</span>{" "}
                enterprises.
              </h1>
              <p
                className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted"
                style={{ "--d": "0.12s" } as CSSProperties}
              >
                RoboAgentix designs, builds, and operates agentic systems and
                enterprise software for governments, healthcare, finance, and
                large organizations — engineered for security, scale, and
                accountability.
              </p>
              <div
                className="rise mt-8 flex flex-wrap gap-3"
                style={{ "--d": "0.18s" } as CSSProperties}
              >
                <Button href="/contact">Start a project</Button>
                <Button href="/services" variant="secondary" icon={false}>
                  Explore services
                </Button>
              </div>
              <div
                className="rise mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-faint"
                style={{ "--d": "0.24s" } as CSSProperties}
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  Trusted in regulated environments
                </span>
                <span aria-hidden>·</span>
                <span>ISO 27001 · SOC 2 Type II · Sovereign-ready</span>
              </div>
            </div>

            <div
              className="rise relative mx-auto w-full max-w-md lg:max-w-none"
              style={{ "--d": "0.1s" } as CSSProperties}
            >
              <AgentCore className="w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------- Credentials -------------------------- */}
      <div className="border-y border-white/8 py-5">
        <Container>
          <Marquee items={certifications} />
        </Container>
      </div>

      {/* --------------------------- Services --------------------------- */}
      <Section id="services">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="One partner, from architecture to autonomy."
            intro="Six capabilities that take you from legacy systems to autonomous operations — delivered by senior teams and operated to enterprise SLAs."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/services#${s.slug}`}
                  className="card card-hover group flex h-full flex-col gap-4 p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand-bright">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.tagline}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------- Agent Core --------------------------- */}
      <Section className="border-t border-white/8">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The Agent Core platform"
            title="Automation you can put in front of a regulator."
            intro="Agent Core orchestrates fleets of specialized agents that plan, act across your systems, and escalate to people when judgment is required. Every action is grounded in your policies, logged, and replayable."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agentCoreCapabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="card h-full p-6">
                  <span className="size-2 rounded-full bg-brand-bright" />
                  <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="card p-6 sm:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <span className="eyebrow">Execution pipeline</span>
                <span className="font-mono text-xs text-faint">
                  grounded · governed · auditable
                </span>
              </div>
              <Pipeline
                stages={[
                  { label: "Ingest", icon: "flow" },
                  { label: "Reason", icon: "ai" },
                  { label: "Act", icon: "agent" },
                  { label: "Verify", icon: "shield" },
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* --------------------------- Metrics ---------------------------- */}
      <Section className="border-y border-white/8 bg-bg-2/40">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 70}>
                <div className="font-mono text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                  <Counter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                  />
                </div>
                <div className="mt-3 text-sm text-muted">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------- Industries -------------------------- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Built for sectors where failure isn't an option."
            intro="We work where the stakes — and the compliance bar — are highest."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 50}>
                <div className="card card-hover h-full p-6">
                  <h3 className="flex items-center gap-2 text-base font-semibold">
                    <span className="size-1.5 rounded-full bg-brand" />
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {ind.blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------- Process ---------------------------- */}
      <Section className="border-t border-white/8">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A delivery model engineered for outcomes."
            intro="Senior teams, short cycles, and value proven in production — not slideware."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.k} delay={i * 70}>
                <div className="card h-full p-6">
                  <div className="font-mono text-sm text-brand-bright">{p.k}</div>
                  <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------ Selected work ------------------------- */}
      <Section>
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Outcomes in high-stakes environments."
            />
            <Button
              href="/work"
              variant="secondary"
              icon={false}
              className="hidden shrink-0 sm:inline-flex"
            >
              All case studies
            </Button>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 70}>
                <CaseCard cs={cs} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------- Testimonial -------------------------- */}
      <Section className="border-t border-white/8">
        <Container>
          <Reveal className="card relative overflow-hidden p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(58,142,118,0.16), transparent 70%)",
              }}
            />
            <blockquote className="relative max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-6 text-sm text-muted">
              <span className="font-medium text-ink">
                {testimonials[0].name}
              </span>{" "}
              — {testimonials[0].role}
            </figcaption>
          </Reveal>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
