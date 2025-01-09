import React, { useState } from 'react';
import { FaSearch, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const RestaurantSearchCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const dummyRestaurants = [
    { id: 1, name: 'Tasty Bites', cuisine: 'Italian', rating: 4.5, location: 'Downtown', image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 2, name: 'Spice Garden', cuisine: 'Indian', rating: 4.2, location: 'Uptown', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80' },
    { id: 3, name: 'Sushi World', cuisine: 'Japanese', rating: 4.7, location: 'Midtown', image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80' },
    { id: 4, name: 'Burger Haven', cuisine: 'American', rating: 4.0, location: 'Suburb', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' },
  ];

  const filteredRestaurants = dummyRestaurants.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCuisine === '' || restaurant.cuisine === selectedCuisine) &&
      (selectedRating === '' || restaurant.rating >= parseFloat(selectedRating))
    );
  });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Restaurant Search</h2>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            aria-label="Search restaurants"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          aria-label="Filter by cuisine"
        >
          <option value="">All Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Japanese">Japanese</option>
          <option value="American">American</option>
        </select>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          aria-label="Filter by rating"
        >
          <option value="">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          >
            <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{restaurant.name}</h3>
            <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center mb-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-gray-700">{restaurant.rating}</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-1" />
              <span className="text-gray-700">{restaurant.location}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No restaurants found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default RestaurantSearchCard;