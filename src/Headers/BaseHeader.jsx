import { useState, useEffect } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaTiktok, FaEnvelope } from "react-icons/fa";

function Header({ isNavOpen, isHeaderTransparent, setIsNavOpen }) {
  let activeStyle = {};

  return (
    <div
      className={`fixed flex w-screen items-center p-4 lg:h-[80px] lg:flex-row lg:place-content-between ${
        isHeaderTransparent
          ? "bg-gradient-to-b from-black/25 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Hamburger icon for small screen or title for large screen */}
      <div className="flex w-full lg:w-fit">
        <button
          className="ml-5 p-2 text-3xl lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </button>

        <Link to="/" className="m-auto p-2">
          <header className="font-['HeaderFont'] text-3xl">
            That Girl Solo Backpacking
          </header>
        </Link>
      </div>

      <div className={isNavOpen ? "" : "hidden lg:block"}>
        {/*
        <div className="flex justify-end">
          <div className="mr-5 flex items-center space-x-4 text-lg text-white">
            <Link className="" to="/contact">
              <FaEnvelope />
            </Link>
            <a
              className=""
              href="https://www.tiktok.com/@thatgirlsolobackpacking"
              target="_blank"
            >
              <FaTiktok />
            </a>
          </div>
          <div className="relative">
            <FaSearch className="absolute top-1.5 left-1" />
            <input
              type="text"
              placeholder="Search this site"
              className="pl-8 text-lg"
            />
          </div>
        </div>
        */}

        <nav
          className={
            isNavOpen
              ? "flex flex-col lg:flex lg:flex-row lg:items-center lg:justify-end"
              : "flex flex-row items-center justify-end"
          }
        >
          <NavLink
            to="/blog"
            className="py-3 text-lg lg:p-3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsNavOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/destinations"
            className="py-3 text-lg lg:p-3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsNavOpen(false)}
          >
            Destinations
          </NavLink>

          <NavLink
            to="/travel-must-haves"
            className="py-3 text-lg lg:p-3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsNavOpen(false)}
          >
            Travel Girlie Must-Haves
          </NavLink>

          <NavLink
            to="/contact"
            className="py-3 text-lg lg:p-3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setIsNavOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
