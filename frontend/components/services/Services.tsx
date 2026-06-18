import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import { serviceItems } from "@/components/services/serviceData";

export default function Services() {
  return (
    <section
      id="services"
      className="section-bg bg-[#030712] px-6 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/40 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:text-sm">
              Our Expertise
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            What We Do
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            We build AI-powered digital products and secure technology solutions
            that help businesses innovate and grow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {serviceItems.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/70 p-7 shadow-[0_24px_60px_rgba(2,6,23,0.3)] backdrop-blur-xl transition-all duration-400 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_28px_70px_rgba(8,145,178,0.22)] sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-14 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />
                <div className="absolute -bottom-20 left-8 h-24 w-24 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-4xl shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                      <ServiceIcon
                        aria-hidden="true"
                        className="text-[2rem] text-cyan-200 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>

                    <div className="flex h-10 min-w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-3 text-xs font-semibold tracking-[0.25em] text-slate-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-8 flex-1">
                    <h3 className="text-2xl font-bold tracking-[-0.03em] text-cyan-300 transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-2 text-sm text-slate-300">
                      <p>{service.priceFrom}</p>
                      <p className="text-slate-500">{service.deliveryTimeline}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-3 text-sm font-semibold text-cyan-300 transition-all duration-300 group-hover:text-white"
                    >
                      <span>Learn More</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-base transition-all duration-300 group-hover:translate-x-1 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
                        <FaArrowRight aria-hidden="true" className="text-sm" />
                      </span>
                    </Link>

                    <span className="h-2 w-2 rounded-full bg-slate-700 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan-400" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
