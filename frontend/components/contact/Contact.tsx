export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          CONTACT US
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Build Something Great
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-xl leading-8">
          Ready to transform your business with AI, Web Development
          and Cyber Security solutions? Let's discuss your project.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

              <h3 className="text-cyan-400 text-2xl font-bold">
                📧 Email
              </h3>

              <div className="mt-5 space-y-2 text-lg text-gray-300">
                <p>contact@apnahaina.com</p>
                <p>info@apnahaina.com</p>
              </div>

            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

              <h3 className="text-cyan-400 text-2xl font-bold">
                📍 Location
              </h3>

              <p className="mt-5 text-lg text-gray-300">
                Gurgaon, Haryana, India
              </p>

            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">

              <h3 className="text-cyan-400 text-2xl font-bold">
                🚀 Why Work With Us
              </h3>

              <ul className="mt-5 space-y-3 text-gray-300">

                <li>✓ Free Consultation</li>

                <li>✓ Secure Development</li>

                <li>✓ AI Powered Solutions</li>

                <li>✓ 24 Hour Response Time</li>

              </ul>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
              />

              <select
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
              >
                <option>Choose Service</option>
                <option>AI Solutions</option>
                <option>Web Development</option>
                <option>Cyber Security</option>
                <option>Business Automation</option>
                <option>Custom Software</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-cyan-400"
              />

              <button
                className="w-full bg-cyan-500 text-black py-4 rounded-xl font-bold hover:bg-cyan-400 transition"
              >
                🚀 Get Free Consultation
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}