import { HashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";
import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";
import WindBackground from "./WindBackground";

const techStack = [
  "React",
  "React Native",
  "ASP.NET Core",
  "Node.js",
  "TypeScript",
  "Java",
  "Docker",
  "Azure",
];

const Hero = () => {
  return (
    <header className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <WindBackground />

      <div className="relative z-40 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="order-2 lg:order-1">

            <div
              className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-green-400/20
              bg-green-400/10
              text-green-300 text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

              Available for Internship & Junior Software Engineer Roles
            </div>

            <h1
              className="text-5xl md:text-6xl xl:text-7xl
              font-black leading-tight"
            >
              Hi, I'm{" "}

              <span
                className="bg-gradient-to-r
                from-green-400
                via-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent"
              >
                Minoo Yaghoubi
              </span>
            </h1>

            <h2
              className="mt-5
              text-2xl md:text-3xl
              font-semibold
              text-white"
            >
              Full Stack Software Developer
            </h2>

            <p
              className="mt-8
              text-gray-300
              text-lg
              leading-8
              max-w-2xl"
            >
              I build modern web and mobile applications using
              React, React Native, ASP.NET Core, Node.js and modern cloud
              technologies. Passionate about clean architecture,
              intuitive user experiences and solving real-world problems
              through software.
            </p>

            {/* TECH STACK */}

            <div className="flex flex-wrap gap-3 mt-10">

              {techStack.map((item) => (
                <span
                  key={item}
                  className="
                  px-4 py-2
                  rounded-full
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  text-gray-200
                  text-sm
                  hover:border-green-400/40
                  hover:bg-green-400/10
                  transition"
                >
                  {item}
                </span>
              ))}

            </div>
                        {/* ACTIONS */}

            <div className="flex flex-wrap gap-4 mt-12">

              <HashLink
                smooth
                to="/#projects"
                className="
                flex items-center gap-2
                px-7 py-3
                rounded-full
                bg-gradient-to-r
                from-green-400
                to-blue-500
                text-black
                font-semibold
                transition
                hover:scale-105"
              >
                View Projects
                <FaArrowRight size={14} />
              </HashLink>

              <a
                href={ResumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-2
                px-7 py-3
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition"
              >
                <FaDownload />
                Resume
              </a>

              <HashLink
                smooth
                to="/#contact"
                className="
                px-7 py-3
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-md
                hover:bg-white/10
                transition"
              >
                Contact
              </HashLink>

            </div>

            {/* SOCIAL */}

            <div className="flex items-center gap-5 mt-10">

              <a
                href="https://github.com/Minoo-YH"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                hover:bg-green-400/10
                hover:border-green-400/40
                transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/minoo-yaghoubi-692b42182/"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-full
                bg-white/5
                border border-white/10
                flex items-center justify-center
                hover:bg-blue-400/10
                hover:border-blue-400/40
                transition"
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative group">

              <div
                className="
                absolute
                -inset-8
                rounded-full
                blur-3xl
                bg-gradient-to-r
                from-green-400/30
                via-blue-400/20
                to-cyan-400/30
                group-hover:scale-110
                transition
                duration-700"
              />

              <img
                src={HeroImg}
                alt="Minoo Yaghoubi"
                className="
                relative
                z-10
                w-[320px]
                md:w-[420px]
                rounded-full
                border
                border-white/10
                object-cover
                shadow-2xl
                transition
                duration-500
                group-hover:scale-105"
              />

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
          mt-24
          flex
          flex-wrap
          justify-center
          gap-12"
        >

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-400">
              15+
            </h3>
            <p className="text-gray-400">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-400">
              Full Stack
            </h3>
            <p className="text-gray-400">
              Web & Mobile
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              Helsinki
            </h3>
            <p className="text-gray-400">
              Finland
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Hero;