import React from 'react';
import HobbyImg from '../assets/hobby-photo.jpeg';
import JourneyImg from '../assets/f.jpeg';


const Hobby = () => {
  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-16 px-4 sm:px-8 md:px-16 lg:px-24">

      <div className="container flex-grow px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            About My Hobbies & Journey
          </span>
        </h1>

        <img
          src={HobbyImg}
          alt="Minoo enjoying hobbies"
          className="mx-auto rounded-lg w-64 h-64 object-cover mb-10 shadow-lg"
        />

        {/* What I do in free time */}
        <section className="mb-10 text-center bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-6 shadow-lg border border-green-500 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 border-b border-green-500 pb-2
              text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            What I Do in My Free Time
          </h2>
          <p className="text-gray-300 leading-relaxed mx-auto max-w-xl">
            I’m a downhill ski lover in winter, and in summer I enjoy cycling and being immersed in nature. When I’m not coding, I love exploring photography and going on nature walks. Capturing moments and the beauty of the outdoors helps me recharge and stay creative. I’m also passionate about reading tech blogs and staying up-to-date with the latest trends.
          </p>
        </section>

        {/* My journey before programming */}
        <section className="mb-10 text-center bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-6 shadow-lg border border-green-500 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
            My Journey Before Programming
          </h2>

          <img
            src={JourneyImg}
            alt="My journey before programming"
            className="rounded-lg w-64 h-64 object-cover mb-6 shadow-lg mx-auto"
          />

          <p className="text-gray-300 leading-relaxed mx-auto max-w-xl mb-4">
            Before diving into programming, I was a tourism management expert, working at the National Museum and a travel agency. I gained valuable experience in teamwork, handling challenges, and working independently. These skills have greatly shaped my character. I am a perfectionist by nature and always strive to do my best.
          </p>

          <p className="text-gray-300 leading-relaxed mx-auto max-w-xl">
            Programming fascinated me because it allows me to create solutions from scratch while combining creativity with logic. This motivated me to switch careers and become a developer. In my programming journey, I stay up to date by actively participating in communities such as the React JS community, joining hackathons, and attending events like Future Frontend.
          </p>
        </section>

        {/* Programming languages I know */}
        <section className="mb-10 text-center bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-6 shadow-lg border border-green-500 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Programming Languages & Technologies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-2 mx-auto max-w-xl">
            I have experience with a variety of languages and frameworks including:
          </p>
          <ul className="list-disc list-inside text-gray-300 mx-auto max-w-xs text-left">
            <li>JavaScript (React, Node.js)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>SQL and NoSQL databases</li>
            <li>Mobile app development with React Native</li>
          </ul>
        </section>
      </div>

      
    </main>
  );
};

export default Hobby;
