export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <div>
          <h1 className="text-3xl font-bold text-cyan-400 cursor-pointer">
            ApnaHaiNa
          </h1>
        </div>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8">

          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Services
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Portfolio
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>

          <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-400 transition">
            Get Quote
          </button>

        </nav>

      </div>

    </header>
  );
}