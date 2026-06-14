import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function AIBusinessAssistant() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Artificial Intelligence Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5">
            AI Business
            <span className="text-cyan-400"> Assistant</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            An AI-powered business assistant that automates workflows,
            improves productivity and helps organizations make
            smarter decisions.
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

          {/* Technology */}

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

              <h2 className="text-3xl font-bold text-cyan-400">
                Technologies
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Next.js</li>
                <li>✔ React</li>
                <li>✔ OpenAI API</li>
                <li>✔ Tailwind CSS</li>
                <li>✔ Node.js</li>
              </ul>

            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">

              <h2 className="text-3xl font-bold text-cyan-400">
                Features
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ AI Chat Assistant</li>
                <li>✔ Workflow Automation</li>
                <li>✔ Smart Reports</li>
                <li>✔ Business Analytics</li>
                <li>✔ Document Processing</li>
              </ul>

            </div>

          </div>

          {/* Image */}

          <div className="mt-20">

            <Image
              src="/images/ai-assistant.png"
              alt="AI Business Assistant"
              width={1200}
              height={700}
              className="rounded-3xl border border-slate-800 shadow-2xl shadow-cyan-500/10"
            />

          </div>

          {/* Overview */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-cyan-400">
              Project Overview
            </h2>

            <p className="text-gray-400 text-lg leading-9 mt-8">
              The AI Business Assistant helps companies automate
              repetitive tasks, generate business insights and
              provide intelligent support through conversational AI.
              It increases productivity while reducing manual effort.
            </p>

          </section>

          {/* Challenge & Solution */}

          <section className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-3xl font-bold text-red-400">
                Challenges
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Repetitive manual work</li>
                <li>• Slow decision making</li>
                <li>• Poor customer response</li>
                <li>• Data overload</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-3xl font-bold text-cyan-400">
                Our Solution
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• AI-powered automation</li>
                <li>• Intelligent assistant</li>
                <li>• Smart analytics</li>
                <li>• Business optimization</li>
              </ul>

            </div>

          </section>

          {/* Development Process */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-cyan-400 text-center">
              Development Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-16">

              <div className="bg-slate-900 p-6 rounded-2xl text-center">
                <h3 className="text-5xl font-bold text-cyan-400">01</h3>
                <p className="mt-4">Planning</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-center">
                <h3 className="text-5xl font-bold text-cyan-400">02</h3>
                <p className="mt-4">Design</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-center">
                <h3 className="text-5xl font-bold text-cyan-400">03</h3>
                <p className="mt-4">Development</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-center">
                <h3 className="text-5xl font-bold text-cyan-400">04</h3>
                <p className="mt-4">Deployment</p>
              </div>

            </div>

          </section>

          {/* Stats */}

          <section className="grid md:grid-cols-4 gap-8 mt-24">

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
              <p className="mt-3">Modules</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">AI</h3>
              <p className="mt-3">Powered</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">24/7</h3>
              <p className="mt-3">Support</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">100%</h3>
              <p className="mt-3">Scalable</p>
            </div>

          </section>

          {/* CTA */}

          <section className="text-center mt-28">

            <h2 className="text-5xl font-bold">
              Need an
              <span className="text-cyan-400">
                {" "}AI Solution?
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Let's build your next AI-powered business platform.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
            >
              Start Your Project
            </a>

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