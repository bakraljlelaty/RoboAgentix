import type { Metadata } from "next";
import { Container, Section } from "@/components/primitives";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "@/components/icons";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with RoboAgentix about enterprise software, AI, and agentic automation. We respond within one business day.",
};

const expectations = [
  {
    k: "01",
    title: "A real conversation",
    desc: "You'll speak with engineers, not a sales funnel. We'll understand your systems and constraints.",
  },
  {
    k: "02",
    title: "A costed plan",
    desc: "We return a focused proposal — scope, approach, and a discovery sprint to de-risk it.",
  },
  {
    k: "03",
    title: "Value in quarters",
    desc: "We ship to production in short cycles, proving outcomes before you scale the commitment.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-gradient">dependable</span>.
          </>
        }
        intro="Tell us about your systems, your constraints, and the outcome you need. A member of our team will respond within one business day."
      />

      <Section className="pt-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-5">
              <ContactDetail
                icon={<Mail className="size-5 text-brand-bright" />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              <ContactDetail
                icon={<Phone className="size-5 text-brand-bright" />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/\s/g, "")}`}
              />
              <ContactDetail
                icon={<MapPin className="size-5 text-brand-bright" />}
                label="Headquarters"
                value={site.hq}
              />

              <div className="card mt-2 p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                  What happens next
                </h3>
                <ol className="mt-5 flex flex-col gap-5">
                  {expectations.map((e) => (
                    <li key={e.k} className="flex gap-4">
                      <span className="shrink-0 font-mono text-sm text-brand-bright">
                        {e.k}
                      </span>
                      <div>
                        <div className="font-medium text-ink">{e.title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {e.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="card card-hover flex items-center gap-4 p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10">
        {icon}
      </span>
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
          {label}
        </div>
        <div className="mt-0.5 text-ink">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}
