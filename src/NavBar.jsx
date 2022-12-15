import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NavBar() {
  let activeStyle = {
    backgroundSize: "100% 3px",
    backgroundPosition: "0 100%",
  };

  return (
    <nav className="mt-5 flex items-center justify-between">
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
  );
}

export default NavBar;
