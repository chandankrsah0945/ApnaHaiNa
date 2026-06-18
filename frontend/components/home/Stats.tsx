import { socialProofMetrics } from "@/components/shared/companyMetrics";

export default function Stats() {
  return (
    <section className="bg-slate-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-semibold uppercase tracking-widest text-cyan-400">
          SOCIAL PROOF
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Why Clients Choose ApnaHaiNa
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          Premium delivery is not just about visuals. It is about fast
          communication, reliable execution and trust you can measure.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {socialProofMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-slate-700/80 bg-slate-800/90 p-8 text-center shadow-[0_24px_60px_rgba(2,6,23,0.22)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_24px_60px_rgba(8,145,178,0.16)]"
            >
              <div className="mx-auto h-px w-full max-w-[7rem] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
              <h3 className="mt-6 text-5xl font-bold text-cyan-400">
                {metric.value}
              </h3>

              <p className="mt-4 text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
