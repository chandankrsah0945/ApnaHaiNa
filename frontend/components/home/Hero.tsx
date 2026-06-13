export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">

      <div className="max-w-7xl mx-auto px-6">

        <span className="text-cyan-400 font-semibold tracking-widest">
          WELCOME TO APNAHAINA
        </span>

        <h1 className="text-6xl md:text-8xl font-bold mt-6 leading-tight">
          Build Your
          <br />
          Digital Future
        </h1>

        <p className="text-gray-400 text-xl mt-8 max-w-2xl">
          AI Solutions, Full Stack Development,
          Cyber Security Services and Business Growth
          under one platform.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition">
            Start Project
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            Explore Services
          </button>

        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              100+
            </h2>
            <p className="text-gray-400">
              Projects
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              AI
            </h2>
            <p className="text-gray-400">
              Powered
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">
              24/7
            </h2>
            <p className="text-gray-400">
              Support
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}