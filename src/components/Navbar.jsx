import { useCallback } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollWithOffset = useCallback((el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const linkCls = "hover:text-gray-400 transition";

  return (
    <nav className="w-full bg-black/70 backdrop-blur text-white sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="text-xl font-semibold">
          Minoo
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/" className={linkCls}>
            Home
          </Link>
          <HashLink
            smooth
            to="/#about"
            scroll={scrollWithOffset}
            className={linkCls}
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#service"
            scroll={scrollWithOffset}
            className={linkCls}
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#projects"
            scroll={scrollWithOffset}
            className={linkCls}
          >
            Projects
          </HashLink>
          <HashLink
            smooth
            to="/#contact"
            scroll={scrollWithOffset}
            className={linkCls}
          >
            Contact
          </HashLink>
          <Link to="/hobby" className={linkCls}>
            Hobby
          </Link>
        </div>

        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="btn-primary"
        >
          Contact Me
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
