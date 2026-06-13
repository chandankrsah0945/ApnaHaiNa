const services = [
  {
    icon: "🤖",
    title: "AI Solutions",
    description:
      "Custom AI applications, chatbots and business automation systems.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Modern Next.js, MERN Stack and enterprise web applications.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    description:
      "VAPT, SOC operations, security assessment and consulting.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "Workflow automation and AI-powered productivity systems.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Cloud deployment, DevOps and scalable infrastructure.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    description:
      "Payment gateways and third-party API integrations.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Android and cross-platform mobile application development.",
  },
  {
    icon: "📈",
    title: "Digital Growth",
    description:
      "SEO, branding and digital business transformation.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[5px] font-semibold text-center">
          Our Expertise
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          What We Do
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6 text-lg">
          We build AI-powered digital products and secure technology
          solutions that help businesses innovate and grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-cyan-500/20
              hover:shadow-2xl
              transition duration-300"
            >

              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mt-6">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-5 leading-8">
                {service.description}
              </p>

              <button className="mt-8 text-cyan-400 font-semibold hover:translate-x-2 transition">
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}