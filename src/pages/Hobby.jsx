import PropTypes from "prop-types";
import { motion } from "framer-motion";

import HobbyImg from "../assets/hobby-photo.jpeg";
import JourneyImg from "../assets/f.jpeg";
import WindBackground from "../components/WindBackground";

/* ===========================================================
   ANIMATIONS
=========================================================== */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* ===========================================================
   CONTENT CARD
=========================================================== */

const ContentCard = ({
  label,
  title,
  children,
  labelColor = "text-green-400",
  hoverBorder = "md:hover:border-green-400/20",
  hoverShadow = "md:hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]",
  glow = "from-green-400/10 via-blue-500/10 to-transparent",
}) => {
  return (
    <motion.section
      variants={fadeUp}
      className={`
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
        md:hover:-translate-y-2
        ${hoverBorder}
        ${hoverShadow}
      `}
    >
      {/* Card Glow */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          opacity-0
          transition
          duration-500
          md:group-hover:opacity-100
          ${glow}
        `}
      />

      <div className="relative z-10">
        <p
          className={`
            mb-3
            text-xs
            uppercase
            tracking-[0.22em]
            sm:mb-4
            sm:text-sm
            sm:tracking-[0.3em]
            ${labelColor}
          `}
        >
          {label}
        </p>

        <h2
          className="
            mb-5
            break-words
            text-2xl
            font-bold
            leading-tight
            text-white
            sm:mb-6
            sm:text-3xl
            md:text-4xl
          "
        >
          {title}
        </h2>

        {children}
      </div>
    </motion.section>
  );
};

ContentCard.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  labelColor: PropTypes.string,
  hoverBorder: PropTypes.string,
  hoverShadow: PropTypes.string,
  glow: PropTypes.string,
};

/* ===========================================================
   HOBBY PAGE
=========================================================== */

const Hobby = () => {
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
          THREE.JS WIND BACKGROUND
      ===================================================== */}

      <WindBackground />

      {/* =====================================================
          DARK OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-gradient-to-b
          from-black/25
          via-black/50
          to-black/80
        "
      />

      {/* =====================================================
          DECORATIVE TOP GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-24
          z-[1]
          h-[280px]
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-green-400/5
          blur-[110px]
          sm:h-[400px]
          sm:w-[400px]
          md:h-[500px]
          md:w-[500px]
          lg:h-[650px]
          lg:w-[650px]
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
          max-w-6xl
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
            HERO
        =================================================== */}

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          {/* Eyebrow */}

          <motion.p
            variants={fadeUp}
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-green-400
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            Beyond The Code
          </motion.p>

          {/* Main Title */}

          <motion.h1
            variants={fadeUp}
            className="
              mx-auto
              mt-4
              max-w-5xl
              break-words
              text-4xl
              font-extrabold
              leading-[1.08]
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
              Life Beyond Programming
            </span>
          </motion.h1>

          {/* Intro */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-sm
              leading-7
              text-gray-400
              sm:mt-7
              sm:text-base
              sm:leading-8
              md:mt-8
              md:text-lg
            "
          >
            Building software is a big part of who I am, but it&apos;s not the
            only thing that inspires me. Nature, photography, travel and
            personal creative projects help me stay curious, balanced and
            motivated in both my professional and personal life.
          </motion.p>

          {/* =================================================
              PROFILE PHOTO
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="
              relative
              mx-auto
              mt-8
              flex
              w-fit
              flex-col
              items-center
              sm:mt-10
              md:mt-12
            "
          >
            {/* Photo Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[42%]
                h-48
                w-48
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-green-400/20
                via-blue-500/20
                to-cyan-400/20
                blur-[55px]
                sm:h-56
                sm:w-56
                md:h-64
                md:w-64
              "
            />

            {/* Gradient Border */}

            <motion.div
              whileHover={{
                scale: 1.025,
                y: -4,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                relative
                rounded-full
                bg-gradient-to-br
                from-green-400/50
                via-blue-400/30
                to-cyan-400/50
                p-[1px]
              "
            >
              <div className="rounded-full bg-black p-1">
                <img
                  src={HobbyImg}
                  alt="Enjoying winter outdoors"
                  className="
                    h-44
                    w-44
                    rounded-full
                    object-cover
                    shadow-2xl
                    sm:h-52
                    sm:w-52
                    md:h-56
                    md:w-56
                    lg:h-60
                    lg:w-60
                  "
                />
              </div>
            </motion.div>

            {/* Photo Badge */}

            <div
              className="
                relative
                mt-5
                rounded-full
                border
                border-white/10
                bg-black/60
                px-4
                py-2
                text-xs
                font-medium
                tracking-wide
                text-gray-300
                shadow-lg
                backdrop-blur-xl
                sm:px-5
                sm:text-sm
              "
            >
              <span className="text-green-400">Life</span>

              <span className="mx-2 text-white/30">•</span>

              <span className="text-blue-300">Nature</span>

              <span className="mx-2 text-white/30">•</span>

              <span className="text-cyan-300">Creativity</span>
            </div>
          </motion.div>
        </motion.section>

        {/* ===================================================
            CONTENT SECTIONS
        =================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="
            mt-12
            space-y-6
            sm:mt-16
            sm:space-y-8
            md:mt-20
          "
        >
          {/* =================================================
              LIFE OUTSIDE WORK
          ================================================= */}

          <ContentCard
            label="Life Outside Work"
            title="Finding Balance Through Nature"
          >
            <div
              className="
                space-y-4
                text-sm
                leading-7
                text-gray-300
                sm:space-y-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                When I&apos;m away from my computer, I enjoy spending time
                outdoors. During winter, downhill skiing is one of my favorite
                activities, while summer is all about cycling, hiking and
                discovering new places in nature.
              </p>

              <p>
                Photography has also become one of my favorite hobbies.
                Capturing landscapes and everyday moments allows me to slow
                down, appreciate details and look at the world from different
                perspectives.
              </p>

              <p>
                These activities help me disconnect from work, recharge my
                energy and return with a fresh mindset, something I believe is
                essential for creativity and long-term productivity.
              </p>
            </div>
          </ContentCard>

          {/* =================================================
              PERSONAL CREATIVITY
          ================================================= */}

          <ContentCard
            label="Personal Creativity"
            title="Turning Ideas Into Reality"
            labelColor="text-blue-400"
            hoverBorder="md:hover:border-blue-400/20"
            hoverShadow="md:hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"
            glow="from-blue-500/10 via-cyan-400/10 to-transparent"
          >
            <div
              className="
                space-y-4
                text-sm
                leading-7
                text-gray-300
                sm:space-y-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                One of the things I genuinely enjoy is turning everyday ideas
                into small personal projects. Sometimes it starts with a simple
                thought like, &quot;It would be useful if this existed,&quot;
                and then I challenge myself to build it.
              </p>

              <p>
                That&apos;s exactly how{" "}
                <strong className="font-semibold text-blue-300">APUA</strong>{" "}
                began. It wasn&apos;t created for work or university—it started
                as a personal idea that gradually evolved into a real mobile
                application. For me, the most enjoyable part is watching an idea
                grow from a sketch into something people can actually use.
              </p>

              <p>
                Creating side projects allows me to express creativity,
                experiment with new concepts and simply enjoy the process of
                building something meaningful from the ground up.
              </p>
            </div>
          </ContentCard>

          {/* =================================================
              MY JOURNEY
          ================================================= */}

          <ContentCard label="My Journey" title="A Different Starting Point">
            {/* Journey Image */}

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                mx-auto
                mb-7
                w-full
                max-w-[260px]
                sm:mb-9
                sm:max-w-[300px]
                md:mb-10
                md:max-w-xs
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-400/15
                  via-blue-500/10
                  to-cyan-400/15
                  blur-2xl
                "
              />

              <img
                src={JourneyImg}
                alt="My professional journey"
                loading="lazy"
                className="
                  relative
                  aspect-square
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  object-cover
                  shadow-2xl
                "
              />
            </motion.div>

            <div
              className="
                space-y-4
                text-sm
                leading-7
                text-gray-300
                sm:space-y-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                Before starting my career in software development, I worked in
                tourism management, including roles at the National Museum and
                in the travel industry.
              </p>

              <p>
                Those experiences taught me how to communicate with different
                people, stay organized and remain calm in fast-paced
                environments. They also showed me how much I enjoy solving
                practical problems and helping others.
              </p>

              <p>
                Looking back, changing careers was one of the best decisions I
                have ever made. It challenged me, strengthened my confidence and
                opened the door to a profession where creativity and logical
                thinking come together every day.
              </p>
            </div>
          </ContentCard>

          {/* =================================================
              TRAVEL
          ================================================= */}

          <ContentCard
            label="Curiosity"
            title="Discovering New Places & Perspectives"
            labelColor="text-cyan-400"
            hoverBorder="md:hover:border-cyan-400/20"
            hoverShadow="md:hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
            glow="from-cyan-400/10 via-blue-500/10 to-transparent"
          >
            <div
              className="
                space-y-4
                text-sm
                leading-7
                text-gray-300
                sm:space-y-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                I enjoy exploring new cities, landscapes and cultures. Traveling
                gives me the opportunity to experience different environments,
                discover new perspectives and appreciate the diversity of people
                and ideas.
              </p>

              <p>
                Living in Finland has made me appreciate nature even more.
                Whether I&apos;m walking through forests, visiting lakes or
                exploring quiet places, I always return home feeling refreshed
                and inspired.
              </p>

              <p>
                I believe curiosity isn&apos;t only valuable while
                travelling—it&apos;s also an important mindset in everyday life.
                Staying open to new experiences has helped me grow both
                personally and professionally.
              </p>
            </div>
          </ContentCard>

          {/* =================================================
              WORK & LIFE
          ================================================= */}

          <ContentCard label="Balance" title="Work, Creativity & Everyday Life">
            <div
              className="
                space-y-4
                text-sm
                leading-7
                text-gray-300
                sm:space-y-5
                sm:text-base
                sm:leading-8
                md:text-lg
              "
            >
              <p>
                For me, maintaining a healthy balance between work and personal
                life is essential. Spending time outdoors, travelling,
                photographing beautiful places and enjoying simple moments helps
                me stay focused and motivated.
              </p>

              <p>
                I believe creativity doesn&apos;t only come from sitting in
                front of a computer. Many of my best ideas appear while skiing,
                walking through nature or simply exploring a new place with my
                camera.
              </p>

              <p>
                Those experiences remind me that every journey begins with
                curiosity, whether it&apos;s discovering a new mountain,
                visiting a new city or starting a completely new project.
              </p>
            </div>
          </ContentCard>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.section
            variants={fadeUp}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-br
              from-green-400/10
              via-blue-500/10
              to-cyan-400/10
              p-6
              text-center
              backdrop-blur-xl
              sm:rounded-3xl
              sm:p-10
              md:p-14
            "
          >
            {/* CTA Glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-48
                w-48
                -translate-x-1/2
                rounded-full
                bg-green-400/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-green-400
                  sm:text-sm
                "
              >
                Let&apos;s Connect
              </p>

              <h2
                className="
                  mt-4
                  break-words
                  text-3xl
                  font-bold
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Thanks for stopping by!
              </h2>

              <p
                className="
                  mx-auto
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-300
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                Every experience, hobby and challenge has shaped who I am today.
                If you&apos;d like to know more about my work or explore the
                projects I&apos;ve built, I&apos;d be happy to connect.
              </p>

              {/* CTA Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  justify-center
                  gap-3
                  sm:flex-row
                  sm:flex-wrap
                  sm:gap-4
                  md:mt-10
                "
              >
                <a
                  href="/#projects"
                  className="
                    rounded-full
                    bg-gradient-to-r
                    from-green-400
                    to-blue-500
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    sm:px-8
                    sm:py-4
                    sm:text-base
                    md:hover:scale-105
                    md:hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]
                  "
                >
                  View Projects
                </a>

                <a
                  href="/#contact"
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/[0.02]
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    sm:px-8
                    sm:py-4
                    sm:text-base
                    md:hover:border-green-400
                    md:hover:bg-green-400/5
                  "
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
};

export default Hobby;
