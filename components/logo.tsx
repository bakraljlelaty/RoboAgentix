import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="14" cy="14" r="10.6" stroke="currentColor" opacity="0.28" />
      <circle cx="14" cy="14" r="6.2" stroke="currentColor" opacity="0.55" />
      <circle cx="14" cy="14" r="3" fill="var(--color-brand-bright)" />
      <circle cx="24.6" cy="14" r="1.7" fill="var(--color-brand)" />
      <circle cx="8.8" cy="5.6" r="1.5" fill="var(--color-brand)" />
      <circle cx="6.6" cy="21.2" r="1.5" fill="var(--color-brand)" />
    </svg>
  );
}

export function Logo({
  className = "",
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="RoboAgentix — home"
    >
      <LogoMark className="size-7 text-brand shrink-0" />
      {showWord && (
        <span className="text-[1.05rem] font-semibold tracking-tight text-ink">
          RoboAgentix
        </span>
      )}
    </Link>
  );
}
