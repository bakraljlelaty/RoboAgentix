import { Fragment } from "react";
import type { CSSProperties } from "react";
import { ServiceIcon } from "./icons";
import type { IconKey } from "@/lib/content";

export interface Stage {
  label: string;
  icon: IconKey;
}

export function Pipeline({ stages }: { stages: Stage[] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {stages.map((s, i) => (
        <Fragment key={s.label}>
          <div className="card card-hover flex items-center gap-3 px-4 py-3.5 md:flex-1 md:flex-col md:items-start md:gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand-bright">
              <ServiceIcon name={s.icon} className="size-5" />
            </span>
            <div>
              <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-faint">
                {`0${i + 1}`}
              </div>
              <div className="text-sm font-medium text-ink">{s.label}</div>
            </div>
          </div>

          {i < stages.length - 1 && (
            <div className="shrink-0 self-center" aria-hidden>
              <div className="relative mx-2 hidden h-[2px] w-10 overflow-hidden rounded bg-white/10 md:block">
                <span
                  className="flow-line absolute inset-0"
                  style={{ "--delay": `${i * 0.35}s` } as CSSProperties}
                />
              </div>
              <div className="mx-auto my-1 h-6 w-px bg-white/10 md:hidden" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
