import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let activeStyle = {
    color: "#A020F0",
  };

  return (
    <nav className="flex items-center justify-between">
      <NavLink
        to="/"
        className=" p-3 text-xl text-[#FFFFFF] dark:text-[#ededed]"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <FaHome />
      </NavLink>

      <NavLink
        to="/blog"
        className=" p-3 text-xl text-[#FFFFFF] dark:text-[#ededed]"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Blog
      </NavLink>

      <NavLink
        to="/destinations"
        className=" p-3 text-xl text-[#FFFFFF] dark:text-[#ededed]"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Destinations
      </NavLink>

      <NavLink
        to="/travel-must-haves"
        className=" p-3 text-xl text-[#FFFFFF] dark:text-[#ededed]"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Travel Girlie Must-Haves
      </NavLink>

      <NavLink
        to="/contact"
        className=" p-3 text-xl text-[#FFFFFF] dark:text-[#ededed]"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
