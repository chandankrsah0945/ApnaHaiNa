const stats = [
  { value: "100+", label: "Projects" },
  { value: "AI", label: "Powered" },
  { value: "24/7", label: "Support" },
  { value: "99%", label: "Satisfaction" },
];

const capabilityPills = [
  {
    title: "Cyber Security",
    position:
      "left-0 top-8 sm:left-2 lg:-left-4 lg:top-12 hero-float-slow",
  },
  {
    title: "Web Development",
    position:
      "right-0 top-0 sm:right-2 lg:-right-4 lg:top-16 hero-float-medium",
  },
  {
    title: "Automation",
    position:
      "bottom-24 left-1 sm:left-6 lg:left-4 hero-float-medium",
  },
  {
    title: "AI Solutions",
    position:
      "bottom-8 right-1 sm:right-6 lg:right-4 hero-float-slow",
  },
];

export default function Hero() {
  return (
    <section className="hero-shell relative flex min-h-screen items-center overflow-hidden bg-[#020617] text-white">
      <div className="hero-mesh absolute inset-0" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-left" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-right" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-bottom" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 px-6 py-28 sm:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:px-10">
        <div className="flex max-w-3xl flex-col">
          <div className="hero-panel inline-flex w-fit items-center gap-3 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-cyan-200/90 sm:text-sm">
              Welcome To ApnaHaiNa
            </p>
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            Build
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Smarter
            </span>
            <br />
            Secure
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Faster
            </span>
            <br />
            Grow Digitally
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9 md:text-xl">
            We help startups and businesses build AI applications, secure
            platforms, modern websites and business automation systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <button className="hero-button-primary" type="button">
              <span>Start Your Project</span>
            </button>

            <button className="hero-button-secondary" type="button">
              <span>Explore Services</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="hero-chip">AI Products</span>
            <span className="hero-chip">Secure Web Platforms</span>
            <span className="hero-chip">Business Automation</span>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="hero-stat-card">
                <div className="hero-stat-accent" aria-hidden="true" />
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

        <div className="relative flex min-h-[480px] items-center justify-center sm:min-h-[560px] lg:min-h-[640px]">
          <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-middle" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />

          <div className="hero-panel relative flex h-[320px] w-full max-w-[520px] items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/45 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.65)] backdrop-blur-2xl sm:h-[420px] sm:rounded-[2.25rem]">
            <div className="absolute inset-6 rounded-[1.75rem] border border-white/6" />
            <div className="absolute inset-x-10 top-6 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

            <div className="hero-core-ring absolute h-40 w-40 rounded-full sm:h-52 sm:w-52" />
            <div className="hero-core-ring hero-core-ring-delayed absolute h-56 w-56 rounded-full sm:h-72 sm:w-72" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="hero-ai-core">
                <span className="text-5xl font-black tracking-[-0.08em] text-cyan-100 sm:text-6xl">
                  AI
                </span>
              </div>
              <p className="mt-6 max-w-xs text-sm leading-6 text-slate-300 sm:text-base">
                Premium digital solutions across AI, security, web development,
                and automation.
              </p>
            </div>

            {capabilityPills.map((pill) => (
              <div
                key={pill.title}
                className={`hero-floating-pill absolute ${pill.position}`}
              >
                <span className="hero-floating-dot" aria-hidden="true" />
                <span>{pill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
