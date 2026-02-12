"use client";

const skills = [
  {
    title: "Video Editing",
    description:
      "Cinematic cuts, color grading, and motion graphics that bring stories to life.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    title: "Content Creation",
    description:
      "Engaging, scroll-stopping content tailored for modern digital platforms.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M20 3v4" />
        <path d="M22 5h-4" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    description:
      "Clean, responsive interfaces that balance form and function beautifully.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Creative Storytelling",
    description:
      "Narratives that connect, resonate, and leave a lasting impression.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      {/* Subtle divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            What I Do
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="reveal group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_hsl(173,80%,50%,0.08)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  {skill.icon}
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>

                {/* Hover underline */}
                <div className="mt-4 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-12" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
