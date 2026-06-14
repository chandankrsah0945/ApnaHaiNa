import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function PasswordManagement() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Cyber Security Project
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">
            Password Management
            <span className="text-cyan-400"> System</span>
          </h1>

          <p className="text-gray-400 text-xl max-w-3xl mt-8">
            A secure password manager designed to store, generate and
            protect sensitive credentials using modern encryption
            techniques.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

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

          {/* Technology & Features */}

          <div className="grid md:grid-cols-2 gap-10 mt-20">

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Technologies
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ PHP</li>
                <li>✔ MySQL</li>
                <li>✔ HTML / CSS / JavaScript</li>
                <li>✔ Authentication System</li>
                <li>✔ Password Encryption</li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
              <h2 className="text-3xl font-bold text-cyan-400">
                Features
              </h2>

              <ul className="mt-6 space-y-3 text-gray-300">
                <li>✔ Secure Login</li>
                <li>✔ Password Generator</li>
                <li>✔ Encrypted Storage</li>
                <li>✔ Category Management</li>
                <li>✔ User Dashboard</li>
              </ul>
            </div>

          </div>

          {/* Main Image */}

          <div className="mt-20">

            <Image
              src="/images/password-manager1.png"
              alt="Password Management Tool"
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
              The Password Management System is a secure web application
              built to protect sensitive user credentials through
              authentication and encryption.

              Users can safely store, organize and generate strong
              passwords while maintaining complete control over their
              digital security.

              The platform focuses on simplicity, performance and secure
              data management for personal and business use.
            </p>

          </section>

          {/* Challenges & Solution */}

          <section className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-3xl font-bold text-red-400">
                Challenges
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Weak passwords</li>
                <li>• Password reuse</li>
                <li>• Manual storage methods</li>
                <li>• Data leakage risks</li>
              </ul>

            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

              <h2 className="text-3xl font-bold text-cyan-400">
                Our Solution
              </h2>

              <ul className="space-y-4 mt-8 text-gray-300">
                <li>• Secure authentication</li>
                <li>• Password generator</li>
                <li>• Encrypted storage</li>
                <li>• Smart dashboard</li>
              </ul>

            </div>

          </section>

          {/* Gallery */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-cyan-400">
              Project Gallery
            </h2>

            <p className="text-gray-400 mt-4">
              Explore some key interfaces of the Password Management
              System.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">

              <Image
                src="/images/password-manager1.png"
                alt="Password Manager"
                width={500}
                height={300}
                className="rounded-2xl border border-slate-800 hover:scale-105 transition"
              />

              <Image
                src="/images/password-login.png"
                alt="Login"
                width={500}
                height={300}
                className="rounded-2xl border border-slate-800 hover:scale-105 transition"
              />

              <Image
                src="/images/password-generator.png"
                alt="Generator"
                width={500}
                height={300}
                className="rounded-2xl border border-slate-800 hover:scale-105 transition"
              />

              <Image
                src="/images/password-dashboard.png"
                alt="Dashboard"
                width={500}
                height={300}
                className="rounded-2xl border border-slate-800 hover:scale-105 transition"
              />

            </div>

          </section>

          {/* Key Features */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-cyan-400">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  🔐 Secure Authentication
                </h3>

                <p className="text-gray-400 mt-4">
                  User login with protected authentication system.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  ⚡ Password Generator
                </h3>

                <p className="text-gray-400 mt-4">
                  Generate strong and random passwords instantly.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  🗂 Category Management
                </h3>

                <p className="text-gray-400 mt-4">
                  Organize credentials efficiently.
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold">
                  🛡 Encryption
                </h3>

                <p className="text-gray-400 mt-4">
                  Sensitive data stored securely.
                </p>
              </div>

            </div>

          </section>

          {/* Development Process */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-cyan-400">
              Development Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-10">

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h2 className="text-5xl text-cyan-400 font-bold">01</h2>
                <p className="mt-4">Planning</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h2 className="text-5xl text-cyan-400 font-bold">02</h2>
                <p className="mt-4">Design</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h2 className="text-5xl text-cyan-400 font-bold">03</h2>
                <p className="mt-4">Development</p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl">
                <h2 className="text-5xl text-cyan-400 font-bold">04</h2>
                <p className="mt-4">Testing</p>
              </div>

            </div>

          </section>

          {/* Statistics */}

          <section className="grid md:grid-cols-4 gap-6 mt-24">

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-cyan-400 text-4xl font-bold">
                10+
              </h2>
              <p>Modules</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-cyan-400 text-4xl font-bold">
                100%
              </h2>
              <p>Secure</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-cyan-400 text-4xl font-bold">
                24/7
              </h2>
              <p>Access</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl">
              <h2 className="text-cyan-400 text-4xl font-bold">
                AI
              </h2>
              <p>Ready</p>
            </div>

          </section>

          {/* CTA */}

          <section className="mt-24 bg-slate-900 rounded-3xl p-12 text-center">

            <h2 className="text-5xl font-bold">
              Need a Similar Project?
            </h2>

            <p className="text-gray-400 mt-6">
              We build secure AI-powered software solutions
              for startups and businesses.
            </p>

            <div className="mt-8">

              <Link
                href="/#contact"
                className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-400 transition"
              >
                Start Your Project
              </Link>

            </div>

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