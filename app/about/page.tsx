import type { Metadata } from "next";
import {
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { AgentCore } from "@/components/agent-core";
import { CTA } from "@/components/cta";
import { MapPin } from "@/components/icons";
import { site, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "RoboAgentix brings the rigor of enterprise engineering to the frontier of AI — building autonomous systems that regulated organizations can depend on.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Engineering trust into{" "}
            <span className="text-gradient">intelligent systems</span>.
          </>
        }
        intro="RoboAgentix exists to bring the rigor of enterprise engineering to the frontier of AI — building autonomous systems that organizations in the most demanding sectors can actually depend on."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold">
                Autonomy, accountably delivered.
              </h2>
              <div className="mt-5 flex flex-col gap-4 leading-relaxed text-muted">
                <p>
                  Most enterprise AI never makes it past the demo. It stalls on
                  the questions that actually matter in regulated environments:
                  Can you prove what it did? Can you control what it touches? Can
                  it be trusted with the work that can&apos;t go wrong?
                </p>
                <p>
                  We founded RoboAgentix to close that gap. We pair senior
                  software engineers with applied-AI specialists to build
                  agentic systems and enterprise platforms that are grounded,
                  governed, and observable — then we operate them to the SLAs our
                  clients live by.
                </p>
                <p>
                  The result is automation leaders can defend to a board and a
                  regulator alike: faster, cheaper, and fully accountable.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <AgentCore className="mx-auto w-full max-w-sm" />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/8">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Principles we build by."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="card h-full p-7">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Compliance</Eyebrow>
              <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold">
                Security and compliance, by default.
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                We engineer to the standards our clients are audited against —
                least-privilege access, full audit trails, and data residency
                you control — so security is built in, not bolted on.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>Where we are</Eyebrow>
              <h2 className="mt-4 text-[length:var(--text-h2)] font-semibold">
                Based in Doha, Qatar.
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Headquartered in {site.hq}, working closely with the
                organizations we serve.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {site.locations.map((loc) => (
                  <div
                    key={loc}
                    className="card flex items-center gap-2 p-4 text-sm"
                  >
                    <MapPin className="size-4 text-brand" />
                    {loc}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTA
        eyebrow="Partnerships"
        title="Want to build the frontier with us?"
        intro="Whether you're an enterprise with a hard problem or a leader who wants to build dependable AI, we'd like to hear from you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={null}
      />
    </>
  );
}
