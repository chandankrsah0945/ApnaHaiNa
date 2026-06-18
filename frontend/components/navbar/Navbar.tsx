import Link from "next/link";

import BrandMark from "@/components/shared/BrandMark";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="ApnaHaiNa Home">
          <BrandMark
            iconClassName="h-11 w-11"
            textClassName="text-xl font-semibold tracking-[-0.03em] text-white"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-cyan-400">
            Home
          </Link>
          <Link href="/#about" className="transition hover:text-cyan-400">
            About
          </Link>
          <Link href="/#services" className="transition hover:text-cyan-400">
            Services
          </Link>
          <Link href="/portfolio" className="transition hover:text-cyan-400">
            Portfolio
          </Link>
          <Link href="/#contact" className="transition hover:text-cyan-400">
            Contact
          </Link>
          <Link
            href="/quote"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/90 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
