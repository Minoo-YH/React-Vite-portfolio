import { useEffect, useRef } from "react";

const techStack = [
  {
    title: "Frontend",
    color: "green",
    items: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    color: "blue",
    items: [
      "ASP.NET Core",
      "C#",
      "Node.js",
      "Express.js",
      "Java",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    color: "cyan",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Testing & Software Quality",
    color: "green",
    items: [
      "JUnit 5",
      "TDD",
      "Unit Testing",
      "Integration Testing",
      "Postman",
      "Maven",
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "purple",
    items: [
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "Git",
      "GitHub",
      "Azure DevOps",
      "CI/CD",
    ],
  },
  {
    title: "Engineering Practices",
    color: "blue",
    items: [
      "OOP",
      "Design Patterns",
      "Clean Architecture",
      "Agile",
      "Scrum",
      "Git Workflow",
      "REST Architecture",
    ],
  },
];

const highlights = [
  {
    title: "Software Design",
    text: "Applying OOP, software architecture and design patterns to create structured and maintainable applications.",
    color: "text-green-400",
  },
  {
    title: "Development",
    text: "Building full-stack, mobile and backend applications with modern programming technologies.",
    color: "text-blue-400",
  },
  {
    title: "Testing & Automation",
    text: "Practicing unit testing, TDD, automated workflows and continuous software quality improvement.",
    color: "text-cyan-400",
  },
  {
    title: "Agile & DevOps",
    text: "Working with Agile and Scrum practices, Git workflows, CI/CD, Docker and modern deployment processes.",
    color: "text-green-400",
  },
];

const engineeringPath = [
  {
    number: "01",
    title: "Design",
    description:
      "Requirements, OOP, architecture, UI/UX and software design patterns.",
    color: "text-green-400",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "Frontend, backend, mobile applications, APIs and database development.",
    color: "text-blue-400",
  },
  {
    number: "03",
    title: "Test",
    description:
      "Unit testing, TDD, integration testing and software quality practices.",
    color: "text-cyan-400",
  },
  {
    number: "04",
    title: "Automate",
    description:
      "Automated workflows, builds, testing processes and development tooling.",
    color: "text-green-400",
  },
  {
    number: "05",
    title: "CI/CD",
    description:
      "Version control, Git workflows and continuous integration and delivery.",
    color: "text-blue-400",
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "Docker, cloud platforms and modern application deployment workflows.",
    color: "text-cyan-400",
  },
];

const expertise = [
  {
    title: "Frontend Engineering",
    description:
      "Creating responsive, accessible and modern web and mobile interfaces using React, React Native, TypeScript and modern UI development practices.",
    border: "border-green-400/20",
    gradient: "from-green-400 to-blue-500",
    glow: "from-green-400/10 to-blue-500/10",
  },
  {
    title: "Backend Engineering",
    description:
      "Designing REST APIs and backend applications using ASP.NET Core, Node.js, Java, Python and SQL technologies while applying structured software architecture.",
    border: "border-blue-400/20",
    gradient: "from-blue-400 to-cyan-400",
    glow: "from-blue-400/10 to-cyan-400/10",
  },
  {
    title: "DevOps & Quality",
    description:
      "Developing software with testing, automation, Git workflows, Docker, CI/CD and cloud technologies while focusing on reliability and maintainability.",
    border: "border-cyan-400/20",
    gradient: "from-cyan-400 to-green-400",
    glow: "from-cyan-400/10 to-green-400/10",
  },
];

const getTagClasses = (color) => {
  const styles = {
    green:
      "md:hover:border-green-400/40 md:hover:bg-green-400/10 md:hover:text-green-300",
    blue: "md:hover:border-blue-400/40 md:hover:bg-blue-400/10 md:hover:text-blue-300",
    cyan: "md:hover:border-cyan-400/40 md:hover:bg-cyan-400/10 md:hover:text-cyan-300",
    purple:
      "md:hover:border-purple-400/40 md:hover:bg-purple-400/10 md:hover:text-purple-300",
  };

  return styles[color] || styles.green;
};

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const current = ref.current;

    if (!current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="
        relative
        overflow-hidden
        py-16
        sm:py-20
        md:py-24
        lg:py-32
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-green-400/5
          blur-[120px]
          sm:h-[450px]
          sm:w-[450px]
          lg:h-[600px]
          lg:w-[600px]
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
        "
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            mb-12
            text-center
            sm:mb-16
            md:mb-20
            lg:mb-24
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-green-400
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            Get To Know Me
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-extrabold
              cosmic-text
              sm:text-5xl
              md:text-6xl
            "
          >
            About Me
          </h2>
        </div>

        {/* =====================================================
            MAIN ABOUT
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-12
            md:gap-16
            lg:grid-cols-2
            lg:gap-16
            xl:gap-20
          "
        >
          {/* LEFT CARD */}

          <div
            className="
              flex
              justify-center
              lg:sticky
              lg:top-32
            "
          >
            <div
              className="
                group
                relative
                w-full
                max-w-md
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-4
                  rounded-3xl
                  bg-gradient-to-r
                  from-green-400/20
                  via-blue-400/15
                  to-cyan-400/20
                  opacity-70
                  blur-3xl
                  transition
                  duration-700
                  sm:-inset-6
                  md:group-hover:scale-105
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  p-6
                  backdrop-blur-xl
                  sm:rounded-3xl
                  sm:p-8
                  lg:p-10
                "
              >
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-green-400/5
                    via-transparent
                    to-blue-500/5
                  "
                />

                <div className="relative z-10">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-green-400
                      sm:text-sm
                    "
                  >
                    Software Engineering Student
                  </p>

                  <h3
                    className="
                      mt-4
                      break-words
                      text-3xl
                      font-bold
                      leading-tight
                      text-white
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    Minoo
                    <span
                      className="
                        block
                        bg-gradient-to-r
                        from-green-400
                        via-blue-400
                        to-cyan-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      Yaghoubi
                    </span>
                  </h3>

                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                    "
                  >
                    Metropolia University of Applied Sciences
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-gray-500
                    "
                  >
                    Software Engineering • Helsinki, Finland
                  </p>

                  <div
                    className="
                      mt-8
                      grid
                      grid-cols-2
                      gap-3
                      sm:gap-4
                    "
                  >
                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                      "
                    >
                      <p
                        className="
                          text-lg
                          font-bold
                          text-green-400
                          sm:text-xl
                        "
                      >
                        Design
                      </p>

                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Architecture
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                      "
                    >
                      <p
                        className="
                          text-lg
                          font-bold
                          text-blue-400
                          sm:text-xl
                        "
                      >
                        Develop
                      </p>

                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Full Stack
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                      "
                    >
                      <p
                        className="
                          text-lg
                          font-bold
                          text-cyan-400
                          sm:text-xl
                        "
                      >
                        Test
                      </p>

                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Quality
                      </p>
                    </div>

                    <div
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-4
                      "
                    >
                      <p
                        className="
                          text-lg
                          font-bold
                          text-green-400
                          sm:text-xl
                        "
                      >
                        Deploy
                      </p>

                      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        CI/CD
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      mt-6
                      rounded-xl
                      border
                      border-green-400/10
                      bg-green-400/5
                      p-4
                    "
                  >
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        text-green-400
                      "
                    >
                      Working Method
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-gray-300
                      "
                    >
                      Agile • Scrum • Team Projects • Iterative Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="min-w-0">
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.25em]
                text-green-400
                sm:mb-5
                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              Who I Am
            </p>

            <h3
              className="
                break-words
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              Learning Software Engineering
              <span
                className="
                  mt-1
                  block
                  bg-gradient-to-r
                  from-green-400
                  via-blue-400
                  to-cyan-400
                  bg-clip-text
                  text-transparent
                "
              >
                From Design to Deployment
              </span>
            </h3>

            <p
              className="
                mt-6
                text-sm
                leading-7
                text-gray-300
                sm:mt-8
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              I'm a Software Engineering student at Metropolia University of
              Applied Sciences, where I develop software through the complete
              engineering lifecycle — from software architecture and design
              patterns to implementation, testing, automation, CI/CD and
              deployment.
            </p>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-gray-400
                sm:mt-6
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              Through practical individual and team projects, I work with modern
              programming practices, automated testing, version control and
              DevOps workflows. Our projects follow Agile and Scrum practices,
              giving me experience in building software iteratively,
              collaborating in teams and continuously improving code quality
              throughout the development process.
            </p>

            {/* HIGHLIGHTS */}

            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-4
                sm:mt-10
                sm:grid-cols-2
              "
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    transition
                    duration-300
                    md:hover:-translate-y-1
                    md:hover:border-white/20
                    md:hover:bg-white/[0.07]
                  "
                >
                  <h4
                    className={`
                      font-semibold
                      ${item.color}
                    `}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-gray-400
                    "
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            ENGINEERING PATH
        ===================================================== */}

        <div
          className="
            mt-20
            sm:mt-24
            md:mt-28
            lg:mt-32
          "
        >
          <div
            className="
              mb-10
              text-center
              sm:mb-12
              md:mb-16
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-green-400
                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              Software Engineering Lifecycle
            </p>

            <h3
              className="
                mx-auto
                mt-4
                max-w-4xl
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              From Idea to Production
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-gray-400
                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              My studies and projects cover the software development lifecycle
              through practical, project-based engineering.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-6
            "
          >
            {engineeringPath.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  md:hover:-translate-y-2
                  md:hover:border-green-400/20
                  md:hover:bg-white/[0.05]
                "
              >
                <p
                  className={`
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    ${item.color}
                  `}
                >
                  {item.number}
                </p>

                <h4
                  className="
                    mt-4
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-gray-400
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="
              mx-auto
              mt-6
              flex
              max-w-3xl
              flex-wrap
              items-center
              justify-center
              gap-2
              text-center
              text-xs
              text-gray-500
              sm:gap-3
              sm:text-sm
            "
          >
            <span>Agile</span>
            <span className="text-green-400">•</span>
            <span>Scrum</span>
            <span className="text-blue-400">•</span>
            <span>Team Collaboration</span>
            <span className="text-cyan-400">•</span>
            <span>Continuous Improvement</span>
          </div>
        </div>

        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <div
          className="
            mt-20
            sm:mt-24
            md:mt-28
            lg:mt-32
          "
        >
          <div className="mb-10 sm:mb-12">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-green-400
                sm:text-sm
              "
            >
              Technologies & Tools
            </p>

            <h3
              className="
                mt-3
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              My Engineering Toolkit
            </h3>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              lg:gap-8
            "
          >
            {techStack.map((section) => (
              <div
                key={section.title}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  sm:p-6
                "
              >
                <h4
                  className="
                    mb-4
                    text-lg
                    font-semibold
                    text-white
                    sm:text-xl
                  "
                >
                  {section.title}
                </h4>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className={`
                        max-w-full
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-2
                        text-xs
                        text-gray-300
                        transition-all
                        sm:px-4
                        sm:text-sm
                        ${getTagClasses(section.color)}
                      `}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            EXPERTISE
        ===================================================== */}

        <div
          className="
            mt-20
            sm:mt-24
            md:mt-28
            lg:mt-32
          "
        >
          <div
            className="
              mb-10
              text-center
              sm:mb-12
              md:mb-16
            "
          >
            <p
              className="
                mb-4
                text-xs
                uppercase
                tracking-[0.25em]
                text-green-400
                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              What I Do
            </p>

            <h3
              className="
                mx-auto
                max-w-4xl
                break-words
                text-3xl
                font-bold
                leading-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              Engineering Modern Digital Products
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-gray-400
                sm:mt-6
                sm:text-base
                sm:leading-8
              "
            >
              I enjoy working across different areas of software development
              while applying modern engineering practices throughout the
              complete development lifecycle.
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:gap-6
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {expertise.map((item) => (
              <div
                key={item.title}
                className={`
                  group
                  relative
                  min-w-0
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-black/40
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  sm:rounded-3xl
                  sm:p-8
                  lg:p-10
                  md:hover:-translate-y-2
                  ${item.border}
                `}
              >
                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-3xl
                    bg-gradient-to-br
                    opacity-0
                    blur-xl
                    transition
                    duration-500
                    md:group-hover:opacity-100
                    ${item.glow}
                  `}
                />

                <h3
                  className={`
                    relative
                    break-words
                    bg-gradient-to-r
                    bg-clip-text
                    text-2xl
                    font-bold
                    text-transparent
                    sm:text-3xl
                    ${item.gradient}
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className="
                    relative
                    mt-4
                    text-sm
                    leading-7
                    text-gray-400
                    sm:mt-6
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
