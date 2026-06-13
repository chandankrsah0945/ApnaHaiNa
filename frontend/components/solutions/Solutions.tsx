export default function Solutions() {
  const solutions = [
    "Password Management System",
    "AI Business Assistant",
    "Cyber Security Dashboard",
    "Business Website Development",
    "ERP & CRM Solutions",
    "Custom Software Development",
  ];

  return (
    <section
      id="solutions"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-center">
          Our Solutions
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Smart Digital Products
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          We build secure, scalable and AI-powered digital
          solutions for startups and businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {solutions.map((item, index) => (
            <div
              key={index}
              className="
              bg-slate-800
              rounded-2xl
              p-8
              border
              border-slate-700
              hover:border-cyan-400
              hover:-translate-y-2
              transition
              duration-300
              "
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {item}
              </h3>

              <p className="text-gray-400 mt-4">
                Innovative and business-focused digital
                solution tailored to your needs.
              </p>

              <button
                className="
                mt-6
                text-cyan-400
                font-semibold
                hover:text-cyan-300
                "
              >
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}