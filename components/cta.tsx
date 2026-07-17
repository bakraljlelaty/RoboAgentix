import { Container, Eyebrow } from "./primitives";
import { Button } from "./button";
import { AgentCore } from "./agent-core";
import { Reveal } from "./reveal";

interface Link {
  href: string;
  label: string;
}

export function CTA({
  eyebrow = "Get started",
  title = "Build systems your organization can trust.",
  intro = "Tell us where you want to go. We'll show you the fastest credible path to get there — with security, scale, and accountability built in.",
  primary = { href: "/contact", label: "Discuss Your Project" },
  secondary = { href: "/services", label: "Explore Solutions" },
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  primary?: Link;
  secondary?: Link | null;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-surface to-bg px-6 py-14 sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-28 hidden size-[460px] opacity-60 md:block"
          >
            <AgentCore className="size-full" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 bottom-[-45%] size-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(58,142,118,0.18), transparent 70%)",
            }}
          />
          <div className="relative max-w-xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[length:var(--text-h1)] font-semibold">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href}>{primary.label}</Button>
              {secondary && (
                <Button href={secondary.href} variant="secondary" icon={false}>
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
