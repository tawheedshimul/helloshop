import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import ProductSearchCard from "../Search/Searchwork";
import AddToCartButton from "./AddToCartButton";
import { GrLogin } from "react-icons/gr";
import { GoPeople } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const navItems = [
    { to: "/men", label: "MEN" },
    { to: "/shipping-agencies", label: "WOMEN" },
    { to: "/about", label: "KIDS" },
    { to: "/login", label: "ELECTRONICS" },
    { to: "/login", label: "BUILDINGS" }
  ];

  const handleLinkClick = () => {
    // Prevent toggling of the menu when a link is clicked
    if (isOpen) {
      setIsOpen(false); // Close the menu if it's open
    }
  };

  return (
    <div className="bg-gray-50 bg-opacity-60 backdrop-blur-lg py-3">
      <div className="flex items-center justify-between px-4 text-xl relative">
        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center justify-center w-full space-x-5">
          <Link to="/" className="text-2xl hover:text-green-600">
            <BiHome />
          </Link>
          <Link to="/" className="text-2xl hover:text-green-600">
            <GoPeople />
          </Link>
          <Link to="/" className="text-2xl hover:text-green-600">
            <BsWhatsapp />
          </Link>
          {/* Dropdown */}
          <div className={`absolute left-0 top-10 z-50 w-full bg-white sm:static sm:w-auto sm:flex sm:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-0 text-gray-700 text-right">
              {navItems.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="animate-button" onClick={handleLinkClick}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-5">
            <ProductSearchCard />
            <GrLogin />
            <AddToCartButton />
            <button className="sm:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className={`absolute sm:hidden left-0 top-10 z-50 w-full bg-white transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-4 p-0 text-gray-700 text-right">
            {navItems.map(({ to, label }) => (
              <li key={label}>
                <Link to={to} className="animate-button" onClick={handleLinkClick}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between sm:hidden w-full">
          <Link to="/" className="text-2xl hover:text-green-600"><BiHome /></Link>
          <Link to="/" className="text-2xl hover:text-green-600"><GoPeople /></Link>
          <Link to="/" className="text-xl hover:text-green-600"><BsWhatsapp /></Link>
          <ProductSearchCard />
          <GrLogin />
          <AddToCartButton />
          <button className="sm:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
