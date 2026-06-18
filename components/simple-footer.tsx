import Link from "next/link";

export function SimpleFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--olive-100)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[color-mix(in_oklab,var(--olive-950)_62%,transparent)] sm:flex-row sm:items-center sm:justify-between">
        <p>Megha Rathod, Architect</p>
        <div className="flex gap-4 font-semibold text-[var(--olive-950)]">
          <Link href="/#work" className="hover:text-[var(--olive-600)]">
            Work
          </Link>
          <Link href="/about" className="hover:text-[var(--olive-600)]">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
