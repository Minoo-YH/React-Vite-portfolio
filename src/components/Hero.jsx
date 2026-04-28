import { HashLink } from "react-router-hash-link";
import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";
import WindBackground from "./WindBackground";

const Hero = () => {
  return (
    <header className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <WindBackground />

      <div className="container relative z-40 flex flex-col items-center text-center">
        {/* IMAGE */}
        <img
          src={HeroImg}
          alt="Minoo Yaghoubi"
          className="block mx-auto mb-8 w-40 h-40 md:w-44 md:h-44 rounded-full object-cover object-top"
        />

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
         I’m
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Minoo Yaghoubi
          </span>
          <br />
          Full-stack Web & Mobile Developer
        </h1>

        {/* TEXT */}
        <p className="mt-5 text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
          Crafting modern, scalable and immersive digital experiences for web &
          mobile.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <HashLink
            smooth
            to="/#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition hover:scale-105"
          >
            Contact Me
          </HashLink>

          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
