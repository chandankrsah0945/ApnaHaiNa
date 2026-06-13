export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your business goals and project requirements.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Planning architecture, technology stack and roadmap.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Creating modern UI/UX with a user-first approach.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Building scalable AI, Web and Automation solutions.",
    },
    {
      number: "05",
      title: "Security Testing",
      description:
        "Performing security assessments and quality assurance.",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "Deploying projects with long-term support and maintenance.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            How We Work
          </p>

          <h2 className="text-5xl font-bold mt-4">
            From Idea To Innovation
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            We follow a structured process to build secure,
            scalable and AI-powered digital products.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl font-bold">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-8">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}