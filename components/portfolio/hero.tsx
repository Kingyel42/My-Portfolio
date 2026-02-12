"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(173, 80%, 50%, ${p.opacity})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
        <p
          className="animate-fade-slide-up mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary"
          style={{ animationDelay: "0.1s" }}
        >
          Creative Editor &middot; Digital Creator &middot; Web Enthusiast
        </p>

        <h1
          className="animate-fade-slide-up font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="text-balance">
            {"Crafting Digital"}
            <br />
            <span className="bg-gradient-to-r from-primary to-[hsl(200,80%,60%)] bg-clip-text text-transparent">
              {"Experiences"}
            </span>
          </span>
        </h1>

        <p
          className="animate-fade-slide-up mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "0.5s" }}
        >
          Building the future one pixel at a time. Self-taught, driven, and
          obsessed with turning bold ideas into polished realities.
        </p>

        <div
          className="animate-fade-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_hsl(173,80%,50%,0.3)]"
          >
            View Work
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-slide-up mt-20 flex flex-col items-center gap-2"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Scroll
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-muted-foreground/30 p-1">
            <div className="h-1.5 w-1 animate-bounce rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
