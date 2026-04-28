import HobbyImg from "../assets/hobby-photo.jpeg";
import JourneyImg from "../assets/f.jpeg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
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
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-semibold mb-16 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
            About My Hobbies & Journey
          </span>
        </motion.h1>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative w-fit mx-auto mb-16"
        >
          <div className="absolute inset-0 blur-2xl opacity-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>

          <motion.img
            src={HobbyImg}
            alt="Minoo enjoying hobbies"
            whileHover={{ scale: 1.06 }}
            className="relative rounded-full w-56 h-56 md:w-64 md:h-64 object-cover shadow-2xl border border-white/10"
          />
        </motion.div>

        {/* Sections */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-14"
        >
          {/* Free Time */}
          <motion.section
            variants={fadeUp}
            className="group relative bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl p-10 border border-white/10 max-w-4xl mx-auto overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-400/10 to-blue-500/10"></div>

            <h2 className="relative text-2xl md:text-3xl font-semibold mb-6 pb-3 border-b border-white/10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              What I Do in My Free Time
            </h2>

            <p className="relative text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              I’m a downhill ski lover in winter, and in summer I enjoy cycling
              and being immersed in nature. When I’m not coding, I love
              exploring photography and going on nature walks. Capturing moments
              and the beauty of the outdoors helps me recharge and stay
              creative. I’m also passionate about reading tech blogs and staying
              up-to-date with the latest trends.
            </p>
          </motion.section>

          {/* Journey */}
          <motion.section
            variants={fadeUp}
            className="group relative bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl p-10 border border-white/10 max-w-4xl mx-auto overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-400/10 to-blue-500/10"></div>

            <h2 className="relative text-2xl md:text-3xl font-semibold mb-6 pb-3 border-b border-white/10">
              My Journey Before Programming
            </h2>

            <motion.img
              src={JourneyImg}
              alt="My journey before programming"
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl w-56 h-56 md:w-64 md:h-64 object-cover mb-8 shadow-xl mx-auto border border-white/10"
            />

            <div className="relative space-y-5 text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                Before diving into programming, I was a tourism management
                expert, working at the National Museum and a travel agency.
              </p>

              <p>
                Programming fascinated me because it allows me to create
                solutions from scratch while combining creativity with logic.
              </p>
            </div>
          </motion.section>

          {/* Skills */}
          <motion.section
            variants={fadeUp}
            className="group relative bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl p-10 border border-white/10 max-w-4xl mx-auto overflow-hidden transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-400/10 to-blue-500/10"></div>

            <h2 className="relative text-2xl md:text-3xl font-semibold mb-6 pb-3 border-b border-white/10">
              Programming Languages & Technologies
            </h2>

            <p className="relative text-gray-300 mb-8 text-base md:text-lg max-w-2xl mx-auto">
              I have experience with a variety of modern technologies:
            </p>

            <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "C++",
                "MongoDB",
                "SQL",
                "React Native",
                "Tailwind",
                "Git & GitHub",
                "APIs",
                "Cybersecurity",
                "Cloud",
                "Agile",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-center text-gray-300 hover:bg-gradient-to-r hover:from-green-400/20 hover:to-blue-500/20 transition"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </main>
  );
};

export default Hobby;
