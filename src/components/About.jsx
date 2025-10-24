import React from 'react';
import AboutImg from '../assets/about.png';

/* =============== ProgressBar: Grid با ستون ثابت برای لیبل =============== */
const ProgressBar = ({ label, width }) => (
  <div className="grid items-center gap-3 mb-4 w-full max-w-xl mx-auto
                  grid-cols-[10rem,1fr] sm:grid-cols-[11rem,1fr]">
    <span
      className="text-xs sm:text-sm tracking-wide text-gray-400 uppercase whitespace-nowrap truncate"
      title={label}
    >
      {label}
    </span>
    <div className="h-2.5 bg-gray-700/70 rounded-full">
      <div
        className="h-full rounded-full bg-gradient-to-r from-green-400 to-blue-500 transition-transform duration-300 hover:scale-[1.02]"
        style={{ width }}
      />
    </div>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 sm:py-28 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center"
    >
      {/* عنوان بخش */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12 sm:mb-16
                     text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 max-w-5xl w-full">
        {/* تصویر */}
        <div className="rounded-full p-[4px] bg-gradient-to-r from-green-400 to-blue-500 mb-8 md:mb-0 shrink-0">
          <img
            src={AboutImg}
            alt="A portrait of the developer"
            className="rounded-full object-cover w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
        </div>

       
        <div className="flex-1 md:px-2 lg:px-4 text-center md:text-left">
          
          <div className="mx-auto md:mx-0 max-w-[62ch] text-justify text-gray-300 space-y-5 sm:space-y-6
                          text-base sm:text-lg leading-7 sm:leading-8">
            <p>
              I’m a passionate full-stack web and frontend mobile developer who believes technology
              should bring joy and simplicity to people’s lives. I don’t just build applications—I craft
              meaningful experiences that are beautiful, intuitive, and welcoming. With a strong foundation
              in both frontend and backend, combined with an artistic vision, I pay attention to every detail
              to create designs that resonate emotionally and function seamlessly.
            </p>
            <p>
              Learning fuels me, and I embrace every opportunity to grow and explore new ideas. More than
              just coding, I see my work as a way to connect, inspire, and make a positive difference.
              I’m excited to collaborate with others who share this vision and build products that feel
              truly alive and human.
            </p>
          </div>

       
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
            <ProgressBar label="HTML & CSS"        width="100%" />
            <ProgressBar label="React"             width="90%" />
            <ProgressBar label="Node"              width="90%" />
            <ProgressBar label="JavaScript"        width="80%" />
            <ProgressBar label="React Native Expo" width="60%" />
            <ProgressBar label="Tailwind CSS"      width="70%" />
            <ProgressBar label="Pythpn"            width="80%" />
            <ProgressBar label="c++"               width="50%" />
          </div>
        </div>
      </div>

    
      <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row justify-center sm:justify-between text-center gap-8 sm:gap-12 max-w-md w-full">
        <div className="flex-1">
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight
                         text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            2+
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-1">Years Experience</p>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight
                         text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            15+
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-1">Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default About;




