import WindBackground from "../components/WindBackground";

export default function Terms() {
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
            Legal Information
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
              Terms of Service
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
            These Terms of Service govern your use of this portfolio website. By
            accessing or using the site, you agree to these terms.
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
            TERMS CARD
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
                INTRODUCTION
            ================================================= */}

            <section className="py-7 sm:py-9">
              <p
                className="
                  text-sm
                  leading-7
                  text-gray-300
                  sm:text-base
                  sm:leading-8
                "
              >
                These Terms of Service (&quot;Terms&quot;) govern your use of
                this website and its content. By accessing or using this
                website, you agree to use it responsibly and in accordance with
                these Terms.
              </p>
            </section>

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
                    Use of the Site
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
                    You agree to use this website only for lawful purposes and
                    in a manner that does not infringe the rights of others,
                    interfere with the operation of the site or restrict another
                    person&apos;s ability to access and use it.
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
                    Intellectual Property
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
                    Unless otherwise stated, original portfolio content,
                    including text, design elements, graphics and original code
                    presented on this website, belongs to the site owner.
                    Third-party technologies, libraries, assets and project
                    contributions remain subject to their respective licenses
                    and ownership.
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
                    Portfolio Projects
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
                    This website may showcase personal, academic, professional
                    and collaborative projects. Ownership and licensing of
                    individual projects may differ. Repository links and related
                    project documentation should be consulted for
                    project-specific information.
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
                    Third-Party Links
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
                    This website may contain links to third-party websites and
                    services, including project repositories, demos and other
                    external resources. These external services are operated
                    independently, and their content, availability and practices
                    are outside the control of this website.
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
                    Disclaimer
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
                    This website and its content are provided for informational
                    and portfolio purposes. While reasonable efforts are made to
                    keep information accurate and current, no guarantee is made
                    that all content will always be complete, error-free or
                    continuously available.
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
                    Limitation of Liability
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
                    To the extent permitted by applicable law, the site owner is
                    not responsible for losses or damages resulting from
                    reliance on website content, temporary unavailability,
                    external websites or the use of third-party services linked
                    from this portfolio.
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
                    Changes to These Terms
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
                    These Terms may be updated when the website, available
                    features or related services change. Any updated version
                    becomes effective when it is published on this page.
                  </p>
                </div>
              </div>
            </section>

            {/* =================================================
                08
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
                    If you have questions regarding these Terms of Service, you
                    can contact me at:
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

        <p
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
          Please review these terms periodically for updates related to this
          website and its content.
        </p>
      </div>
    </main>
  );
}
