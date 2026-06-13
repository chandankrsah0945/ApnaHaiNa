export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
              Welcome To ApnaHaiNa
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6">
              Build
              <span className="text-cyan-400"> Smarter </span>
              <br />
              Secure
              <span className="text-cyan-400"> Faster </span>
              <br />
              Grow Digitally
            </h1>

            <p className="text-gray-400 text-xl mt-8 max-w-xl leading-9">
              We help startups and businesses build AI applications,
              modern websites, cyber security solutions and business
              automation systems.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl text-black font-semibold">
                Start Your Project
              </button>

              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-4 rounded-xl">
                Explore Services
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  100+
                </h2>
                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  AI
                </h2>
                <p className="text-gray-400 mt-2">
                  Powered
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h2>
                <p className="text-gray-400 mt-2">
                  Support
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-cyan-400">
                  99%
                </h2>
                <p className="text-gray-400 mt-2">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center items-center">

            <div className="w-[420px] h-[420px] border border-cyan-500/30 rounded-full flex items-center justify-center">

              <div className="w-[300px] h-[300px] border border-cyan-400/30 rounded-full flex items-center justify-center">

                <div className="w-36 h-36 rounded-full bg-cyan-500/20 backdrop-blur-lg border border-cyan-400 flex items-center justify-center">

                  <span className="text-3xl font-bold text-cyan-300">
                    AI
                  </span>

                </div>

              </div>

            </div>

            {/* Floating Cards */}

            <div className="absolute top-8 left-0 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
              🔒 Cyber Security
            </div>

            <div className="absolute bottom-12 left-8 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
              ⚡ Automation
            </div>

            <div className="absolute top-20 right-0 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
              💻 Web Development
            </div>

            <div className="absolute bottom-0 right-10 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
              🤖 AI Solutions
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}