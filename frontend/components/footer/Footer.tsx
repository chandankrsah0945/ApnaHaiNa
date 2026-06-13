import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold text-cyan-400">
              ApnaHaiNa
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Build Smarter.
              <br />
              Secure Faster.
              <br />
              Grow Digitally.
            </p>

            <p className="text-gray-500 mt-6">
              AI • Development • Security
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 mt-6 text-gray-400">

              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="/portfolio">Portfolio</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold">
              Services
            </h3>

            <ul className="space-y-3 mt-6 text-gray-400">

              <li>AI Solutions</li>

              <li>Web Development</li>

              <li>Cyber Security</li>

              <li>Business Automation</li>

              <li>Cloud Solutions</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold">
              Connect
            </h3>

            <div className="mt-6 space-y-3 text-gray-400">

              <p>contact@apnahaina.com</p>

              <p>Gurgaon, Haryana</p>

            </div>

            <div className="flex gap-5 mt-8 text-3xl text-cyan-400">

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © 2026 ApnaHaiNa. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Sitemap
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}