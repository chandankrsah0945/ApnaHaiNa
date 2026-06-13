export default function TrustedBy() {
  const companies = [
    "Startups",
    "Businesses",
    "Entrepreneurs",
    "Digital Brands",
    "Agencies",
    "Enterprises",
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold text-center">
          TRUSTED BY
        </p>

        <h2 className="text-5xl font-bold text-center mt-4">
          Growing Businesses Choose Us
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6">
          We help startups, businesses and enterprises build secure,
          scalable and AI-powered digital products.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded-2xl py-8 text-center
              hover:border-cyan-400 hover:-translate-y-1
              hover:shadow-lg hover:shadow-cyan-500/20
              transition duration-300"
            >
              <span className="text-xl font-bold text-cyan-400">
                {company}
              </span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}