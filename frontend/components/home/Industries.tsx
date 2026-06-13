export default function Industries() {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "AI solutions, hospital management and secure healthcare systems.",
    },
    {
      icon: "🏦",
      title: "Finance",
      description:
        "Secure dashboards, fintech platforms and business analytics.",
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description:
        "Modern online stores, payment integration and automation.",
    },
    {
      icon: "🎓",
      title: "Education",
      description:
        "Learning platforms, student portals and digital classrooms.",
    },
    {
      icon: "🚀",
      title: "Startups",
      description:
        "MVP development, AI products and scalable web applications.",
    },
    {
      icon: "🏭",
      title: "Enterprise",
      description:
        "Custom software, automation and digital transformation.",
    },
  ];

  return (
    <section
      id="industries"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Industries We Serve
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Solutions For Every Business
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6">
            We help startups, enterprises and growing businesses
            accelerate digital transformation with AI, secure
            development and automation.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}