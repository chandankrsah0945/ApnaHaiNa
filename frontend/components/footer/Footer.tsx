import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              ApnaHaiNa
            </h2>

            <p className="mt-4 text-gray-400">
              AI, Web Development and Cyber Security
              solutions under one platform.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>

          {/* Emails */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>contact@apnahaina.com</li>
              <li>info@apnahaina.com</li>
              <li>support@apnahaina.com</li>
              <li>admin@apnahaina.com</li>
              <li>chandan@apnahaina.com</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-5 text-3xl text-cyan-400">

              <a
                href="https://github.com/chandankrsah0945"
                target="_blank"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/chandankrsah/"
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/chandansah945/"
                target="_blank"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@tfzacademy"
                target="_blank"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-gray-500">

          © 2026 ApnaHaiNa. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}