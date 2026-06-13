export default function Portfolio() {
  const projects = [
    {
      title: "Business Website",
      tech: "Next.js • Tailwind",
    },
    {
      title: "AI Chatbot",
      tech: "OpenAI • Node.js",
    },
    {
      title: "Cyber Security Dashboard",
      tech: "MERN • MongoDB",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >

              <div className="h-52 bg-gradient-to-br from-cyan-500 to-slate-900"></div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.tech}
                </p>

                <button className="mt-6 border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition">
                  View Project
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}