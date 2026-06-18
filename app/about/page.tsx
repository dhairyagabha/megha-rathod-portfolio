import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "../../components/reveal";
import { SimpleFooter } from "../../components/simple-footer";
import { SiteHeader } from "../../components/site-header";
import { capabilities, experienceNotes, mailHref } from "../../lib/portfolio";

export const metadata: Metadata = {
  title: "About Megha Rathod | Architect",
  description:
    "About architect Megha Rathod, her design approach, experience notes, and portfolio-ready capabilities."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen oat-shell text-[var(--olive-950)]">
      <SiteHeader />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <Reveal>
            <div className="oat-panel-strong rounded-xl p-2">
              <div className="grid aspect-[4/5] place-items-center rounded-lg bg-[color-mix(in_oklab,var(--olive-950)_7%,transparent)] text-center">
                <div>
                  <p className="font-display text-8xl leading-none sm:text-9xl">MR</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--olive-600)]">
                    Headshot placeholder
                  </p>
                  <p className="mt-1 text-xs muted">Replace with Megha's portrait</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">About Megha Rathod</p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Calm design thinking for spaces that need to feel considered.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 muted sm:text-lg">
              Megha Rathod is an architect focused on homes, interiors, adaptive
              reuse, and workplace environments where atmosphere and buildability
              need to sit together. The portfolio is arranged so hiring teams can
              understand both the final image and the reasoning behind it.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
              <a href={mailHref} className="btn-primary">
                <Mail className="size-4" aria-hidden="true" />
                Get in touch
              </a>
              <Link href="/#work" className="btn-secondary">
                View work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <p className="eyebrow">Profile</p>
            <h2 className="mt-3 max-w-2xl font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              A concise architecture CV, translated into a portfolio page.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="oat-panel rounded-lg p-5">
                  <p className="text-sm leading-7 muted">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl olive-dark p-6 sm:p-8 lg:p-10">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold leading-6 text-[var(--olive-400)]">
              Experience notes
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              The arc behind the work.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-lg bg-white/12 lg:grid-cols-4">
            {experienceNotes.map((item, index) => (
              <Reveal key={item.phase} delay={index * 70}>
                <div className="h-full bg-[var(--olive-950)] p-5">
                  <p className="font-display text-3xl text-[var(--olive-400)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-semibold text-white">{item.phase}</h3>
                  <p className="mt-2 text-sm text-white/48">{item.period}</p>
                  <p className="mt-4 text-sm leading-7 text-white/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-[var(--line)] py-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-4xl leading-none tracking-tight">
            Interested in Megha's portfolio or CV?
          </h2>
          <a href={mailHref} className="btn-primary">
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </Reveal>
      </section>

      <SimpleFooter />
    </main>
  );
}
