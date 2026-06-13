export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Build Something Great
        </h2>

        <p className="text-gray-400 mt-6 max-w-3xl text-xl">
          Ready to grow your business? Contact us for AI,
          Web Development and Cyber Security solutions.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-cyan-400 font-bold text-xl">
                Email
              </h3>

              <p className="mt-3">contact@apnahaina.com</p>
              <p>info@apnahaina.com</p>
              <p>support@apnahaina.com</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-cyan-400 font-bold text-xl">
                Business
              </h3>

              <p className="mt-3">
                AI Solutions
              </p>

              <p>
                Full Stack Development
              </p>

              <p>
                Cyber Security Services
              </p>

            </div>

          </div>

          {/* Right Side */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
            />

            <button
              className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}