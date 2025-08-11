import React from "react";
import { myProjects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {myProjects.map((p, idx) => {
            const img = Array.isArray(p.imgPaths) ? p.imgPaths[0] : undefined;
            return (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                {img && (
                  <img
                    src={img}
                    alt={p.projectTitle}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {p.projectTitle}
                  </h3>
                  {p.subtitle && (
                    <p className="text-gray-400 text-sm">{p.subtitle}</p>
                  )}
                  {p.description && (
                    <p className="text-gray-300 mt-2">{p.description}</p>
                  )}

                  {Array.isArray(p.category) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.category.map((c) => (
                        <span
                          key={c}
                          className="text-xs px-2 py-1 rounded-full bg-gray-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.githubLink && (
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-green-400 hover:text-blue-500"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
