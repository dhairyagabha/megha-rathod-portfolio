import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "../../../components/reveal";
import { SimpleFooter } from "../../../components/simple-footer";
import { SiteHeader } from "../../../components/site-header";
import { caseStudies, getCaseStudy, mailHref } from "../../../lib/portfolio";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return {
      title: "Case Study | Megha Rathod"
    };
  }

  return {
    title: `${project.title} | Megha Rathod`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Megha Rathod`,
      description: project.summary,
      images: [
        {
          url: project.image,
          alt: project.alt
        }
      ]
    }
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className="min-h-screen oat-shell text-[var(--olive-950)]">
      <SiteHeader />

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--olive-600)] hover:text-[var(--olive-950)]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Selected work
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>
              <h1 className="mt-4 font-display text-6xl leading-[0.92] tracking-tight text-balance sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-2xl text-base leading-8 muted sm:text-lg">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[project.place, project.scale, project.status].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[color-mix(in_oklab,var(--olive-950)_6%,transparent)] px-3 py-1.5 text-xs font-semibold text-[var(--olive-700)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="oat-panel rounded-xl p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--olive-200)] sm:aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.34fr_0.66fr]">
          <Reveal>
            <div className="oat-panel rounded-lg p-5">
              <p className="eyebrow">Project role</p>
              <p className="mt-4 text-sm leading-7 muted">{project.role}</p>
              <div className="mt-6 flex items-center gap-2 text-sm muted">
                <MapPin className="size-4" aria-hidden="true" />
                {project.place}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-lg bg-[var(--line)]">
            {[
              ["Challenge", project.challenge],
              ["Approach", project.approach],
              ["Outcome", project.outcome]
            ].map(([title, text], index) => (
              <Reveal key={title} delay={index * 70}>
                <div className="bg-[var(--olive-100)] p-5 sm:p-6">
                  <h2 className="font-display text-4xl leading-none tracking-tight">{title}</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 muted sm:text-base sm:leading-8">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-xl olive-dark p-6 sm:p-8 lg:grid-cols-[0.78fr_1fr] lg:p-10">
          <Reveal>
            <p className="text-sm font-semibold leading-6 text-[var(--olive-400)]">
              Design focus
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none tracking-tight text-balance sm:text-6xl">
              {project.highlight}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.scope.map((item) => (
                <div key={item} className="rounded-lg bg-white/8 p-4 text-sm leading-7 text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-[var(--line)] py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Continue</p>
            <h2 className="mt-2 font-display text-4xl leading-none tracking-tight">
              Review another case study or start a conversation.
            </h2>
          </div>
          <div className="flex flex-col gap-3 min-[430px]:flex-row">
            <Link href={`/work/${nextProject.slug}`} className="btn-secondary">
              Next work
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={mailHref} className="btn-primary">
              <Mail className="size-4" aria-hidden="true" />
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>

      <SimpleFooter />
    </main>
  );
}
