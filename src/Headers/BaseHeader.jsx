import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaTiktok, FaEnvelope } from "react-icons/fa";

function Header({ isNavOpen, isHeaderTransparent, setIsNavOpen }) {
  let activeStyle = {};

  return (
    <div
      className={`fixed flex h-20 w-screen flex-col p-3 lg:flex-row lg:place-content-between lg:items-center ${
        isHeaderTransparent
          ? "bg-gradient-to-b from-black/25 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Hamburger icon for small screen or title for large screen */}
      <div className="flex w-full items-center justify-center lg:w-fit">
        <Link
          to="/"
          className={`p-2 ${isHeaderTransparent ? "hidden" : "block"}`}
        >
          <header className="whitespace-nowrap font-annieUseYourTelescope text-3xl lg:text-5xl">
            That Girl Solo Backpacking
          </header>
        </Link>

        <button
          className="ml-auto p-2 text-3xl lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </button>
      </div>

      <div className={isNavOpen ? "" : "hidden lg:block"}>
        <nav
          className={`font-annieUseYourTelescope text-[1.65rem] ${
            isNavOpen
              ? "fixed left-0 top-0 flex h-screen w-2/3 flex-col bg-white text-black"
              : "flex flex-row items-center justify-end space-x-2"
          }
          `}
        >
          <NavLink
            to="/"
            className="mt-8 p-4 lg:mt-0"
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

          {/*
          <NavLink
            to="/destinations"
            className="p-4"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsNavOpen(false)}
          >
            Destinations
          </NavLink>
          */}

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
          className={`fixed right-0 top-0 h-screen w-1/3 bg-black opacity-75 ${
            isNavOpen ? "" : "hidden"
          }`}
          onClick={() => setIsNavOpen(false)}
        ></div>
      </div>
    </div>
  );
}

export default Header;
