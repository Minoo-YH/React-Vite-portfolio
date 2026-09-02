import { HashLink } from "react-router-hash-link";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

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
    <header
      className="
        relative
        min-h-screen
        bg-black
        overflow-hidden

        pt-28
        sm:pt-32
        lg:pt-36

        pb-14
        sm:pb-16
        lg:pb-20
      "
    >
      <WindBackground />

      <div
        className="
          relative
          z-40
          w-full
          max-w-7xl
          mx-auto

          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-10
            md:gap-12
            lg:gap-16

            items-center
          "
        >
          {/* ================= LEFT ================= */}

          <div className="order-2 lg:order-1 min-w-0">
            {/* AVAILABLE */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                max-w-full

                px-3
                sm:px-4

                py-2

                rounded-full

                border
                border-green-400/20

                bg-green-400/10

                text-green-300

                text-[11px]
                sm:text-sm

                mb-5
                sm:mb-6
                lg:mb-8
              "
            >
              <span
                className="
                  shrink-0
                  w-2
                  h-2
                  rounded-full
                  bg-green-400
                  animate-pulse
                "
              />

              <span className="leading-5">
                Available for Internship & Junior Software Engineer Roles
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                font-black

                text-[2.5rem]
                leading-[1.08]

                sm:text-5xl
                md:text-6xl
                xl:text-7xl

                break-words
              "
            >
              Hi, I'm{" "}
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
                Minoo Yaghoubi
              </span>
            </h1>

            {/* JOB TITLE */}

            <h2
              className="
                mt-4
                sm:mt-5

                text-xl
                sm:text-2xl
                md:text-3xl

                leading-tight

                font-semibold
                text-white
              "
            >
              Full Stack Software Developer
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                sm:mt-6
                lg:mt-8

                max-w-2xl

                text-sm
                sm:text-base
                lg:text-lg

                leading-7
                lg:leading-8

                text-gray-300
              "
            >
              I build modern web and mobile applications using React, React
              Native, ASP.NET Core, Node.js and modern cloud technologies.
              Passionate about clean architecture, intuitive user experiences
              and solving real-world problems through software.
            </p>

            {/* ================= TECH STACK ================= */}

            <div
              className="
                flex
                flex-wrap

                gap-2
                sm:gap-3

                mt-7
                sm:mt-8
                lg:mt-10
              "
            >
              {techStack.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    sm:px-4

                    py-2

                    rounded-full

                    border
                    border-white/10

                    bg-white/5
                    backdrop-blur-md

                    text-gray-200

                    text-xs
                    sm:text-sm

                    whitespace-nowrap

                    hover:border-green-400/40
                    hover:bg-green-400/10

                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* ================= ACTIONS ================= */}

            <div
              className="
                flex
                flex-wrap

                gap-3
                sm:gap-4

                mt-8
                sm:mt-10
                lg:mt-12
              "
            >
              <HashLink
                smooth
                to="/#projects"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  px-5
                  sm:px-7

                  py-3

                  rounded-full

                  bg-gradient-to-r
                  from-green-400
                  to-blue-500

                  text-black
                  text-sm
                  sm:text-base

                  font-semibold

                  transition

                  hover:scale-105
                "
              >
                View Projects
                <FaArrowRight size={14} />
              </HashLink>

              <a
                href={ResumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  px-5
                  sm:px-7

                  py-3

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-md

                  text-sm
                  sm:text-base

                  hover:bg-white/10

                  transition
                "
              >
                <FaDownload />
                Resume
              </a>

              <HashLink
                smooth
                to="/#contact"
                className="
                  flex
                  items-center
                  justify-center

                  px-5
                  sm:px-7

                  py-3

                  rounded-full

                  border
                  border-white/10

                  bg-white/5
                  backdrop-blur-md

                  text-sm
                  sm:text-base

                  hover:bg-white/10

                  transition
                "
              >
                Contact
              </HashLink>
            </div>

            {/* ================= SOCIAL ================= */}

            <div
              className="
                flex
                items-center

                gap-4
                sm:gap-5

                mt-7
                sm:mt-8
                lg:mt-10
              "
            >
              <a
                href="https://github.com/Minoo-YH"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-10
                  h-10

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:bg-green-400/10
                  hover:border-green-400/40

                  transition
                "
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/minoo-yaghoubi-692b42182/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-10
                  h-10

                  sm:w-12
                  sm:h-12

                  rounded-full

                  bg-white/5

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:bg-blue-400/10
                  hover:border-blue-400/40

                  transition
                "
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* ================= RIGHT / IMAGE ================= */}

          <div
            className="
              order-1
              lg:order-2

              flex
              justify-center
              lg:justify-end

              pt-2
              lg:pt-0
            "
          >
            <div className="relative group">
              {/* GLOW */}

              <div
                className="
                  absolute

                  -inset-4
                  sm:-inset-6
                  lg:-inset-8

                  rounded-full

                  blur-3xl

                  bg-gradient-to-r
                  from-green-400/30
                  via-blue-400/20
                  to-cyan-400/30

                  group-hover:scale-110

                  transition
                  duration-700
                "
              />

              {/* IMAGE */}

              <img
                src={HeroImg}
                alt="Minoo Yaghoubi"
                className="
                  relative
                  z-10

                  w-[210px]
                  h-[210px]

                  min-[400px]:w-[240px]
                  min-[400px]:h-[240px]

                  sm:w-[300px]
                  sm:h-[300px]

                  md:w-[350px]
                  md:h-[350px]

                  lg:w-[380px]
                  lg:h-[380px]

                  xl:w-[420px]
                  xl:h-[420px]

                  max-w-full

                  rounded-full

                  border
                  border-white/10

                  object-cover

                  shadow-2xl

                  transition
                  duration-500

                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-14
            sm:mt-18
            lg:mt-24

            grid
            grid-cols-3

            gap-3
            sm:gap-8
            lg:gap-12

            max-w-2xl
            mx-auto
          "
        >
          <div className="text-center min-w-0">
            <h3
              className="
                text-xl
                sm:text-3xl
                lg:text-4xl

                font-bold
                text-green-400
              "
            >
              15+
            </h3>

            <p className="text-xs sm:text-base text-gray-400">Projects</p>
          </div>

          <div className="text-center min-w-0">
            <h3
              className="
                text-lg
                sm:text-3xl
                lg:text-4xl

                leading-tight

                font-bold
                text-blue-400
              "
            >
              Full Stack
            </h3>

            <p className="text-xs sm:text-base text-gray-400">Web & Mobile</p>
          </div>

          <div className="text-center min-w-0">
            <h3
              className="
                text-xl
                sm:text-3xl
                lg:text-4xl

                font-bold
                text-cyan-400
              "
            >
              Helsinki
            </h3>

            <p className="text-xs sm:text-base text-gray-400">Finland</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
