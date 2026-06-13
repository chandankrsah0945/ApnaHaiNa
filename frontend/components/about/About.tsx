export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          About Us
        </p>

        <h2 className="text-5xl font-bold mt-4">
          One Platform For
          <br />
          Modern Digital Solutions
        </h2>

        <p className="text-gray-400 mt-8 max-w-3xl text-xl leading-9">
          ApnaHaiNa helps startups, businesses and creators
          build their digital future through AI, Full Stack
          Development, Cyber Security and Business Automation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              Our Mission
            </h3>

            <p className="text-gray-300 mt-4">
              Deliver affordable and high-quality digital
              solutions for everyone.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              Our Vision
            </h3>

            <p className="text-gray-300 mt-4">
              Build India's trusted AI and Technology ecosystem.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}