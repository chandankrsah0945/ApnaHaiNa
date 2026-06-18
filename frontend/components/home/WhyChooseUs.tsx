import { FaCheck } from "react-icons/fa";

import { companyMetrics } from "@/components/shared/companyMetrics";

export default function WhyChooseUs() {
  const features = [
    "AI Powered Solutions",
    "Enterprise Web Development",
    "Cyber Security First Approach",
    "Business Automation",
  ];

  return (
    <section id="why-us" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold leading-tight">
            We Build
            <span className="text-cyan-400"> Digital Success</span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            We combine Artificial Intelligence, Full Stack Development and
            Cyber Security to help businesses grow faster, stay secure and
            automate operations.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-[0.7rem] text-black">
                  <FaCheck aria-hidden="true" />
                </div>

                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-cyan-500/20 bg-slate-900 p-10">
            <div className="grid grid-cols-2 gap-6">
              {companyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-transparent bg-slate-800 p-6 transition duration-300 hover:border-cyan-400"
                >
                  <h3 className="text-5xl font-bold text-cyan-400">
                    {metric.value}
                  </h3>

                  <p className="mt-3 text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">
                AI + Security + Development
              </h3>

              <p className="mt-4 leading-8 text-gray-300">
                Modern businesses need more than a website. We build secure
                digital ecosystems powered by AI, automation and scalable
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
