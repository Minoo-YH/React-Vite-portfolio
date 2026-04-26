import { HashLink } from "react-router-hash-link";
import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";
import WindBackground from "./WindBackground";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background */}
      <WindBackground />

      {/* Content */}
      <div className="relative z-50 w-full max-w-5xl mx-auto text-center px-6">
        {/* Avatar */}
        <div className="relative flex justify-center mb-10">
          {/* Glow */}
          <div
            className="absolute 
            w-[300px] h-[300px] 
            md:w-[420px] md:h-[420px]
            bg-gradient-to-r from-green-400 to-blue-500 
            blur-[140px] opacity-30 rounded-full"
          />

          {/* Image */}
          <img
            src={HeroImg}
            alt="Minoo Yaghoubi"
            className="relative 
              w-48 h-48 
              md:w-72 md:h-72 
              lg:w-[340px] lg:h-[340px] 
              rounded-full object-cover object-top 
              border border-white/10 
              shadow-[0_0_50px_rgba(34,197,94,0.5)]
              transition duration-300 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl mx-auto">
          I'm{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Minoo Yaghoubi
          </span>
          <br />
          Full-stack Web & Mobile Developer
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Crafting modern, scalable and immersive digital experiences for web &
          mobile.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <HashLink
            smooth
            to="/#contact"
            className="px-8 py-3 rounded-full 
            bg-gradient-to-r from-green-400 to-blue-500 
            text-black font-semibold 
            transition duration-300 hover:scale-110 
            hover:shadow-[0_0_30px_#22c55e]"
          >
            Contact Me
          </HashLink>

          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full 
            border border-white/20 
            text-white font-semibold 
            hover:bg-white/10 transition duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
