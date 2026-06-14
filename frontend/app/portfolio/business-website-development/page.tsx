import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function BusinessWebsiteDevelopment() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Web Development Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5">
            Business Website
            <span className="text-cyan-400"> Development</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            Modern, responsive and SEO-friendly business websites that help
            brands grow and convert visitors into customers.
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
                <li>✔ TypeScript</li>
                <li>✔ Tailwind CSS</li>
                <li>✔ Node.js</li>
                <li>✔ MongoDB</li>
                <li>✔ REST API</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Features
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Responsive Design</li>
                <li>✔ SEO Optimized</li>
                <li>✔ Contact Form</li>
                <li>✔ Admin Panel</li>
                <li>✔ Portfolio Management</li>
                <li>✔ Analytics Dashboard</li>
              </ul>
            </div>

          </div>

          {/* Back */}

          <div className="mt-20">
            <Link
              href="/portfolio"
              className="text-cyan-400 font-semibold hover:translate-x-2 inline-block transition"
            >
              ← Back To Portfolio
            </Link>
          </div>

          {/* Main Image */}

          <div className="mt-20">
            <Image
              src="/images/business-website.png"
              alt="Business Website"
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
              This project is a modern business website built for startups
              and enterprises to establish a strong online presence.
              It includes responsive frontend, SEO optimization,
              contact management, admin panel and analytics to track
              business growth.
            </p>
          </section>

          {/* Challenges */}

          <section className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-red-400">
                Challenges
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Low online visibility</li>
                <li>• Poor user experience</li>
                <li>• Slow websites</li>
                <li>• Low conversion rates</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Our Solution
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Modern UI/UX</li>
                <li>• Fast loading speed</li>
                <li>• SEO optimization</li>
                <li>• Mobile responsive</li>
                <li>• Lead generation system</li>
              </ul>
            </div>

          </section>

          {/* Development Process */}

          <section className="mt-24">
            <h2 className="text-4xl font-bold text-cyan-400 text-center">
              Development Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-12">

              {[
                "Research",
                "Design",
                "Development",
                "Deployment",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center"
                >
                  <h3 className="text-6xl font-bold text-cyan-400">
                    0{index + 1}
                  </h3>

                  <p className="mt-5 text-xl font-semibold">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* Stats */}

          <section className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                500+
              </h3>
              <p className="mt-4">Leads Generated</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                100%
              </h3>
              <p className="mt-4">Responsive</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                99%
              </h3>
              <p className="mt-4">Performance</p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 text-center">
              <h3 className="text-5xl font-bold text-cyan-400">
                24/7
              </h3>
              <p className="mt-4">Support</p>
            </div>

          </section>

          {/* CTA */}

          <section className="text-center mt-24">

            <h2 className="text-5xl font-bold">
              Need a
              <span className="text-cyan-400">
                {" "}Business Website?
              </span>
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Let's build a modern digital presence for your brand.
            </p>

            <Link
              href="/#contact"
              className="inline-block mt-10 bg-cyan-500 text-black px-10 py-5 rounded-xl hover:bg-cyan-400 transition"
            >
              Start Your Project
            </Link>

          </section>

        </div>
      </section>

      <Footer />
    </>
  );
}