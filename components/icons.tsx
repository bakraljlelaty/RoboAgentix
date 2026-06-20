import type { SVGProps } from "react";
import type { IconKey } from "@/lib/content";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ----------------------------- Service icons ----------------------------- */

function Platform(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3.5" width="18" height="6" rx="1.5" />
      <rect x="3" y="14.5" width="18" height="6" rx="1.5" />
      <path d="M7 6.5h.01M7 17.5h.01" />
    </svg>
  );
}
function App(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="3.5" width="13" height="11" rx="1.5" />
      <rect x="15.5" y="9.5" width="6" height="11" rx="1.5" />
      <path d="M2.5 11.5h13M18.3 17.8h.01" />
    </svg>
  );
}
function Ai(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6V5M12 14.4V19M9.6 12H5M14.4 12H19" />
      <circle cx="12" cy="4" r="1.2" />
      <circle cx="12" cy="20" r="1.2" />
      <circle cx="4" cy="12" r="1.2" />
      <circle cx="20" cy="12" r="1.2" />
    </svg>
  );
}
function Agent(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="8.2" opacity="0.5" />
      <circle cx="20.2" cy="12" r="1.3" />
      <circle cx="6.2" cy="6.6" r="1.3" />
      <circle cx="7.4" cy="18" r="1.3" />
    </svg>
  );
}
function Process(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <rect x="10" y="9.5" width="4" height="5" rx="1" />
      <path d="M7 12h3M14 12h3" />
    </svg>
  );
}
function Transform(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 8h11a4 4 0 0 1 0 8H9" />
      <path d="M7 5 4 8l3 3" />
      <path d="M17 19l3-3-3-3" />
    </svg>
  );
}
function Shield(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function Node(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="7.6" opacity="0.5" />
    </svg>
  );
}
function Flow(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 7h12M3 12h18M3 17h9" />
      <path d="m16 4 3 3-3 3" />
    </svg>
  );
}
function Scale(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 20V10M10 20V5M16 20v-8M22 20V3" />
    </svg>
  );
}

const serviceMap: Record<IconKey, (p: P) => React.JSX.Element> = {
  platform: Platform,
  app: App,
  ai: Ai,
  agent: Agent,
  process: Process,
  transform: Transform,
  shield: Shield,
  node: Node,
  flow: Flow,
  scale: Scale,
};

export function ServiceIcon({
  name,
  ...props
}: { name: IconKey } & P) {
  const C = serviceMap[name];
  return <C {...props} />;
}

/* ------------------------------- UI icons -------------------------------- */

export function ArrowRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function ArrowUpRight(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}
export function Check(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}
export function Menu(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
export function Close(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function Plus(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function Mail(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}
export function Phone(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}
export function MapPin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
export function Linkedin(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
    </svg>
  );
}
export function XSocial(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}
export function Github(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M9 19c-4 1.2-4-2-5.5-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C7 1.9 6 2.2 6 2.2a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.5 8.6c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.8 2.3V21" />
    </svg>
  );
}
