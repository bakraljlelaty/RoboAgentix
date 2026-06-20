import type { CSSProperties, ReactNode } from "react";
import { Container, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}) {
  return (
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
        <div className="max-w-3xl">
          <div className="rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className="rise mt-5 text-[length:var(--text-h1)] font-semibold"
            style={{ "--d": "0.06s" } as CSSProperties}
          >
            {title}
          </h1>
          <p
            className="rise mt-5 max-w-2xl text-lg leading-relaxed text-muted"
            style={{ "--d": "0.12s" } as CSSProperties}
          >
            {intro}
          </p>
          {children && (
            <div
              className="rise mt-8"
              style={{ "--d": "0.18s" } as CSSProperties}
            >
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
