import { useEffect, useState } from "react";
import {
  FaTerminal,
  FaCircle,
  FaArrowRight,
} from "react-icons/fa";

const terminalLines = [
  {
    command: "whoami",
    output: "Minoo Yaghoubi",
  },
  {
    command: "current_focus",
    output: "Software Engineering @ Metropolia",
  },
  {
    command: "skills --active",
    output:
      "React • React Native • ASP.NET Core • Java • Python",
  },
  {
    command: "workflow",
    output:
      "Design → Develop → Test → Automate → CI/CD → Deploy",
  },
];

const DeveloperTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, visibleLines === 0 ? 500 : 750);

    return () => window.clearTimeout(timeout);
  }, [visibleLines]);

  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        group
        relative
        mx-auto
        w-full
        max-w-2xl
      "
    >
      {/* Outer Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-[2rem]
          bg-gradient-to-r
          from-green-400/10
          via-blue-500/10
          to-cyan-400/10
          opacity-70
          blur-2xl
          transition
          duration-500
          md:group-hover:opacity-100
        "
      />

      {/* Terminal */}

      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-black/70
          shadow-2xl
          backdrop-blur-2xl
          transition-all
          duration-500
          sm:rounded-3xl
          md:group-hover:-translate-y-1
          md:group-hover:border-green-400/20
          md:group-hover:shadow-[0_0_50px_rgba(34,197,94,0.12)]
        "
      >
        {/* ===================================================
            TERMINAL HEADER
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.08]
            bg-white/[0.035]
            px-4
            py-3
            sm:px-5
          "
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              text-gray-500
              sm:text-xs
            "
          >
            <FaTerminal className="text-green-400" />

            <span>minoo@portfolio</span>
          </div>

          <div className="w-[42px]" />
        </div>

        {/* ===================================================
            TERMINAL BODY
        =================================================== */}

        <div
          className="
            min-h-[330px]
            p-4
            font-mono
            text-xs
            sm:min-h-[350px]
            sm:p-6
            sm:text-sm
            md:p-7
          "
        >
          {/* Welcome */}

          <div className="mb-6 text-gray-500">
            <span className="text-green-400">
              Portfolio Terminal
            </span>{" "}
            v1.0.0
          </div>

          {/* Commands */}

          <div className="space-y-5">
            {terminalLines
              .slice(0, visibleLines)
              .map((line) => (
                <div key={line.command}>
                  <div
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-2
                    "
                  >
                    <span className="shrink-0 text-green-400">
                      ➜
                    </span>

                    <span className="shrink-0 text-blue-400">
                      ~
                    </span>

                    <span
                      className="
                        break-all
                        text-gray-200
                      "
                    >
                      {line.command}
                    </span>
                  </div>

                  <div
                    className="
                      mt-2
                      break-words
                      pl-0
                      leading-6
                      text-gray-400
                      sm:pl-10
                    "
                  >
                    {line.output}
                  </div>
                </div>
              ))}
          </div>

          {/* Current Cursor */}

          {visibleLines < terminalLines.length && (
            <div className="mt-5 flex items-center gap-2">
              <span className="text-green-400">➜</span>

              <span className="text-blue-400">~</span>

              <span
                className="
                  inline-block
                  h-4
                  w-2
                  animate-pulse
                  bg-green-400
                "
              />
            </div>
          )}

          {/* =================================================
              STATUS
          ================================================= */}

          {visibleLines >= terminalLines.length && (
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <span className="text-green-400">➜</span>

                <span className="text-blue-400">~</span>

                <span className="text-gray-200">
                  status
                </span>
              </div>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  gap-2
                  sm:pl-10
                "
              >
                <FaCircle
                  className="
                    animate-pulse
                    text-[8px]
                    text-green-400
                  "
                />

                <span className="text-green-300">
                  Open to opportunities
                </span>
              </div>

              {/* =============================================
                  EXPLORE
              ============================================= */}

              <div
                className="
                  mt-7
                  border-t
                  border-white/[0.07]
                  pt-5
                "
              >
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-2
                    text-gray-500
                  "
                >
                  <span className="text-green-400">
                    ➜
                  </span>

                  <span className="text-blue-400">
                    ~
                  </span>

                  <span>explore</span>

                  <span
                    className="
                      inline-block
                      h-4
                      w-2
                      animate-pulse
                      bg-green-400
                    "
                  />
                </div>

                <div
                  className="
                    grid
                    grid-cols-1
                    gap-2
                    sm:grid-cols-3
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate("projects")
                    }
                    className="
                      group/button
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3
                      text-left
                      text-xs
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-green-400/30
                      hover:bg-green-400/[0.07]
                      hover:text-green-300
                      sm:text-sm
                    "
                  >
                    Projects

                    <FaArrowRight
                      className="
                        text-[10px]
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate("about")
                    }
                    className="
                      group/button
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3
                      text-left
                      text-xs
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-blue-400/30
                      hover:bg-blue-400/[0.07]
                      hover:text-blue-300
                      sm:text-sm
                    "
                  >
                    About Me

                    <FaArrowRight
                      className="
                        text-[10px]
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      handleNavigate("contact")
                    }
                    className="
                      group/button
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3
                      text-left
                      text-xs
                      text-gray-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.07]
                      hover:text-cyan-300
                      sm:text-sm
                    "
                  >
                    Contact

                    <FaArrowRight
                      className="
                        text-[10px]
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ===================================================
            BOTTOM LINE
        =================================================== */}

        <div
          className="
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-green-400/50
            to-transparent
          "
        />
      </div>
    </div>
  );
};

export default DeveloperTerminal;