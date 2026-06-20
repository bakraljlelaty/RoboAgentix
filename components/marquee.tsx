export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="marquee-track gap-12 py-1">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
            aria-hidden={i >= items.length}
          >
            <span className="size-1.5 rounded-full bg-brand" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
