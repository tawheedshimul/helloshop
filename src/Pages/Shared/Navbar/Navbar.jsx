import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBox";
import SocialMedia from "../social-media-icons/SocialMedia";
import AddToCartButton from "./AddToCartButton";
import Message from "./Message";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full px-4 bg-opacity-50 backdrop-blur-md shadow-md left-0 z-30">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link className="text-2xl font-semibold cursor-pointer " to="/">MYSHOP</Link>

        <div
          className={`${isOpen ? "block" : "hidden"
            } bg-white bg-opacity-80 backdrop-blur-md absolute top-full left-0 w-full sm:static sm:flex sm:w-auto sm:ml-8 sm:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-gray-70000 text-right p-4 sm:p-0 rounded-md sm:w-auto sm:max-w-4xl">
            <li className="relative group">
              <Link
                to="/"
                className=" animate-button"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shipping-agencies"
                className="animate-button"
              >
                Shipping Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="animate-button"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="animate-button"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
       
        <div className="flex items-center space-x-5 justify-center">
          <div className="flex space-x-2">
            <Message />
            <AddToCartButton />
          </div>

          <div className="sm:hidden items-center mt-2 mr-2">
            <button className="focus:outline-none" onClick={toggleMenu}>
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
          {/* <SocialMedia /> */}
        </div>

        {/* Hamburger Menu Button */}


        {/* Navigation Links */}

      </div>
    </div>
  );
};

export default Navbar;