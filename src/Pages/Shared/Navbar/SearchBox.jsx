import React, { useState, useEffect } from "react";
import SocialMedia from "../social-media-icons/SocialMedia";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setShowSuggestions(event.target.value.length > 0);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Searching for:", query);
      // Implement your search logic here
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowSuggestions(false);
  };

  const suggestions = [
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
    "Smartphones",
    "Laptops",
    "Shoes",
    "T-shirts",
    "Headphones",
    "Watches",
  ];

  useEffect(() => {
    // Disable body scroll when suggestions are shown
    if (showSuggestions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount or toggle
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSuggestions]);

  return (
    <div className="relative flex items-center justify-center bg-gray-50">
      {/* Search Box */}
      <div className="w-full max-w-md px-4 py-2">
        <div className="bg-white bg-opacity- backdrop-blur-md rounded-full ">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search products..."
            className="w-full py-1 md:py-2 pl-10 pr-4 text-gray-800 rounded-full border focus:outline-none focus:ring-1 focus:ring-green-400 transition-all ease-in-out duration-300 shadow-sm hover:shadow-md"
          />

          {/* Search Icon */}
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Clear Button */}
          {query && (
            <button
              onClick={handleClear}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && query && (
          <div className="w-screen top-15 overflow-x-auto left-0 fixed mt-1 h-screen bg-white rounded-xl border border-gray-200 shadow-lg z-50">
            <ul>
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:bg-green-50 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Social Media Icons */}
      <div className="md:fixed right-0">
        <SocialMedia />
      </div>
    </div>
  );
};

export default SearchBox;
