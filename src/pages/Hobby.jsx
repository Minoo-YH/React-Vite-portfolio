import HobbyImg from "../assets/hobby-photo.jpeg";
import JourneyImg from "../assets/f.jpeg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hobby = () => {
  return (
    <main className="bg-black text-white min-h-screen py-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* ================= HERO ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.35em] text-green-400 text-sm"
          >
            Beyond The Code
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-5xl md:text-6xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Life Beyond Programming
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400"
          >
            Building software is a big part of who I am, but it's not the only
            thing that inspires me. Nature, photography, travel and personal
            creative projects help me stay curious, balanced and motivated in
            both my professional and personal life.
          </motion.p>

          {/* Photo */}

          <motion.div
            variants={fadeUp}
            className="relative w-fit mx-auto mt-16"
          >
            <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-green-400/40 to-blue-500/40" />

            <motion.img
              src={HobbyImg}
              alt="Outdoor activities"
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                relative
                w-60
                h-60
                md:w-72
                md:h-72
                rounded-full
                object-cover
                border
                border-white/10
                shadow-2xl
              "
            />
          </motion.div>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16 mt-24"
        >
          {/* ================= LIFE OUTSIDE WORK ================= */}

          <motion.section
            variants={fadeUp}
            className="
            group
            relative

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-green-400/20
            hover:shadow-[0_0_40px_rgba(34,197,94,.12)]
          "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 via-blue-500/10 to-transparent" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
                Life Outside Work
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Finding Balance Through Nature
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  When I'm away from my computer, I enjoy spending time
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
            </div>
          </motion.section>

          {/* ================= PERSONAL PROJECTS ================= */}

          <motion.section
            variants={fadeUp}
            className="
            group
            relative

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-blue-400/20
            hover:shadow-[0_0_40px_rgba(59,130,246,.12)]
          "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-transparent" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-4">
                Personal Creativity
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Turning Ideas Into Reality
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  One of the things I genuinely enjoy is turning everyday ideas
                  into small personal projects. Sometimes it starts with a
                  simple thought like, "It would be useful if this existed," and
                  then I challenge myself to build it.
                </p>

                <p>
                  That's exactly how <strong>APUA</strong> began. It wasn't
                  created for work or university—it started as a personal idea
                  that gradually evolved into a real mobile application. For me,
                  the most enjoyable part is watching an idea grow from a sketch
                  into something people can actually use.
                </p>

                <p>
                  Creating side projects allows me to express creativity,
                  experiment with new concepts and simply enjoy the process of
                  building something meaningful from the ground up.
                </p>
              </div>
            </div>
          </motion.section>
          {/* ================= MY JOURNEY ================= */}

          <motion.section
            variants={fadeUp}
            className="
            group
            relative

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-green-400/20
            hover:shadow-[0_0_40px_rgba(34,197,94,.12)]
          "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 via-blue-500/10 to-transparent" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
                My Journey
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                A Different Starting Point
              </h2>

              <motion.img
                src={JourneyImg}
                alt="My journey"
                whileHover={{
                  scale: 1.03,
                  y: -4,
                }}
                className="
                rounded-2xl
                w-64
                h-64
                object-cover
                mx-auto
                mb-10

                border
                border-white/10
              "
              />

              <div className="space-y-6 text-lg leading-8 text-gray-300">
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
                  have ever made. It challenged me, strengthened my confidence
                  and opened the door to a profession where creativity and
                  logical thinking come together every day.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ================= TRAVEL ================= */}

          <motion.section
            variants={fadeUp}
            className="
            group
            relative

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-cyan-400/20
            hover:shadow-[0_0_40px_rgba(59,130,246,.12)]
          "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-transparent" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
                Curiosity
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Discovering New Places & Perspectives
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  I enjoy exploring new cities, landscapes and cultures.
                  Traveling gives me the opportunity to experience different
                  environments, discover new perspectives and appreciate the
                  diversity of people and ideas.
                </p>

                <p>
                  Living in Finland has made me appreciate nature even more.
                  Whether I'm walking through forests, visiting lakes or
                  exploring quiet places, I always return home feeling refreshed
                  and inspired.
                </p>

                <p>
                  I believe curiosity isn't only valuable while travelling—it's
                  also an important mindset in everyday life. Staying open to
                  new experiences has helped me grow both personally and
                  professionally.
                </p>
              </div>
            </div>
          </motion.section>
          {/* ================= WORK & LIFE ================= */}

          <motion.section
            variants={fadeUp}
            className="
            group
            relative

            rounded-3xl

            border
            border-white/10

            bg-white/[0.03]
            backdrop-blur-xl

            p-10

            overflow-hidden

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-green-400/20
            hover:shadow-[0_0_40px_rgba(34,197,94,.12)]
          "
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/10 via-blue-500/10 to-transparent" />

            <div className="relative">
              <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
                Balance
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Work, Creativity & Everyday Life
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  For me, maintaining a healthy balance between work and
                  personal life is essential. Spending time outdoors,
                  travelling, photographing beautiful places and enjoying simple
                  moments helps me stay focused and motivated.
                </p>

                <p>
                  I believe creativity doesn't only come from sitting in front
                  of a computer. Many of my best ideas appear while skiing,
                  walking through nature or simply exploring a new place with my
                  camera.
                </p>

                <p>
                  Those experiences remind me that every journey begins with
                  curiosity, whether it's discovering a new mountain, visiting a
                  new city or starting a completely new project.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ================= CTA ================= */}

          <motion.section
            variants={fadeUp}
            className="
            text-center

            rounded-3xl

            border
            border-white/10

            bg-gradient-to-br
            from-green-400/10
            via-blue-500/10
            to-cyan-400/10

            backdrop-blur-xl

            p-14
          "
          >
            <h2 className="text-4xl font-bold mb-6">Thanks for stopping by!</h2>

            <p className="max-w-2xl mx-auto text-lg leading-8 text-gray-300 mb-10">
              Every experience, hobby and challenge has shaped who I am today.
              If you'd like to know more about my work or explore the projects
              I've built, I'd be happy to connect.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="#projects"
                className="
                px-8
                py-4

                rounded-full

                bg-gradient-to-r
                from-green-400
                to-blue-500

                text-black
                font-semibold

                transition-all

                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,197,94,.35)]
              "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                px-8
                py-4

                rounded-full

                border
                border-white/20

                hover:border-green-400

                transition-all
              "
              >
                Contact Me
              </a>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
};

export default Hobby;
