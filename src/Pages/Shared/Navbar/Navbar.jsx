import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { BsFillPeopleFill, BsPeople, BsWhatsapp } from "react-icons/bs";
import ProductSearchCard from "../Search/Searchwork";
import Message from "./Message";
import AddToCartButton from "./AddToCartButton";
import { LuLogIn } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { MdAppRegistration } from "react-icons/md";
import { GrLogin } from "react-icons/gr";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const openSearch = () => {
  //   setIsOpen((h) => !h);
  // }

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Proper state toggle
  };

  return (
    <div className="bg-gray-50 bg-opacity-60 backdrop-blur-lg py-3 ">
      <div className="flex items-center justify- px-4 text-xl relative">
        {/* Search Box */}

        {/* lg nav  */}
        <div className="hidden sm:block text-center w-full">
          <div className="flex items-center justify-center space-x-3">
            <div className="">
              <div className="flex items-center justify-between space-x-5">
                <Link to="/" className="">
                  <BiHome className="text-2xl hover:text-green-600 duration-200" />
                </Link>
                <Link to="/" className=" px-">
                  <GoPeople className="text-2xl hover:text-green-600 duration-200" />
                </Link>
                <Link to="/" className=" px-">
                  <BsWhatsapp className="text- hover:text-green-600 duration-200" />
                </Link>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute  left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
                }`}
            >
              <ul className="flex mt-1 flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
                <li>
                  <Link to="/" className="animate-button">
                    MEN
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-agencies" className="animate-button">
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="animate-button">
                    KIDS
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="animate-button">
                    ELECTRONICS
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="animate-button">
                    BUILDINGS
                  </Link>
                </li>
              </ul>
            </div>
            {/* Social Media Icons or Additional Buttons */}
            <div className="flex items-center space-x-5 ">
              <div className="px-">
                <ProductSearchCard />
              </div>
              <GrLogin />
              {/* <Message /> */}
              <AddToCartButton />
              <button
                className="focus:outline-none sm:hidden"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
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
          </div>
        </div>

        {/* mobile nav  */}
        <div
          className={`absolute sm:hidden left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"
            }`}
        >
          <ul className="flex mt-2 mr-4 flex-col sm:flex-row gap-4 sm:gap-6 text-gray-700 text-right sm:p-0">
            <li>
              <Link to="/" className="animate-button">
                MEN
              </Link>
            </li>
            <li>
              <Link to="/shipping-agencies" className="animate-button">
                WOMEN
              </Link>
            </li>
            <li>
              <Link to="/about" className="animate-button">
                KIDS
              </Link>
            </li>
            <li>
              <Link to="/login" className="animate-button">
                ELECTRONICS
              </Link>
            </li>
            <li>
              <Link to="/login" className="animate-button">
                BUILDINGS
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between sm:hidden w-full">
          <Link to="/" className="">
            <BiHome className="text-2xl hover:text-green-600 duration-200" />
          </Link>
          <Link to="/" className=" px-">
            <GoPeople className="text-2xl hover:text-green-600 duration-200" />
          </Link>
          <Link to="/" className=" px-">
            <BsWhatsapp className="text- hover:text-green-600 duration-200" />
          </Link>
          <div className="text-2xl">
            <ProductSearchCard />
          </div>
          <div className="text-xl">
          <GrLogin />
          </div>
          {/* <Message /> */}
          <AddToCartButton />
          <button
            className="focus:outline-none sm:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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
      </div>


    </div>
  );
};

export default Navbar;
