import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link href="/">
          <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
            ApnaHaiNa
          </h1>
        </Link>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            href="/#services"
            className="hover:text-cyan-400 transition"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className="hover:text-cyan-400 transition"
          >
            Portfolio
          </Link>

          <Link
            href="/#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>

          <Link
            href="/quote"
            className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-400 transition"
          >
            Get Quote
          </Link>

        </nav>

      </div>
    </header>
  );
}