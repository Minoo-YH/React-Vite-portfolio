import { HashLink } from "react-router-hash-link";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";

import WindBackground from "./WindBackground";
import DeveloperTerminal from "./DeveloperTerminal";
import SpaceOrbit from "./SpaceOrbit";

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
        overflow-hidden
        bg-black
        pb-14
        pt-28
        sm:pb-16
        sm:pt-32
        lg:pb-20
        lg:pt-36
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
          z-10
          bg-gradient-to-b
          from-black/10
          via-black/20
          to-black/60
        "
      />

      {/* =====================================================
          DECORATIVE GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[15%]
          z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-green-400/[0.05]
          blur-[130px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[20%]
          z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-500/[0.07]
          blur-[140px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ===================================================
            MAIN HERO GRID
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            md:gap-14
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="order-2 min-w-0 lg:order-1">
            {/* AVAILABLE */}

            <div
              className="
                mb-5
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-green-400/20
                bg-green-400/10
                px-3
                py-2
                text-[11px]
                text-green-300
                backdrop-blur-md
                sm:mb-6
                sm:px-4
                sm:text-sm
                lg:mb-8
              "
            >
              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  animate-pulse
                  rounded-full
                  bg-green-400
                  shadow-[0_0_10px_rgba(74,222,128,0.8)]
                "
              />

              <span className="leading-5">
                Available for Internship & Junior Software Engineer Roles
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h1
              className="
                break-words
                text-[2.5rem]
                font-black
                leading-[1.08]
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
              "
            >
              Hi, I&apos;m{" "}
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

            {/* =================================================
                JOB TITLE
            ================================================= */}

            <h2
              className="
                mt-4
                text-xl
                font-semibold
                leading-tight
                text-white
                sm:mt-5
                sm:text-2xl
                md:text-3xl
              "
            >
              Full Stack Software Developer
            </h2>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-gray-300
                sm:mt-6
                sm:text-base
                lg:mt-8
                lg:text-lg
                lg:leading-8
              "
            >
              I build modern web and mobile applications using React, React
              Native, ASP.NET Core, Node.js and modern cloud technologies.
              Passionate about clean architecture, intuitive user experiences
              and solving real-world problems through software.
            </p>

            {/* =================================================
                TECH STACK
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                gap-2
                sm:mt-8
                sm:gap-3
                lg:mt-10
              "
            >
              {techStack.map((item) => (
                <span
                  key={item}
                  className="
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-2
                    text-xs
                    text-gray-200
                    backdrop-blur-md
                    transition
                    duration-300
                    hover:border-green-400/40
                    hover:bg-green-400/10
                    sm:px-4
                    sm:text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
                sm:mt-10
                sm:gap-4
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
                  rounded-full
                  bg-gradient-to-r
                  from-green-400
                  to-blue-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]
                  sm:px-7
                  sm:text-base
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
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                  sm:px-7
                  sm:text-base
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
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                  sm:px-7
                  sm:text-base
                "
              >
                Contact
              </HashLink>
            </div>

            {/* =================================================
                SOCIAL
            ================================================= */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-4
                sm:mt-8
                sm:gap-5
                lg:mt-10
              "
            >
              <a
                href="https://github.com/Minoo-YH"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:border-green-400/40
                  hover:bg-green-400/10
                  hover:text-green-400
                  sm:h-12
                  sm:w-12
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
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-400/10
                  hover:text-blue-400
                  sm:h-12
                  sm:w-12
                "
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT / IMAGE + 3D SPACE ORBIT
          ================================================= */}

          <div
            className="
              order-1
              flex
              justify-center
              py-8
              sm:py-10
              lg:order-2
              lg:justify-end
              lg:py-0
            "
          >
            <div
              className="
                group
                relative
                flex
                items-center
                justify-center
              "
            >
              {/* ===============================================
                  PORTRAIT GLOW
              =============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-5
                  rounded-full
                  bg-gradient-to-r
                  from-green-400/30
                  via-blue-400/20
                  to-cyan-400/30
                  blur-3xl
                  transition
                  duration-700
                  group-hover:scale-110
                  sm:-inset-7
                  lg:-inset-10
                "
              />

              {/* ===============================================
                  SECOND SOFT GLOW
              =============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[130%]
                  w-[130%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-blue-500/[0.05]
                  blur-[70px]
                "
              />

              {/* ===============================================
                  3D SPACESHIP ORBIT
              =============================================== */}

              <SpaceOrbit />

              {/* ===============================================
                  PORTRAIT
              =============================================== */}

              <img
                src={HeroImg}
                alt="Minoo Yaghoubi"
                className="
                  relative
                  z-10
                  h-[210px]
                  w-[210px]
                  max-w-full
                  rounded-full
                  border
                  border-white/10
                  object-cover
                  shadow-2xl
                  transition
                  duration-500
                  group-hover:scale-[1.03]
                  min-[400px]:h-[240px]
                  min-[400px]:w-[240px]
                  sm:h-[300px]
                  sm:w-[300px]
                  md:h-[350px]
                  md:w-[350px]
                  lg:h-[380px]
                  lg:w-[380px]
                  xl:h-[420px]
                  xl:w-[420px]
                "
              />

              {/* ===============================================
                  INNER RING
              =============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  z-20
                  h-[225px]
                  w-[225px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-cyan-400/10
                  min-[400px]:h-[255px]
                  min-[400px]:w-[255px]
                  sm:h-[320px]
                  sm:w-[320px]
                  md:h-[370px]
                  md:w-[370px]
                  lg:h-[400px]
                  lg:w-[400px]
                  xl:h-[440px]
                  xl:w-[440px]
                "
              />

              {/* ===============================================
                  ORBIT LABEL
              =============================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  left-1/2
                  z-30
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-white/10
                  bg-black/60
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-gray-400
                  shadow-xl
                  backdrop-blur-xl
                  sm:-bottom-7
                  sm:px-4
                  sm:py-2
                  sm:text-[10px]
                "
              >
                <span className="text-green-400">Explore</span>

                <span className="mx-2 text-white/20">•</span>

                <span className="text-blue-300">Build</span>

                <span className="mx-2 text-white/20">•</span>

                <span className="text-cyan-300">Launch</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            DEVELOPER TERMINAL
        =================================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            mt-16
            w-full
            max-w-3xl
            sm:mt-20
            md:mt-24
            lg:mt-28
          "
        >
          {/* TERMINAL GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              -z-10
              h-[70%]
              w-[85%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-gradient-to-r
              from-green-400/10
              via-blue-500/10
              to-cyan-400/10
              blur-[80px]
            "
          />

          {/* LABEL */}

          <div className="mb-5 text-center sm:mb-6">
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-gray-500
                sm:text-xs
                sm:tracking-[0.3em]
              "
            >
              Interactive Developer Profile
            </p>
          </div>

          <DeveloperTerminal />
        </div>

        {/* ===================================================
            STATS
        =================================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-2xl
            grid-cols-3
            gap-3
            sm:mt-16
            sm:gap-8
            lg:mt-20
            lg:gap-12
          "
        >
          {/* PROJECTS */}

          <div className="min-w-0 text-center">
            <h3
              className="
                text-xl
                font-bold
                text-green-400
                sm:text-3xl
                lg:text-4xl
              "
            >
              15+
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                text-gray-400
                min-[400px]:text-xs
                sm:text-base
              "
            >
              Projects
            </p>
          </div>

          {/* FULL STACK */}

          <div className="min-w-0 text-center">
            <h3
              className="
                text-base
                font-bold
                leading-tight
                text-blue-400
                min-[400px]:text-lg
                sm:text-3xl
                lg:text-4xl
              "
            >
              Full Stack
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                text-gray-400
                min-[400px]:text-xs
                sm:text-base
              "
            >
              Web & Mobile
            </p>
          </div>

          {/* LOCATION */}

          <div className="min-w-0 text-center">
            <h3
              className="
                text-lg
                font-bold
                text-cyan-400
                min-[400px]:text-xl
                sm:text-3xl
                lg:text-4xl
              "
            >
              Helsinki
            </h3>

            <p
              className="
                mt-1
                text-[10px]
                text-gray-400
                min-[400px]:text-xs
                sm:text-base
              "
            >
              Finland
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
