import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiOpenai, label: "OpenAI" },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-slate-800/80 bg-slate-950/95 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Trusted Technologies
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
              Built with modern enterprise technologies
            </h2>
            <p className="mt-4 text-slate-400">
              We use proven frameworks and AI-ready platforms to deliver
              secure, scalable and production-grade products.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <article
                  key={technology.label}
                  className="group rounded-[1.5rem] border border-slate-800/80 bg-slate-900/80 px-4 py-5 text-center shadow-[0_18px_40px_rgba(2,6,23,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/35 hover:shadow-[0_18px_40px_rgba(8,145,178,0.16)]"
                >
                  <Icon
                    aria-hidden="true"
                    className="mx-auto text-2xl text-cyan-200 transition-colors duration-300 group-hover:text-white"
                  />
                  <p className="mt-3 text-sm font-semibold text-slate-200">
                    {technology.label}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
