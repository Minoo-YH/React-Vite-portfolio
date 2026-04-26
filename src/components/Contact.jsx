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
    } catch {
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-32 px-6">
      {/* TITLE */}
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-24 tracking-tight">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        {/* LEFT */}
        <div className="flex-1 space-y-10 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-semibold">Let’s Talk 👋</h3>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            I’m open to new opportunities, freelance projects, and creative
            collaborations. Let’s build something meaningful together.
          </p>

          <div className="space-y-6 text-lg">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaEnvelope className="text-green-400 text-xl" />
              <a
                href="mailto:minoo.yaghoubi@gmail.com"
                className="hover:text-green-400 transition break-all"
              >
                minoo.yaghoubi@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaPhone className="text-green-400 text-xl" />
              <span>+358 465461799</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <span>Finland</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 max-w-xl mx-auto md:mx-0">
          <form
            onSubmit={handleSubmit}
            className="space-y-7 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-10"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-4 text-lg rounded-lg bg-black/60 border border-white/10 
              focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 text-lg rounded-lg bg-black/60 border border-white/10 
              focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message..."
              required
              className="w-full p-4 text-lg rounded-lg bg-black/60 border border-white/10 
              focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none resize-none"
            />

            {/* 🔥 BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 
              text-black font-semibold text-lg py-4 rounded-full relative overflow-hidden
              transition duration-300 hover:scale-105
              hover:shadow-[0_0_40px_#22c55e] active:scale-95"
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Message"}
              </span>

              <span className="absolute inset-0 opacity-0 hover:opacity-20 bg-white transition"></span>
            </button>
          </form>

          {/* STATUS */}
          {status && (
            <p
              className={`mt-6 text-lg text-center md:text-left ${
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
