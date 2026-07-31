import {
  FaBrain,
  FaRobot,
  FaCode,
  FaUsers,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const values = [
  {
    icon: <FaBrain size={28} />,
    title: "Fast Learner",
    description:
      "I quickly adapt to new technologies, frameworks, and development environments. Continuous learning is part of how I grow as a software engineer.",
  },
  {
    icon: <FaRobot size={28} />,
    title: "AI-Assisted Development",
    description:
      "I use AI tools to accelerate development, improve testing, debug applications, generate documentation, and enhance code quality while validating every solution.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Engineering Quality",
    description:
      "I focus on clean architecture, maintainable code, scalable APIs, and software engineering best practices to build reliable applications.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Agile Collaboration",
    description:
      "Comfortable working in Agile teams, participating in sprint planning, code reviews, and collaborating to continuously improve development processes.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Product Mindset",
    description:
      "I enjoy building software that solves real-world problems and creates meaningful value for users rather than simply implementing features.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Quality & Testing",
    description:
      "I value reliable software and use testing, debugging, and modern development practices to ensure applications remain stable and maintainable.",
  },
];

const Services = () => {
  return (
    <section id="service" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
            Beyond The Code
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What I Bring
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg leading-8">
            Beyond technical skills, I bring a modern engineering mindset,
            continuous learning, and a passion for building software that makes
            a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="
              group
              relative
              overflow-hidden

              rounded-3xl

              border
              border-white/10

              bg-white/5
              backdrop-blur-xl

              p-8

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-green-400/30
              hover:shadow-[0_0_40px_rgba(34,197,94,.15)]
            "
            >
              <div
                className="
                absolute
                inset-0

                opacity-0
                group-hover:opacity-100

                transition

                bg-gradient-to-br
                from-green-400/5
                via-blue-400/5
                to-cyan-400/5
              "
              />

              <div className="relative text-green-400 mb-6">
                {item.icon}
              </div>

              <h3 className="relative text-2xl font-semibold mb-4 text-white">
                {item.title}
              </h3>

              <p className="relative text-gray-400 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;