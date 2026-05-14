import { myProjects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-blue-500/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* TITLE */}
        <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-20 cosmic-text">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {myProjects.map((p) => {
            const img = p.imgPaths?.[0];

            return (
              <div
                key={p.projectTitle}
                className="group relative flex flex-col rounded-3xl overflow-hidden
                bg-white/[0.03] backdrop-blur-xl border border-white/10
                transition duration-500 hover:-translate-y-3
                hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]"
              >
                {/* glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                  bg-gradient-to-br from-green-400/10 via-blue-500/10 to-transparent blur-xl"
                ></div>

                {/* IMAGE */}
                {img && (
                  <div className="relative overflow-hidden">
                    <img
                      src={img}
                      alt={p.projectTitle}
                      className="w-full h-52 object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col flex-grow p-5">
                  {/* TITLE */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 cosmic-text">
                    {p.projectTitle}
                  </h3>

                  {/* SUBTITLE */}
                  {p.subtitle && (
                    <p className="text-gray-400 text-xs mb-3">{p.subtitle}</p>
                  )}

                  {/* DESCRIPTION */}
                  {p.description && (
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-5">
                      {p.description}
                    </p>
                  )}

                  {/* TAGS */}
                  {p.category?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.category.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 text-xs rounded-full 
                          bg-white/5 text-gray-300 border border-white/10
                          hover:border-green-400/40 transition"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* BUTTONS */}
                  <div className="mt-auto grid grid-cols-3 gap-2 pt-5 border-t border-white/10">
                    {/* GitHub */}
                    <a
                      href={p.githubLink || "#"}
                      target={p.githubLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`py-2 rounded-xl text-xs font-semibold text-center transition
                      ${
                        p.githubLink
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_20px_#22c55e]"
                          : "bg-gray-700/40 text-gray-500 pointer-events-none"
                      }`}
                    >
                      GitHub
                    </a>

                    {/* Live */}
                    <a
                      href={p.demoLink || "#"}
                      target={p.demoLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`py-2 rounded-xl text-xs font-semibold text-center transition
                      ${
                        p.demoLink
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_20px_#3b82f6]"
                          : "bg-gray-700/40 text-gray-500 pointer-events-none"
                      }`}
                    >
                      Live
                    </a>

                    {/* Figma */}
                    <a
                      href={p.figmaLink || "#"}
                      target={p.figmaLink ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`py-2 rounded-xl text-xs font-semibold text-center transition
                      ${
                        p.figmaLink
                          ? "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_20px_#22c55e]"
                          : "bg-gray-700/40 text-gray-500 pointer-events-none"
                      }`}
                    >
                      Figma
                    </a>
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
