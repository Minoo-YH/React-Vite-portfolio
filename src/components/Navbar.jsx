import React, { useCallback } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollWithOffset = useCallback((el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const linkCls = "hover:text-gray-400 transition-colors";

  return (
    <nav className="w-screen bg-black/80 backdrop-blur text-white sticky top-0 z-50">
      <div className="w-full px-8 md:px-16 lg:px-24 py-2 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold">
          Minoo
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-8 text-sm">
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

        {/* BUTTON */}
        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="btn-primary ml-4"
        >
          Contact Me
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;
