import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NavBar({ isNavOpen, setIsNavOpen }) {
  let activeStyle = {
    color: "#A020F0",
  };

  return (
    <nav
      className={
        isNavOpen
          ? "flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-end"
          : "flex flex-row items-center justify-end"
      }
    >
      <NavLink
        to="/"
        className="py-2 pt-10 text-xl text-[#FFFFFF] dark:text-[#ededed] lg:p-3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setIsNavOpen(false)}
      >
        <FaHome />
      </NavLink>

      <NavLink
        to="/blog"
        className="py-3 text-xl text-[#FFFFFF] dark:text-[#ededed] lg:p-3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setIsNavOpen(false)}
      >
        Blog
      </NavLink>

      <NavLink
        to="/destinations"
        className="py-3 text-xl text-[#FFFFFF] dark:text-[#ededed] lg:p-3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setIsNavOpen(false)}
      >
        Destinations
      </NavLink>

      <NavLink
        to="/travel-must-haves"
        className="py-3 text-xl text-[#FFFFFF] dark:text-[#ededed] lg:p-3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setIsNavOpen(false)}
      >
        Travel Girlie Must-Haves
      </NavLink>

      <NavLink
        to="/contact"
        className="py-3 text-xl text-[#FFFFFF] dark:text-[#ededed] lg:p-3"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        onClick={() => setIsNavOpen(false)}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
