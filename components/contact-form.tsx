"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/content";
import { ArrowRight, Check } from "./icons";

type Status = "idle" | "submitting" | "success";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-ink placeholder:text-faint outline-none transition-colors focus:border-brand/60 focus:bg-white/[0.05]";

const options = ["General inquiry", ...services.map((s) => s.name)];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email.";
    if (!String(data.get("message") || "").trim())
      next.message = "Tell us a little about your project.";
    return next;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // No backend in this static build — wire to your endpoint (e.g. Formspree,
    // a serverless function, or your CRM) here.
    setTimeout(() => {
      setStatus("success");
      form.reset();
    }, 900);
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-brand/15 text-brand-bright">
          <Check className="size-6" />
        </span>
        <h3 className="text-xl font-semibold">Message received.</h3>
        <p className="text-muted">
          Thank you for reaching out. A member of our team will respond within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-brand-bright hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="name" error={errors.name}>
          <input id="name" name="name" className={inputCls} placeholder="Jane Doe" />
        </Field>
        <Field label="Work email" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={inputCls}
            placeholder="jane@organization.com"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organization" id="company" optional>
          <input
            id="company"
            name="company"
            className={inputCls}
            placeholder="Organization name"
          />
        </Field>
        <Field label="Area of interest" id="service">
          <select id="service" name="service" className={`${inputCls} appearance-none`}>
            {options.map((o) => (
              <option key={o} value={o} className="bg-surface">
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="How can we help?" id="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Briefly describe your goals, systems, and timeline."
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-[#06140f] transition-all duration-300 hover:bg-brand-bright disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        )}
      </button>
      <p className="text-xs text-faint">
        By submitting, you agree to be contacted about your inquiry. We never share
        your information.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  optional,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-2 text-sm font-medium text-muted">
        {label}
        {optional && <span className="text-xs text-faint">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-[#e69a86]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
