import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Password Management Tool",
      description:
        "A secure password manager with encrypted storage and authentication.",
      tech: "PHP • MySQL • Cyber Security",
      image: "/images/password-mgr.png",
      github: "https://github.com/chandankrsah0945",
      demo: "#",
    },
    {
      title: "AI Web Application",
      description:
        "Modern AI-powered web application built with Next.js and OpenAI.",
      tech: "Next.js • OpenAI API • AI",
      image: "/images/ai-web-app.png",
      github: "https://github.com/chandankrsah0945",
      demo: "#",
    },
    {
      title: "Cyber Security Dashboard",
      description:
        "Security analytics and monitoring dashboard for threat management.",
      tech: "Python • Flask • Security Analytics",
      image: "/images/cyber-dashboard.png",
      github: "https://github.com/chandankrsah0945",
      demo: "#",
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

        <p className="text-gray-400 mt-4 max-w-2xl">
          Some of my recent projects in Full Stack Development,
          Artificial Intelligence, and Cyber Security.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
              bg-slate-800
              rounded-2xl
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-105
              hover:shadow-2xl
              hover:shadow-cyan-500/20
              "
            >

              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {project.description}
                </p>

                <p className="text-cyan-400 mt-4 font-medium">
                  {project.tech}
                </p>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    border
                    border-cyan-400
                    text-cyan-400
                    px-5
                    py-2
                    rounded-lg
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
                    bg-cyan-500
                    text-black
                    px-5
                    py-2
                    rounded-lg
                    hover:bg-cyan-400
                    transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}