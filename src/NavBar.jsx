import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaHome, FaBars } from "react-icons/fa";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let activeStyle = {
    backgroundSize: "100% 3px",
    backgroundPosition: "0 100%",
  };

  return (
    <div>
      {/*
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="absolute top-0 left-0 p-2"
      >
        <IconContext.Provider value={{ color: "black", size: "2rem" }}>
          <FaBars />
        </IconContext.Provider>
      </button>
  */}
      <nav className="flex items-center justify-between">
        <NavLink
          to="/"
          className="link-underline link-underline-black p-3 text-xl font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <FaHome />
        </NavLink>

        <NavLink
          to="/blog"
          className="link-underline link-underline-black p-3 text-xl font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Blog
        </NavLink>

        <NavLink
          to="/destinations"
          className="link-underline link-underline-black p-3 text-xl font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Destinations
        </NavLink>

        <NavLink
          to="/travel-must-haves"
          className="link-underline link-underline-black p-3 text-xl font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Travel Girlie Must-Haves
        </NavLink>

        <NavLink
          to="/contact"
          className="link-underline link-underline-black p-3 text-xl font-semibold text-[#202020] dark:text-[#ededed]"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
