import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function CyberSecurityDashboard() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Cyber Security Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5">
            Cyber Security
            <span className="text-cyan-400"> Dashboard</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Real-time threat monitoring, security analytics and incident
            response platform for modern organizations.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#"
              className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
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

          <div className="grid md:grid-cols-2 gap-10 mt-20">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Technologies
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Next.js</li>
                <li>✔ React</li>
                <li>✔ Node.js</li>
                <li>✔ MongoDB</li>
                <li>✔ Chart.js</li>
                <li>✔ JWT Authentication</li>
                <li>✔ REST API</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Features
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Threat Monitoring</li>
                <li>✔ Security Analytics</li>
                <li>✔ Incident Management</li>
                <li>✔ User Authentication</li>
                <li>✔ Live Dashboard</li>
                <li>✔ Reports & Alerts</li>
              </ul>
            </div>
          </div>

          {/* Main Image */}

          <div className="mt-20">
            <Image
              src="/images/cyber-dashboard1.png"
              alt="Cyber Security Dashboard"
              width={1200}
              height={700}
              className="rounded-3xl border border-slate-800 shadow-2xl shadow-cyan-500/10"
            />
          </div>

          {/* Project Overview */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold text-cyan-400">
              Project Overview
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              The Cyber Security Dashboard is a real-time monitoring platform
              designed to collect, analyze and visualize security events.
              It enables organizations to detect threats faster, monitor
              incidents and improve overall cyber resilience through
              centralized security analytics.
            </p>
          </section>

          {/* Challenge & Solution */}

          <section className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-red-400">
                Challenges
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Huge security log volume</li>
                <li>• Slow threat detection</li>
                <li>• Manual monitoring</li>
                <li>• Lack of visibility</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Our Solution
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Real-time analytics</li>
                <li>• Smart alerts</li>
                <li>• Centralized dashboard</li>
                <li>• Faster incident response</li>
              </ul>
            </div>
          </section>

          {/* Development Process */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold text-center text-cyan-400">
              Development Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {[
                "Research",
                "UI Design",
                "Development",
                "Deployment",
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center"
                >
                  <h3 className="text-5xl font-bold text-cyan-400">
                    0{index + 1}
                  </h3>

                  <p className="mt-5 text-xl font-semibold">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}

          <section className="grid md:grid-cols-4 gap-6 mt-20">
            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                100K+
              </h3>
              <p className="mt-3">Logs Processed</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-3">Monitoring</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                99%
              </h3>
              <p className="mt-3">Detection Rate</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                AI
              </h3>
              <p className="mt-3">Analytics</p>
            </div>
          </section>

          {/* CTA */}

          <section className="mt-24 text-center">
            <h2 className="text-5xl font-bold">
              Need a
              <span className="text-cyan-400">
                {" "}
                Security Dashboard?
              </span>
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Let's build enterprise-grade cyber security solutions.
            </p>

            <Link
              href="/#contact"
              className="inline-block mt-10 bg-cyan-500 px-8 py-4 rounded-xl text-black hover:bg-cyan-400 transition"
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