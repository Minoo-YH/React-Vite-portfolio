import React from "react";
import { myProjects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {myProjects.map((p) => {
            const img = p.imgPaths?.[0];

            return (
              <div
                key={p.projectTitle}
                className="bg-gray-800 rounded-lg overflow-hidden 
                hover:shadow-xl hover:shadow-green-500/10 
                transform transition duration-300 hover:scale-105"
              >
                {/* Image */}
                {img && (
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt={p.projectTitle}
                      className="w-full h-48 object-cover transition duration-300 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {p.projectTitle}
                  </h3>

                  {/* Subtitle */}
                  {p.subtitle && (
                    <p className="text-gray-400 text-sm">{p.subtitle}</p>
                  )}

                  {/* Description */}
                  {p.description && (
                    <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  )}

                  {/* Categories */}
                  {p.category?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.category.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links FIXED ✅ */}
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    {p.githubLink && (
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-blue-500 transition"
                      >
                        GitHub →
                      </a>
                    )}

                    {p.demoLink && (
                      <a
                        href={p.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-blue-500 transition"
                      >
                        Live →
                      </a>
                    )}

                    {p.figmaLink && (
                      <a
                        href={p.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-blue-500 transition"
                      >
                        Figma →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
