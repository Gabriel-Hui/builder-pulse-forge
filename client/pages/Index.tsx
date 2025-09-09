import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const skills = useMemo(
    () => [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "TailwindCSS",
      "Vite",
      "PostgreSQL",
      "Zod",
      "Vitest",
    ],
    [],
  );

  const experiences = useMemo(
    () => [
      {
        period: "2023 — Present",
        title: "Senior Full‑Stack Developer",
        org: "Independent",
        desc:
          "Designing and shipping end‑to‑end web apps with React, Node.js, and modern tooling. Focused on DX, performance, and clean, accessible UI.",
      },
      {
        period: "2021 — 2023",
        title: "Frontend Engineer",
        org: "Creative Studio",
        desc:
          "Built scalable, component‑driven frontends, leading the migration to TypeScript and design‑system‑first workflows.",
      },
      {
        period: "2019 — 2021",
        title: "Software Engineer",
        org: "Tech Startup",
        desc:
          "Shipped features across the stack, from API design to polished interfaces, collaborating closely with design and product.",
      },
    ],
    [],
  );

  return (
    <div className="relative isolate">
      {/* Background aesthetics */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 right-1/2 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] -translate-x-1/3 rounded-full bg-accent/40 blur-3xl" />
      </div>

      {/* Hero */}
      <section id="about" className="container pt-20 md:pt-28">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              許猷朗
            </h1>
            <p className="mt-3 inline-flex items-center gap-2 text-base md:text-lg text-foreground/70">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              Full‑Stack Developer • Based on the Web
            </p>
            <p className="mt-6 text-foreground/80 leading-relaxed">
              I craft fast, beautiful, and reliable web experiences with a deep
              focus on usability, performance, and long‑term maintainability. I
              love turning complex ideas into elegant, user‑centered products.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact">
                <Button size="lg">Contact me</Button>
              </a>
              <a href="#experience">
                <Button size="lg" variant="outline">
                  View experience
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-primary/40 to-accent/40 blur-xl" />
              <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-2xl bg-gradient-to-br from-primary to-accent p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
                  <svg
                    className="h-24 w-24 md:h-28 md:w-28 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      className="stroke-current"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <text
                      x="50%"
                      y="54%"
                      textAnchor="middle"
                      className="fill-current font-bold"
                      fontSize="8"
                      dominantBaseline="middle"
                    >
                      許
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pt-16 md:pt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Skills & Tools
            </h2>
            <p className="mt-2 text-foreground/70">
              A selection of the technologies I use most.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} variant="secondary" className="px-3 py-1">
              {s}
            </Badge>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container pt-16 md:pt-24">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight">
          Experience
        </h2>
        <div className="mt-8 grid gap-6">
          {experiences.map((exp) => (
            <article
              key={exp.title + exp.period}
              className="rounded-xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <p className="text-sm text-foreground/60">{exp.period}</p>
                <div className="font-semibold">
                  {exp.title} • <span className="text-primary">{exp.org}</span>
                </div>
              </div>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                {exp.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="rounded-2xl border border-border/70 bg-card/60 p-8 md:p-12 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Let’s build something great
          </h2>
          <p className="mt-3 text-foreground/70">
            Have an idea or a role in mind? I’m open to collaborations and
            opportunities.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="mailto:?subject=Hello%20from%20your%20website">
              <Button size="lg">Email me</Button>
            </a>
            <a href="#about">
              <Button size="lg" variant="outline">
                Learn more
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
