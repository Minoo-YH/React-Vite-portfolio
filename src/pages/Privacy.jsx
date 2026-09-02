import WindBackground from "../components/WindBackground";

export default function Privacy() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
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
          fixed
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
          left-[-120px]
          top-40
          z-[1]
          h-[300px]
          w-[300px]
          rounded-full
          bg-green-400/[0.06]
          blur-[120px]
          sm:h-[400px]
          sm:w-[400px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-[35%]
          z-[1]
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-500/[0.06]
          blur-[140px]
          sm:h-[450px]
          sm:w-[450px]
        "
      />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-5xl
          px-4
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          md:pb-24
          lg:px-8
          lg:pb-32
          lg:pt-36
        "
      >
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="mb-10 sm:mb-12 md:mb-16">
          <p
            className="
              mb-3
              text-xs
              font-medium
              uppercase
              tracking-[0.28em]
              text-green-400
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            Legal & Privacy
          </p>

          <h1
            className="
              max-w-4xl
              text-4xl
              font-extrabold
              leading-tight
              sm:text-5xl
              md:text-6xl
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
              Privacy Policy
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            This privacy policy explains how information may be collected, used
            and handled when you interact with this portfolio website.
          </p>

          <div
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              px-4
              py-2
              text-xs
              text-gray-400
              backdrop-blur-xl
              sm:text-sm
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-green-400
                shadow-[0_0_10px_rgba(74,222,128,0.8)]
              "
            />
            Last updated: September 2, 2026
          </div>
        </header>

        {/* ===================================================
            PRIVACY CARD
        =================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            shadow-2xl
            backdrop-blur-xl
            sm:rounded-3xl
          "
        >
          {/* Top Gradient */}

          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-green-400/60
              to-transparent
            "
          />

          <div
            className="
              divide-y
              divide-white/[0.07]
              px-5
              sm:px-7
              md:px-10
              lg:px-12
            "
          >
            {/* =================================================
                01
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-green-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  01
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Information We Collect
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    We may collect contact information, such as your email
                    address and the information you voluntarily provide when
                    submitting a contact form or sending a message through this
                    website.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                02
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-blue-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  02
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    How We Use Information
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    Information you provide may be used to respond to your
                    messages, communicate with you when necessary, maintain the
                    website and improve the overall user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                03
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-cyan-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  03
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Cookies & Analytics
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    This website may use cookies or similar technologies when
                    required by integrated services. Analytics tools, if
                    enabled, may also collect limited information about website
                    usage and performance.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                04
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-green-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  04
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Data Sharing
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    Personal information is not sold or traded. Limited
                    information may be processed by third-party service
                    providers when necessary to operate, host or maintain
                    functionality used by this website.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                05
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-blue-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  05
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Your Rights
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    You may contact me to ask about personal information you
                    have provided through this website and, where applicable,
                    request access, correction or deletion of that information.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                06
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-cyan-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  06
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Data Security
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    Reasonable measures are taken to protect information
                    associated with this website. However, no method of
                    transmitting or storing information online can be guaranteed
                    to be completely secure.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                07
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-green-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  07
                </span>

                <div>
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    External Links
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    This portfolio may contain links to external websites,
                    projects or services. Their privacy practices are governed
                    by their own policies, and this privacy policy does not
                    apply to those external websites.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                08 CONTACT
            ================================================= */}

            <section className="py-7 sm:py-9">
              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:gap-5
                "
              >
                <span
                  className="
                    shrink-0
                    font-mono
                    text-xs
                    font-semibold
                    tracking-wider
                    text-blue-400
                    sm:pt-1
                    sm:text-sm
                  "
                >
                  08
                </span>

                <div className="min-w-0">
                  <h2
                    className="
                      text-xl
                      font-semibold
                      text-white
                      sm:text-2xl
                    "
                  >
                    Contact
                  </h2>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                      sm:leading-8
                    "
                  >
                    If you have questions about this privacy policy or how
                    information is handled, you can contact me at:
                  </p>

                  <a
                    href="mailto:minoo.yaghoubi@gmail.com"
                    className="
                      mt-4
                      inline-block
                      max-w-full
                      break-all
                      text-sm
                      font-medium
                      text-green-400
                      transition-colors
                      duration-300
                      hover:text-blue-400
                      sm:text-base
                    "
                  >
                    minoo.yaghoubi@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ===================================================
            FOOT NOTE
        =================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-center
            text-xs
            leading-6
            text-gray-500
            sm:mt-10
            sm:text-sm
          "
        >
          This policy may be updated when the website, its features or the
          services it uses change.
        </div>
      </div>
    </main>
  );
}
