import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../assets/about.png";

/* =========================
   ProgressBar (responsive)
========================= */
const ProgressBar = ({ label, value, isVisible }) => {
  return (
    <div
      className="
        grid items-center gap-2 sm:gap-3 mb-4 w-full max-w-xl mx-auto
        grid-cols-1 sm:grid-cols-[10rem,1fr] md:grid-cols-[11rem,1fr]
      "
    >
      <span className="text-xs sm:text-sm tracking-wide text-gray-400 uppercase truncate">
        {label}
      </span>

      <div className="h-2.5 bg-gray-700/70 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500
                     transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
};

/* =========================
   CountUp Hook
========================= */
const useCountUp = (end, duration = 1000, trigger = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, end, duration]);

  return count;
};

/* =========================
   Component
========================= */
const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const years = useCountUp(2, 800, visible);
  const projects = useCountUp(15, 1200, visible);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-black text-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      {/* Title */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 sm:mb-12 md:mb-16
                   text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      >
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-5xl w-full">
        {/* Image */}
        <div className="rounded-full p-[4px] bg-gradient-to-r from-green-400 to-blue-500 shrink-0">
          <img
            src={AboutImg}
            alt="Developer"
            className="rounded-full object-cover 
                       w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56
                       transition duration-300 hover:scale-105"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="max-w-[62ch] mx-auto md:mx-0 text-gray-300 space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
            <p>
              I’m a passionate full-stack web and mobile developer focused on
              building meaningful and engaging digital experiences. Alongside my
              technical skills, I have a strong interest in UI/UX design, with a
              good understanding of color theory, typography, and visual
              hierarchy.
            </p>
            <p>
              I have experience working with Agile and Scrum, using tools like
              Jira and Trello. I learn quickly, adapt fast, and work well in
              teams. I am fluent in English, can communicate in Finnish, and
              Persian is my native language.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8 sm:mt-10">
            <ProgressBar label="HTML & CSS" value={100} isVisible={visible} />
            <ProgressBar label="React" value={90} isVisible={visible} />
            <ProgressBar label="Node.js" value={80} isVisible={visible} />
            <ProgressBar label="JavaScript" value={80} isVisible={visible} />
            <ProgressBar label="React Native" value={70} isVisible={visible} />
            <ProgressBar label="Tailwind CSS" value={80} isVisible={visible} />
            <ProgressBar label="Python" value={80} isVisible={visible} />
            <ProgressBar label="C++" value={50} isVisible={visible} />
            <ProgressBar label="Java" value={60} isVisible={visible} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-8 sm:gap-12 text-center">
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {years}+
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Years Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {projects}+
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Projects Completed
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
