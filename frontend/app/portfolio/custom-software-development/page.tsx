import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Hero */}

          <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">
            Custom Software Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Custom Software
            <span className="text-cyan-400"> Development</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Tailored software solutions built to automate business processes
            and accelerate growth.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#"
              className="bg-cyan-500 text-black px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition"
            >
              GitHub
            </a>
          </div>

          {/* Technologies & Features */}

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Technologies
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>✔ Next.js</li>
                <li>✔ React</li>
                <li>✔ TypeScript</li>
                <li>✔ Node.js</li>
                <li>✔ Express.js</li>
                <li>✔ MongoDB</li>
                <li>✔ REST API</li>
                <li>✔ Cloud Deployment</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Features
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>✔ Custom Dashboard</li>
                <li>✔ User Management</li>
                <li>✔ API Integration</li>
                <li>✔ Business Automation</li>
                <li>✔ Reports & Analytics</li>
                <li>✔ Multi-role Authentication</li>
                <li>✔ Secure Database</li>
                <li>✔ Scalable Architecture</li>
              </ul>
            </div>

          </div>

          {/* Image */}

          <div className="mt-20">
            <Image
              src="/images/custom-software.png"
              alt="Custom Software Development"
              width={1400}
              height={900}
              className="rounded-3xl border border-slate-800 shadow-2xl shadow-cyan-500/10"
            />
          </div>

          {/* Project Overview */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold text-cyan-400">
              Project Overview
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              Custom software solutions help businesses replace manual
              processes with intelligent digital systems. The platform is
              designed to improve productivity, reduce operational costs and
              support future growth with scalable architecture.
            </p>
          </section>

          {/* Challenges & Solution */}

          <section className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-red-400">
                Challenges
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Manual workflows</li>
                <li>• Data fragmentation</li>
                <li>• Poor scalability</li>
                <li>• High maintenance costs</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Our Solution
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Custom architecture</li>
                <li>• Automated workflows</li>
                <li>• Centralized data</li>
                <li>• High scalability</li>
              </ul>
            </div>

          </section>

          {/* Development Process */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold text-center text-cyan-400">
              Development Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-14">

              <div className="bg-slate-900 p-8 rounded-3xl text-center">
                <h3 className="text-6xl font-bold text-cyan-400">01</h3>
                <p className="mt-4 text-xl">Planning</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-center">
                <h3 className="text-6xl font-bold text-cyan-400">02</h3>
                <p className="mt-4 text-xl">UI/UX Design</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-center">
                <h3 className="text-6xl font-bold text-cyan-400">03</h3>
                <p className="mt-4 text-xl">Development</p>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-center">
                <h3 className="text-6xl font-bold text-cyan-400">04</h3>
                <p className="mt-4 text-xl">Deployment</p>
              </div>

            </div>
          </section>

          {/* Stats */}

          <section className="grid md:grid-cols-4 gap-6 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                500+
              </h3>
              <p className="mt-3">Projects Delivered</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="mt-3">Customizable</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                99.9%
              </h3>
              <p className="mt-3">System Reliability</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-3">Technical Support</p>
            </div>

          </section>

          {/* CTA */}

          <section className="text-center mt-24">
            <h2 className="text-5xl font-bold">
              Need a
              <span className="text-cyan-400">
                {" "}Custom Solution?
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-6">
              Let's build software tailored to your business requirements.
            </p>

            <Link
              href="/#contact"
              className="inline-block mt-10 bg-cyan-500 text-black px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              Start Your Project
            </Link>
          </section>

          {/* Back */}

          <div className="mt-20">
            <Link
              href="/portfolio"
              className="text-cyan-400 font-semibold hover:translate-x-2 inline-block transition"
            >
              ← Back To Portfolio
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}