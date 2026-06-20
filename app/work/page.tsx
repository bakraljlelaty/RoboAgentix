import type { Metadata } from "next";
import { Container, Section } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CaseCard } from "@/components/case-card";
import { CTA } from "@/components/cta";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected outcomes in healthcare, financial services, and government — agentic automation, intelligent process automation, and digital transformation.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Proof, not <span className="text-gradient">promises</span>.
          </>
        }
        intro="A selection of engagements in regulated, high-stakes environments — where automation has to be auditable and software has to hold up under load."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 70}>
                <CaseCard cs={cs} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <p className="text-sm text-faint">
              Engagements are anonymized to respect client confidentiality.
              References available under NDA.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTA
        title="Your outcome could be next."
        intro="Bring us the problem that has resisted every previous attempt. That's the work we do best."
        secondary={{ href: "/services", label: "Explore services" }}
      />
    </>
  );
}
