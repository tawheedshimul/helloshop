import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const ProductSearchCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];

  const dummyProducts = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 599.99 },
    { id: 2, name: 'T-shirt', category: 'Clothing', price: 19.99 },
    { id: 3, name: 'Novel', category: 'Books', price: 14.99 },
    { id: 4, name: 'Plant Pot', category: 'Home & Garden', price: 24.99 },
    { id: 5, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 6, name: 'Jeans', category: 'Clothing', price: 49.99 },
  ];

  useEffect(() => {
    const filtered = dummyProducts.filter(
      (product) =>
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Product Search</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none w-full md:w-48 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-4 rounded-md shadow-md transition-transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No products found. Try adjusting your search or category.
        </p>
      )}
    </div>
  );
};

export default ProductSearchCard;