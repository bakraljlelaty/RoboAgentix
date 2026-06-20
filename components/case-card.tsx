import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { ArrowUpRight } from "./icons";

export function CaseCard({ cs }: { cs: CaseStudy }) {
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="card card-hover group flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-brand-bright">
          {cs.sector}
        </span>
        <ArrowUpRight className="size-5 text-faint transition-colors group-hover:text-brand-bright" />
      </div>
      <h3 className="mt-5 text-lg font-semibold leading-snug">{cs.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{cs.summary}</p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/8 pt-5">
        {cs.results.slice(0, 3).map((r) => (
          <div key={r.label}>
            <div className="font-mono text-xl font-semibold text-ink">
              {r.value}
            </div>
            <div className="text-xs text-faint">{r.label}</div>
          </div>
        ))}
      </div>
    </Link>
  );
}
