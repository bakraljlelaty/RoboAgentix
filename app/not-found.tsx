import { Container } from "@/components/primitives";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79,191,151,0.12), transparent 65%)",
        }}
      />
      <Container className="relative text-center">
        <div className="font-mono text-sm tracking-[0.3em] text-brand-bright">
          404
        </div>
        <h1 className="mt-4 text-[length:var(--text-h1)] font-semibold">
          This node is offline.
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back to the core.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="secondary" icon={false}>
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
