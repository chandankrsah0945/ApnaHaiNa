import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-cyan-400">
              START YOUR JOURNEY
            </p>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Ready To Build Your
              <span className="text-cyan-400"> Next Big Idea?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              We help startups and businesses create AI-powered, secure and
              scalable digital products that grow faster.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-6 md:flex-row">
              <Link href="/quote" className="hero-button-primary hero-button-strong">
                <span>Start Your Project</span>
              </Link>

              <Link href="/#contact" className="hero-button-secondary">
                <span>Book Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
