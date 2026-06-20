import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-[#06140f] hover:bg-brand-bright hover:shadow-[0_14px_44px_-14px_rgba(95,195,161,0.65)]",
  secondary:
    "border border-white/15 text-ink hover:border-brand/60 hover:bg-white/[0.03]",
  ghost: "text-ink hover:text-brand-bright",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${styles[variant]} ${className}`;
  const external = href.startsWith("http");

  const inner = (
    <>
      {children}
      {icon && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
