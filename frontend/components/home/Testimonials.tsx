import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder",
    company: "TechNova",
    review:
      "ApnaHaiNa helped us launch a sharper digital presence with secure execution and very clear project communication from day one.",
  },
  {
    name: "Priya Verma",
    role: "Marketing Lead",
    company: "EduTech Labs",
    review:
      "The team understood both product quality and conversion goals. The final website felt premium, fast and business-ready.",
  },
  {
    name: "Amit Kumar",
    role: "Operations Head",
    company: "SecureGrid Systems",
    review:
      "What stood out most was the balance of speed, trust and security thinking. We always knew what was being built and why.",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-center font-semibold uppercase tracking-widest text-cyan-400">
          CLIENT STORIES
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          What Our Clients Say
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400">
          We focus on long-term partnerships through clear execution,
          conversion-aware product thinking and secure digital delivery.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(2,6,23,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_60px_rgba(8,145,178,0.18)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-lg font-bold text-cyan-100">
                  {getInitials(item.name)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-400">
                    {item.role} | {item.company}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} aria-hidden="true" className="text-sm" />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-300">{item.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
