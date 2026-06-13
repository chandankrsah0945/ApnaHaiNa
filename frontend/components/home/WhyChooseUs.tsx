export default function WhyChooseUs() {
  const features = [
    "Modern Next.js Development",
    "AI Powered Solutions",
    "Cyber Security Expertise",
    "Fast & Secure Deployment",
    "Scalable Architecture",
    "24/7 Technical Support",
  ];

  return (
    <section
      id="why"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Why Choose Us
        </p>

        <h2 className="text-5xl font-bold mt-4">
          We Build Digital Success
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl text-xl">
          We combine AI, Full Stack Development and
          Cyber Security to help businesses grow faster
          and stay secure.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl text-cyan-400 font-bold">
                ✓
              </h3>

              <p className="mt-4 text-lg">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}