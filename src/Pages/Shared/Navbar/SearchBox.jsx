import React, { useState } from 'react';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setShowSuggestions(event.target.value.length > 0);  // Show suggestions if there's a query
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('Searching for:', query);
      // Implement your search logic here
    }
  };

  const handleClear = () => {
    setQuery('');
    setShowSuggestions(false);
  };

  const suggestions = [
    "Smartphones", "Laptops", "Shoes", "T-shirts", "Headphones", "Watches"
  ];

  return (
    <div className="flex justify-center items-center container mx-auto py-1 w-full">
      <div className="relative w-full">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          placeholder="Search for products..."
          className="w-full py-3 pl-12 pr-10 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300"
        />
        
        {/* Search Icon */}
        <div className="absolute top-0 left-0 flex items-center pl-4 h-full text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Clear Button */}
        {query && (
          <button
            onClick={handleClear}
            className="absolute top-0 right-0 flex items-center pr-4 h-full text-gray-500 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="18" x2="18" y2="6" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Suggestions Dropdown */}
        {showSuggestions && query && (
          <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-md z-10 max-h-64 overflow-y-auto">
            <ul>
              {suggestions.map((item, index) => (
                <li key={index} className="px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
