import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const FORMSPREE = "https://formspree.io/f/xanevzbo";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CONTACT */}
      <section id="contact" className="w-full bg-black text-white py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12 text-xl sm:text-2xl md:text-3xl">
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">

            {/* LEFT */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl mb-4">
                Let’s Talk
              </h3>

              <p className="text-gray-300 mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
                I’m open to new projects and always excited to bring ideas to
                life.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaEnvelope className="text-green-400" />
                  <span className="text-sm sm:text-base md:text-lg break-all">
                    minoo.yaghoubi@gmail.com
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaPhone className="text-green-400" />
                  <span className="text-sm sm:text-base md:text-lg">
                    +358 465461799
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <FaMapMarkerAlt className="text-green-400" />
                  <span className="text-sm sm:text-base md:text-lg">
                    Finland
                  </span>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="flex-1 w-full max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-600 rounded text-sm sm:text-base md:text-lg focus:outline-none focus:border-green-400"
                  required
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-600 rounded text-sm sm:text-base md:text-lg focus:outline-none focus:border-green-400"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-600 rounded text-sm sm:text-base md:text-lg focus:outline-none focus:border-green-400"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>

              {status && (
                <p
                  className={`mt-4 text-sm sm:text-base md:text-lg text-center md:text-left ${
                    status.toLowerCase().includes("success")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-black text-white border-t border-gray-800 py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-8">

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">
                Minoo
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                I create clean, modern, and meaningful digital experiences.
              </p>
            </div>

            <div className="flex-1 w-full max-w-xl mx-auto md:mx-0">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 sm:p-4 bg-gray-800 border border-gray-600 rounded text-sm sm:text-base md:text-lg"
                />
                <button className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

            <p className="text-gray-400 text-sm sm:text-base flex items-center gap-1">
              © {new Date().getFullYear()} made with
              <FaHeart className="text-red-500" /> by Minoo
            </p>

            <div className="flex gap-5 text-lg">
              <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer transition" />
              <FaGithub className="text-gray-400 hover:text-white cursor-pointer transition" />
            </div>

            <div className="flex gap-4 text-sm sm:text-base">
              <Link to="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition">
                Terms
              </Link>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;


