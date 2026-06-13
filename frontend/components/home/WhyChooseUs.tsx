export default function WhyChooseUs() {
  const features = [
    "AI Powered Solutions",
    "Enterprise Web Development",
    "Cyber Security First Approach",
    "Business Automation",
  ];

  const stats = [
    {
      number: "100+",
      label: "Projects",
    },
    {
      number: "50+",
      label: "Clients",
    },
    {
      number: "99%",
      label: "Success Rate",
    },
    {
      number: "24/7",
      label: "Support",
    },
  ];

  return (
    <section
      id="why-us"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <div>

          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            We Build
            <span className="text-cyan-400">
              {" "}Digital Success
            </span>
          </h2>

          <p className="text-gray-400 text-xl mt-8 leading-9">
            We combine Artificial Intelligence,
            Full Stack Development and Cyber Security
            to help businesses grow faster,
            stay secure and automate operations.
          </p>

          <div className="mt-10 space-y-5">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                  ✓
                </div>

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="absolute inset-0 blur-3xl bg-cyan-500/10 rounded-full"></div>

          <div className="relative bg-slate-900 border border-cyan-500/20 rounded-3xl p-10">

            <div className="grid grid-cols-2 gap-6">

              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-2xl p-6 hover:border-cyan-400 border border-transparent transition duration-300"
                >

                  <h3 className="text-5xl font-bold text-cyan-400">
                    {stat.number}
                  </h3>

                  <p className="text-gray-400 mt-3">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/10 border border-cyan-500/20">

              <h3 className="text-3xl font-bold text-cyan-400">
                AI + Security + Development
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Modern businesses need more than a website.
                We build secure digital ecosystems powered by
                AI, automation and scalable technology.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}