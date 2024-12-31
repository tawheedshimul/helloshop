import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-lime-400 shadow-md fixed top-0 left-0 z-50">
       <SearchBox/>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between sticky top-0">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-700 cursor-pointer">
          <Link to="/">BrandName</Link>
        </div>

        {/* Search Bar */}
       

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon when open
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon when closed
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full sm:static sm:flex sm:w-auto sm:ml-8 bg-white sm:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-center p-4 sm:p-0">
            <li className="relative group">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Home
              </Link>
              {/* Example of Dropdown (optional) */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 w-40">
                <ul>
                  <li><Link to="/submenu1" className="px-4 py-2 text-gray-700 hover:bg-gray-200">Submenu 1</Link></li>
                  <li><Link to="/submenu2" className="px-4 py-2 text-gray-700 hover:bg-gray-200">Submenu 2</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link
                to="/shipping-agencies"
                className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Shipping Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/customer-care"
                className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Customer Care
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
