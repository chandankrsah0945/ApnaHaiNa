export default function CTA() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12">

          {/* Glow Effect */}

          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="relative z-10 text-center">

            <p className="text-cyan-400 uppercase tracking-widest font-semibold">
              START YOUR JOURNEY
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              Ready To Build Your
              <span className="text-cyan-400"> Next Big Idea?</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-8">
              We help startups and businesses create AI-powered,
              secure and scalable digital products that grow faster.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">

              <button className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition">
                🚀 Start Your Project
              </button>

              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition">
                📞 Book Free Consultation
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}