const stats = [
  { value: "100+", label: "Projects" },
  { value: "24/7", label: "Support" },
  { value: "AI", label: "Powered" },
];

const aboutCards = [
  {
    eyebrow: "Our Mission",
    title: "Deliver affordable, scalable and high-quality digital solutions",
    description:
      "that help businesses grow faster.",
  },
  {
    eyebrow: "Our Vision",
    title: "Build India's trusted AI, Cyber Security and Technology",
    description: "ecosystem for the future.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-bg relative overflow-hidden bg-slate-900 px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/40 px-4 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 sm:text-sm">
              About Us
            </p>
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            One Platform For
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Modern Digital Solutions
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9 md:text-xl">
            ApnaHaiNa helps startups, businesses and creators build their
            digital future through AI, Full Stack Development, Cyber Security
            and Business Automation.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-5">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-3xl border border-slate-700/80 bg-slate-950/45 p-5 shadow-[0_20px_40px_rgba(2,6,23,0.24)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 h-px w-full bg-gradient-to-r from-cyan-400/80 via-cyan-300/20 to-transparent" />
                <h3 className="text-3xl font-black tracking-[-0.04em] text-cyan-300 sm:text-4xl">
                  {stat.value}
                </h3>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {aboutCards.map((card) => (
            <article
              key={card.eyebrow}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-700/80 bg-slate-950/55 p-7 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-transform duration-500 group-hover:scale-110" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  {card.eyebrow}
                </span>

                <h3 className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
