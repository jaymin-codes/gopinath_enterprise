import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/ge-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#f6f6f6] dark:bg-gray-900 fixed w-full z-20 top-0 left-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center mx-auto py-2">
          <a
            href="/"
            className="flex pl-2 md:pl-0 items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-11" alt="GE" />
            <span className="self-center pr-[50px] md:text-3xl text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block">
              Gopinath Enterprise
            </span>
          </a>
          <div className="flex ml-auto pr-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              {isMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
        
            <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 font-medium borde rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link
                smooth to="/"
                  className="block py-2 px-3 border-b-2 border-gray-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to="/#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 border-b-2 border-gray-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to="/#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-3 border-b-2 border-gray-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                smooth
                  to="/#contact"
                  className="block py-2 px-3 border-b-2 border-gray-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                smooth
                  to="/gallery"
                  className="block py-2 px-3 border-b-2 border-gray-500 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
