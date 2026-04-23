import React, { useEffect, useRef, useState } from "react";
import AboutImg from "../assets/about.png";

/* =========================
   ProgressBar
========================= */
const ProgressBar = ({ label, value, isVisible }) => {
  return (
    <div className="grid items-center gap-3 sm:gap-4 mb-4 sm:mb-5 w-full max-w-2xl mx-auto md:mx-0 grid-cols-1 sm:grid-cols-[13rem,1fr]">
      <span className="text-xs sm:text-sm md:text-base tracking-wide text-gray-400 uppercase truncate">
        {label}
      </span>

      <div className="h-3 sm:h-3.5 bg-gray-700/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
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
      start++;
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
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
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
      className="section bg-black text-white"
    >
      <div className="container w-full">

        {/* Title */}
        <h2 className="text-center mb-14 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 lg:gap-24">

          {/* Image */}
          <div className="rounded-full p-[5px] bg-gradient-to-r from-green-400 to-blue-500 shrink-0">
            <img
              src={AboutImg}
              alt="Developer"
              className="rounded-full object-cover 
              w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72
              transition duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">

            <div className="max-w-[75ch] mx-auto md:mx-0 space-y-6 md:space-y-7">
              <p>
                I’m a passionate full-stack web and mobile developer focused on
                building meaningful and engaging digital experiences. Alongside
                my technical skills, I have a strong interest in UI/UX design.
              </p>

              <p>
                I have experience working with Agile and Scrum, using tools like
                Jira and Trello. I learn quickly, adapt fast, and work well in
                teams.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12 md:mt-14">
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
        <div className="mt-20 sm:mt-24 flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center text-center">
          <div>
            <h3 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {years}+
            </h3>
            <p className="text-gray-400 mt-2">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {projects}+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
