import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // once visible, stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 }
    );

    const current = ref.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}

        <div className="text-center mb-24">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-green-400
            text-sm
            mb-20"
          >
            Get To Know Me
          </p>

          

        </div>

        {/* CONTENT */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center"
        >

          {/* IMAGE */}

          <div className="flex justify-center">

            <div className="relative group">

              <div
                className="
                absolute
                -inset-8
                rounded-full
                blur-3xl
                bg-gradient-to-r
                from-green-400/25
                via-blue-400/20
                to-cyan-400/25
                transition
                duration-700
                group-hover:scale-110"
              />

             

              {/* INFO CARD */}

              

            </div>

          </div>

          {/* TEXT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-green-400
              text-sm
              mb-5"
            >
              Who I Am
            </p>

            <h3
              className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight"
            >
              Building Modern Software

              <br />

              <span
                className="
                bg-gradient-to-r
                from-green-400
                via-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent"
              >
                With Purpose
              </span>

            </h3>

            <p
              className="
              mt-8
              text-lg
              leading-8
              text-gray-300"
            >
              I'm a Software Engineering student at Metropolia University
              of Applied Sciences with a passion for Full Stack
              Development. I enjoy designing scalable web and mobile
              applications that combine clean architecture,
              intuitive user experiences and reliable backend systems.
            </p>

            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-400"
            >
              I focus on writing maintainable code, solving real-world
              problems and continuously improving my engineering skills
              while exploring modern technologies and best practices.
            </p>

            {/* HIGHLIGHTS */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-green-400 font-semibold">
                  Full Stack Development
                </h4>

                <p className="text-gray-400 mt-2 text-sm leading-6">
                  Building complete web and mobile solutions from frontend
                  to backend.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-blue-400 font-semibold">
                  Problem Solving
                </h4>

                <p className="text-gray-400 mt-2 text-sm leading-6">
                  Turning complex requirements into practical software
                  solutions.
                </p>
              </div>
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-cyan-400 font-semibold">
                  Continuous Learning
                </h4>

                <p className="text-gray-400 mt-2 text-sm leading-6">
                  Continuously exploring modern frameworks, cloud
                  technologies and software engineering practices.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="text-green-400 font-semibold">
                  Team Collaboration
                </h4>

                <p className="text-gray-400 mt-2 text-sm leading-6">
                  Enjoy collaborating in Agile teams and contributing
                  to clean, maintainable software projects.
                </p>
              </div>

            </div>

            {/* TECH STACK */}

            <div className="mt-16">

              <p
                className="
                uppercase
                tracking-[0.25em]
                text-green-400
                text-sm
                mb-8"
              >
                Technologies & Tools
              </p>

              <div className="space-y-8">

                {/* FRONTEND */}

                <div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Frontend
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "React",
                      "React Native",
                      "TypeScript",
                      "JavaScript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        hover:border-green-400/40
                        hover:bg-green-400/10
                        hover:text-green-300
                        transition-all"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* BACKEND */}

                <div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Backend
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "ASP.NET Core",
                      "C#",
                      "Node.js",
                      "Express.js",
                      "Java",
                      "Python",
                      "REST APIs",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        hover:border-blue-400/40
                        hover:bg-blue-400/10
                        hover:text-blue-300
                        transition-all"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* DATABASE */}

                <div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Databases
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "SQL Server",
                      "PostgreSQL",
                      "MongoDB",
                      "MySQL",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        hover:border-cyan-400/40
                        hover:bg-cyan-400/10
                        hover:text-cyan-300
                        transition-all"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                {/* CLOUD */}

                <div>

                  <h4 className="text-xl font-semibold text-white mb-4">
                    Cloud & DevOps
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {[
                      "Docker",
                      "Kubernetes",
                      "Azure",
                      "AWS",
                      "Git",
                      "GitHub",
                      "Azure DevOps",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-white/10
                        text-gray-300
                        hover:border-purple-400/40
                        hover:bg-purple-400/10
                        hover:text-purple-300
                        transition-all"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
               {/* EXPERTISE */}

        <div className="mt-32">

          <div className="text-center mb-16">

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-green-400
              text-sm
              mb-4"
            >
              What I Do
            </p>

            <h3
              className="
              text-4xl
              md:text-5xl
              font-bold"
            >
              Engineering Modern Digital Products
            </h3>

            <p
              className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-400
              leading-8"
            >
              I enjoy building complete software solutions from intuitive user
              interfaces to scalable backend systems while focusing on
              performance, maintainability and user experience.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* FRONTEND */}

            <div
              className="
              group
              relative
              rounded-3xl
              border
              border-green-400/20
              bg-black/40
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:-translate-y-2"
            >

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                opacity-0
                group-hover:opacity-100
                bg-gradient-to-br
                from-green-400/10
                to-blue-500/10
                blur-xl
                transition"
              />

              <h3
                className="
                relative
                text-3xl
                font-bold
                bg-gradient-to-r
                from-green-400
                to-blue-500
                bg-clip-text
                text-transparent"
              >
                Frontend Engineering
              </h3>

              <p
                className="
                relative
                mt-6
                text-gray-400
                leading-8"
              >
                Creating responsive, accessible and modern web & mobile
                interfaces using React, React Native and TypeScript with
                a strong focus on UI, UX and performance.
              </p>

            </div>

            {/* BACKEND */}

            <div
              className="
              group
              relative
              rounded-3xl
              border
              border-blue-400/20
              bg-black/40
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:-translate-y-2"
            >

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                opacity-0
                group-hover:opacity-100
                bg-gradient-to-br
                from-blue-400/10
                to-cyan-400/10
                blur-xl
                transition"
              />

              <h3
                className="
                relative
                text-3xl
                font-bold
                bg-gradient-to-r
                from-blue-400
                to-cyan-400
                bg-clip-text
                text-transparent"
              >
                Backend Engineering
              </h3>

              <p
                className="
                relative
                mt-6
                text-gray-400
                leading-8"
              >
                Designing REST APIs and scalable backend applications using
                ASP.NET Core, Node.js, Java and SQL technologies while
                following clean architecture principles.
              </p>

            </div>

            {/* CLOUD */}

            <div
              className="
              group
              relative
              rounded-3xl
              border
              border-cyan-400/20
              bg-black/40
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:-translate-y-2"
            >

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                opacity-0
                group-hover:opacity-100
                bg-gradient-to-br
                from-cyan-400/10
                to-green-400/10
                blur-xl
                transition"
              />

              <h3
                className="
                relative
                text-3xl
                font-bold
                bg-gradient-to-r
                from-cyan-400
                to-green-400
                bg-clip-text
                text-transparent"
              >
                Cloud & DevOps
              </h3>

              <p
                className="
                relative
                mt-6
                text-gray-400
                leading-8"
              >
                Building cloud-ready applications with Docker, Azure,
                AWS and modern Git workflows while focusing on
                deployment, scalability and reliability.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
} 