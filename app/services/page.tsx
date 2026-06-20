import type { Metadata } from "next";
import { Container, Pill, Section } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/cta";
import { Check, ServiceIcon } from "@/components/icons";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise software, web & mobile applications, AI-powered solutions, agentic automation, intelligent process automation, and digital transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            From legacy systems to{" "}
            <span className="text-gradient">autonomous operations</span>.
          </>
        }
        intro="Six capabilities, one accountable partner. We architect, build, and operate the systems your organization depends on — with security and auditability engineered in from the start."
      >
        <div className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted transition-colors hover:border-brand/50 hover:text-ink"
            >
              {s.name}
            </a>
          ))}
        </div>
      </PageHero>

      <Section className="pt-10">
        <Container>
          <div className="flex flex-col gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <article
                  id={s.slug}
                  className="card grid scroll-mt-24 gap-8 p-6 sm:p-10 lg:grid-cols-2"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand-bright">
                        <ServiceIcon name={s.icon} className="size-6" />
                      </span>
                      <span className="font-mono text-sm text-faint">
                        {`0${i + 1}`}
                      </span>
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold">{s.name}</h2>
                    <p className="mt-1.5 text-brand-bright">{s.tagline}</p>
                    <p className="mt-4 leading-relaxed text-muted">{s.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.deliverables.map((d) => (
                        <Pill key={d}>{d}</Pill>
                      ))}
                    </div>
                  </div>

                  <div className="lg:border-l lg:border-white/8 lg:pl-10">
                    <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                      Capabilities
                    </h3>
                    <ul className="mt-5 flex flex-col gap-3.5">
                      {s.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-5 shrink-0 text-brand" />
                          <span className="text-sm leading-relaxed text-ink">
                            {c}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTA
        eyebrow="Engagements"
        title="Not sure where to start?"
        intro="Most engagements begin with a focused discovery sprint — a few weeks to map the opportunity, de-risk the approach, and return a costed plan."
        primary={{ href: "/contact", label: "Book a discovery sprint" }}
      />
    </>
  );
}
