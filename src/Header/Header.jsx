import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTiktok, FaEnvelope } from "react-icons/fa";
import NavBar from "./NavBar";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="Header flex flex-col items-center justify-around bg-black lg:h-[120px] lg:flex-row">
      <div className="flex w-full lg:w-fit">
        <button
          className="ml-5 p-2 text-3xl text-white lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
        </button>

        <Link to="/" className="m-auto p-2 text-center lg:m-0 lg:text-left">
          <header className="font-['headerFont'] text-4xl text-white">
            That Girl Solo Backpacking
          </header>
        </Link>
      </div>

      <div className={isNavOpen ? "" : "hidden lg:block"}>
        <div className="flex justify-end">
          <div className="mr-5 flex items-center space-x-4 text-xl text-white">
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
              className="pl-8 text-xl"
            />
          </div>
        </div>

        <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      </div>
    </div>
  );
}

export default Header;
