import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mailHref } from "../lib/portfolio";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color-mix(in_oklab,var(--olive-950)_10%,transparent)] bg-[color-mix(in_oklab,var(--olive-100)_86%,transparent)] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-3 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid size-8 place-items-center rounded-full bg-[var(--olive-950)] font-display text-base text-white">
            M
          </span>
          <span className="hidden text-sm font-semibold leading-5 text-[var(--olive-950)] min-[380px]:block">
            Megha Rathod
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-center overflow-x-auto">
          <div className="flex rounded-full bg-[color-mix(in_oklab,var(--olive-950)_5%,transparent)] p-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold leading-5 text-[color-mix(in_oklab,var(--olive-950)_72%,transparent)] transition hover:bg-[var(--olive-100)] hover:text-[var(--olive-950)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--olive-600)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <a href={mailHref} className="btn-primary shrink-0 !px-3 !py-1.5 text-xs">
          <span className="hidden sm:inline">Contact</span>
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
