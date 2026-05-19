import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#1e252e] text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight">
            FW Roofing
          </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Pitched, flat & lead work across Cranleigh.</p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--orange)]">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/75 transition-colors hover:text-[var(--orange)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-[var(--orange)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/75 transition-colors hover:text-[var(--orange)]">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--orange)]">Contact</p>
            <div className="mt-4 space-y-2 text-sm opacity-85">
              <p>Little Mead, Cranleigh</p>
              <p>
                <a href="tel:01483200001" className="text-white/75 transition-colors hover:text-[var(--orange)]">
                  01483 200 001
                </a>
              </p>
              <p>Six-day service (demo)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-current/15 pt-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} FW Roofing Solutions</p>
          <p>Demo concept site for outreach — not affiliated with the live business.</p>
        </div>
      </div>
    </footer>
  );
}
