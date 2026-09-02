import { useCallback, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollWithOffset = useCallback((el) => {
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      110;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  }, []);

  const links = [
    "Home",
    "About",
    "Services",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          mx-auto
          max-w-7xl
          px-3
          sm:px-5
          lg:px-6
          pt-3
          sm:pt-4
          lg:pt-6
        "
      >
        {/* NAVBAR */}
        <div
          className="
            flex
            items-center
            justify-between

            px-4
            sm:px-6
            lg:px-8

            py-3
            sm:py-4

            rounded-full

            bg-black/60
            backdrop-blur-2xl

            border
            border-white/10

            shadow-[0_0_40px_rgba(34,197,94,0.08)]
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl

              font-semibold
              tracking-wide
              text-white

              shrink-0
            "
          >
            Minoo
          </Link>

          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              lg:flex
              items-center

              gap-5
              xl:gap-10

              text-base
              xl:text-lg
            "
          >
            {links.map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${
                  item === "Home"
                    ? ""
                    : item.toLowerCase()
                }`}
                scroll={scrollWithOffset}
                className="
                  relative
                  whitespace-nowrap

                  text-white/80
                  hover:text-white

                  font-medium

                  transition
                  duration-300

                  group
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1

                    w-0
                    h-[2px]

                    bg-gradient-to-r
                    from-green-400
                    to-blue-500

                    transition-all
                    duration-300

                    group-hover:w-full

                    shadow-[0_0_12px_#22c55e]
                  "
                />
              </HashLink>
            ))}

            {/* HOBBY */}
            <Link
              to="/hobby"
              className="
                relative
                whitespace-nowrap

                text-white/80
                hover:text-white

                font-medium

                transition

                group
              "
            >
              Hobby

              <span
                className="
                  absolute
                  left-0
                  -bottom-1

                  w-0
                  h-[2px]

                  bg-gradient-to-r
                  from-green-400
                  to-blue-500

                  transition-all
                  duration-300

                  group-hover:w-full
                "
              />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* DESKTOP CONTACT */}
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              className="
                hidden
                lg:inline-flex

                items-center
                justify-center

                px-6
                xl:px-8

                py-3

                rounded-full

                bg-gradient-to-r
                from-green-400
                to-blue-500

                text-black
                font-semibold
                text-base

                transition
                duration-300

                hover:scale-105
                hover:shadow-[0_0_30px_#22c55e]
              "
            >
              Contact
            </HashLink>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="
                lg:hidden

                w-9
                h-9
                sm:w-10
                sm:h-10

                flex
                items-center
                justify-center

                rounded-full

                text-white
                text-xl
                sm:text-2xl

                hover:bg-white/10

                transition
              "
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE / TABLET MENU */}
        {open && (
          <div
            className="
              lg:hidden

              mt-3

              rounded-2xl

              bg-black/95
              backdrop-blur-2xl

              border
              border-white/10

              px-5
              sm:px-6

              py-5
              sm:py-6

              flex
              flex-col

              gap-4
              sm:gap-5

              text-base
              sm:text-lg

              shadow-2xl
            "
          >
            {links.map((item) => (
              <HashLink
                key={item}
                smooth
                to={`/#${
                  item === "Home"
                    ? ""
                    : item.toLowerCase()
                }`}
                scroll={scrollWithOffset}
                className="
                  text-white
                  hover:text-green-400
                  font-medium
                  transition
                "
              >
                {item}
              </HashLink>
            ))}

            <Link
              to="/hobby"
              onClick={() => setOpen(false)}
              className="
                text-white
                hover:text-green-400
                font-medium
                transition
              "
            >
              Hobby
            </Link>

            {/* MOBILE CONTACT */}
            <HashLink
              smooth
              to="/#contact"
              scroll={scrollWithOffset}
              className="
                mt-2

                w-full

                text-center

                px-6
                py-3

                rounded-full

                bg-gradient-to-r
                from-green-400
                to-blue-500

                text-black
                font-semibold
              "
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