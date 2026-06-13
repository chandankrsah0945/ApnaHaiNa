export default function Stats() {
  const stats = [
    {
      number: "150+",
      title: "Projects Delivered",
    },
    {
      number: "50+",
      title: "Happy Clients",
    },
    {
      number: "15+",
      title: "AI Solutions",
    },
    {
      number: "99%",
      title: "Client Satisfaction",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-center">
          OUR ACHIEVEMENTS
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Numbers That Build Trust
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6">
          We focus on innovation, security and long-term partnerships
          that help businesses grow digitally.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center
              border border-slate-700
              hover:border-cyan-400
              hover:-translate-y-2
              hover:shadow-lg
              hover:shadow-cyan-500/20
              transition duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}