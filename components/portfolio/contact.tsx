"use client";

import { useForm, ValidationError } from "@formspree/react";

export function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "";
  const [state, handleSubmit] = useForm(formId || "placeholder-form-id");
  const canSubmit = !!formId && !state.submitting && !state.succeeded;

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            {"Let's Work Together"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Have a project in mind or just want to connect? Drop me a message
            and I&apos;ll get back to you.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="reveal flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-2 text-xs text-destructive"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-2 text-xs text-destructive"
              />
            </div>
            {!formId && (
              <p className="text-sm text-destructive">
                Form is not configured. Set NEXT_PUBLIC_FORMSPREE_FORM_ID to
                enable submissions.
              </p>
            )}
            {state.succeeded && (
              <p className="text-sm font-medium text-primary">
                Thanks! Your message has been sent.
              </p>
            )}
            {state.errors && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_hsl(173,80%,50%,0.3)] disabled:opacity-50"
              disabled={!canSubmit}
            >
              {state.submitting ? (
                "Sending..."
              ) : state.succeeded ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="reveal flex flex-col justify-center">
            <div className="rounded-lg border border-dashed border-border p-6">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Prefer email?
                </span>{" "}
                Reach me directly at{" "}
                <a
                  href="mailto:kingyel54@gmail.com"
                  className="text-primary transition-colors hover:underline"
                >
                  kingyel54@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
