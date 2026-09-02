import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import WindBackground from "./WindBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xanevzbo";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send your message. Please try again.");
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
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        py-16
        text-white
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      {/* =====================================================
          WIND BACKGROUND
      ===================================================== */}

      <WindBackground />

      {/* =====================================================
          BACKGROUND OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/30
          via-black/60
          to-black/85
        "
      />

      {/* =====================================================
          DECORATIVE GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-100px]
          top-[20%]
          z-[1]
          h-[280px]
          w-[280px]
          rounded-full
          bg-green-400/[0.07]
          blur-[120px]
          sm:h-[400px]
          sm:w-[400px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-[50%]
          z-[1]
          h-[300px]
          w-[300px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[130px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            HEADING
        =================================================== */}

        <div
          className="
            mx-auto
            mb-12
            max-w-4xl
            text-center
            sm:mb-16
            md:mb-20
            lg:mb-24
          "
        >
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.25em]
              text-green-400
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            Get In Touch
          </p>

          <h2
            className="
              mt-4
              break-words
              text-4xl
              font-extrabold
              leading-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-green-400
                via-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Let&apos;s Work Together
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-gray-400
              sm:mt-8
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            I&apos;m always interested in exciting projects, full-time
            opportunities, freelance work and collaborations where I can build
            modern, scalable and user-focused software.
          </p>
        </div>

        {/* ===================================================
            CONTACT GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-stretch
            gap-6
            sm:gap-8
            lg:grid-cols-2
            lg:gap-10
            xl:gap-12
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
              transition-all
              duration-500
              sm:rounded-3xl
              sm:p-7
              md:p-8
              lg:p-10
              md:hover:border-green-400/20
              md:hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]
            "
          >
            {/* Card Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-green-400/[0.06]
                via-blue-500/[0.04]
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                md:group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-green-400
                  sm:text-sm
                "
              >
                Contact Information
              </p>

              <h3
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                "
              >
                Let&apos;s Talk <span aria-hidden="true">👋</span>
              </h3>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-gray-300
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                Whether you&apos;re looking for a Full-Stack Developer, React
                Native Developer, or someone who enjoys solving real-world
                software challenges, I&apos;d love to hear about your project.
              </p>

              {/* Availability */}

              <div
                className="
                  mt-7
                  inline-flex
                  max-w-full
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-green-400/20
                  bg-green-400/10
                  px-4
                  py-2.5
                  sm:mt-8
                  sm:px-5
                  sm:py-3
                  lg:mt-10
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    shrink-0
                    animate-pulse
                    rounded-full
                    bg-green-400
                    shadow-[0_0_12px_rgba(74,222,128,0.8)]
                  "
                />

                <span
                  className="
                    text-xs
                    font-medium
                    text-green-300
                    sm:text-sm
                    md:text-base
                  "
                >
                  Available for Full-time & Freelance
                </span>
              </div>

              {/* =============================================
                  CONTACT DETAILS
              ============================================= */}

              <div
                className="
                  mt-9
                  space-y-7
                  sm:mt-10
                  sm:space-y-8
                  lg:mt-12
                "
              >
                {/* EMAIL */}

                <div
                  className="
                    group/item
                    flex
                    items-start
                    gap-4
                    sm:gap-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-green-400/10
                      bg-green-400/10
                      transition-transform
                      duration-300
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                      md:group-hover/item:scale-110
                    "
                  >
                    <FaEnvelope
                      className="
                        text-lg
                        text-green-400
                        sm:text-2xl
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        mb-1
                        text-xs
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      Email
                    </p>

                    <a
                      href="mailto:minoo.yaghoubi@gmail.com"
                      className="
                        block
                        break-all
                        text-sm
                        text-white
                        transition-colors
                        duration-300
                        hover:text-green-400
                        sm:text-base
                        md:text-lg
                      "
                    >
                      minoo.yaghoubi@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}

                <div
                  className="
                    group/item
                    flex
                    items-start
                    gap-4
                    sm:gap-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-blue-400/10
                      bg-blue-400/10
                      transition-transform
                      duration-300
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                      md:group-hover/item:scale-110
                    "
                  >
                    <FaPhone
                      className="
                        text-lg
                        text-blue-400
                        sm:text-2xl
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        mb-1
                        text-xs
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      Phone
                    </p>

                    <a
                      href="tel:+358401801786"
                      className="
                        text-sm
                        text-white
                        transition-colors
                        duration-300
                        hover:text-blue-400
                        sm:text-base
                        md:text-lg
                      "
                    >
                      +358 40 180 1786
                    </a>
                  </div>
                </div>

                {/* LOCATION */}

                <div
                  className="
                    group/item
                    flex
                    items-start
                    gap-4
                    sm:gap-5
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-cyan-400/10
                      bg-cyan-400/10
                      transition-transform
                      duration-300
                      sm:h-14
                      sm:w-14
                      sm:rounded-2xl
                      md:group-hover/item:scale-110
                    "
                  >
                    <FaMapMarkerAlt
                      className="
                        text-lg
                        text-cyan-400
                        sm:text-2xl
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        mb-1
                        text-xs
                        text-gray-500
                        sm:text-sm
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        text-sm
                        text-white
                        sm:text-base
                        md:text-lg
                      "
                    >
                      Finland
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE / FORM
          ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-xl
              transition-all
              duration-500
              sm:rounded-3xl
              sm:p-7
              md:p-8
              lg:p-10
              md:hover:border-blue-400/20
              md:hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
            "
          >
            {/* Form Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/[0.05]
                via-cyan-400/[0.03]
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                md:group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <p
                className="
                  mb-3
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                  sm:text-sm
                "
              >
                Send A Message
              </p>

              <h3
                className="
                  mb-7
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                  lg:mb-8
                "
              >
                Tell Me About Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="
                      mb-2
                      block
                      text-sm
                      text-gray-300
                      sm:mb-3
                      sm:text-base
                    "
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/50
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-600
                      hover:border-green-400/30
                      focus:border-green-400
                      focus:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                      sm:rounded-2xl
                      sm:px-5
                      sm:py-4
                      sm:text-base
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="
                      mb-2
                      block
                      text-sm
                      text-gray-300
                      sm:mb-3
                      sm:text-base
                    "
                  >
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-black/50
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-600
                      hover:border-green-400/30
                      focus:border-green-400
                      focus:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                      sm:rounded-2xl
                      sm:px-5
                      sm:py-4
                      sm:text-base
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="
                      mb-2
                      block
                      text-sm
                      text-gray-300
                      sm:mb-3
                      sm:text-base
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    rows={6}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/10
                      bg-black/50
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-gray-600
                      hover:border-green-400/30
                      focus:border-green-400
                      focus:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                      sm:rounded-2xl
                      sm:px-5
                      sm:py-4
                      sm:text-base
                    "
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-green-400
                    via-emerald-400
                    to-blue-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    sm:py-4
                    sm:text-base
                    md:hover:-translate-y-1
                    md:hover:scale-[1.02]
                    md:hover:shadow-[0_0_35px_rgba(34,197,94,0.35)]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    disabled:hover:translate-y-0
                    disabled:hover:scale-100
                  "
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* STATUS */}

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`
                      rounded-xl
                      border
                      px-4
                      py-3
                      text-sm
                      sm:rounded-2xl
                      sm:px-5
                      sm:py-4
                      sm:text-base
                      ${
                        status.includes("success")
                          ? "border-green-400/20 bg-green-400/10 text-green-300"
                          : "border-red-400/20 bg-red-400/10 text-red-300"
                      }
                    `}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
