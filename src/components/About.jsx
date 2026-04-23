import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AboutImg from "../assets/about.png";

/* =========================
   ProgressBar
========================= */
const ProgressBar = ({ label, value, isVisible }) => {
  return (
    <div className="grid items-center gap-4 mb-5 w-full grid-cols-1 sm:grid-cols-[16rem,1fr]">
      <span className="text-sm md:text-base tracking-wide text-gray-400 uppercase">
        {label}
      </span>

      <div className="h-3.5 bg-gray-700/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

/* =========================
   CountUp Hook (improved safe)
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
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
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
    <section ref={ref} id="about" className="section bg-black text-white">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Title */}
        <h2 className="text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 text-3xl md:text-4xl font-semibold">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24 lg:gap-32">
          {/* Image */}
          <div className="rounded-full p-[5px] bg-gradient-to-r from-green-600 to-blue-800 shrink-0">
            <img
              src={AboutImg}
              alt="Developer"
              className="rounded-full object-cover w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 transition duration-300 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex-1 w-full text-center md:text-left">
            <div className="space-y-7 text-lg md:text-xl leading-relaxed max-w-[900px]">
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
            <div className="mt-16 w-full max-w-[900px]">
              <ProgressBar label="HTML & CSS" value={100} isVisible={visible} />
              <ProgressBar label="React" value={90} isVisible={visible} />
              <ProgressBar label="Node.js" value={80} isVisible={visible} />
              <ProgressBar label="JavaScript" value={80} isVisible={visible} />
              <ProgressBar
                label="React Native"
                value={70}
                isVisible={visible}
              />
              <ProgressBar
                label="Tailwind CSS"
                value={80}
                isVisible={visible}
              />
              <ProgressBar label="Python" value={80} isVisible={visible} />
              <ProgressBar label="C++" value={50} isVisible={visible} />
              <ProgressBar label="Java" value={60} isVisible={visible} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-28 flex flex-col sm:flex-row gap-16 justify-center text-center">
          <div>
            <h3 className="bg-gradient-to-r from-green-600 to-blue-800 bg-clip-text text-transparent text-3xl md:text-4xl font-semibold">
              {years}+
            </h3>
            <p className="text-gray-300 mt-2 text-lg">Years Experience</p>
          </div>

          <div>
            <h3 className="bg-gradient-to-r from-green-600 to-blue-800 bg-clip-text text-transparent text-3xl md:text-4xl font-semibold">
              {projects}+
            </h3>
            <p className="text-gray-400 mt-2 text-lg">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
