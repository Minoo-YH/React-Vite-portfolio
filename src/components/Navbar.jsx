import React, { useCallback } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  // فاصله‌ی اسکرول به‌خاطر navbar چسبان (~80px)
  const scrollWithOffset = useCallback((el) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  const linkCls = "hover:text-gray-400 transition-colors";

  return (
    <nav className="bg-black/80 backdrop-blur text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-2 mx-auto flex justify-center md:justify-between items-center">
        {/* لوگو/برند؛ اگر خواستی روی موبایل هم دیده شود، hidden md:inline را بردار */}
        <Link to="/" className="text-2xl font-bold mr-auto">Minoo</Link>

        <div className="space-x-6">
          <Link to="/" className={linkCls}>Home</Link>
          <HashLink smooth to="/#about"    scroll={scrollWithOffset} className={linkCls}>About</HashLink>
          <HashLink smooth to="/#service"  scroll={scrollWithOffset} className={linkCls}>Services</HashLink>
          <HashLink smooth to="/#projects" scroll={scrollWithOffset} className={linkCls}>Projects</HashLink>
          <HashLink smooth to="/#contact"  scroll={scrollWithOffset} className={linkCls}>Contact</HashLink>
          <Link to="/hobby" className={linkCls}>Hobby</Link>
        </div>

        <HashLink
          smooth
          to="/#contact"
          scroll={scrollWithOffset}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full ml-6 md:ml-8"
        >
          Contact Me
        </HashLink>
      </div>
    </nav>
  );
};

export default Navbar;





