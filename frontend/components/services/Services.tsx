export default function Services() {
  const services = [
    {
      title: "AI Solutions",
      description:
        "Custom AI tools, automation and Generative AI applications."
    },
    {
      title: "Web Development",
      description:
        "Modern MERN Stack and Next.js websites with scalable architecture."
    },
    {
      title: "Cyber Security",
      description:
        "Security assessment, VAPT, SOC operations and risk management."
    },
    {
      title: "Digital Growth",
      description:
        "SEO, branding, business automation and digital transformation."
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Our Services
        </p>

        <h2 className="text-5xl font-bold mt-4">
          What We Do
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}