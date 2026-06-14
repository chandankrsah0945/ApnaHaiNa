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
    description: "Modern Next.js, MERN Stack and enterprise web applications.",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    description: "VAPT, SOC operations, security assessment and consulting.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description: "Workflow automation and AI-powered productivity systems.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description: "Cloud deployment, DevOps and scalable infrastructure.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    description: "Payment gateways and third-party API integrations.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    description: "Android and cross-platform mobile application development.",
  },
  {
    icon: "📈",
    title: "Digital Growth",
    description: "SEO, branding and digital business transformation.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-bg py-24 bg-[#030712]">
      <div className="max-w-7xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[5px] font-semibold text-center">
          Our Expertise
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">What We Do</h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6 text-lg">
          We build AI-powered digital products and secure technology solutions
          that help businesses innovate and grow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="
  group
  relative
  overflow-hidden

  bg-slate-900/90

  border
  border-slate-800

  rounded-3xl

  p-8

  backdrop-blur-sm

  hover:-translate-y-4

  hover:border-cyan-400

  hover:shadow-[0_0_50px_rgba(34,211,238,0.25)]

  transition-all

  duration-500
  "
            >
              {/* Background Glow */}

              <div
                className="
  absolute
  -top-20
  -right-20

  w-40
  h-40

  rounded-full

  bg-cyan-500/10

  blur-3xl

  group-hover:scale-150

  transition-all

  duration-700
  "
              ></div>

              <div className="relative z-10">
                <div
                  className="
    text-5xl

    group-hover:scale-125

    transition-all

    duration-500
    "
                >
                  {service.icon}
                </div>

                <h3
                  className="
    text-2xl

    font-bold

    text-cyan-400

    mt-6

    group-hover:text-white

    transition-all
    "
                >
                  {service.title}
                </h3>

                <p
                  className="
    text-gray-400

    mt-5

    leading-8
    "
                >
                  {service.description}
                </p>

                <button
                  className="
      mt-8

      text-cyan-400

      font-semibold

      inline-block

      group-hover:translate-x-3

      group-hover:text-white

      transition-all

      duration-300
      "
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}