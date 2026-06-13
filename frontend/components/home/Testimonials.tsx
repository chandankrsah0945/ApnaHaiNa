export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Startup Founder",
      review:
        "ApnaHaiNa helped us build our business website and AI automation system. The process was smooth and professional.",
    },
    {
      name: "Priya Verma",
      company: "E-Commerce Business",
      review:
        "Their web development and security approach gave us confidence to scale our online business.",
    },
    {
      name: "Amit Kumar",
      company: "Tech Entrepreneur",
      review:
        "From planning to deployment, the team delivered exactly what we needed with modern technology.",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-center">
          CLIENT STORIES
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          What Our Clients Say
        </h2>

        <p className="text-gray-400 text-center mt-6 max-w-3xl mx-auto">
          We focus on building long-term partnerships through
          innovation, transparency and secure digital solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >

              <div className="text-cyan-400 text-4xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8">
                {item.review}
              </p>

              <div className="mt-8 border-t border-slate-700 pt-5">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-cyan-400">
                  {item.company}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}