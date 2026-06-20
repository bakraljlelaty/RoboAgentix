"use client";

import type { CSSProperties } from "react";

const C = 200; // center

function pos(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: +(C + r * Math.cos(a)).toFixed(2),
    y: +(C + r * Math.sin(a)).toFixed(2),
  };
}

const OUTER_R = 152;
const INNER_R = 94;
const outer = [-18, 54, 126, 198, 270].map((a) => pos(a, OUTER_R));
const inner = [24, 144, 264].map((a) => pos(a, INNER_R));

function Node({
  x,
  y,
  delay,
  size = 1,
}: {
  x: number;
  y: number;
  delay: number;
  size?: number;
}) {
  return (
    <g
      className="ac-node"
      style={{ "--delay": `${delay}s`, "--dur": `${4.5 + delay}s` } as CSSProperties}
    >
      <circle cx={x} cy={y} r={7.5 * size} fill="var(--color-brand)" opacity={0.12} />
      <circle
        cx={x}
        cy={y}
        r={3.8 * size}
        fill="var(--color-surface)"
        stroke="var(--color-brand)"
        strokeWidth={1.2}
      />
      <circle cx={x} cy={y} r={1.6 * size} fill="var(--color-brand-bright)" />
    </g>
  );
}

function Edge({ x, y }: { x: number; y: number }) {
  return (
    <line
      x1={C}
      y1={C}
      x2={x}
      y2={y}
      stroke="var(--color-brand)"
      strokeOpacity={0.16}
      strokeWidth={1}
    />
  );
}

function Dot({
  x,
  y,
  delay,
  dur,
}: {
  x: number;
  y: number;
  delay: number;
  dur: number;
}) {
  return (
    <circle
      r={2.2}
      fill="var(--color-brand-bright)"
      className="ac-dot"
      style={
        {
          "--path": `path('M ${C} ${C} L ${x} ${y}')`,
          "--delay": `${delay}s`,
          "--dur": `${dur}s`,
        } as CSSProperties
      }
    />
  );
}

export function AgentCore({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Agent Core: a central orchestrator coordinating a fleet of autonomous agents with live data flows."
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-brand-bright)" stopOpacity="0.42" />
          <stop offset="45%" stopColor="var(--color-brand)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="coreFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-brand)" />
          <stop offset="100%" stopColor="var(--color-brand-deep)" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle
        cx={C}
        cy={C}
        r={150}
        fill="url(#coreGlow)"
        className="ac-core-glow"
      />

      {/* Static concentric rings */}
      <circle cx={C} cy={C} r={INNER_R} fill="none" stroke="var(--color-brand)" strokeOpacity={0.12} />
      <circle cx={C} cy={C} r={OUTER_R} fill="none" stroke="var(--color-brand)" strokeOpacity={0.1} />
      <circle
        cx={C}
        cy={C}
        r={178}
        fill="none"
        stroke="var(--color-brand)"
        strokeOpacity={0.07}
        strokeDasharray="2 7"
      />

      {/* Outer orbit — rotating */}
      <g className="ac-orbit rev" style={{ "--dur": "88s" } as CSSProperties}>
        {outer.map((n, i) => (
          <Edge key={`oe${i}`} x={n.x} y={n.y} />
        ))}
        {outer.map((n, i) => (
          <Dot key={`od${i}`} x={n.x} y={n.y} delay={i * 0.7} dur={4.8} />
        ))}
        {outer.map((n, i) => (
          <Node key={`on${i}`} x={n.x} y={n.y} delay={i * 0.5} />
        ))}
      </g>

      {/* Inner orbit — rotating */}
      <g className="ac-orbit" style={{ "--dur": "60s" } as CSSProperties}>
        {inner.map((n, i) => (
          <Edge key={`ie${i}`} x={n.x} y={n.y} />
        ))}
        {inner.map((n, i) => (
          <Dot key={`id${i}`} x={n.x} y={n.y} delay={0.35 + i * 0.6} dur={3.6} />
        ))}
        {inner.map((n, i) => (
          <Node key={`in${i}`} x={n.x} y={n.y} delay={0.3 + i * 0.5} size={1.05} />
        ))}
      </g>

      {/* Core */}
      <circle cx={C} cy={C} r={26} fill="var(--color-brand)" opacity={0.14} className="ac-core" />
      <circle cx={C} cy={C} r={16} fill="url(#coreFill)" stroke="var(--color-brand-bright)" strokeWidth={1.4} />
      <circle cx={C} cy={C} r={6.5} fill="var(--color-brand-bright)" />
      <circle cx={C} cy={C} r={11} fill="none" stroke="#06140f" strokeOpacity={0.5} strokeWidth={1} />
    </svg>
  );
}
