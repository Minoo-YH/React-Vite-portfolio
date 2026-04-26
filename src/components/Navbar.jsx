import { useCallback, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollWithOffset = useCallback((el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  }, []);

  const links = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl mt-6 px-6">
        {/* Navbar Box */}
        <div
          className="flex items-center justify-between px-8 py-4 rounded-full
          bg-black/60 backdrop-blur-2xl border border-white/10
          shadow-[0_0_40px_rgba(34,197,94,0.08)]"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-semibold tracking-wide text-white"
          >
            Minoo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 text-lg">
            {links.map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${item === "Home" ? "" : item.toLowerCase()}`}
                scroll={scrollWithOffset}
                className="relative text-white/80 hover:text-white font-medium transition duration-300 group"
              >
                {item}

                {/* Glow underline */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px]
                  bg-gradient-to-r from-green-400 to-blue-500
                  transition-all duration-300 group-hover:w-full
                  shadow-[0_0_12px_#22c55e]"
                />
              </HashLink>
            ))}

            {/* Hobby */}
            <Link
              to="/hobby"
              className="relative text-white/80 hover:text-white font-medium transition group"
            >
              Hobby
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px]
                bg-gradient-to-r from-green-400 to-blue-500
                transition-all duration-300 group-hover:w-full"
              />
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* CTA */}
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              className="hidden md:inline-block px-8 py-3 rounded-full
              bg-gradient-to-r from-green-400 to-blue-500 
              text-black font-semibold text-base
              transition duration-300 hover:scale-105
              hover:shadow-[0_0_30px_#22c55e]"
            >
              Contact
            </HashLink>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-2xl"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="md:hidden mt-5 rounded-2xl bg-black/90 backdrop-blur-2xl
            border border-white/10 px-6 py-6 flex flex-col gap-6 text-lg"
          >
            {links.map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${item === "Home" ? "" : item.toLowerCase()}`}
                scroll={scrollWithOffset}
                className="text-white hover:text-green-400 font-medium transition"
              >
                {item}
              </HashLink>
            ))}

            <Link
              to="/hobby"
              className="text-white hover:text-green-400 font-medium transition"
            >
              Hobby
            </Link>

            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              className="mt-3 text-center px-6 py-3 rounded-full
              bg-gradient-to-r from-green-400 to-blue-500 
              text-black font-semibold"
            >
              Contact
            </HashLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
