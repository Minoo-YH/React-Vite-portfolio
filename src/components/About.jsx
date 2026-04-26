import { useEffect, useRef, useState } from "react";
import AboutImg from "../assets/about.png";

/* ========= Progress ========= */
const ProgressBar = ({ label, value, isVisible }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-base md:text-lg text-gray-300 font-medium">
      <span>{label}</span>
      <span>{value}%</span>
    </div>

    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
        style={{ width: isVisible ? `${value}%` : "0%" }}
      />
    </div>
  </div>
);

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
  }, [trigger]);

  return count;
};

/* ========= About ========= */
export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  const years = useCountUp(2, 800, visible);
  const projects = useCountUp(15, 1200, visible);

  return (
    <section ref={ref} id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-center mb-20 text-5xl md:text-6xl font-bold cosmic-text">
          About Me
        </h2>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* IMAGE */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-green-400/30 rounded-full"></div>

              <img
                src={AboutImg}
                alt="Developer"
                className="relative z-10 rounded-full object-cover
                w-[260px] h-[260px]
                md:w-[320px] md:h-[320px]
                lg:w-[340px] lg:h-[340px]
                border border-white/10 shadow-2xl"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed">
              I’m a full-stack web and mobile developer who enjoys building
              modern, clean, and meaningful digital experiences.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              On the frontend, I work mainly with React and React Native, using
              tools like TypeScript, Tailwind CSS, and Bootstrap. I enjoy
              turning Figma designs into real interfaces and I care a lot about
              UI details and user experience. I also write validations and test
              the frontend to make sure everything works smoothly.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              On the backend, I use Node.js and Python to build APIs and
              endpoints. I’m comfortable working with databases like MongoDB and
              testing APIs using Postman.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I also have experience working as a full-stack developer,
              following Agile and Scrum workflows. I can connect frontend to
              backend, test the system, and even write tests to catch bugs
              early. After building, I can deploy projects using platforms like
              Vercel.
            </p>

            {/* SKILLS */}
            <div className="space-y-5 pt-4">
              <ProgressBar label="HTML & CSS" value={100} isVisible={visible} />
              <ProgressBar label="React" value={90} isVisible={visible} />
              <ProgressBar label="Node.js" value={80} isVisible={visible} />
              <ProgressBar label="JavaScript" value={80} isVisible={visible} />
              <ProgressBar label="Python" value={80} isVisible={visible} />
              <ProgressBar label="Java" value={70} isVisible={visible} />
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
            </div>
          </div>
        </div>

        <div className="mt-24 flex justify-center gap-12 flex-wrap">
          {/* YEARS */}
          <div
            className="relative px-12 py-8 rounded-2xl 
    bg-black/40 backdrop-blur-xl border border-green-400/20
    shadow-[0_0_30px_rgba(34,197,94,0.2)]
    hover:scale-105 transition duration-300 group"
          >
            {/* glow background */}
            <div className="absolute inset-0 rounded-2xl bg-green-400/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-6xl md:text-7xl font-extrabold text-green-400 text-center tracking-tight">
              {years}+
            </h3>

            <p className="text-gray-300 text-lg text-center mt-3 tracking-wide">
              Years Experience
            </p>
          </div>

          {/* PROJECTS */}
          <div
            className="relative px-12 py-8 rounded-2xl 
    bg-black/40 backdrop-blur-xl border border-blue-400/20
    shadow-[0_0_30px_rgba(59,130,246,0.2)]
    hover:scale-105 transition duration-300 group"
          >
            {/* glow background */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-6xl md:text-7xl font-extrabold text-blue-400 text-center tracking-tight">
              {projects}+
            </h3>

            <p className="text-gray-300 text-lg text-center mt-3 tracking-wide">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
