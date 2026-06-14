import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Password Management System",
      description:
        "Secure password storage with encryption and authentication.",
      category: "Cyber Security",
      link: "/portfolio/password-management-system",
    },
    {
      title: "AI Business Assistant",
      description:
        "AI-powered business automation and intelligent workflows.",
      category: "Artificial Intelligence",
      link: "/portfolio/ai-business-assistant",
    },
    {
      title: "Cyber Security Dashboard",
      description:
        "Threat monitoring and security analytics platform.",
      category: "Security Analytics",
      link: "/portfolio/cyber-security-dashboard",
    },
    {
      title: "Business Website Development",
      description:
        "Modern websites for startups and enterprises.",
      category: "Web Development",
      link: "/portfolio/business-website-development",
    },
    {
      title: "ERP & CRM Solutions",
      description:
        "Custom business management systems.",
      category: "Enterprise Solutions",
      link: "/portfolio/erp-crm-solutions",
    },
    {
      title: "Custom Software Development",
      description:
        "Tailored software solutions for business growth.",
      category: "Software Engineering",
      link: "/portfolio/custom-software-development",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}

      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
            Our Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Build.
            <span className="text-cyan-400"> Secure.</span>
            Innovate.
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 text-lg leading-8">
            We develop AI applications, secure web platforms, cyber security
            solutions and digital products that help businesses grow.
          </p>

          <div className="flex justify-center gap-5 mt-10">
            <Link
              href="/"
              className="bg-cyan-500 text-black px-8 py-3 rounded-xl hover:bg-cyan-400 transition"
            >
              Back To Home
            </Link>

            <a
              href="#projects"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Featured Projects */}

      <div id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-2xl mx-auto">
          A collection of projects focused on AI, Full Stack Development and
          Cyber Security.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >
              <p className="text-cyan-400 text-sm uppercase tracking-widest">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mt-5">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                {project.description}
              </p>

              <Link
                href={project.link}
                className="inline-block mt-6 text-cyan-400 font-semibold hover:translate-x-2 transition"
              >
                Explore Project →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}

      <div className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold">
            Have a Project in Mind?
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Let's build secure, scalable and AI-powered digital products
            together.
          </p>

          <Link
            href="/#contact"
            className="inline-block mt-10 bg-cyan-500 text-black px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}