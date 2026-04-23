import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanevzbo";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
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
    } catch (err) {
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14">
        Contact Me
      </h2>

      {/* Container */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 max-w-5xl mx-auto">
        {/* LEFT */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl mb-4">Let’s Talk</h3>

          <p className="text-gray-300 mb-6 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            I’m open to new projects and always excited to bring ideas to life.
            Let’s connect and build something great together.
          </p>

          <div className="space-y-4 max-w-md mx-auto md:mx-0">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-green-400 shrink-0" />
              <a
                href="mailto:minoo.yaghoubi@gmail.com"
                className="hover:underline break-all text-sm sm:text-base"
              >
                minoo.yaghoubi@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone className="text-green-400 shrink-0" />
              <span className="text-sm sm:text-base">+358 465461799</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-green-400 shrink-0" />
              <span className="text-sm sm:text-base">Finland</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 w-full max-w-md mx-auto md:mx-0">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 
                         focus:outline-none focus:border-green-400 text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 
                         focus:outline-none focus:border-green-400 text-sm sm:text-base"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              required
              className="w-full p-3 rounded bg-gray-800 border border-gray-600 
                         focus:outline-none focus:border-green-400 text-sm sm:text-base"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 
                         px-8 py-3 rounded-full text-sm sm:text-base 
                         hover:scale-105 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {status && (
            <p
              className={`mt-4 text-sm sm:text-base text-center md:text-left ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
