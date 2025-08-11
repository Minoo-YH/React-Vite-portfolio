import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ اضافه شد

const Footer = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("https://formspree.io/f/xanevzbo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message: "New subscriber!" }),
      });
      if (response.ok) { setStatus("Thank you for subscribing!"); e.target.reset(); }
      else setStatus("Something went wrong. Please try again.");
    } catch (err) {
      console.error(err);
      setStatus("Error submitting the form.");
    } finally { setLoading(false); }
  };

  return (
    <footer className="w-full bg-black text-white py-1">
      <div className="container mx-auto px-5 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Minoo</h3>
            <p className="text-gray-400">
              I’m a digital artist who loves making things that look good and feel right...
            </p>
          </div>

          <div className="flex-1 w-full">
            <form className="flex items-center justify-center" onSubmit={handleSubmit}>
              <input
                type="email" name="email" placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {status && (
              <p className={`mt-2 text-sm ${status.includes("Thank") ? "text-green-400" : "text-red-400"}`}>
                {status}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} made with <FaHeart className="text-red-500" /> by Minoo
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.linkedin.com/in/minoo-yaghoubi-692b42182/"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white" aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Minoo-YH"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white" aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* ✅ باز شدن در تب جدید بدون رفرش کامل */}
          <div className="flex space-x-4">
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


