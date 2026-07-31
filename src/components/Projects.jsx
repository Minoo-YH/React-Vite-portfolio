import { myProjects } from "../data/projects";

/* ===========================================================
   GROUPS
=========================================================== */

const featuredProjects = myProjects.filter(
  (p) => p.group === "featured"
);

const professionalProjects = myProjects.filter(
  (p) => p.group === "experience"
);

const javaProjects = myProjects.filter(
  (p) => p.group === "java"
);

const webProjects = myProjects.filter(
  (p) => p.group === "web"
);

const pythonProjects = myProjects.filter(
  (p) => p.group === "python"
);

const otherProjects = myProjects.filter(
  (p) =>
    ![
      "featured",
      "experience",
      "java",
      "web",
      "python",
    ].includes(p.group)
);

/* ===========================================================
   PROJECT CARD
=========================================================== */

const ProjectCard = ({ p }) => {
  const img = p.imgPaths?.[0];

  return (
    <div
      className="
      group
      relative
      flex
      flex-col

      rounded-3xl
      overflow-hidden

      bg-white/[0.03]
      backdrop-blur-xl

      border
      border-white/10

      transition-all
      duration-500

      hover:-translate-y-3
      hover:border-green-400/30
      hover:shadow-[0_0_40px_rgba(34,197,94,.18)]
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0

        opacity-0
        group-hover:opacity-100

        transition
        duration-500

        bg-gradient-to-br
        from-green-400/10
        via-blue-500/10
        to-transparent

        blur-xl
      "
      />

      {/* Image */}

      {img && (
        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={p.projectTitle}
            loading="lazy"
            className="
            w-full
            h-48
            object-cover

            transition
            duration-700

            group-hover:scale-105
          "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      )}

      {/* Content */}

      <div className="relative z-10 flex flex-col flex-grow p-6">

        <h3 className="text-xl md:text-2xl font-bold cosmic-text mb-2">
          {p.projectTitle}
        </h3>

        {p.subtitle && (
          <p className="text-sm text-gray-400 mb-3">
            {p.subtitle}
          </p>
        )}

        {p.description && (
          <p className="text-sm leading-7 text-gray-300 mb-5 line-clamp-5">
            {p.description}
          </p>
        )}

        {p.category?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {p.category.map((tag) => (
              <span
                key={tag}
                className="
                px-3
                py-1

                rounded-full

                text-xs

                bg-white/5

                border
                border-white/10

                text-gray-300

                hover:border-green-400/40
                hover:bg-green-400/10

                transition
              "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto grid grid-cols-3 gap-2 border-t border-white/10 pt-4">

          <a
            href={p.githubLink || "#"}
            target={p.githubLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`rounded-xl py-2 text-xs font-semibold text-center transition ${
              p.githubLink
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_20px_#22c55e]"
                : "bg-gray-700/40 text-gray-500 pointer-events-none"
            }`}
          >
            GitHub
          </a>

          <a
            href={p.demoLink || "#"}
            target={p.demoLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`rounded-xl py-2 text-xs font-semibold text-center transition ${
              p.demoLink
                ? "bg-gradient-to-r from-green-400 to-blue-500 text-black hover:scale-105 hover:shadow-[0_0_20px_#3b82f6]"
                : "bg-gray-700/40 text-gray-500 pointer-events-none"
            }`}
          >
            Live
          </a>

          <a
            href={p.figmaLink || "#"}
            target={p.figmaLink ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`rounded-xl py-2 text-xs font-semibold text-center transition ${
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
};
export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-blue-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-extrabold cosmic-text">
            Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            A collection of professional, academic and personal projects
            covering Full Stack Development, Mobile Development,
            Java, Python, AI and modern software engineering.
          </p>
        </div>

        {/* ================= FEATURED ================= */}

        <section className="mb-28">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-green-400 text-sm">
              Portfolio Highlights
            </p>

            <h3 className="mt-3 text-4xl font-bold cosmic-text">
              ⭐ Featured Projects
            </h3>

            <p className="mt-3 text-gray-400">
              My strongest and most representative software projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((p) => (
              <ProjectCard
                key={p.projectTitle}
                p={p}
              />
            ))}
          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section className="mb-28">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
              Internship
            </p>

            <h3 className="mt-3 text-4xl font-bold cosmic-text">
              💼 Professional Experience
            </h3>

            <p className="mt-3 text-gray-400">
              Projects developed during real internships and production work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((p) => (
              <ProjectCard
                key={p.projectTitle}
                p={p}
              />
            ))}
          </div>

        </section>

        {/* ================= JAVA ================= */}

        <section className="mb-28">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm">
              Java
            </p>

            <h3 className="mt-3 text-4xl font-bold cosmic-text">
              ☕ Java Ecosystem
            </h3>

            <p className="mt-3 text-gray-400">
              Java, JavaFX, Hibernate, JDBC, JPA, Testing and Desktop
              Applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {javaProjects.map((p) => (
              <ProjectCard
                key={p.projectTitle}
                p={p}
              />
            ))}
          </div>

        </section>
                {/* ================= WEB DEVELOPMENT ================= */}

        <section className="mb-28">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">
              Frontend • Backend • Full Stack
            </p>

            <h3 className="mt-3 text-4xl font-bold cosmic-text">
              🌐 Web Development
            </h3>

            <p className="mt-3 text-gray-400">
              Modern web applications built with React, Node.js, Express,
              Tailwind CSS and responsive design principles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {webProjects.map((p) => (
              <ProjectCard
                key={p.projectTitle}
                p={p}
              />
            ))}
          </div>

        </section>

        {/* ================= PYTHON & AI ================= */}

        <section className="mb-28">

          <div className="mb-12">
            <p className="uppercase tracking-[0.35em] text-purple-400 text-sm">
              Python • AI
            </p>

            <h3 className="mt-3 text-4xl font-bold cosmic-text">
              🐍 Python & AI
            </h3>

            <p className="mt-3 text-gray-400">
              Python projects, artificial intelligence concepts, automation,
              university projects and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {pythonProjects.map((p) => (
              <ProjectCard
                key={p.projectTitle}
                p={p}
              />
            ))}
          </div>

        </section>

        {/* ================= OTHER PROJECTS ================= */}

        {otherProjects.length > 0 && (
          <section>

            <div className="mb-12">
              <p className="uppercase tracking-[0.35em] text-gray-400 text-sm">
                More
              </p>

              <h3 className="mt-3 text-4xl font-bold cosmic-text">
                🚀 More Projects
              </h3>

              <p className="mt-3 text-gray-400">
                Additional projects that don't belong to a specific category.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {otherProjects.map((p) => (
                <ProjectCard
                  key={p.projectTitle}
                  p={p}
                />
              ))}
            </div>

          </section>
        )}
      </div>
    </section>
  );
}