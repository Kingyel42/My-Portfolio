"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            About Me
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">
              {"A story of growth,"}
              <br />
              {"discipline & ambition."}
            </span>
          </h2>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Profile photo */}
          <div className="reveal group relative flex items-center justify-center">
            <div className="relative h-80 w-80 md:h-96 md:w-96">
              {/* Rotating border ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 transition-transform duration-[3s] group-hover:rotate-[60deg]" />
              {/* Image container */}
              <div className="absolute inset-4 overflow-hidden rounded-full">
                <Image
                  src="/profile-photo.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              {/* Floating accent dots */}
              <div className="absolute -right-2 top-10 h-4 w-4 rounded-full bg-primary/60" style={{ animation: "float 6s ease-in-out infinite" }} />
              <div className="absolute -left-4 bottom-20 h-3 w-3 rounded-full bg-primary/40" style={{ animation: "float 8s ease-in-out infinite 1s" }} />
              <div className="absolute right-10 -bottom-2 h-2 w-2 rounded-full bg-primary/50" style={{ animation: "float 7s ease-in-out infinite 2s" }} />
            </div>
          </div>

          {/* Text content */}
          <div className="reveal">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a self-taught creative who believes in the power of
              showing up every day. From late-night editing sessions to
              early-morning brainstorming, I&apos;ve built my skills from the
              ground up — no shortcuts, just relentless curiosity and a deep
              love for the craft.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Whether it&apos;s cutting a cinematic sequence, designing a sleek
              interface, or crafting a brand narrative — I bring the same energy:
              bold ideas, clean execution, and an obsession with every detail.
              The goal isn&apos;t just to create. It&apos;s to create something
              that moves people.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Years Creative" },
                { value: "50+", label: "Projects Done" },
                { value: "100%", label: "Passion" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

