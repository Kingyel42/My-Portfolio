"use client";

export function Quote() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="reveal relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Quotation mark */}
        <div className="mb-8 font-display text-8xl leading-none text-primary/20 md:text-9xl">
          {'"'}
        </div>

        <blockquote className="-mt-10 font-display text-2xl font-bold leading-snug tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">
            {"Discipline is choosing between what you want now and what you want most."}
          </span>
        </blockquote>

        <div className="mx-auto mt-8 h-px w-16 bg-primary" />

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          A philosophy for the journey
        </p>
      </div>
    </section>
  );
}
