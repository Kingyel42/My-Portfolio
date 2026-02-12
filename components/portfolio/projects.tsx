"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Cinematic Showreel",
    description:
      "A high-energy video reel showcasing cinematic editing, color grading, and visual storytelling across multiple genres and formats.",
    image: "/images/project-1.jpg",
    tags: ["Video Editing", "Color Grading", "Motion"],
  },
  {
    title: "Brand Website Redesign",
    description:
      "Complete website overhaul for a modern brand — from wireframes to a fully responsive, pixel-perfect build with smooth interactions.",
    image: "/images/project-2.jpg",
    tags: ["Web Design", "UI/UX", "Development"],
  },
  {
    title: "Social Content Campaign",
    description:
      "A multi-platform content campaign designed to boost engagement and build community through compelling visuals and copywriting.",
    image: "/images/project-3.jpg",
    tags: ["Content Creation", "Social Media", "Strategy"],
  },
  {
    title: "Brand Identity System",
    description:
      "Full brand identity design including logo, color palette, typography system, and comprehensive brand guidelines document.",
    image: "/images/project-4.jpg",
    tags: ["Branding", "Design", "Identity"],
  },
];

export function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (project: (typeof projects)[0]) => {
    setActiveProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => setActiveProject(null), 300);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [modalOpen, closeModal]);

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Portfolio
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              type="button"
              key={project.title}
              onClick={() => openModal(project)}
              className="reveal group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 text-sm font-semibold text-primary">
                    View Project
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
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div
          ref={modalRef}
          className={`modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6 ${
            modalOpen ? "active" : ""
          }`}
          onClick={(e) => {
            if (e.target === modalRef.current) closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          <div className="modal-content relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Close project modal"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="mb-3 font-display text-2xl font-bold text-foreground">
                {activeProject.title}
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                {activeProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

