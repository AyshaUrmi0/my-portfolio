import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFolderOpen, AiOutlineBook } from "react-icons/ai";
import DownloadResumeButton from "./DownloadResumeButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 shadow-lg bg-gray-950">
      {/* Left Side - Name */}
      <div className="text-xl font-bold text-blue-400">
        <Link to="/">AyshaUrmi</Link>
      </div>

      {/* Center - Navigation Links (Large Screens) */}
      <div className="absolute hidden transform -translate-x-1/2 lg:flex left-1/2">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="#about"
              className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
            >
              <AiOutlineHome className="text-xl" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="#skills"
              className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
            >
              <AiOutlineFolderOpen className="text-xl" />
              <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link
              to="#projects"
              className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
            >
              <AiOutlineFolderOpen className="text-xl" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
            >
              <AiOutlineBook className="text-xl" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side - Download Resume Button */}
      <div className="hidden lg:flex">
        <DownloadResumeButton />
      </div>

      {/* Hamburger Menu (Small Screens) */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost btn-square"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className="absolute left-0 w-full bg-gray-900 shadow-lg top-16 lg:hidden">
          <ul className="flex flex-col gap-4 p-4 text-center">
            <li>
              <Link
                to="#about"
                className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineHome className="text-xl" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="#skills"
                className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineFolderOpen className="text-xl" />
                <span>Skills</span>
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineFolderOpen className="text-xl" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="flex items-center space-x-2 font-bold text-white border-blue-400 rounded-full btn btn-outline hover:bg-blue-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <AiOutlineBook className="text-xl" />
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <DownloadResumeButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
