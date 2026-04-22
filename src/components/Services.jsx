import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Design-driven, modern, and responsive interfaces.",
    fullDescription:
      "Frontend is where I truly express my creativity. With a strong interest in art, colors, and design, I focus on crafting visually engaging and emotionally appealing interfaces. I pay close attention to details, typography, and user experience.",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Flexible, reliable, and problem-solving focused.",
    fullDescription:
      "I can build backend systems using Node.js or Python, design databases like MongoDB/MySQL, and create APIs.",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description: "From idea to complete working product.",
    fullDescription:
      "I enjoy turning ideas into real applications using both frontend and backend technologies.",
  },
  {
    id: 4,
    title: "Security-First Mindset",
    description: "Building safe and trustworthy applications.",
    fullDescription:
      "Security is always a priority for me. I focus on building safe and reliable applications.",
  },
  {
    id: 5,
    title: "Creative Projects",
    description: "Building ideas and experimenting.",
    fullDescription:
      "I enjoy creating personal projects to explore creativity and improve my skills.",
  },
];

const Services = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-green-400">{s.title}</h3>

              <p className="text-gray-300 mt-2">{s.description}</p>

              {activeId === s.id && (
                <p className="text-gray-400 mt-2 text-sm">
                  {s.fullDescription}
                </p>
              )}

              <button
                onClick={() => setActiveId(activeId === s.id ? null : s.id)}
                className="mt-3 text-blue-400"
              >
                {activeId === s.id ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
