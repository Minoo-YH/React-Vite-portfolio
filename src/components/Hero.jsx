
import { HashLink } from "react-router-hash-link";
import HeroImg from "../assets/minoo.png";
import ResumeFile from "../assets/resume2024.pdf";
import WindBackground from "./WindBackground";

const Hero = () => {
  return (
    <header className="relative bg-black text-white py-16 overflow-hidden">
      {/* Background animation */}
      <WindBackground />

      {/* Content */}
      <div className="container relative z-50 text-center px-4">
        {/* Avatar */}
        <img
          src={HeroImg}
          alt="Minoo Yaghoubi"
          className="mx-auto mb-10 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Minoo Yaghoubi
          </span>
          , Full-stack Web & Mobile Developer
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          I specialize in building modern and responsive applications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <HashLink
            smooth
            to="/#contact"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Contact Me
          </HashLink>

          <a
            href={ResumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-105 inline-block"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
