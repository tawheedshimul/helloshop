import React, { useState, useEffect } from 'react';
import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const ProductSearchCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);


    const handleAddToCart = () => {
        console.log("Product added to cart");
    }

    const categories = ['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden'];

    const dummyProducts = [
        { id: 1, name: 'Smartphone', category: 'Electronics', price: 699.99, image: 'https://source.unsplash.com/featured/?smartphone' },
        { id: 2, name: 'Backpack', category: 'Accessories', price: 49.99, image: 'https://source.unsplash.com/featured/?backpack' },
        { id: 3, name: 'Sneakers', category: 'Footwear', price: 89.99, image: 'https://source.unsplash.com/featured/?sneakers' },
        { id: 4, name: 'Gaming Console', category: 'Electronics', price: 399.99, image: 'https://source.unsplash.com/featured/?gamingconsole' },
        { id: 5, name: 'Coffee Mug', category: 'Kitchen', price: 14.99, image: 'https://source.unsplash.com/featured/?coffeemug' },
        { id: 6, name: 'Wristwatch', category: 'Accessories', price: 199.99, image: 'https://source.unsplash.com/featured/?wristwatch' },
        { id: 7, name: 'Cookware Set', category: 'Kitchen', price: 129.99, image: 'https://source.unsplash.com/featured/?cookware' },
        { id: 8, name: 'Desk Lamp', category: 'Home & Garden', price: 39.99, image: 'https://source.unsplash.com/featured/?desklamp' },
        { id: 9, name: 'Winter Jacket', category: 'Clothing', price: 129.99, image: 'https://source.unsplash.com/featured/?jacket' },
        { id: 10, name: 'Bookshelf', category: 'Furniture', price: 149.99, image: 'https://source.unsplash.com/featured/?bookshelf' },
        { id: 11, name: 'Bluetooth Speaker', category: 'Electronics', price: 79.99, image: 'https://source.unsplash.com/featured/?speaker' },
        { id: 12, name: 'Yoga Mat', category: 'Fitness', price: 29.99, image: 'https://source.unsplash.com/featured/?yogamat' },
        { id: 13, name: 'Sunglasses', category: 'Accessories', price: 59.99, image: 'https://source.unsplash.com/featured/?sunglasses' },
        { id: 14, name: 'Travel Pillow', category: 'Travel', price: 19.99, image: 'https://source.unsplash.com/featured/?travelpillow' },
        { id: 15, name: 'Electric Kettle', category: 'Kitchen', price: 49.99, image: 'https://source.unsplash.com/featured/?kettle' },
        { id: 16, name: 'Wall Clock', category: 'Home Decor', price: 24.99, image: 'https://source.unsplash.com/featured/?clock' },
        { id: 17, name: 'Tennis Racket', category: 'Sports', price: 89.99, image: 'https://source.unsplash.com/featured/?tennisracket' },
        { id: 18, name: 'Digital Camera', category: 'Electronics', price: 499.99, image: 'https://source.unsplash.com/featured/?camera' },
        { id: 19, name: 'Laptop Stand', category: 'Electronics', price: 29.99, image: 'https://source.unsplash.com/featured/?laptopstand' },
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
                <button
                    onClick={() => setShowModal(true)}
                    className="py-2 rounded-md focus:outline-none  hover:text-green-500"
                >
                    <IoSearchOutline />

                </button>
            </div>


            {/* Modal for Search and Filter */}
            {showModal && (
                <div className="fixed top-0 z-50 w-full left-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white px-2 h-screen w-full shadow-lg overflow-y-auto relative">

                        <div className="flex sticky py-2 z-50 top-0 flex-col md:flex-row gap-4 mb-6 bg-zinc-50">

                            <div className="relative flex-grow">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <IoSearchOutline className="absolute right-3 top-3 text-gray-400" />

                            </div>
                            <div className='flex items-center justify-between'>
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
                                <button
                                    onClick={() => setShowModal(false)}
                                    className=" px-6 py-2  ml-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    Close
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (


                                <div className="max-w-sm bg-white rounded-lg shadow-md transform transition-transform hover:shadow-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-60 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold text-blue-600 mb-2">{product.name}</h2>
                                        {/* <p className="text-gray-600 text-sm mb-4">{product.description}</p> */}
                                        <div className="flex justify-between items-center">
                                            <p className="text-lg font-semibold text-green-500">${product.price}</p>
                                            <button
                                                onClick={handleAddToCart}
                                                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-blue-700 hover:shadow-md transition-transform duration-200 transform hover:-translate-y-1"
                                            >
                                                <FiShoppingCart className="mr-2" />
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <p className="text-center text-gray-500 mt-6">
                                No products found. Try adjusting your search or category.
                            </p>
                        )}

                        {/* Close button */}

                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductSearchCard;
