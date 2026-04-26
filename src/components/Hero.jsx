import { HashLink } from "react-router-hash-link";
import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";
import WindBackground from "./WindBackground";

const Hero = () => {
  return (
    <header className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black text-white ">
      {/* Background */}
      <WindBackground />

      {/* Content */}
      <div className="container relative z-50 text-center px-4">
        {/* Avatar */}
        <div className="relative flex justify-center mb-6">
          {/* Glow */}
          <div
            className="absolute 
            w-[280px] h-[280px] 
            sm:w-[340px] sm:h-[340px] 
            md:w-[420px] md:h-[420px]
            bg-gradient-to-r from-green-400 to-blue-500 
            blur-[120px] opacity-30 rounded-full"
          />

          {/* Image */}
          <img
            src={HeroImg}
            alt="Minoo Yaghoubi"
            className="relative 
              w-44 h-44 
              sm:w-56 sm:h-56 
              md:w-72 md:h-72 
              lg:w-[320px] lg:h-[320px] 
              xl:w-[360px] xl:h-[360px] 
              rounded-full object-cover object-top 
              border border-white/10 
              shadow-[0_0_40px_rgba(34,197,94,0.4)]
              transition duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Minoo Yaghoubi
          </span>
          , Full-stack Web & Mobile Developer
        </h1>

        {/* Subtitle */}
        <p className="mt-10 text-base md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
          Crafting modern, scalable and immersive digital experiences for web &
          mobile.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <HashLink
            smooth
            to="/#contact"
            className="px-6 py-2 rounded-full 
            bg-gradient-to-r from-green-400 to-blue-500 
            text-black font-medium 
            hover:scale-105 transition"
          >
            Contact Me
          </HashLink>

          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full 
  bg-gradient-to-r from-green-400 to-blue-500 
  text-black font-medium 
  hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
