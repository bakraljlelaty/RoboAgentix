import Link from "next/link";
import { Logo } from "./logo";
import { services, site } from "@/lib/content";
import { Github, Linkedin, Mail, MapPin, XSocial } from "./icons";

const company = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-bg-2">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <div className="mt-1 flex items-center gap-2 text-sm text-faint">
            <MapPin className="size-4 text-brand" />
            {site.locations.join(" · ")}
          </div>
        </div>

        <FooterCol title="Services">
          {services.slice(0, 6).map((s) => (
            <FooterLink key={s.slug} href={`/services#${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Company">
          {company.map((c) => (
            <FooterLink key={c.href} href={c.href}>
              {c.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Connect">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <Mail className="size-4 text-brand" />
            {site.email}
          </a>
          <div className="mt-3 flex items-center gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: XSocial, label: "X" },
              { Icon: Github, label: "GitHub" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg border border-white/10 text-muted transition-colors hover:border-brand/50 hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </FooterCol>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 text-sm text-faint sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="transition-colors hover:text-muted">
              Privacy
            </Link>
            <Link href="/" className="transition-colors hover:text-muted">
              Terms
            </Link>
            <span className="font-mono text-xs">{site.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {title}
      </h3>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition-colors hover:text-ink"
    >
      {children}
    </Link>
  );
}
