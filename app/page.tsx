import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import { Reveal } from "../components/reveal";
import { SimpleFooter } from "../components/simple-footer";
import { SiteHeader } from "../components/site-header";
import { capabilities, caseStudies, experienceNotes, mailHref } from "../lib/portfolio";

const studioNotes = [
  ["Focus", "Homes, interiors, adaptive reuse, and workplace environments"],
  ["Method", "Context first, material led, precise in documentation"],
  ["Fit", "Architecture teams seeking calm design and clear delivery"]
];

export default function Home() {
  return (
    <main className="min-h-screen oat-shell text-[var(--olive-950)]">
      <SiteHeader />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Architect portfolio / Megha Rathod</p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Quiet architecture with a grounded material intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 muted sm:text-lg">
              A portfolio for employers and collaborators, organized around case
              studies, experience notes, and the careful decisions behind each
              spatial proposal.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
              <Link href="#work" className="btn-primary">
                View work
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href={mailHref} className="btn-secondary">
                <FileText className="size-4" aria-hidden="true" />
                Request CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="oat-panel rounded-xl p-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--olive-200)]">
                <Image
                  src="/images/hero-cultural-center.webp"
                  alt="A refined contemporary architectural interior opening to a sunlit courtyard"
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-2 px-3 py-4 sm:grid-cols-3">
                {studioNotes.map(([label, value]) => (
                  <div key={label} className="border-t border-[var(--line)] pt-3">
                    <p className="text-xs font-semibold text-[var(--olive-600)]">{label}</p>
                    <p className="mt-1 text-sm leading-6 muted">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {[
            ["3", "selected case studies"],
            ["4", "experience signals"],
            ["1", "clear portfolio system"]
          ].map(([value, label]) => (
            <Reveal key={label}>
              <div className="oat-panel rounded-lg p-5">
                <p className="font-display text-5xl leading-none">{value}</p>
                <p className="mt-3 text-sm font-medium muted">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 max-w-3xl font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
                Case studies, kept calm and legible.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 muted lg:justify-self-end">
              Each project page gives hiring teams a compact read of the brief,
              Megha's role, the design approach, and the outcome.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full rounded-xl oat-panel p-2 transition hover:-translate-y-1 hover:bg-[color-mix(in_oklab,var(--olive-950)_5%,transparent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--olive-600)]"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--olive-200)]">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center justify-between gap-3 text-xs font-semibold text-[var(--olive-600)]">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="mt-4 font-display text-4xl leading-none tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 text-sm muted">
                        <MapPin className="size-4" aria-hidden="true" />
                        {project.place}
                      </p>
                      <p className="mt-4 flex-1 text-sm leading-7 muted">{project.summary}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--olive-950)]">
                        Open case study
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-xl olive-dark p-6 sm:p-8 lg:grid-cols-[0.72fr_1fr] lg:p-10">
          <Reveal>
            <p className="text-sm font-semibold leading-6 text-[var(--olive-400)]">
              Experience notes
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              Resume cues without the resume clutter.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
              A concise arc of education, practice exposure, coordination, and
              next-role fit.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-lg bg-white/12">
            {experienceNotes.map((item, index) => (
              <Reveal key={item.phase} delay={index * 70}>
                <div className="grid gap-4 bg-[var(--olive-950)] p-5 sm:grid-cols-[0.32fr_0.68fr]">
                  <div>
                    <p className="font-display text-3xl text-[var(--olive-400)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-semibold text-white">{item.phase}</h3>
                    <p className="mt-1 text-sm text-white/48">{item.period}</p>
                  </div>
                  <p className="text-sm leading-7 text-white/68">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
          <Reveal>
            <div className="oat-panel-strong rounded-xl p-2">
              <div className="grid aspect-[4/5] place-items-center rounded-lg bg-[color-mix(in_oklab,var(--olive-950)_7%,transparent)] text-center">
                <div>
                  <p className="font-display text-8xl leading-none">MR</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--olive-600)]">
                    Headshot placeholder
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="eyebrow">About Megha</p>
            <h2 className="mt-3 max-w-3xl font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              A portfolio with room for the person behind the drawings.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 muted">
              The About page includes a portrait area, concise profile copy,
              capabilities, and the same quiet resume indicators used across the
              site.
            </p>
            <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
              <Link href="/about" className="btn-primary">
                Read about
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href={mailHref} className="btn-secondary">
                <Mail className="size-4" aria-hidden="true" />
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="border-y border-[var(--line)] py-8">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-center">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2 className="mt-2 font-display text-4xl leading-none tracking-tight sm:text-5xl">
                  What the portfolio should signal.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div key={item} className="oat-panel rounded-lg p-4 text-sm leading-7 muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 rounded-xl bg-[var(--olive-950)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-sm font-semibold leading-6 text-[var(--olive-400)]">Contact</p>
            <h2 className="mt-2 font-display text-4xl leading-none tracking-tight">
              Available for roles and portfolio conversations.
            </h2>
          </div>
          <a href={mailHref} className="btn-secondary bg-white text-[var(--olive-950)] hover:bg-[var(--olive-300)]">
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </Reveal>
      </section>

      <SimpleFooter />
    </main>
  );
}
