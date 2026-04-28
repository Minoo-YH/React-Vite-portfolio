import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AboutImg from "../assets/about.png";

/* ========= Progress ========= */
const ProgressBar = ({ label, value, isVisible }) => (
  <div className="space-y-2 group">
    <div className="flex justify-between text-base md:text-lg text-gray-300 font-medium">
      <span className="group-hover:text-white transition">{label}</span>
      <span className="text-gray-400">{value}%</span>
    </div>

    <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur">
      <div
        className="h-full rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 transition-all duration-1000"
        style={{ width: isVisible ? `${value}%` : "0%" }}
      />
    </div>
  </div>
);

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

/* ========= Count ========= */
const useCountUp = (end, duration = 1000, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const step = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [trigger, end, duration]);

  return count;
};

/* ========= About ========= */
export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const years = useCountUp(2, 800, visible);
  const projects = useCountUp(15, 1200, visible);

  return (
    <section ref={ref} id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-20 text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* IMAGE */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 blur-3xl bg-green-400/30 rounded-full group-hover:opacity-60 transition"></div>

              <img
                src={AboutImg}
                alt="Developer"
                className="relative z-10 rounded-full object-cover
                w-[240px] h-[240px]
                md:w-[300px] md:h-[300px]
                lg:w-[320px] lg:h-[320px]
                border border-white/10 shadow-xl
                group-hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              I’m a full-stack web and mobile developer who enjoys building
              modern, clean, and meaningful digital experiences.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I work with React, React Native, TypeScript, and Tailwind to build
              modern interfaces with strong UI/UX focus.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              On the backend, I use Node.js and Python to build APIs and handle
              databases like MongoDB.
            </p>

            {/* SKILLS */}
            <div className="space-y-5 pt-4">
              <ProgressBar label="HTML & CSS" value={100} isVisible={visible} />
              <ProgressBar label="React" value={90} isVisible={visible} />
              <ProgressBar label="Node.js" value={80} isVisible={visible} />
              <ProgressBar label="JavaScript" value={80} isVisible={visible} />
              <ProgressBar label="Python" value={80} isVisible={visible} />
              <ProgressBar label="Java" value={70} isVisible={visible} />
              <ProgressBar label="MongoDB" value={70} isVisible={visible} />
              <ProgressBar label="TypeScript" value={70} isVisible={visible} />
              <ProgressBar
                label="Git & GitHub"
                value={80}
                isVisible={visible}
              />
              <ProgressBar
                label="Tailwind CSS"
                value={80}
                isVisible={visible}
              />
              <ProgressBar
                label="UI/UX Design"
                value={90}
                isVisible={visible}
              />
              <ProgressBar
                label="Agile Methodologies + Scrum"
                value={90}
                isVisible={visible}
              />
              <ProgressBar
                label="Problem Solving & Debugging"
                value={80}
                isVisible={visible}
              />
              <ProgressBar
                label="Cybersecurity"
                value={70}
                isVisible={visible}
              />
              <ProgressBar
                label="Cloud Platforms (AWS, Azure)"
                value={60}
                isVisible={visible}
              />
            </div>
          </div>
        </div>

        <div className="mt-28 flex justify-center gap-16 flex-wrap">
          {/* YEARS */}
          <div
            className="group relative px-12 py-8 rounded-2xl 
    bg-black/40 backdrop-blur-xl border border-green-400/20
    transition duration-300 hover:scale-105"
          >
            {/* glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
      bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-xl"
            ></div>

            <h3
              className="relative text-6xl md:text-7xl font-extrabold 
      bg-gradient-to-r from-green-400 to-blue-500 
      bg-clip-text text-transparent
      animate-[glowPulse_2.5s_infinite]"
            >
              {years}+
            </h3>

            <p className="relative text-gray-400 text-lg mt-3 group-hover:text-white transition">
              Years Experience
            </p>
          </div>

          {/* PROJECTS */}
          <div
            className="group relative px-12 py-8 rounded-2xl 
    bg-black/40 backdrop-blur-xl border border-blue-400/20
    transition duration-300 hover:scale-105"
          >
            {/* glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
      bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-xl"
            ></div>

            <h3
              className="relative text-6xl md:text-7xl font-extrabold 
      bg-gradient-to-r from-green-400 to-blue-500 
      bg-clip-text text-transparent
      animate-[glowPulse_2.5s_infinite]"
            >
              {projects}+
            </h3>

            <p className="relative text-gray-400 text-lg mt-3 group-hover:text-white transition">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
