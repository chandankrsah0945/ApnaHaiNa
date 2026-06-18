import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { companyMetrics } from "@/components/shared/companyMetrics";

export default function QuotePage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
              Start Your Project
            </p>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl">
              Get A
              <span className="text-cyan-400"> Free Quote</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Tell us about your project. Our team will analyze your
              requirements and get back to you with the best solution.
            </p>
          </div>

          <div className="mt-20 rounded-3xl border border-slate-800 bg-slate-900 p-10">
            <form className="grid gap-8 md:grid-cols-2">
              <div>
                <label className="mb-3 block text-gray-300">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-gray-300">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Your company"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-gray-300">Phone Number</label>

                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-gray-300">
                  Service Required
                </label>

                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400">
                  <option>AI Solutions</option>
                  <option>Web Development</option>
                  <option>Cyber Security</option>
                  <option>ERP & CRM</option>
                  <option>Custom Software</option>
                  <option>Business Automation</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block text-gray-300">Budget Range</label>

                <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400">
                  <option>INR 10,000 - INR 25,000</option>
                  <option>INR 25,000 - INR 50,000</option>
                  <option>INR 50,000 - INR 1,00,000</option>
                  <option>INR 1,00,000+</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="mb-3 block text-gray-300">
                  Project Description
                </label>

                <textarea
                  rows={6}
                  placeholder="Describe your project..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 outline-none focus:border-cyan-400"
                />
              </div>

              <div className="text-center md:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-500 px-10 py-4 font-semibold text-black transition hover:bg-cyan-400"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">2 Hours</h2>

              <p className="mt-4 text-gray-400">Average Response</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                {companyMetrics[0].value}
              </h2>

              <p className="mt-4 text-gray-400">{companyMetrics[0].label}</p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                {companyMetrics[2].value}
              </h2>

              <p className="mt-4 text-gray-400">{companyMetrics[2].label}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
