import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTiktok, FaEnvelope } from "react-icons/fa";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="Header flex h-[120px] justify-between bg-black">
      <Link to="/">
        <header className="font-['headerFont'] text-4xl text-white">
          That Girl Solo <br />
          Backpacking
        </header>
      </Link>

      <div className="">
        <div className="flex">
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
            <FaSearch className="absolute top-1 left-1" />
            <input
              type="text"
              placeholder="Search this site"
              className="pl-8 text-xl"
            />
          </div>
        </div>

        <NavBar />
      </div>
    </div>
  );
}

export default Header;
