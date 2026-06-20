import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span className="size-1.5 rounded-full bg-brand-bright" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-4 ${center ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[length:var(--text-h2)] font-semibold text-balance">
        {title}
      </h2>
      {intro && (
        <p className="text-[1.0625rem] leading-relaxed text-muted">{intro}</p>
      )}
    </Reveal>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
