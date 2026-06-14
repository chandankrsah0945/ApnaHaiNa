export default function About() {
  return (
    <section
      id="about"
      className="section-bg bg-slate-900 text-white py-28 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
            About Us
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            One Platform For
            <br />
            <span className="text-cyan-400">
              Modern Digital Solutions
            </span>
          </h2>

          <p className="text-gray-400 mt-8 text-xl leading-10">
            ApnaHaiNa helps startups, businesses and creators
            build their digital future through AI,
            Full Stack Development, Cyber Security
            and Business Automation.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                100+
              </h3>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                24/7
              </h3>

              <p className="text-gray-400 mt-2">
                Support
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">
                AI
              </h3>

              <p className="text-gray-400 mt-2">
                Powered
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          <div
            className="
            group
            bg-slate-800/80
            backdrop-blur-sm
            border
            border-slate-700
            rounded-3xl
            p-8

            hover:border-cyan-400
            hover:-translate-y-2
            hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]

            transition-all
            duration-500
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              🚀 Our Mission
            </h3>

            <p className="text-gray-300 mt-5 leading-8">
              Deliver affordable, scalable and
              high-quality digital solutions
              that help businesses grow faster.
            </p>
          </div>

          <div
            className="
            group
            bg-slate-800/80
            backdrop-blur-sm
            border
            border-slate-700
            rounded-3xl
            p-8

            hover:border-cyan-400
            hover:-translate-y-2
            hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]

            transition-all
            duration-500
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              🌍 Our Vision
            </h3>

            <p className="text-gray-300 mt-5 leading-8">
              Build India's trusted AI,
              Cyber Security and Technology
              ecosystem for the future.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}