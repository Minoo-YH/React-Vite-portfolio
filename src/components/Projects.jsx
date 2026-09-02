import PropTypes from "prop-types";
import { myProjects } from "../data/projects";

/* ===========================================================
   GROUPS
=========================================================== */

const featuredProjects = myProjects.filter(
  (project) => project.group === "featured",
);

const professionalProjects = myProjects.filter(
  (project) => project.group === "experience",
);

const javaProjects = myProjects.filter((project) => project.group === "java");

const webProjects = myProjects.filter((project) => project.group === "web");

const pythonProjects = myProjects.filter(
  (project) => project.group === "python",
);

const otherProjects = myProjects.filter(
  (project) =>
    !["featured", "experience", "java", "web", "python"].includes(
      project.group,
    ),
);

/* ===========================================================
   PROJECT PROP TYPE
=========================================================== */

const projectPropType = PropTypes.shape({
  projectTitle: PropTypes.string.isRequired,
  group: PropTypes.string,
  category: PropTypes.arrayOf(PropTypes.string),
  imgPaths: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
  figmaLink: PropTypes.string,
  isPrivate: PropTypes.bool,
});

/* ===========================================================
   PROJECT CARD
=========================================================== */

const ProjectCard = ({ project }) => {
  const image = project.imgPaths?.[0];

  const linkBase =
    "min-w-0 rounded-lg sm:rounded-xl px-2 py-2.5 text-[10px] sm:text-xs font-semibold text-center transition-all duration-300";

  const activeLink =
    "bg-gradient-to-r from-green-400 to-blue-500 text-black md:hover:scale-105 md:hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]";

  const disabledLink =
    "bg-gray-700/40 text-gray-500 pointer-events-none cursor-default";

  return (
    <article
      className="
        group
        relative
        flex
        h-full
        w-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        sm:rounded-3xl
        md:hover:-translate-y-3
        md:hover:border-green-400/30
        md:hover:shadow-[0_0_40px_rgba(34,197,94,0.18)]
      "
    >
      {/* GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-green-400/10
          via-blue-500/10
          to-transparent
          opacity-0
          blur-xl
          transition
          duration-500
          md:group-hover:opacity-100
        "
      />

      {/* IMAGE */}
      {image && (
        <div className="relative shrink-0 overflow-hidden">
          <img
            src={image}
            alt={project.projectTitle}
            loading="lazy"
            className="
              h-44
              w-full
              object-cover
              transition
              duration-700
              sm:h-48
              lg:h-52
              md:group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
            "
          />
        </div>
      )}

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-grow
          flex-col
          p-4
          sm:p-5
          md:p-6
        "
      >
        {/* TITLE */}
        <h3
          className="
            mb-2
            break-words
            text-lg
            font-bold
            cosmic-text
            sm:text-xl
            md:text-2xl
          "
        >
          {project.projectTitle}
        </h3>

        {/* SUBTITLE */}
        {project.subtitle && (
          <p
            className="
              mb-3
              break-words
              text-xs
              leading-5
              text-gray-400
              sm:text-sm
              sm:leading-6
            "
          >
            {project.subtitle}
          </p>
        )}

        {/* DESCRIPTION */}
        {project.description && (
          <p
            className="
              mb-5
              break-words
              text-sm
              leading-6
              text-gray-300
              sm:leading-7
            "
          >
            {project.description}
          </p>
        )}

        {/* CATEGORIES */}
        {Array.isArray(project.category) && project.category.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
            {project.category.map((tag, index) => (
              <span
                key={`${project.projectTitle}-${tag}-${index}`}
                className="
                    max-w-full
                    break-words
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-2.5
                    py-1
                    text-[11px]
                    text-gray-300
                    transition
                    sm:px-3
                    sm:text-xs
                    md:hover:border-green-400/40
                    md:hover:bg-green-400/10
                  "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* LINKS */}
        <div
          className="
            mt-auto
            grid
            grid-cols-3
            gap-1.5
            border-t
            border-white/10
            pt-4
            sm:gap-2
          "
        >
          {/* GITHUB */}
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} ${activeLink}`}
            >
              GitHub
            </a>
          ) : (
            <span className={`${linkBase} ${disabledLink}`}>
              {project.isPrivate ? "Private" : "GitHub"}
            </span>
          )}

          {/* LIVE */}
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} ${activeLink}`}
            >
              Live
            </a>
          ) : (
            <span className={`${linkBase} ${disabledLink}`}>Live</span>
          )}

          {/* FIGMA */}
          {project.figmaLink ? (
            <a
              href={project.figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} ${activeLink}`}
            >
              Figma
            </a>
          ) : (
            <span className={`${linkBase} ${disabledLink}`}>Figma</span>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: projectPropType.isRequired,
};

/* ===========================================================
   SECTION HEADER
=========================================================== */

const SectionHeader = ({ label, labelClass, title, description }) => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      <p
        className={`
          text-xs
          uppercase
          tracking-[0.2em]
          sm:text-sm
          sm:tracking-[0.3em]
          md:tracking-[0.35em]
          ${labelClass}
        `}
      >
        {label}
      </p>

      <h3
        className="
          mt-3
          break-words
          text-2xl
          font-bold
          cosmic-text
          sm:text-3xl
          lg:text-4xl
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          max-w-3xl
          break-words
          text-sm
          leading-6
          text-gray-400
          sm:text-base
          sm:leading-7
        "
      >
        {description}
      </p>
    </div>
  );
};

SectionHeader.propTypes = {
  label: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

/* ===========================================================
   PROJECT GRID
=========================================================== */

const ProjectGrid = ({ projects, featured = false }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <div
      className={`
        grid
        w-full
        min-w-0
        grid-cols-1
        gap-5
        sm:gap-6
        lg:gap-8
        ${featured ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}
      `}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={`${project.projectTitle}-${index}`}
          project={project}
        />
      ))}
    </div>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(projectPropType).isRequired,
  featured: PropTypes.bool,
};

/* ===========================================================
   PROJECTS
=========================================================== */

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-green-400/5
          to-blue-500/5
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          xl:px-12
        "
      >
        {/* MAIN HEADER */}
        <div
          className="
            mb-14
            text-center
            sm:mb-16
            md:mb-20
            lg:mb-24
          "
        >
          <h2
            className="
              break-words
              text-4xl
              font-extrabold
              cosmic-text
              sm:text-5xl
              md:text-6xl
            "
          >
            Projects
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-sm
              leading-7
              text-gray-400
              sm:mt-6
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            A collection of professional, academic and personal projects
            covering Full Stack Development, Mobile Development, Java, Python,
            AI and modern software engineering.
          </p>
        </div>

        {/* FEATURED */}
        {featuredProjects.length > 0 && (
          <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <SectionHeader
              label="Portfolio Highlights"
              labelClass="text-green-400"
              title="⭐ Featured Projects"
              description="My strongest and most representative software projects."
            />

            <ProjectGrid projects={featuredProjects} featured />
          </section>
        )}

        {/* EXPERIENCE */}
        {professionalProjects.length > 0 && (
          <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <SectionHeader
              label="Internship"
              labelClass="text-blue-400"
              title="💼 Professional Experience"
              description="Projects developed during real internships and production work."
            />

            <div
              className="
                grid
                w-full
                min-w-0
                grid-cols-1
                gap-5
                sm:gap-6
                md:grid-cols-2
                lg:gap-8
              "
            >
              {professionalProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.projectTitle}-${index}`}
                  project={project}
                />
              ))}
            </div>
          </section>
        )}

        {/* JAVA */}
        {javaProjects.length > 0 && (
          <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <SectionHeader
              label="Java"
              labelClass="text-yellow-400"
              title="☕ Java Ecosystem"
              description="Java, JavaFX, Hibernate, JDBC, JPA, Testing, Design Patterns and Desktop Applications."
            />

            <ProjectGrid projects={javaProjects} />
          </section>
        )}

        {/* WEB */}
        {webProjects.length > 0 && (
          <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <SectionHeader
              label="Frontend • Backend • Full Stack"
              labelClass="text-cyan-400"
              title="🌐 Web Development"
              description="Modern web applications built with React, Node.js, Express, Tailwind CSS and responsive design principles."
            />

            <ProjectGrid projects={webProjects} />
          </section>
        )}

        {/* PYTHON / AI */}
        {pythonProjects.length > 0 && (
          <section className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
            <SectionHeader
              label="Python • AI • LLM"
              labelClass="text-purple-400"
              title="🐍 Python & AI"
              description="Python projects, artificial intelligence, Gemini LLM integration, university projects and continuous learning."
            />

            <ProjectGrid projects={pythonProjects} />
          </section>
        )}

        {/* OTHER */}
        {otherProjects.length > 0 && (
          <section>
            <SectionHeader
              label="More"
              labelClass="text-gray-400"
              title="🚀 More Projects"
              description="Additional projects that don't belong to a specific category."
            />

            <ProjectGrid projects={otherProjects} />
          </section>
        )}
      </div>
    </section>
  );
}
