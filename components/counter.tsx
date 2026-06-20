"use client";

import { useEffect, useRef, useState } from "react";

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);
  const dec = decimals ?? (Number.isInteger(value) ? 0 : 2);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setN(value);
      return;
    }

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            const dur = 1500;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(value * eased);
              if (p < 1) raf = requestAnimationFrame(tick);
              else setN(value);
            };
            raf = requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(dec)}
      {suffix}
    </span>
  );
}
