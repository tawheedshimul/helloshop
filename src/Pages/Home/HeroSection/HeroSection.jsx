import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-gray-100 py-40 px-6 lg:px-20 ">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Discover Your Perfect <span className="text-indigo-600">Shopping</span> Experience
                </h1>
                <p className="mt-6 text-lg text-gray-600 lg:text-xl">
                    Explore a wide range of products tailored to your needs. Shop with confidence and ease.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <a
                        href="#shop-now"
                        className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-medium shadow-lg cursor-pointer"
                    >
                        Shop Now
                    </a>
                    <a
                        href="#learn-more"
                        className="px-6 py-3 text-indigo-600 bg-white border border-indigo-600 hover:bg-indigo-50 rounded-lg text-lg font-medium shadow-lg cursor-pointer"
                    >
                        Learn More
                    </a>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://plus.unsplash.com/premium_photo-1672883551967-ab11316526b4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Shopping Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
        </div>
    );
};

export default HeroSection;
