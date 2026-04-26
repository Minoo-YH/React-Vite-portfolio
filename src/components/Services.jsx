import { useState } from "react";
const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Modern, responsive, and user-focused interfaces.",
    fullDescription:
      "Frontend is where I enjoy things the most. I usually work with React and React Native, and I’m comfortable using TypeScript, Tailwind, and Bootstrap. I like turning Figma designs into clean, responsive layouts and making sure everything feels smooth. I also handle validation and do some frontend testing to make sure the UI actually works well, not just looks good.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Reliable logic, APIs, and data handling.",
    fullDescription:
      "On the backend side, I’ve worked with Node.js and Python to build APIs and handle server logic. I can design endpoints, connect them to databases like MongoDB, and test everything using tools like Postman. I focus on making things work properly and keeping the structure simple and understandable.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "Connecting everything into a real product.",
    fullDescription:
      "I’ve worked on full-stack projects where I connect the frontend to the backend and turn ideas into actual working apps. I’m familiar with Agile and Scrum, and I like working in a structured way with clear goals. I also write basic tests to catch issues early and make things easier to maintain later.",
  },
  {
    id: 4,
    title: "Security-First Mindset",
    description: "Keeping things safe and stable.",
    fullDescription:
      "I always try to keep security in mind while building applications. I pay attention to common issues and make sure the app behaves safely and reliably.",
  },
  {
    id: 5,
    title: "Creative Projects",
    description: "Trying ideas and building things.",
    fullDescription:
      "I like building personal projects to experiment with new ideas and improve my skills. It’s where I test things, try new tools, and push myself a bit further.",
  },
];
const Services = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section id="service" className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔥 Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          Services
        </h2>

        {/* 🔥 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-8 transition duration-300 hover:scale-[1.04] 
              hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
            >
              {/* 🔥 Title */}
              <h3
                className="text-2xl font-semibold mb-3 
              bg-gradient-to-r from-green-400 to-blue-500 
              bg-clip-text text-transparent"
              >
                {s.title}
              </h3>

              {/* 🔥 Short desc */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {s.description}
              </p>

              {/* 🔥 Expand */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeId === s.id ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-400 text-base leading-relaxed">
                  {s.fullDescription}
                </p>
              </div>

              {/* 🔥 Button */}
              <button
                onClick={() => setActiveId(activeId === s.id ? null : s.id)}
                className="mt-6 px-5 py-2 rounded-full 
                bg-gradient-to-r from-green-400 to-blue-500 
                text-black font-medium 
                transition duration-300 hover:scale-105 
                hover:shadow-[0_0_20px_#22c55e]"
              >
                {activeId === s.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
