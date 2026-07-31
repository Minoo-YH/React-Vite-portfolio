import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/xanevzbo";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.35em] text-green-400 text-sm">
            Get In Touch
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">

            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            I'm always interested in exciting projects,
            full-time opportunities, freelance work and
            collaborations where I can build modern,
            scalable and user-focused software.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start"></div>
          {/* ================= LEFT SIDE ================= */}

          <div
            className="
            rounded-3xl
            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            hover:border-green-400/20
            hover:shadow-[0_0_40px_rgba(34,197,94,.12)]

            transition-all
            duration-500
          "
          >
            <h3 className="text-4xl font-bold mb-6">
              Let's Talk 👋
            </h3>

            <p className="text-lg leading-8 text-gray-300">
              Whether you're looking for a Full-Stack Developer,
              React Native Developer, or someone who enjoys solving
              real-world software challenges, I'd love to hear about
              your project.
            </p>

            {/* Available */}

            <div
              className="
              inline-flex
              items-center
              gap-3

              mt-10

              px-5
              py-3

              rounded-full

              border
              border-green-400/20

              bg-green-400/10
            "
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              <span className="text-green-300 font-medium">
                Available for Full-time & Freelance
              </span>
            </div>

            {/* Contact */}

            <div className="mt-12 space-y-8">

              {/* Email */}

              <div className="group flex items-start gap-5">

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-green-400/10

                  flex
                  items-center
                  justify-center

                  transition

                  group-hover:scale-110
                "
                >
                  <FaEnvelope className="text-green-400 text-2xl" />
                </div>

                <div>

                  <p className="text-sm text-gray-500 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:minoo.yaghoubi@gmail.com"
                    className="
                    text-lg

                    hover:text-green-400

                    transition

                    break-all
                  "
                  >
                    minoo.yaghoubi@gmail.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="group flex items-start gap-5">

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-green-400/10

                  flex
                  items-center
                  justify-center

                  transition

                  group-hover:scale-110
                "
                >
                  <FaPhone className="text-green-400 text-2xl" />
                </div>

                <div>

                  <p className="text-sm text-gray-500 mb-1">
                    Phone
                  </p>

                  <p className="text-lg">
                    +358 401801786
                  </p>

                </div>

              </div>

              {/* Location */}

              <div className="group flex items-start gap-5">

                <div
                  className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-green-400/10

                  flex
                  items-center
                  justify-center

                  transition

                  group-hover:scale-110
                "
                >
                  <FaMapMarkerAlt className="text-green-400 text-2xl" />
                </div>

                <div>

                  <p className="text-sm text-gray-500 mb-1">
                    Location
                  </p>

                  <p className="text-lg">
                    Finland
                  </p>

                </div>

              </div>

            </div>

          </div>
                    {/* ================= RIGHT SIDE ================= */}

          <div
            className="
            rounded-3xl
            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            hover:border-green-400/20
            hover:shadow-[0_0_40px_rgba(34,197,94,.12)]

            transition-all
            duration-500
          "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* Name */}

              <div>

                <label className="block mb-3 text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="
                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-black/50

                  px-5
                  py-4

                  text-white

                  outline-none

                  transition-all

                  duration-300

                  hover:border-green-400/30

                  focus:border-green-400

                  focus:shadow-[0_0_20px_rgba(34,197,94,.2)]
                "
                />

              </div>

              {/* Email */}

              <div>

                <label className="block mb-3 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="
                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-black/50

                  px-5
                  py-4

                  text-white

                  outline-none

                  transition-all

                  duration-300

                  hover:border-green-400/30

                  focus:border-green-400

                  focus:shadow-[0_0_20px_rgba(34,197,94,.2)]
                "
                />

              </div>

              {/* Message */}

              <div>

                <label className="block mb-3 text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="
                  w-full

                  rounded-2xl

                  border
                  border-white/10

                  bg-black/50

                  px-5
                  py-4

                  text-white

                  resize-none

                  outline-none

                  transition-all

                  duration-300

                  hover:border-green-400/30

                  focus:border-green-400

                  focus:shadow-[0_0_20px_rgba(34,197,94,.2)]
                "
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full

                rounded-full

                py-4

                font-semibold

                text-black

                bg-gradient-to-r
                from-green-400
                via-emerald-400
                to-blue-500

                transition-all

                duration-300

                hover:-translate-y-1

                hover:scale-[1.02]

                hover:shadow-[0_0_35px_rgba(34,197,94,.35)]

                disabled:opacity-60
                disabled:cursor-not-allowed
              "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
                            {/* Status */}

              {status && (
                <div
                  className={`mt-6 rounded-2xl px-5 py-4 border ${
                    status.includes("success")
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      
    </section>
  );
};

export default Contact;