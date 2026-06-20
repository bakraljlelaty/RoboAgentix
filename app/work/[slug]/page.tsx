import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Pill, Section } from "@/components/primitives";
import { Reveal } from "@/components/reveal";
import { CaseCard } from "@/components/case-card";
import { CTA } from "@/components/cta";
import { ArrowRight } from "@/components/icons";
import { caseStudies } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case study" };
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(58,142,118,0.12), transparent 65%)",
          }}
        />
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowRight className="size-4 rotate-180" />
            All work
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em]">
              <span className="text-brand-bright">{cs.sector}</span>
              <span className="text-faint">/ {cs.year}</span>
            </div>
            <h1 className="mt-5 text-[length:var(--text-h1)] font-semibold">
              {cs.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {cs.summary}
            </p>
          </div>

          <div className="mt-10 grid gap-6 border-t border-white/8 pt-8 sm:grid-cols-3">
            <Meta label="Client" value={cs.client} />
            <Meta label="Year" value={cs.year} />
            <Meta label="Services" value={cs.services.join(" · ")} />
          </div>
        </Container>
      </section>

      <Section className="pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            <div className="flex flex-col gap-12">
              <Reveal>
                <h2 className="text-xl font-semibold">The challenge</h2>
                <p className="mt-4 leading-relaxed text-muted">{cs.challenge}</p>
              </Reveal>
              <Reveal>
                <h2 className="text-xl font-semibold">Our approach</h2>
                <ol className="mt-6 flex flex-col gap-5">
                  {cs.approach.map((a, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="shrink-0 font-mono text-sm text-brand-bright">
                        {`0${i + 1}`}
                      </span>
                      <p className="leading-relaxed text-muted">{a}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
              <Reveal>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Services applied
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.services.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Reveal>
            </div>

            <aside className="self-start lg:sticky lg:top-24">
              <div className="card p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  Results
                </h3>
                <div className="mt-5 flex flex-col gap-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="border-b border-white/8 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="font-mono text-3xl font-semibold text-ink">
                        {r.value}
                      </div>
                      <div className="mt-1 text-sm text-muted">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/8">
        <Container>
          <div className="mb-8">
            <span className="eyebrow">Next case study</span>
          </div>
          <Reveal>
            <CaseCard cs={next} />
          </Reveal>
        </Container>
      </Section>

      <CTA />
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
        {label}
      </div>
      <div className="mt-1.5 text-ink">{value}</div>
    </div>
  );
}
