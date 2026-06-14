import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function QuotePage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}

          <div className="text-center">

            <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
              Start Your Project
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-6">
              Get A
              <span className="text-cyan-400"> Free Quote</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-8 leading-8">
              Tell us about your project. Our team will analyze your
              requirements and get back to you with the best solution.
            </p>

          </div>

          {/* Form */}

          <div className="mt-20 bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <form className="grid md:grid-cols-2 gap-8">

              {/* Full Name */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none"
                />
              </div>

              {/* Company */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none"
                />
              </div>

              {/* Service */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Service Required
                </label>

                <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none">

                  <option>AI Solutions</option>

                  <option>Web Development</option>

                  <option>Cyber Security</option>

                  <option>ERP & CRM</option>

                  <option>Custom Software</option>

                  <option>Business Automation</option>

                </select>
              </div>

              {/* Budget */}

              <div>
                <label className="block mb-3 text-gray-300">
                  Budget Range
                </label>

                <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none">

                  <option>₹10,000 - ₹25,000</option>

                  <option>₹25,000 - ₹50,000</option>

                  <option>₹50,000 - ₹1,00,000</option>

                  <option>₹1,00,000+</option>

                </select>
              </div>

              {/* Description */}

              <div className="md:col-span-2">

                <label className="block mb-3 text-gray-300">
                  Project Description
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-400 outline-none"
                ></textarea>

              </div>

              {/* Button */}

              <div className="md:col-span-2 text-center">

                <button
                  type="submit"
                  className="bg-cyan-500 text-black font-semibold px-10 py-4 rounded-xl hover:bg-cyan-400 transition"
                >
                  Send Request
                </button>

              </div>

            </form>

          </div>

          {/* Bottom Section */}

          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                24 Hrs
              </h2>

              <p className="text-gray-400 mt-4">
                Fast Response
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                100+
              </h2>

              <p className="text-gray-400 mt-4">
                Projects Delivered
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                24/7
              </h2>

              <p className="text-gray-400 mt-4">
                Client Support
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}