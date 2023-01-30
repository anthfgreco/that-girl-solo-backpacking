import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTiktok } from "react-icons/fa";
import classNames from "classnames";

function Header({ isNavOpen, isHeaderTransparent, setIsNavOpen }) {
  let activeStyle = {};

  return (
    <div
      className={classNames(
        "fixed flex h-16 w-screen",
        {
          "bg-gradient-to-b from-black/25 text-white": isHeaderTransparent,
        },
        {
          "bg-white text-black": !isHeaderTransparent,
        }
      )}
    >
      <div className="flex w-full items-center xl:w-fit">
        <Link
          to="/"
          className={classNames("m-0 p-2 sm:ml-6", {
            hidden: isHeaderTransparent,
          })}
        >
          <header className="whitespace-nowrap font-annieUseYourTelescope text-3xl xl:text-4xl">
            That Girl Solo Backpacking
          </header>
        </Link>

        <button
          className="ml-auto mr-2 p-2 text-2xl xl:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </button>
      </div>

      <nav
        className={classNames(
          "ml-auto font-annieUseYourTelescope text-2xl",
          {
            "fixed left-0 top-0 z-20 flex h-screen flex-col bg-white px-4 pl-2 text-black":
              isNavOpen,
          },
          {
            "hidden items-center xl:flex": !isNavOpen,
          }
        )}
      >
        <NavLink
          to="/"
          className="mt-8 p-4 xl:mt-0"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsNavOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/blog"
          className="p-4"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsNavOpen(false)}
        >
          Blog
        </NavLink>

        <NavLink
          to="/destinations"
          className="p-4"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsNavOpen(false)}
        >
          Destinations
        </NavLink>

        <NavLink
          to="/travel-must-haves"
          className="p-4"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsNavOpen(false)}
        >
          Travel Must-Haves
        </NavLink>

        <NavLink
          to="/contact"
          className="p-4"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => setIsNavOpen(false)}
        >
          Contact
        </NavLink>

        <a
          href="https://www.tiktok.com/@thatgirlsolobackpacking"
          target="_blank"
          className="p-4"
        >
          <FaTiktok />
        </a>
      </nav>

      <div
        className={classNames(
          "fixed right-0 top-0 z-0 h-screen w-full bg-black opacity-75",
          {
            hidden: !isNavOpen,
          }
        )}
        onClick={() => setIsNavOpen(false)}
      ></div>
    </div>
  );
}

export default Header;
