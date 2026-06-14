export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center">
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px] animate-pulse"></div>

      <div className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[150px] animate-pulse"></div>

      {/* Grid */}

      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT */}

        <div>
          <p className="text-cyan-400 uppercase tracking-[8px] font-semibold">
            Welcome To ApnaHaiNa
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mt-6 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            Build
            <span className="text-cyan-400"> Smarter</span>
            <br />
            Secure
            <span className="text-cyan-400"> Faster</span>
            <br />
            Grow Digitally
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-10 max-w-xl">
            We help startups and businesses build AI applications, secure
            platforms, modern websites and business automation systems.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>

            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300">
              Explore Services
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-500">
              <h3 className="text-4xl font-bold text-cyan-400">100+</h3>

              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-500">
              <h3 className="text-4xl font-bold text-cyan-400">AI</h3>

              <p className="text-gray-400 mt-2">Powered</p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-500">
              <h3 className="text-4xl font-bold text-cyan-400">24/7</h3>

              <p className="text-gray-400 mt-2">Support</p>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-500">
              <h3 className="text-4xl font-bold text-cyan-400">99%</h3>

              <p className="text-gray-400 mt-2">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center items-center h-[650px]">
          {/* Outer Orbit */}

          <div
            className="absolute w-[420px] h-[420px] rounded-full border border-cyan-500/20 animate-spin"
            style={{ animationDuration: "35s" }}
          />

          {/* Inner Orbit */}

          <div
            className="absolute w-[300px] h-[300px] rounded-full border border-cyan-500/30 animate-spin"
            style={{
              animationDuration: "20s",
              animationDirection: "reverse",
            }}
          />

          {/* AI Center */}

          <div className="w-44 h-44 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-7xl font-black text-cyan-300 shadow-[0_0_80px_rgba(34,211,238,0.4)] animate-pulse">
            AI
          </div>

          {/* Floating Tags */}

          <div className="absolute top-10 left-5 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500">
            🔒 Cyber Security
          </div>

          <div className="absolute top-20 right-0 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500">
            💻 Web Development
          </div>

          <div className="absolute bottom-20 left-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500">
            ⚡ Automation
          </div>

          <div className="absolute bottom-5 right-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-6 py-3 rounded-2xl hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500">
            🤖 AI Solutions
          </div>
        </div>
      </div>
    </section>
  );
}
