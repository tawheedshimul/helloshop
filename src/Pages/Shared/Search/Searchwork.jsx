import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const ProductSearchCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable background scrolling
        }
        return () => (document.body.style.overflow = 'auto'); // Clean up on unmount
    }, [showModal]);

    return (
        <div>
            {/* Trigger to open the modal */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    onClick={() => setShowModal(true)}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
                    readOnly
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
            </div>

            {/* Modal for Search and Filter */}
            {showModal && (
                <div className="fixed top-0 z-50 w-full left-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white h-screen w-full p-6 rounded-lg shadow-lg overflow-y-auto relative">
                        <div className="flex flex-col md:flex-row gap-4 mb-6">
                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <FaSearch className="absolute right-3 top-3 text-gray-400" />
                            </div>
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="appearance-none w-full md:w-48 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Close
                        </button>
                        <div className="h-20"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSearchCard;
