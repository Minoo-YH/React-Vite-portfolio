import React from 'react';
import { HashLink } from 'react-router-hash-link';
import HeroImg from '../assets/minoo.png';
import ResumeFile from '../assets/resume2024.pdf';
import WindBackground from './WindBackground';

const Hero = () => {
  return (
    <header className="relative bg-black text-white text-center py-16 overflow-hidden">
      <WindBackground />

      <div className="relative z-10">
        <img
          src={HeroImg}
          alt='Minoo Yaghoubi'
          className='mx-auto mb-10 w-50 h-60 rounded-full object-cover object-top transform transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Minoo Yaghoubi
          </span>
          , Full-stack Web & mobile Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialize in building modern and responsive applications.
        </p>
        <div className='mt-8 space-x-4'>
          <HashLink
            smooth
            to="/#contact"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
          >
            Contact Me
          </HashLink>
          <a
            href={ResumeFile}
            target='_blank'
            rel="noopener noreferrer"
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
